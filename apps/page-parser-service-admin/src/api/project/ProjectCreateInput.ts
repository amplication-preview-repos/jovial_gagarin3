import { LinkCreateNestedManyWithoutProjectsInput } from "./LinkCreateNestedManyWithoutProjectsInput";

export type ProjectCreateInput = {
  links?: LinkCreateNestedManyWithoutProjectsInput;
  name?: string | null;
};
