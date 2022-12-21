/* eslint-disable prettier/prettier */
import { IsNotEmpty } from "class-validator";
import { CalculateOrderTotals } from "src/schema/graphql";

export class CalculateOrderTotalsDto extends CalculateOrderTotals {
    @IsNotEmpty()
    orderId: string;
}