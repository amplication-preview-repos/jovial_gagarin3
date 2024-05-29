import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { LinkService } from "./link.service";
import { LinkControllerBase } from "./base/link.controller.base";

@swagger.ApiTags("links")
@common.Controller("links")
export class LinkController extends LinkControllerBase {
  constructor(protected readonly service: LinkService) {
    super(service);
  }
}
