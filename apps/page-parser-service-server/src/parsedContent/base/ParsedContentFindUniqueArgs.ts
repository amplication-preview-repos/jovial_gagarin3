/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ParsedContentWhereUniqueInput } from "./ParsedContentWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class ParsedContentFindUniqueArgs {
  @ApiProperty({
    required: true,
    type: () => ParsedContentWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ParsedContentWhereUniqueInput)
  @Field(() => ParsedContentWhereUniqueInput, { nullable: false })
  where!: ParsedContentWhereUniqueInput;
}

export { ParsedContentFindUniqueArgs as ParsedContentFindUniqueArgs };
