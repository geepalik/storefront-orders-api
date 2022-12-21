/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { StorefrontModule } from 'src/storefront/storefront.module';
import { OrderService } from './order.service';
import { OrderResolver } from './order.resolver';
import { OrderDao } from './order.dao';
import { CouponModule } from 'src/coupon/coupon.module';

@Module({
  imports: [StorefrontModule, CouponModule],
  providers: [OrderDao, OrderService, OrderResolver],
})
export class OrderModule {}
