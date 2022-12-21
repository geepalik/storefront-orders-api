/* eslint-disable prettier/prettier */
import { IsNotEmpty } from "class-validator";
import { GetStorefrontMenu } from "src/schema/graphql";

export class GetStorefrontByIdDto extends GetStorefrontMenu {
    @IsNotEmpty()
    id: string;
}