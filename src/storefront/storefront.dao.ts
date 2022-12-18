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
        const storefront: Storefront = new Storefront();
        return storefront;
    }
}
