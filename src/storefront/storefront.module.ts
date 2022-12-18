import { Module } from '@nestjs/common';
import { StorefrontService } from './storefront.service';

@Module({
  providers: [StorefrontService],
})
export class StorefrontModule {}
