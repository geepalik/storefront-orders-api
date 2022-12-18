/* eslint-disable prettier/prettier */
import { IsNotEmpty } from "class-validator";
import { CouponCode, MenuItem, NewStorefront } from "src/schema/graphql";

export class StorefrontDto extends NewStorefront {
    @IsNotEmpty()
    menu: MenuItem[];
    @IsNotEmpty()
    address: string;
    @IsNotEmpty()
    name: string;
    @IsNotEmpty()
    imageUrl: string;
    @IsNotEmpty()
    zipCodes: string[];
    @IsNotEmpty()
    couponCodes: CouponCode[];
}