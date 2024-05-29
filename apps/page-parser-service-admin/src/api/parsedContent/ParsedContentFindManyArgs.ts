import { ParsedContentWhereInput } from "./ParsedContentWhereInput";
import { ParsedContentOrderByInput } from "./ParsedContentOrderByInput";

export type ParsedContentFindManyArgs = {
  where?: ParsedContentWhereInput;
  orderBy?: Array<ParsedContentOrderByInput>;
  skip?: number;
  take?: number;
};
