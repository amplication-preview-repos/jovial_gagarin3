import { StringFilter } from "../../util/StringFilter";
import { LinkListRelationFilter } from "../link/LinkListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type ProjectWhereInput = {
  id?: StringFilter;
  links?: LinkListRelationFilter;
  name?: StringNullableFilter;
};
