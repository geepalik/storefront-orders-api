/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CouponCodeItem, Order, Storefront } from '../schema/graphql';
import { OrderDto } from './dto/order.dto';

@Injectable()
export class OrderDao {
    private readonly orders: Order[] = [];

    createOrder(orderDto: OrderDto, storefrontData: Storefront): Order{
        if(!this.checkIfOrderCouponsAllowed(storefrontData.couponCodes, orderDto.couponCodes)){
            throw new Error("Order contains coupons that are not allowed for this storefront");
        }
        const orderId: number = this.orders.length + 1;
        const {customerInfoName, customerInfoAdress, couponCodes} = orderDto;
        const order: Order = new Order();
        order.id = orderId.toString();
        order.customerInformation = {
            name: customerInfoName,
            address: customerInfoAdress
        }
        order.associatedStorefront = storefrontData;
        order.couponCodes = couponCodes;
        this.orders.push(order);
        return order;
    }

    calculateOrderTotals(order: Order, couponsData: CouponCodeItem[]){
        //calc total of menu items in the storefront of order
        const priceSum = order.associatedStorefront.menu.items.reduce((sum, item) => sum + item.price,0)
        /**
         * TODO:
         * this calculation of total discount is incomplete
         * works only with percentage type coupons
         * full implementation would include calculation of other type of values (flat, free shipping, etc)
         */
        const totalDiscount = couponsData.reduce((sum, coupon) => sum + coupon.value, 0);
        return this.calculateNumberPercentage(priceSum, totalDiscount);
    }

    private calculateNumberPercentage(initNumber: number, percentage: number): number{
        return initNumber * (1 - percentage / 100);
    }

    getOrderById(orderId: string): Order{
        return this.orders.filter(order => order.id === orderId)[0]
    }
    
    private checkIfOrderCouponsAllowed(storefrontCoupons: string[], orderCoupons: string[]): boolean{
        return orderCoupons.every(coupon => storefrontCoupons.includes(coupon));
    }
}