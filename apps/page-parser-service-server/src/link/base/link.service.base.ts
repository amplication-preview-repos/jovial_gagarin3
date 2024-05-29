/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  Link as PrismaLink,
  ParsedContent as PrismaParsedContent,
  Project as PrismaProject,
} from "@prisma/client";

export class LinkServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.LinkCountArgs, "select">): Promise<number> {
    return this.prisma.link.count(args);
  }

  async links<T extends Prisma.LinkFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.LinkFindManyArgs>
  ): Promise<PrismaLink[]> {
    return this.prisma.link.findMany<Prisma.LinkFindManyArgs>(args);
  }
  async link<T extends Prisma.LinkFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.LinkFindUniqueArgs>
  ): Promise<PrismaLink | null> {
    return this.prisma.link.findUnique(args);
  }
  async createLink<T extends Prisma.LinkCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.LinkCreateArgs>
  ): Promise<PrismaLink> {
    return this.prisma.link.create<T>(args);
  }
  async updateLink<T extends Prisma.LinkUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.LinkUpdateArgs>
  ): Promise<PrismaLink> {
    return this.prisma.link.update<T>(args);
  }
  async deleteLink<T extends Prisma.LinkDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.LinkDeleteArgs>
  ): Promise<PrismaLink> {
    return this.prisma.link.delete(args);
  }

  async findParsedContents(
    parentId: string,
    args: Prisma.ParsedContentFindManyArgs
  ): Promise<PrismaParsedContent[]> {
    return this.prisma.link
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .parsedContents(args);
  }

  async getProject(parentId: string): Promise<PrismaProject | null> {
    return this.prisma.link
      .findUnique({
        where: { id: parentId },
      })
      .project();
  }
}