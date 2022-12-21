/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CouponService } from '../coupon/coupon.service';
import { Order, Storefront } from 'src/schema/graphql';
import { GetStorefrontByIdDto } from 'src/storefront/dto/get-storefront-by-id.dto';
import { StorefrontService } from '../storefront/storefront.service';
import { CalculateOrderTotalsDto } from './dto/calculate-order-totals.dto';
import { OrderDto } from './dto/order.dto';
import { OrderDao } from './order.dao';

@Injectable()
export class OrderService {
    constructor(
        private orderDao: OrderDao, 
        private storefrontService: StorefrontService,
        private couponService: CouponService
    ){}
    
    async createOrder(orderDto: OrderDto): Promise<Order>{
        const getStorefrontByIdDto: GetStorefrontByIdDto = {id: orderDto.associatedStorefront};
        const storefront: Storefront = await this.storefrontService.getStorefrontById(getStorefrontByIdDto);
        return this.orderDao.createOrder(orderDto, storefront);
    }

    async calculateOrderTotals(calculateOrderTotalsDto: CalculateOrderTotalsDto): Promise<number>{
        const { orderId } = calculateOrderTotalsDto;
        const orderData: Order = await this.orderDao.getOrderById(orderId);
        const couponsData = await this.couponService.getCouponsData(orderData.couponCodes);
        return this.orderDao.calculateOrderTotals(orderData, couponsData);
    }
}
