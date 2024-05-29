import { ParsedContentUpdateManyWithoutLinksInput } from "./ParsedContentUpdateManyWithoutLinksInput";
import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";

export type LinkUpdateInput = {
  parsedContents?: ParsedContentUpdateManyWithoutLinksInput;
  project?: ProjectWhereUniqueInput | null;
  url?: string | null;
};
