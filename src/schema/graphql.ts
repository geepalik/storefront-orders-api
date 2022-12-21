
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

export class GetStorefrontMenu {
    id: string;
}

export class NewStorefront {
    address: string;
    name: string;
    imageUrl: string;
    menuId: string;
    zipCodes: string[];
    supportedCouponCodes: string[];
}

export class NewOrder {
    customerInfoName: string;
    customerInfoAdress: string;
    associatedStorefront: string;
    couponCodes: string[];
}

export class CalculateOrderTotals {
    orderId: string;
}

export class Menu {
    id: string;
    items: MenuItem[];
}

export class MenuItem {
    id: string;
    name: string;
    price: number;
}

export class CouponCodeItem {
    id: string;
    type: string;
    value: number;
    code: string;
}

export class Storefront {
    id: string;
    menu: Menu;
    address: string;
    name: string;
    imageUrl: string;
    zipCodes: string[];
    couponCodes: string[];
}

export abstract class IQuery {
    abstract storefronts(): Storefront[] | Promise<Storefront[]>;

    abstract getStorefrontByArea(input: GetStorefrontByArea): Storefront[] | Promise<Storefront[]>;

    abstract getStorefrontMenu(input: GetStorefrontMenu): Storefront | Promise<Storefront>;

    abstract calculateOrderTotals(input: CalculateOrderTotals): number | Promise<number>;
}

export abstract class IMutation {
    abstract createStorefront(input: NewStorefront): Storefront | Promise<Storefront>;

    abstract createOrder(input: NewOrder): Order | Promise<Order>;
}

export class UserOrderInfo {
    name: string;
    address: string;
}

export class Order {
    id: string;
    customerInformation: UserOrderInfo;
    associatedStorefront: Storefront;
    couponCodes: string[];
}

type Nullable<T> = T | null;
