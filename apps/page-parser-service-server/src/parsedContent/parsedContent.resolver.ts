import * as graphql from "@nestjs/graphql";
import { ParsedContentResolverBase } from "./base/parsedContent.resolver.base";
import { ParsedContent } from "./base/ParsedContent";
import { ParsedContentService } from "./parsedContent.service";

@graphql.Resolver(() => ParsedContent)
export class ParsedContentResolver extends ParsedContentResolverBase {
  constructor(protected readonly service: ParsedContentService) {
    super(service);
  }
}
