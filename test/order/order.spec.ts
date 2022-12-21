/* eslint-disable prettier/prettier */
import {Test, TestingModule } from "@nestjs/testing";
import { StorefrontService } from "../../src/storefront/storefront.service";
import { OrderDao } from "../../src/order/order.dao";
import { OrderService } from "../../src/order/order.service";
import { MenuService } from "../../src/menu/menu.service";
import { StorefrontDao } from "../../src/storefront/storefront.dao";
import { MenuDao } from "../../src/menu/menu.dao";
import { CalculateOrderTotals, Order } from "../../src/schema/graphql";
import { OrderDto } from "../../src/order/dto/order.dto";
import { CouponService } from "../../src/coupon/coupon.service";
import { CouponDao } from "../../src/coupon/coupon.dao";

describe('Order Service', () => {
    let service: OrderService;
    let storefrontService: StorefrontService;
    let dao: OrderDao;
    let module: TestingModule;

    beforeAll(async () => {
        module = await Test.createTestingModule({
            providers: [
                OrderService, 
                OrderDao, 
                StorefrontService, 
                StorefrontDao, 
                MenuService, 
                MenuDao,
                CouponService,
                CouponDao
            ],
        }).compile();
        service = module.get<OrderService>(OrderService);
        storefrontService = module.get<StorefrontService>(StorefrontService);
        dao = module.get<OrderDao>(OrderDao);
    })

    afterAll(async ()=> {
        if(module){
            await module.close();

        }
    })

    it('should be defined', () => {
        expect(service).toBeDefined();
        expect(storefrontService).toBeDefined();
        expect(dao).toBeDefined();
    })

    it('Create New Order - Success', async () => {
        const orderDto: OrderDto =  { 
            customerInfoName: "Gil", 
            customerInfoAdress: "Jabotinsky 2", 
            associatedStorefront: "1", 
            couponCodes: ["1", "2"] 
        }

        const orderResult: Order = {
            id: "1",
            customerInformation: {
                name: "Gil",
                address: "Jabotinsky 2"
            },
            associatedStorefront: {
                id: "1",
                address: "Address 1",
                name: "Name 1",
                imageUrl: "https://example.com/img1",
                zipCodes: [
                  "15235",
                  "14752"
                ],
                couponCodes: [
                  "1",
                  "2"
                ],
                menu: {
                  "id": "1",
                  "items": [
                    {
                      "id": "1",
                      "name": "Soup",
                      "price": 10
                    },
                    {
                      "id": "2",
                      "name": "Salad",
                      "price": 20
                    }
                  ]
                }
            },
            couponCodes: [
                "1",
                "2"
            ],
        }
        jest.spyOn(dao,'createOrder').mockImplementation(() => orderResult);
        const newOrder: Order = await service.createOrder(orderDto);
        expect(newOrder).toMatchObject(orderResult);

    })

    it('Create New Order - failure because of coupons not allowed in storefront', async () => {
        //this will fail if the coupons passed in the order
        //do not exist in the coupons allowed in the storefront passed
        //if e.g. associated storefront has couponCodes: ["1","2"],
        //and following order has at least one coupon code not listed in storefront
        const orderDto: OrderDto =  { 
            customerInfoName: "Gil", 
            customerInfoAdress: "Jabotinsky 2", 
            associatedStorefront: "1", 
            couponCodes: ["2", "3"] 
        }

        jest.spyOn(dao,'createOrder').mockImplementation(() => {
            throw new Error("Order contains coupons that are not allowed for this storefront");
        });
        let response;
        try{
            await service.createOrder(orderDto);
        }catch(error){
            response = error;
        }
        expect(response.message).toEqual("Order contains coupons that are not allowed for this storefront");
    })

    it('Calculate Order Totals', async () => {
        const calculateOrderTotals: CalculateOrderTotals = { 
            orderId: "1", 
        }

        const orderResult: Order = {
            id: "1",
            customerInformation: {
                name: "Gil",
                address: "Jabotinsky 2"
            },
            associatedStorefront: {
                id: "1",
                address: "Address 1",
                name: "Name 1",
                imageUrl: "https://example.com/img1",
                zipCodes: [
                  "15235",
                  "14752"
                ],
                couponCodes: [
                  "1",
                  "2"
                ],
                menu: {
                  "id": "1",
                  "items": [
                    {
                      "id": "1",
                      "name": "Soup",
                      "price": 10
                    },
                    {
                      "id": "2",
                      "name": "Salad",
                      "price": 20
                    }
                  ]
                }
            },
            couponCodes: [
                "1",
                "2"
            ],
        }

        jest.spyOn(dao,'getOrderById').mockImplementation(() => orderResult);
        const result: number = await service.calculateOrderTotals(calculateOrderTotals);
        expect(result).toEqual(22.5);
    });
})