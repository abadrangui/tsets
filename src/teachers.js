// in src/posts.js
import * as React from "react";
// tslint:disable-next-line:no-var-requires
import {
  Datagrid,
  List,
  Show,
  Create,
  Edit,
  Filter,
  SimpleShowLayout,
  SimpleForm,
  ReferenceField,
  ReferenceInput,
  TextField,
  TextInput,
  ShowButton,
  EditButton,
  DeleteButton,
  RichTextField,
  SelectInput,
  DateField,
} from "react-admin";
import RichTextInput from "ra-input-rich-text";

const PostFilter = (props) => (
  <Filter {...props}>
    <TextInput label="Search" source="title" alwaysOn />
  </Filter>
);

export const TeacherList = (props) => (
  <List title="Багш" {...props} exporter={false} >
    <Datagrid>
      <TextField label="Овог" source="owog" />
      <TextField label="Нэр" source="ner" />
      <TextField label="Албан тушаал" source="albantushaal" />
      <TextField label="Боловсрол" source="bolowsrol" />
      <TextField label="Утасны дугаар" source="utas" />
      <TextField label="И-мэйл" source="email" />
      <ShowButton label="" />
      <EditButton label="" />
      <DeleteButton label="" redirect={false} />
    </Datagrid>
  </List>
);

export const TeacherShow = (props) => (
  <Show title="Багш" {...props}>
    <SimpleShowLayout>
      <TextField label="Овог" source="owog" />
      <TextField label="Нэр" source="ner" />
      <TextField label="Албан тушаал" source="albantushaal" />
      <TextField label="Боловсрол" source="bolowsrol" />
      <TextField label="Утасны дугаар" source="utas" />
      <TextField label="И-мэйл" source="email" />
    </SimpleShowLayout>
  </Show>
);

export const TeacherCreate = (props) => (
  <Create title="Багш" {...props} >
    <SimpleForm redirect="list">
      <TextInput label="Овог" source="owog" />
      <TextInput label="Нэр" source="ner" />
      <TextInput label="Албан тушаал" source="albantushaal" />
      <TextInput label="Боловсрол" source="bolowsrol" />
      <TextInput label="Утасны дугаар" source="utas" />
      <TextInput label="И-мэйл" source="email" />
    </SimpleForm>
  </Create>
);

export const TeacherEdit = (props) => (
  <Edit title="Багш" {...props}>
    <SimpleForm>
      <TextInput label="Овог" source="owog" />
      <TextInput label="Нэр" source="ner" />
      <TextInput label="Албан тушаал" source="albantushaal" />
      <TextInput label="Боловсрол" source="bolowsrol" />
      <TextInput label="Утасны дугаар" source="utas" />
      <TextInput label="И-мэйл" source="email" />

    </SimpleForm>
  </Edit >
);
