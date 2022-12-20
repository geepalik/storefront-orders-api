/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { StorefrontModule } from 'src/storefront/storefront.module';
import { OrderService } from './order.service';
import { OrderResolver } from './order.resolver';
import { OrderDao } from './order.dao';

@Module({
  imports: [StorefrontModule],
  providers: [OrderDao, OrderService, OrderResolver],
})
export class OrderModule {}
