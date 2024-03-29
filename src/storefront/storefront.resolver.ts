/* eslint-disable prettier/prettier */
import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { Storefront } from 'src/schema/graphql';
import { GetStorefrontByAreaDto } from './dto/get-storefront-by-area.dto';
import { GetStorefrontByIdDto } from './dto/get-storefront-by-id.dto';
import { GetStorefrontMenuDto } from './dto/get-storefront-menu.dto';
import { StorefrontDto } from './dto/storefront.dto';
import { StorefrontService } from './storefront.service';

@Resolver('storefront')
export class StorefrontResolver {
    constructor(private readonly storefrontService: StorefrontService) {}

    @Query()
    storefronts(): Storefront[]{
        return this.storefrontService.getAllStorefronts();
    }

    @Query()
    getStorefrontByArea(@Args('input') args: GetStorefrontByAreaDto): Storefront[]{
        return this.storefrontService.getStorefrontByArea(args);
    }

    @Query()
    getStorefrontMenu(@Args('input') args: GetStorefrontByIdDto): Promise<GetStorefrontMenuDto>{
        return this.storefrontService.getStorefrontMenu(args);
    }

    @Mutation('createStorefront')
    async create(@Args('input') args: StorefrontDto): Promise<Storefront>{
        return await this.storefrontService.createStorefront(args);
    }
}
