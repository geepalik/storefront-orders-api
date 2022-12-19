/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Storefront } from 'src/schema/graphql';
import { GetStorefrontByAreaDto } from './dto/get-storefront-by-area.dto';
import { StorefrontDto } from './dto/storefront.dto';
import { StorefrontDao } from './storefront.dao';

@Injectable()
export class StorefrontService {
    constructor(private storefrontDao: StorefrontDao) {}

    getAllStorefronts(): Storefront[]{
        return this.storefrontDao.getAllStorefronts();
    }

    getStorefrontByArea(getStorefrontByArea: GetStorefrontByAreaDto): Storefront[]{
        return this.storefrontDao.getStorefrontByArea(getStorefrontByArea);
    }

    createStorefront(storefrontDto: StorefrontDto): Storefront{
        return this.storefrontDao.createStorefront(storefrontDto);
    }
}
