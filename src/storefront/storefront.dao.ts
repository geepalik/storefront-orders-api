/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Menu, Storefront } from '../schema/graphql';
import { GetStorefrontByAreaDto } from './dto/get-storefront-by-area.dto';
import { GetStorefrontByIdDto } from './dto/get-storefront-by-id.dto';
import { StorefrontDto } from './dto/storefront.dto';

@Injectable()
export class StorefrontDao {
    private readonly storefronts: Storefront[] = [];

    getAllStorefronts(): Storefront[] {
        return this.storefronts;
    }

    getStorefrontByArea(getStorefrontByArea: GetStorefrontByAreaDto): Storefront[] {
        const {zipCode} = getStorefrontByArea;
        return this.storefronts.filter(storefront => storefront.zipCodes.includes(zipCode));
    }

    getStorefrontById(getStorefrontByIdDto: GetStorefrontByIdDto): Storefront{
        const { id } = getStorefrontByIdDto;
        return this.storefronts.filter(storefront => storefront.id === id)[0];
    }

    getStorefrontMenu(getStorefrontByIdDto: GetStorefrontByIdDto): Menu{
        const { id } = getStorefrontByIdDto;
        const storefront = this.storefronts.filter(storefront => storefront.id === id)[0];
        return storefront.menu;
    }

    createStorefront(storefrontDto: StorefrontDto, menu: Menu): Storefront{
        const storefrontId: number = this.storefronts.length + 1;
        const {address, name, imageUrl, zipCodes, supportedCouponCodes} = storefrontDto;
        const storefront: Storefront = new Storefront();
        storefront.id = storefrontId.toString();
        storefront.address = address;
        storefront.name = name;
        storefront.imageUrl = imageUrl;
        storefront.zipCodes = zipCodes;
        storefront.menu = menu;
        storefront.couponCodes = supportedCouponCodes;
        this.storefronts.push(storefront);
        return storefront;
    }
}
