import { ParsedContent } from "../parsedContent/ParsedContent";
import { Project } from "../project/Project";

export type Link = {
  createdAt: Date;
  id: string;
  parsedContents?: Array<ParsedContent>;
  project?: Project | null;
  updatedAt: Date;
  url: string | null;
};
