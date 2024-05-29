import * as graphql from "@nestjs/graphql";
import { LinkResolverBase } from "./base/link.resolver.base";
import { Link } from "./base/Link";
import { LinkService } from "./link.service";

@graphql.Resolver(() => Link)
export class LinkResolver extends LinkResolverBase {
  constructor(protected readonly service: LinkService) {
    super(service);
  }
}
