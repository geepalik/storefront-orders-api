/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Order, Storefront } from '../schema/graphql';
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
        return order;
    }

    calculateOrderTotals(orderId: string){}
    
    private checkIfOrderCouponsAllowed(storefrontCoupons: string[], orderCoupons: string[]): boolean{
        return orderCoupons.every(coupon => storefrontCoupons.includes(coupon));
    }
}