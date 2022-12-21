/* eslint-disable prettier/prettier */
import { CouponCodeItem } from "src/schema/graphql";

export class CouponDao {
    private readonly coupons: CouponCodeItem[] = [];

    constructor(){
        this.generateCouponData();
    }

    generateCouponData(){
        const couponItem1: CouponCodeItem =  {
            id: '1',
            type: 'percentage',
            value: 20,
            code: '11111',
        };
        const couponItem2: CouponCodeItem =  {
            id: '2',
            type: 'percentage',
            value: 5,
            code: '22222',
        };
        this.coupons.push(couponItem1, couponItem2);
    }

    getCouponsData(couponCodes: string[]): CouponCodeItem[]{
        const couponCodesSet = new Set(couponCodes);
        return this.coupons.filter(coupon => couponCodesSet.has(coupon.id))
    }
}