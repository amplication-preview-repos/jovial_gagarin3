import { SortOrder } from "../../util/SortOrder";

export type ParsedContentOrderByInput = {
  content?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  linkId?: SortOrder;
  updatedAt?: SortOrder;
};
