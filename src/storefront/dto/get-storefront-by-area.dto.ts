/* eslint-disable prettier/prettier */
import { IsNotEmpty } from "class-validator";
import { GetStorefrontByArea } from "src/schema/graphql";

export class GetStorefrontByAreaDto extends GetStorefrontByArea {
    @IsNotEmpty()
    zipCode: string;
}