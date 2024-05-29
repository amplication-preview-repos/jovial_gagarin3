import { Module } from "@nestjs/common";
import { ParsedContentModuleBase } from "./base/parsedContent.module.base";
import { ParsedContentService } from "./parsedContent.service";
import { ParsedContentController } from "./parsedContent.controller";
import { ParsedContentResolver } from "./parsedContent.resolver";

@Module({
  imports: [ParsedContentModuleBase],
  controllers: [ParsedContentController],
  providers: [ParsedContentService, ParsedContentResolver],
  exports: [ParsedContentService],
})
export class ParsedContentModule {}
