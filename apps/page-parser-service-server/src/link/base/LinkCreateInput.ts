/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ParsedContentCreateNestedManyWithoutLinksInput } from "./ParsedContentCreateNestedManyWithoutLinksInput";
import { ValidateNested, IsOptional, IsString } from "class-validator";
import { Type } from "class-transformer";
import { ProjectWhereUniqueInput } from "../../project/base/ProjectWhereUniqueInput";

@InputType()
class LinkCreateInput {
  @ApiProperty({
    required: false,
    type: () => ParsedContentCreateNestedManyWithoutLinksInput,
  })
  @ValidateNested()
  @Type(() => ParsedContentCreateNestedManyWithoutLinksInput)
  @IsOptional()
  @Field(() => ParsedContentCreateNestedManyWithoutLinksInput, {
    nullable: true,
  })
  parsedContents?: ParsedContentCreateNestedManyWithoutLinksInput;

  @ApiProperty({
    required: false,
    type: () => ProjectWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ProjectWhereUniqueInput)
  @IsOptional()
  @Field(() => ProjectWhereUniqueInput, {
    nullable: true,
  })
  project?: ProjectWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  url?: string | null;
}

export { LinkCreateInput as LinkCreateInput };
