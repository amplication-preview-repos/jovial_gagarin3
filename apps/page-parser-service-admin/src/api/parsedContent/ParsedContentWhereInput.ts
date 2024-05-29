import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { LinkWhereUniqueInput } from "../link/LinkWhereUniqueInput";

export type ParsedContentWhereInput = {
  content?: StringNullableFilter;
  id?: StringFilter;
  link?: LinkWhereUniqueInput;
};
