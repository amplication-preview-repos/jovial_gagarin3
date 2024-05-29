import { ParsedContentCreateNestedManyWithoutLinksInput } from "./ParsedContentCreateNestedManyWithoutLinksInput";
import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";

export type LinkCreateInput = {
  parsedContents?: ParsedContentCreateNestedManyWithoutLinksInput;
  project?: ProjectWhereUniqueInput | null;
  url?: string | null;
};
