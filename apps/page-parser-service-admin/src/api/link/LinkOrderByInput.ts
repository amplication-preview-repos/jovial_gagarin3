import { SortOrder } from "../../util/SortOrder";

export type LinkOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  projectId?: SortOrder;
  updatedAt?: SortOrder;
  url?: SortOrder;
};
