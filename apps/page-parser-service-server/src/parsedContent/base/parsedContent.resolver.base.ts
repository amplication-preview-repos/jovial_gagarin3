/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { ParsedContent } from "./ParsedContent";
import { ParsedContentCountArgs } from "./ParsedContentCountArgs";
import { ParsedContentFindManyArgs } from "./ParsedContentFindManyArgs";
import { ParsedContentFindUniqueArgs } from "./ParsedContentFindUniqueArgs";
import { CreateParsedContentArgs } from "./CreateParsedContentArgs";
import { UpdateParsedContentArgs } from "./UpdateParsedContentArgs";
import { DeleteParsedContentArgs } from "./DeleteParsedContentArgs";
import { Link } from "../../link/base/Link";
import { ParsedContentService } from "../parsedContent.service";
@graphql.Resolver(() => ParsedContent)
export class ParsedContentResolverBase {
  constructor(protected readonly service: ParsedContentService) {}

  async _parsedContentsMeta(
    @graphql.Args() args: ParsedContentCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [ParsedContent])
  async parsedContents(
    @graphql.Args() args: ParsedContentFindManyArgs
  ): Promise<ParsedContent[]> {
    return this.service.parsedContents(args);
  }

  @graphql.Query(() => ParsedContent, { nullable: true })
  async parsedContent(
    @graphql.Args() args: ParsedContentFindUniqueArgs
  ): Promise<ParsedContent | null> {
    const result = await this.service.parsedContent(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => ParsedContent)
  async createParsedContent(
    @graphql.Args() args: CreateParsedContentArgs
  ): Promise<ParsedContent> {
    return await this.service.createParsedContent({
      ...args,
      data: {
        ...args.data,

        link: args.data.link
          ? {
              connect: args.data.link,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => ParsedContent)
  async updateParsedContent(
    @graphql.Args() args: UpdateParsedContentArgs
  ): Promise<ParsedContent | null> {
    try {
      return await this.service.updateParsedContent({
        ...args,
        data: {
          ...args.data,

          link: args.data.link
            ? {
                connect: args.data.link,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => ParsedContent)
  async deleteParsedContent(
    @graphql.Args() args: DeleteParsedContentArgs
  ): Promise<ParsedContent | null> {
    try {
      return await this.service.deleteParsedContent(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => Link, {
    nullable: true,
    name: "link",
  })
  async getLink(@graphql.Parent() parent: ParsedContent): Promise<Link | null> {
    const result = await this.service.getLink(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
