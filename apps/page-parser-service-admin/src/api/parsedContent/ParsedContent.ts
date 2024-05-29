import { Link } from "../link/Link";

export type ParsedContent = {
  content: string | null;
  createdAt: Date;
  id: string;
  link?: Link | null;
  updatedAt: Date;
};
