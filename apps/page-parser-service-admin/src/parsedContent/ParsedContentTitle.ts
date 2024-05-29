import { ParsedContent as TParsedContent } from "../api/parsedContent/ParsedContent";

export const PARSEDCONTENT_TITLE_FIELD = "id";

export const ParsedContentTitle = (record: TParsedContent): string => {
  return record.id?.toString() || String(record.id);
};
