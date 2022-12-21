/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { MenuService } from '../menu/menu.service';
import { Storefront } from '../../src/schema/graphql';
import { GetStorefrontByAreaDto } from './dto/get-storefront-by-area.dto';
import { GetStorefrontByIdDto } from './dto/get-storefront-by-id.dto';
import { GetStorefrontMenuDto } from './dto/get-storefront-menu.dto';
import { StorefrontDto } from './dto/storefront.dto';
import { StorefrontDao } from './storefront.dao';

@Injectable()
export class StorefrontService {
    constructor(
        private storefrontDao: StorefrontDao,
        private menuService: MenuService
        ) {}

    getAllStorefronts(): Storefront[]{
        return this.storefrontDao.getAllStorefronts();
    }

    getStorefrontById(getStorefrontByIdDto: GetStorefrontByIdDto): Storefront{
        return this.storefrontDao.getStorefrontById(getStorefrontByIdDto);
    }

    async getStorefrontMenu(getStorefrontByIdDto: GetStorefrontByIdDto): Promise<GetStorefrontMenuDto>{
        const storefrontMenu = await this.storefrontDao.getStorefrontMenu(getStorefrontByIdDto);
        return {menu: storefrontMenu};
    }

    getStorefrontByArea(getStorefrontByArea: GetStorefrontByAreaDto): Storefront[]{
        return this.storefrontDao.getStorefrontByArea(getStorefrontByArea);
    }

    async createStorefront(storefrontDto: StorefrontDto): Promise<Storefront>{
        const {menuId} = storefrontDto;
        const menu = await this.menuService.getMenuById(menuId);
        return this.storefrontDao.createStorefront(storefrontDto, menu);
    }
}
