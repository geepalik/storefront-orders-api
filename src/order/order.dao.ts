/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Order, Storefront } from 'src/schema/graphql';
import { OrderDto } from './dto/order.dto';

@Injectable()
export class OrderDao {
    private readonly orders: Order[] = [];

    createOrder(orderDto: OrderDto, storefrontData: Storefront): Order{
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
}