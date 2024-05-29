import { StringFilter } from "../../util/StringFilter";
import { ParsedContentListRelationFilter } from "../parsedContent/ParsedContentListRelationFilter";
import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type LinkWhereInput = {
  id?: StringFilter;
  parsedContents?: ParsedContentListRelationFilter;
  project?: ProjectWhereUniqueInput;
  url?: StringNullableFilter;
};
