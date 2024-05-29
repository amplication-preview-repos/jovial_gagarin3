import { Link as TLink } from "../api/link/Link";

export const LINK_TITLE_FIELD = "url";

export const LinkTitle = (record: TLink): string => {
  return record.url?.toString() || String(record.id);
};
