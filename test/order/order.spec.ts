/* eslint-disable prettier/prettier */
import {Test, TestingModule } from "@nestjs/testing";
import { StorefrontService } from "../../src/storefront/storefront.service";
import { OrderDao } from "../../src/order/order.dao";
import { OrderService } from "../../src/order/order.service";
import { MenuService } from "../../src/menu/menu.service";
import { StorefrontDao } from "../../src/storefront/storefront.dao";
import { MenuDao } from "../../src/menu/menu.dao";
import { Order } from "../../src/schema/graphql";
import { OrderDto } from "../../src/order/dto/order.dto";

describe('Order Service', () => {
    let service: OrderService;
    let dao: OrderDao;
    let module: TestingModule;

    beforeAll(async () => {
        module = await Test.createTestingModule({
            providers: [OrderService, OrderDao, StorefrontService, StorefrontDao, MenuService, MenuDao],
        }).compile();
        service = module.get<OrderService>(OrderService);
        dao = module.get<OrderDao>(OrderDao);
    })

    afterAll(async ()=> {
        if(module){
            await module.close();

        }
    })

    it('should be defined', () => {
        expect(service).toBeDefined();
        expect(dao).toBeDefined();
    })

    it('Create New Order', async () => {
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
})