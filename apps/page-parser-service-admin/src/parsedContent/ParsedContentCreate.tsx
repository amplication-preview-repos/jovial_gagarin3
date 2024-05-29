import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { LinkTitle } from "../link/LinkTitle";

export const ParsedContentCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="content" multiline source="content" />
        <ReferenceInput source="link.id" reference="Link" label="Link">
          <SelectInput optionText={LinkTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
