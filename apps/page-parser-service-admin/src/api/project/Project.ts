import { Link } from "../link/Link";

export type Project = {
  createdAt: Date;
  id: string;
  links?: Array<Link>;
  name: string | null;
  updatedAt: Date;
};
