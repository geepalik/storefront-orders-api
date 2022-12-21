/* eslint-disable prettier/prettier */
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { StorefrontModule } from './storefront/storefront.module';
import { OrderModule } from './order/order.module';
import { MenuModule } from './menu/menu.module';
import { CouponModule } from './coupon/coupon.module';

@Module({
  imports: [
    StorefrontModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      typePaths: ['./**/*.graphql'],
    }),
    OrderModule,
    MenuModule,
    CouponModule,
  ],
})
export class AppModule {}
