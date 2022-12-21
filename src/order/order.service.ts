/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Order, Storefront } from 'src/schema/graphql';
import { GetStorefrontByIdDto } from 'src/storefront/dto/get-storefront-by-id.dto';
import { StorefrontService } from '../storefront/storefront.service';
import { OrderDto } from './dto/order.dto';
import { OrderDao } from './order.dao';

@Injectable()
export class OrderService {
    constructor(
        private orderDao: OrderDao, 
        private storefrontService: StorefrontService
    ){}
    
    async createOrder(orderDto: OrderDto): Promise<Order>{
        const getStorefrontByIdDto: GetStorefrontByIdDto = {id: orderDto.associatedStorefront};
        const storefront: Storefront = await this.storefrontService.getStorefrontById(getStorefrontByIdDto);
        return this.orderDao.createOrder(orderDto, storefront);
    }
}
