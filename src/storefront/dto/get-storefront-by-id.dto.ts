/* eslint-disable prettier/prettier */
import { IsNotEmpty } from "class-validator";
import { GetStorefrontById } from "src/schema/graphql";

export class GetStorefrontByIdDto extends GetStorefrontById {
    @IsNotEmpty()
    id: string;
}