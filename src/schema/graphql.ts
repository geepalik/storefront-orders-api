
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class NewStorefront {
    address: string;
    name: string;
    imageUrl: string;
    zipCodes: string[];
}

export class MenuItem {
    id: string;
    price: number;
}

export class CouponCodePercentageString {
    percentage: string;
}

export class CouponCodePercentageInt {
    percentage: number;
}

export class Storefront {
    id: string;
    menu: MenuItem[];
    address: string;
    name: string;
    imageUrl: string;
    zipCodes: string[];
    couponCodes: CouponCode[];
}

export abstract class IQuery {
    abstract storefronts(): Storefront[] | Promise<Storefront[]>;
}

export abstract class IMutation {
    abstract createStorefront(input: NewStorefront): Storefront | Promise<Storefront>;
}

export class UserOrderInfo {
    name: string;
    address: string;
}

export class Order {
    customerInformation: UserOrderInfo;
    associatedStorefront: Storefront[];
    couponCodes: CouponCode[];
}

export type CouponCode = CouponCodePercentageInt | CouponCodePercentageString;
type Nullable<T> = T | null;
