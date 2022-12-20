/* eslint-disable prettier/prettier */
import { IsNotEmpty } from "class-validator";
import { NewStorefront } from "src/schema/graphql";

export class StorefrontDto extends NewStorefront {
    @IsNotEmpty()
    address: string;
    @IsNotEmpty()
    name: string;
    @IsNotEmpty()
    imageUrl: string;
    @IsNotEmpty()
    zipCodes: string[];
    @IsNotEmpty()
    supportedCouponCodes: string[];
}