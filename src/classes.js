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

export const ClassList = (props) => (
  <List title="Анги" {...props} exporter={false}>
    <Datagrid>
      <TextField label="Нэр" source="name" />
      <ReferenceField label="Багш" source="teacherId" reference="teachers" >
        <TextField source="ner" />
      </ReferenceField>
      <RichTextField label="Тайлбар" source="tailbar" />
      <RichTextField source="body" />
      {/* <TextField source="createdate" />
      <TextField source="lastupdate" /> */}
      <ShowButton label="" />
      <EditButton label="" />
      <DeleteButton label="" redirect={false} />
    </Datagrid>
  </List>
);

export const ClassShow = (props) => (
  <Show title="Анги" {...props}>
    <SimpleShowLayout>
      <TextField label="Нэр" source="name" />
      <ReferenceField label="Багш" source="teacherId" reference="teachers" >
        <TextField source="ner" />
      </ReferenceField>
      <RichTextField label="Тайлбар" source="tailbar" />
      <DateField source="createdate" />
      <DateField source="lastupdate" />
    </SimpleShowLayout>
  </Show>
);

export const ClassCreate = (props) => (
  <Create title="Анги үүсгэх" {...props} >
    <SimpleForm redirect="list">
      <TextInput label="Нэр" source="name" />
      <RichTextInput label="Тайлбар" source="tailbar" />
      <ReferenceInput source="teacherId" reference="teachers">
        <SelectInput label="Багш" optionText="ner" />
      </ReferenceInput>
      <FileInput source="file" label="Хуваарь" accept="image/*" >
        <FileField source="src" title="title" />
      </FileInput>
    </SimpleForm>
  </Create>
);

export const ClassEdit = (props) => (
  <Edit title="Анги" {...props}>
    <SimpleForm>

      <TextInput source="name" />
      <ReferenceInput source="teacherId" reference="teachers">
        <SelectInput label="Багш" optionText="ner" />
      </ReferenceInput>
      <RichTextInput source="tailbar" />
      <FileInput source="file" label="Хуваарь" accept="image/*" >
        <FileField source="src" title="title" />
      </FileInput>
    </SimpleForm>
  </Edit >
);
