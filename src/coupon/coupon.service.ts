/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CouponCodeItem } from 'src/schema/graphql';
import { CouponDao } from './coupon.dao';

@Injectable()
export class CouponService {
    constructor(private couponDao: CouponDao) {}

    getCouponsData(couponCodes: string[]): CouponCodeItem[]{
        return this.couponDao.getCouponsData(couponCodes);
    }
}
