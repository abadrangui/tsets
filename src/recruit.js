// in src/posts.js
import * as React from "react";
// tslint:disable-next-line:no-var-requires
import {
  TabbedForm,
  FormTab,
  Datagrid,
  List,
  Show,
  Create,
  Edit,
  Filter,
  ArrayInput,
  SimpleFormIterator,
  TextField,
  TextInput,
  ShowButton,
  EditButton,
  DeleteButton,
  BooleanInput,
  SelectInput,
  FileField,
  FileInput,
  DateInput,
  SelectField,
  TabbedShowLayout,
  Tab,
  ArrayField,
  DateField,
  BooleanField,
} from "react-admin";
import RichTextInput from "ra-input-rich-text";

const PostFilter = (props) => (
  <Filter {...props}>
    <TextInput label="Search" source="title" alwaysOn />
  </Filter>
);

export const RecruitList = (props) => (
  <List title="Элсэгч" {...props} filters={<PostFilter />}>
    <Datagrid>
      <TextField label="Ургийн овог" source="urgiinowog" />
      <TextField label="Эцэг/эх-ийн нэр" source="etsegehiinner" />
      <TextField label="Нэр" source="ner" />
      <SelectField label="Хүйс" source="huis" choices={[
        { id: 1, name: 'Эрэгтэй' },
        { id: 2, name: 'Эмэгтэй' },
      ]} />
      <TextField label="Төрсөн өдөр" source="tursun udur" />
      <TextField label="Регистерийн дугаар" source="registeriindugaar" />
      <TextField label="Төрсний гэрчилгээний дугаар" source="tursniigerchilgeedugaar" />
      <ShowButton label="" />
      <EditButton label="" />
      <DeleteButton label="" redirect={false} />
    </Datagrid>
  </List>
);

export const RecruitShow = (props) => (
  <Show title="Элсэгч" {...props}>
    <TabbedShowLayout>
      <Tab label="Ерөнхий">

        <TextField label="Ургийн овог" source="urgiinowog" />
        <TextField label="Эцэг/эх-ийн нэр" source="etsegehiinner" />
        <TextField label="Нэр" source="ner" />
        <SelectField label="Хүйс" source="huis" choices={[
          { id: 1, name: 'Эрэгтэй' },
          { id: 2, name: 'Эмэгтэй' },
        ]} />
        <DateField label="Төрсөн өдөр" source="tursun udur" />
        <TextField label="Регистерийн дугаар" source="registeriindugaar" />
        <TextField label="Төрсний гэрчилгээний дугаар" source="tursniigerchilgeedugaar" />
        <TextField label="Иргэншил" source="irgenshil" />
        <TextField label="Хэл" source="hel" />
        {/* <TextField label="Цусны бүлэг" source="tsusniibuleg" /> */}
        <TextField label="Хаяг" source="hayag" />

        <ArrayField label="Холбогдох" source="holbogdoh"  >
          <Datagrid>
            <TextField label="Овог нэр" source="name" />
            <TextField label="Утасны дугаар" source="phoneNumber" />
            <TextField label="Хэн болох" source="henboloh" />
          </Datagrid>
        </ArrayField>
      </Tab>

      <Tab label="Баримт бичиг">
        <ArrayField label="Баримт бичиг" source="bichigbarimt" >
          <Datagrid>
            <TextField label="Нэр" source="bichigbarimtner" />
            <TextField label="Тайлбар" source="bichigbarimttailbar" />
            <BooleanField label="Баталгаажсан" source="bichigbarimtbatalgaa" />
            <FileField source="bichigbarimtfile" label="Файл" accept="image/*" >
              <FileField source="bichigbarimtsrc" title="title" />
            </FileField>
          </Datagrid>
        </ArrayField>
      </Tab>
    </TabbedShowLayout>
  </Show>
);

export const RecruitCreate = (props) => (
  <Create title="Элсэгч" {...props} >
    <TabbedForm>

      <FormTab label="Ерөнхий">
        <TextInput label="Ургийн овог" source="urgiinowog" />
        <TextInput label="Эцэг/эх-ийн нэр" source="etsegehiinner" />
        <TextInput label="Нэр" source="ner" />
        <SelectInput label="Хүйс" source="huis" choices={[
          { id: 1, name: 'Эрэгтэй' },
          { id: 2, name: 'Эмэгтэй' },
        ]} />
        <DateInput label="Төрсөн өдөр" source="tursun udur" />
        <TextInput label="Регистерийн дугаар" source="registeriindugaar" />
        <TextInput label="Төрсний гэрчилгээний дугаар" source="tursniigerchilgeedugaar" />
        <TextInput label="Иргэншил" source="irgenshil" />
        <TextInput label="Хэл" source="hel" />
        {/* <TextInput label="Цусны бүлэг" source="tsusniibuleg" /> */}
        <TextInput label="Хаяг" source="hayag" />

        <ArrayInput label="Холбогдох" source="holbogdoh"  >
          <SimpleFormIterator>
            <TextInput label="Овог нэр" source="name" />
            <TextInput label="Утасны дугаар" source="phoneNumber" />
            <TextInput label="Хэн болох" source="henboloh" />
          </SimpleFormIterator>
        </ArrayInput>

      </FormTab>

      <FormTab label="Баримт бичиг" path="bichigbarimt">
        <ArrayInput label="Баримт бичиг" source="bichigbarimt" >
          <SimpleFormIterator>
            <TextInput label="Нэр" source="bichigbarimtner" />
            <TextInput label="Тайлбар" source="bichigbarimttailbar" />
            <BooleanInput label="Баталгаажсан" source="bichigbarimtbatalgaa" />
            <FileInput source="bichigbarimtfile" label="Файл" accept="image/*" >
              <FileField source="bichigbarimtsrc" title="title" />
            </FileInput>
          </SimpleFormIterator>
        </ArrayInput>
      </FormTab>



    </TabbedForm>
  </Create>
);

export const RecruitEdit = (props) => (
  <Edit title="Элсэгч" {...props}>
    <TabbedForm>

      <FormTab label="Ерөнхий">
        <TextInput label="Ургийн овог" source="urgiinowog" />
        <TextInput label="Эцэг/эх-ийн нэр" source="etsegehiinner" />
        <TextInput label="Нэр" source="ner" />
        <SelectInput label="Хүйс" source="huis" choices={[
          { id: 1, name: 'Эрэгтэй' },
          { id: 2, name: 'Эмэгтэй' },
        ]} />
        <DateInput label="Төрсөн өдөр" source="tursun udur" />
        <TextInput label="Регистерийн дугаар" source="registeriindugaar" />
        <TextInput label="Төрсний гэрчилгээний дугаар" source="tursniigerchilgeedugaar" />
        <TextInput label="Иргэншил" source="irgenshil" />
        <TextInput label="Хэл" source="hel" />
        {/* <TextInput label="Цусны бүлэг" source="tsusniibuleg" /> */}
        <TextInput label="Хаяг" source="hayag" />

        <ArrayInput label="Холбогдох" source="holbogdoh"  >
          <SimpleFormIterator>
            <TextInput label="Овог нэр" source="name" />
            <TextInput label="Утасны дугаар" source="phoneNumber" />
            <TextInput label="Хэн болох" source="henboloh" />
          </SimpleFormIterator>
        </ArrayInput>

      </FormTab>

      <FormTab label="Баримт бичиг" path="bichigbarimt">
        <ArrayInput label="Баримт бичиг" source="bichigbarimt" >
          <SimpleFormIterator>
            <TextInput label="Нэр" source="bichigbarimtner" />
            <TextInput label="Тайлбар" source="bichigbarimttailbar" />
            <BooleanInput label="Баталгаажсан" source="bichigbarimtbatalgaa" />
            <FileInput source="bichigbarimtfile" label="Файл" accept="image/*" >
              <FileField source="bichigbarimtsrc" title="title" />
            </FileInput>
          </SimpleFormIterator>
        </ArrayInput>
      </FormTab>
    </TabbedForm>
  </Edit>
);
