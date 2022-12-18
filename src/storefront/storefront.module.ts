import { Module } from '@nestjs/common';
import { StorefrontService } from './storefront.service';
import { StorefrontResolver } from './storefront.resolver';
import { StorefrontDao } from './storefront.dao';

@Module({
  providers: [StorefrontDao, StorefrontService, StorefrontResolver],
})
export class StorefrontModule {}
