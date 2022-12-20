
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class GetStorefrontByArea {
    zipCode: string;
}

export class GetStorefrontById {
    id: string;
}

export class NewStorefront {
    address: string;
    name: string;
    imageUrl: string;
    zipCodes: string[];
}

export class MenuItem {
    id: string;
    name: string;
    price: number;
}

export class CouponCodePercentageString {
    percentage: string;
}

export class CouponCodePercentageInt {
    percentage: number;
}

export class CouponCodeItem {
    id: string;
    percentage: CouponCodePercentage;
}

export class Storefront {
    id: string;
    menu: MenuItem[];
    address: string;
    name: string;
    imageUrl: string;
    zipCodes: string[];
    couponCodes: CouponCodeItem[];
}

export abstract class IQuery {
    abstract storefronts(): Storefront[] | Promise<Storefront[]>;

    abstract getStorefrontByArea(input: GetStorefrontByArea): Storefront[] | Promise<Storefront[]>;

    abstract getStorefrontById(input: GetStorefrontById): Storefront | Promise<Storefront>;
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
    couponCodes: CouponCodeItem[];
}

export type CouponCodePercentage = CouponCodePercentageInt | CouponCodePercentageString;
type Nullable<T> = T | null;
