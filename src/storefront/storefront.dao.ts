/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Storefront } from 'src/schema/graphql';
import { StorefrontDto } from './dto/storefront.dto';

@Injectable()
export class StorefrontDao {
    private readonly storefronts: Storefront[] = [];

    getAllStorefronts(): Storefront[] {
        return this.storefronts;
    }

    //pass zipcode
    //findByArea(){}

    createStorefront(storefrontDto: StorefrontDto): Storefront{
        const storefrontId: number = this.storefronts.length + 1;
        const {address, name, imageUrl, zipCodes} = storefrontDto;
        const storefront: Storefront = new Storefront();
        storefront.id = storefrontId.toString();
        storefront.address = address;
        storefront.name = name;
        storefront.imageUrl = imageUrl;
        storefront.zipCodes = zipCodes;
        this.storefronts.push(storefront);
        return storefront;
    }
}
