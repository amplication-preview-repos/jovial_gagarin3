import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ParsedContentService } from "./parsedContent.service";
import { ParsedContentControllerBase } from "./base/parsedContent.controller.base";

@swagger.ApiTags("parsedContents")
@common.Controller("parsedContents")
export class ParsedContentController extends ParsedContentControllerBase {
  constructor(protected readonly service: ParsedContentService) {
    super(service);
  }
}
