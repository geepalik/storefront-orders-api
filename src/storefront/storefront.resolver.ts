/* eslint-disable prettier/prettier */
import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { Storefront } from 'src/schema/graphql';
import { StorefrontDto } from './dto/storefront.dto';
import { StorefrontService } from './storefront.service';

@Resolver('storefront')
export class StorefrontResolver {
    constructor(private readonly storefrontService: StorefrontService) {}

    @Query()
    storefronts(): Storefront[]{
        return this.storefrontService.getAllStorefronts();
    }

    @Mutation('createStorefront')
    async create(@Args('input') args: StorefrontDto): Promise<Storefront>{
        return await this.storefrontService.createStorefront(args);
    }
}
