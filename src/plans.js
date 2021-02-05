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
  FileField,
  FileInput
} from "react-admin";
import RichTextInput from "ra-input-rich-text";

const PostFilter = (props) => (
  <Filter {...props}>
    <TextInput label="Search" source="title" alwaysOn />
  </Filter>
);

export const PlanList = (props) => (
  <List title="Хөтөлбөр" {...props} exporter={false}>
    <Datagrid>
      <TextField label="Нэр" source="owog" />
      <TextField label="Тайлбар" source="ner" />
      <FileField source="file" label="Файл" accept="document/*" >
        <FileField source="file" title="Файл" />
      </FileField>
      <ShowButton label="" />
      <EditButton label="" />
      <DeleteButton label="" redirect={false} />
    </Datagrid>
  </List>
);

export const PlanShow = (props) => (
  <Show title="Хөтөлбөр" {...props}>
    <SimpleShowLayout>
      <TextField label="Нэр" source="owog" />
      <TextField label="Тайлбар" source="ner" />
      <FileField source="file" label="Файл" accept="document/*" >
        <FileField source="file" title="Файл" />
      </FileField>
    </SimpleShowLayout>
  </Show>
);

export const PlanCreate = (props) => (
  <Create title="Хөтөлбөр" {...props} >
    <SimpleForm redirect="list">
      <TextInput label="Нэр" source="owog" />
      <TextInput label="Тайлбар" source="ner" />
      <FileInput source="file" label="Файл" accept="document/*" >
        <FileField source="file" title="Файл" />
      </FileInput>
    </SimpleForm>
  </Create>
);

export const PlanEdit = (props) => (
  <Edit title="Хөтөлбөр" {...props}>
    <SimpleForm>
      <TextInput label="Нэр" source="owog" />
      <TextInput label="Тайлбар" source="ner" />
      <FileInput source="file" label="Файл" accept="document/*" >
        <FileField source="file" title="Файл" />
      </FileInput>
    </SimpleForm>
  </Edit >
);
