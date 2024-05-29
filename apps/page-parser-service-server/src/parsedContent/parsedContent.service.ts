import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ParsedContentServiceBase } from "./base/parsedContent.service.base";

@Injectable()
export class ParsedContentService extends ParsedContentServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
