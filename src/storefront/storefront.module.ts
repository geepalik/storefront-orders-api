/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { StorefrontService } from './storefront.service';
import { StorefrontResolver } from './storefront.resolver';
import { StorefrontDao } from './storefront.dao';
import { MenuModule } from 'src/menu/menu.module';

@Module({
  imports: [MenuModule],
  providers: [StorefrontDao, StorefrontService, StorefrontResolver],
  exports: [StorefrontService],
})
export class StorefrontModule {}
