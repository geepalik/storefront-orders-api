/* eslint-disable prettier/prettier */
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { StorefrontModule } from './storefront/storefront.module';
import { OrderModule } from './order/order.module';
import { MenuModule } from './menu/menu.module';

@Module({
  imports: [
    StorefrontModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      typePaths: ['./**/*.graphql'],
    }),
    OrderModule,
    MenuModule,
  ],
})
export class AppModule {}
