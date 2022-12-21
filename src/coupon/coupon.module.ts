import { Module } from '@nestjs/common';
import { CouponDao } from './coupon.dao';
import { CouponService } from './coupon.service';

@Module({
  providers: [CouponService, CouponDao],
  exports: [CouponService],
})
export class CouponModule {}
