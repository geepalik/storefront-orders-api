/* eslint-disable prettier/prettier */
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Order } from 'src/schema/graphql';
import { CalculateOrderTotalsDto } from './dto/calculate-order-totals.dto';
import { OrderDto } from './dto/order.dto';
import { OrderService } from './order.service';

@Resolver()
export class OrderResolver {
    constructor(private readonly orderService: OrderService) {}

    @Query()
    calculateOrderTotals(@Args('input') args: CalculateOrderTotalsDto): Promise<number>{
        return this.orderService.calculateOrderTotals(args);
    }
    
    @Mutation('createOrder')
    async create(@Args('input') args: OrderDto): Promise<Order>{
        return await this.orderService.createOrder(args);
    }
}
