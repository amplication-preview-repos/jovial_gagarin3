import { LinkWhereUniqueInput } from "../link/LinkWhereUniqueInput";

export type ParsedContentUpdateInput = {
  content?: string | null;
  link?: LinkWhereUniqueInput | null;
};
