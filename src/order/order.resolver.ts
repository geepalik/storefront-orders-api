/* eslint-disable prettier/prettier */
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { Order } from 'src/schema/graphql';
import { OrderDto } from './dto/order.dto';
import { OrderService } from './order.service';

@Resolver()
export class OrderResolver {
    constructor(private readonly orderService: OrderService) {}
    
    @Mutation('createOrder')
    async create(@Args('input') args: OrderDto): Promise<Order>{
        return await this.orderService.createOrder(args);
    }
}
