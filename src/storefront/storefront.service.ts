/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Storefront } from 'src/schema/graphql';
import { StorefrontDto } from './dto/storefront.dto';
import { StorefrontDao } from './storefront.dao';

@Injectable()
export class StorefrontService {
    constructor(private storefrontDao: StorefrontDao) {}

    getAllStorefronts(): Storefront[]{
        return this.storefrontDao.getAllStorefronts();
    }

    createStorefront(storefrontDto: StorefrontDto): Storefront{
        return this.storefrontDao.createStorefront(storefrontDto);
    }
}
