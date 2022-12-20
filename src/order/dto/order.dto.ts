/* eslint-disable prettier/prettier */
import { IsNotEmpty } from 'class-validator';
import { NewOrder } from 'src/schema/graphql';

export class OrderDto extends NewOrder{
    @IsNotEmpty()
    customerInfoName: string;
    @IsNotEmpty()
    customerInfoAdress: string;
    @IsNotEmpty()
    associatedStorefront: string;
    @IsNotEmpty()
    couponCodes: string[];
}