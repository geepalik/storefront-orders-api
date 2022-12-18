import { Module } from '@nestjs/common';
import { StorefrontModule } from './storefront/storefront.module';

@Module({
  imports: [StorefrontModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
