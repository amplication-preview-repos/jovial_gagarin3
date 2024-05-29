import { LinkWhereUniqueInput } from "../link/LinkWhereUniqueInput";

export type ParsedContentCreateInput = {
  content?: string | null;
  link?: LinkWhereUniqueInput | null;
};
