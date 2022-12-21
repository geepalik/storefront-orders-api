/* eslint-disable prettier/prettier */
import { Test, TestingModule } from "@nestjs/testing";
import { MenuService } from "../../src/menu/menu.service";
import { GetStorefrontByAreaDto } from "src/storefront/dto/get-storefront-by-area.dto";
import { GetStorefrontByIdDto } from "src/storefront/dto/get-storefront-by-id.dto";
import { GetStorefrontMenuDto } from "src/storefront/dto/get-storefront-menu.dto";
import { Menu, Storefront } from "../../src/schema/graphql";
import { StorefrontDto } from "../../src/storefront/dto/storefront.dto";
import { StorefrontDao } from "../../src/storefront/storefront.dao";
import { StorefrontService } from "../../src/storefront/storefront.service";
import { MenuDao } from "../../src/menu/menu.dao";

describe('Storefront Service', ()=>{
    let service: StorefrontService;
    let dao: StorefrontDao;
    let module: TestingModule;

    beforeAll(async () => {
        module = await Test.createTestingModule({
            providers: [MenuService, MenuDao, StorefrontService, StorefrontDao],
        }).compile();
        service = module.get<StorefrontService>(StorefrontService);
        dao = module.get<StorefrontDao>(StorefrontDao);
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
    
    it('Create New Storefront', async () => {
        const storefrontDto: StorefrontDto = { 
            address: "Jabotinsky 1", 
            name: "Name 1", 
            imageUrl: "https://example.com/img1", 
            zipCodes: ["15235", "14752"], 
            supportedCouponCodes: ["1","2"],
            menuId: "1"
        }

        const storefrontResult: Storefront = {
            id: "1",
            address: "Jabotinsky 1",
            name: "Name 1",
            imageUrl: "https://example.com/img1",
            menu: {
                id: "1",
                items: [
                  {
                    id: "1",
                    name: "Soup",
                    price: 10
                  },
                  {
                    id: "2",
                    name: "Salad",
                    price: 20
                  }
                ]
              },
            zipCodes: [
              "15235",
              "14752"
            ],
            couponCodes: [
              "1",
              "2"
            ]
          
        }
        jest.spyOn(dao,'createStorefront').mockImplementation(() => storefrontResult);
        const newStorefront: Storefront = await service.createStorefront(storefrontDto);
        expect(newStorefront).toMatchObject(storefrontResult);
    });

    it('Get All Storefronts', async () => {
        const storefrontResult: Storefront[] = [{
            id: "1",
            address: "Jabotinsky 1",
            name: "Name 1",
            imageUrl: "https://example.com/img1",
            menu: {
                id: "1",
                items: [
                  {
                    id: "1",
                    name: "Soup",
                    price: 10
                  },
                  {
                    id: "2",
                    name: "Salad",
                    price: 20
                  }
                ]
              },
            zipCodes: [
              "15235",
              "14752"
            ],
            couponCodes: [
              "1",
              "2"
            ]
          
        }];
        jest.spyOn(dao,'getAllStorefronts').mockImplementation(() => storefrontResult);
        
        const results: Storefront[] = await service.getAllStorefronts();
        expect(Array.isArray(results)).toBe(true);
        expect(results[0]).toMatchObject(storefrontResult[0]);
    })

    it('Get Storefront by Area', async () => {
        const getStorefrontByArea: GetStorefrontByAreaDto = { 
            zipCode: "15235", 
        }

        const storefrontResult: Storefront[] = [{
            id: "1",
            address: "Jabotinsky 1",
            name: "Name 1",
            imageUrl: "https://example.com/img1",
            menu: {
                id: "1",
                items: [
                  {
                    id: "1",
                    name: "Soup",
                    price: 10
                  },
                  {
                    id: "2",
                    name: "Salad",
                    price: 20
                  }
                ]
            },
            zipCodes: [
              "15235",
              "14752"
            ],
            couponCodes: [
              "1",
              "2"
            ]
          
        }];
        jest.spyOn(dao,'getStorefrontByArea').mockImplementation(() => storefrontResult);
        
        const results: Storefront[] = await service.getStorefrontByArea(getStorefrontByArea);
        expect(Array.isArray(results)).toBe(true);
        expect(results[0]).toMatchObject(storefrontResult[0]);
    })

    it('Get Menu of Storefront', async () => {
        const getStorefrontByIdDto: GetStorefrontByIdDto = { 
            id: "1", 
        }

        const storefrontMenuResult: Menu = {
                id: "1",
                items: [
                  {
                    id: "1",
                    name: "Soup",
                    price: 10
                  },
                  {
                    id: "2",
                    name: "Salad",
                    price: 20
                  }
                ]
        };
        jest.spyOn(dao,'getStorefrontMenu').mockImplementation(() => storefrontMenuResult);
        
        const results: GetStorefrontMenuDto = await service.getStorefrontMenu(getStorefrontByIdDto);
        expect(results.menu).toEqual(storefrontMenuResult);
    })
})
