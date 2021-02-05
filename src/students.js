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
  SimpleShowLayout,
  SimpleForm,
  ReferenceField,
  ArrayInput,
  SimpleFormIterator,
  ReferenceInput,
  TextField,
  TextInput,
  ShowButton,
  EditButton,
  DeleteButton,
  BooleanInput,
  RichTextField,
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

export const StudentList = (props) => (
  <List title="Сурагч" {...props} exporter={false}>
    <Datagrid>
      <TextField label="Ургийн овог" source="urgiinowog" />
      <TextField label="Эцэг/эх-ийн нэр" source="etsegehiinner" />
      <TextField label="Нэр" source="ner" />
      <ReferenceField label="Анги" source="classid" reference="classes">
        <TextField source="name" />
      </ReferenceField>
      <ReferenceField label="Багш" source="classid" reference="classes">
        <ReferenceField label="Багш" source="teacherId" reference="teachers">
          <TextField source="ner" />
        </ReferenceField>
      </ReferenceField>
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

export const StudentShow = (props) => (
  <Show title="Сурагч" {...props}>
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
      <Tab label="Сургалт">
        <ReferenceField label="Анги" source="classid" reference="classes">
          <TextField source="name" />
        </ReferenceField>
        <ReferenceField label="Багш" source="classid" reference="classes">
          <ReferenceField label="Багш" source="teacherId" reference="teachers">
            <TextField source="ner" />
          </ReferenceField>
        </ReferenceField>
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
      <Tab label="Эрүүл мэнд">
        <ArrayField label="Өсөлт хөгжилт" source="usult" >
          <Datagrid>
            <TextField label="Нэр" source="usultname" />
            <TextField label="Хэмжилт" source="usulthemjilt" />
            <DateField label="Огноо" source="usultdate" />
            <TextField label="Тайлбар" source="usulttailbar" />
          </Datagrid>
        </ArrayField>

        <ArrayField label="Эрүүл мэндийн үзлэг" source="uzleg" >
          <Datagrid>
            <TextField label="Нэр" source="uzlegname" />
            <DateField label="Огноо" source="uzlegdate" />
            <TextField label="Тайлбар" source="uzlegtailbar" />
          </Datagrid>
        </ArrayField>

        <ArrayField label="Вакцин" source="vaktsin" >
          <Datagrid>
            <TextField label="Нэр" source="vaktsinname" />
            <DateField label="Огноо" source="vaktsindate" />
            <TextField label="Тайлбар" source="vaktsintailbar" />
          </Datagrid>
        </ArrayField>

        <ArrayField label="Харшил, хориотой хүнс" source="harshil" >
          <Datagrid>

            <TextField label="Нэр" source="harshilname" />
            <DateField label="Огноо" source="harshildate" />
            <TextField label="Тайлбар" source="harshiltailbar" />
          </Datagrid>
        </ArrayField>

        <ArrayField label="Осол, гэмтэл" source="gemtel" >
          <Datagrid>
            <TextField label="Нэр" source="gemtelname" />
            <DateField label="Огноо" source="gemteldate" />
            <TextField label="Тайлбар" source="gemteltailbar" />
          </Datagrid>
        </ArrayField>
      </Tab>
      <Tab label="Шагнал">
        <ArrayField label="Шагнал" source="shagnal" >
          <Datagrid>

            <TextField label="Нэр" source="shagnalname" />
            <TextField label="Тайлбар" source="shagnaltailbar" />

            <FileField source="shagnalfile" label="Файл" accept="image/*" >
              <FileField source="shagnalsrc" title="title" />
            </FileField>
          </Datagrid>
        </ArrayField>
      </Tab>
      <Tab label="Шилжилт хөдөлгөөн">
        <ArrayField label="Шилжилт хөдөлгөөн" source="shiljilt" >
          <Datagrid>
            <TextField label="Нэр" source="shiljiltname" />
            <DateField label="Огноо" source="shiljiltdate" />
            <TextField label="Тайлбар" source="shiljilttailbar" />
          </Datagrid>
        </ArrayField>
      </Tab>
    </TabbedShowLayout>
  </Show>
);

export const StudentCreate = (props) => (
  <Create title="Сурагч" {...props} >
    <TabbedForm redirect="list">

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

      <FormTab label="Сургалт" path="surgalt">

        <ReferenceInput source="classid" label="Анги" reference="classes">
          <SelectInput label="Багш" optionText="name" />
        </ReferenceInput>
        {/* <TextInput label="Хөтөлбөр" source="hutulbur" /> */}
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

      <FormTab label="Эрүүл мэнд" path="eruulmend">
        <ArrayInput label="Өсөлт хөгжилт" source="usult" >
          <SimpleFormIterator>
            <TextInput label="Нэр" source="usultname" />
            <TextInput label="Хэмжилт" source="usulthemjilt" />
            <DateInput label="Огноо" source="usultdate" />
            <TextInput label="Тайлбар" source="usulttailbar" />
          </SimpleFormIterator>
        </ArrayInput>

        <ArrayInput label="Эрүүл мэндийн үзлэг" source="uzleg" >
          <SimpleFormIterator>
            <TextInput label="Нэр" source="uzlegname" />
            <DateInput label="Огноо" source="uzlegdate" />
            <TextInput label="Тайлбар" source="uzlegtailbar" />
          </SimpleFormIterator>
        </ArrayInput>

        <ArrayInput label="Вакцин" source="vaktsin" >
          <SimpleFormIterator>
            <TextInput label="Нэр" source="vaktsinname" />
            <DateInput label="Огноо" source="vaktsindate" />
            <TextInput label="Тайлбар" source="vaktsintailbar" />
          </SimpleFormIterator>
        </ArrayInput>

        <ArrayInput label="Харшил, хориотой хүнс" source="harshil" >
          <SimpleFormIterator>

            <TextInput label="Нэр" source="harshilname" />
            <DateInput label="Огноо" source="harshildate" />
            <TextInput label="Тайлбар" source="harshiltailbar" />
          </SimpleFormIterator>
        </ArrayInput>

        <ArrayInput label="Осол, гэмтэл" source="gemtel" >
          <SimpleFormIterator>
            <TextInput label="Нэр" source="gemtelname" />
            <DateInput label="Огноо" source="gemteldate" />
            <TextInput label="Тайлбар" source="gemteltailbar" />
          </SimpleFormIterator>
        </ArrayInput>
      </FormTab>

      <FormTab label="Шагнал" path="shagnal">

        <ArrayInput label="Шагнал" source="shagnal" >
          <SimpleFormIterator>

            <TextInput label="Нэр" source="shagnalname" />
            <TextInput label="Тайлбар" source="shagnaltailbar" />

            <FileInput source="shagnalfile" label="Файл" accept="image/*" >
              <FileField source="shagnalsrc" title="title" />
            </FileInput>
          </SimpleFormIterator>
        </ArrayInput>
      </FormTab>

      <FormTab label="Шилжилт хөдөлгөөн" path="shiljilt">
        <ArrayInput label="Шилжилт хөдөлгөөн" source="shiljilt" >
          <SimpleFormIterator>
            <TextInput label="Нэр" source="shiljiltname" />
            <DateInput label="Огноо" source="shiljiltdate" />
            <TextInput label="Тайлбар" source="shiljilttailbar" />
          </SimpleFormIterator>
        </ArrayInput>
      </FormTab>


    </TabbedForm>
  </Create>
);

export const StudentEdit = (props) => (
  <Edit title="Сурагч" {...props}>
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

      <FormTab label="Сургалт" path="surgalt">

        <ReferenceInput label="Анги" source="classid" reference="classes">
          <SelectInput label="Багш" optionText="name" />
        </ReferenceInput>
        {/* <TextInput label="Хөтөлбөр" source="hutulbur" /> */}
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

      <FormTab label="Эрүүл мэнд" path="eruulmend">
        <ArrayInput label="Өсөлт хөгжилт" source="usult" >
          <SimpleFormIterator>
            <TextInput label="Нэр" source="usultname" />
            <TextInput label="Хэмжилт" source="usulthemjilt" />
            <DateInput label="Огноо" source="usultdate" />
            <TextInput label="Тайлбар" source="usulttailbar" />
          </SimpleFormIterator>
        </ArrayInput>

        <ArrayInput label="Эрүүл мэндийн үзлэг" source="uzleg" >
          <SimpleFormIterator>
            <TextInput label="Нэр" source="uzlegname" />
            <DateInput label="Огноо" source="uzlegdate" />
            <TextInput label="Тайлбар" source="uzlegtailbar" />
          </SimpleFormIterator>
        </ArrayInput>

        <ArrayInput label="Вакцин" source="vaktsin" >
          <SimpleFormIterator>
            <TextInput label="Нэр" source="vaktsinname" />
            <DateInput label="Огноо" source="vaktsindate" />
            <TextInput label="Тайлбар" source="vaktsintailbar" />
          </SimpleFormIterator>
        </ArrayInput>

        <ArrayInput label="Харшил, хориотой хүнс" source="harshil" >
          <SimpleFormIterator>

            <TextInput label="Нэр" source="harshilname" />
            <DateInput label="Огноо" source="harshildate" />
            <TextInput label="Тайлбар" source="harshiltailbar" />
          </SimpleFormIterator>
        </ArrayInput>

        <ArrayInput label="Осол, гэмтэл" source="gemtel" >
          <SimpleFormIterator>
            <TextInput label="Нэр" source="gemtelname" />
            <DateInput label="Огноо" source="gemteldate" />
            <TextInput label="Тайлбар" source="gemteltailbar" />
          </SimpleFormIterator>
        </ArrayInput>
      </FormTab>

      <FormTab label="Шагнал" path="shagnal">

        <ArrayInput label="Шагнал" source="shagnal" >
          <SimpleFormIterator>

            <TextInput label="Нэр" source="shagnalname" />
            <TextInput label="Тайлбар" source="shagnaltailbar" />

            <FileInput source="shagnalfile" label="Файл" accept="image/*" >
              <FileField source="shagnalsrc" title="title" />
            </FileInput>
          </SimpleFormIterator>
        </ArrayInput>
      </FormTab>

      <FormTab label="Шилжилт хөдөлгөөн" path="shiljilt">
        <ArrayInput label="Шилжилт хөдөлгөөн" source="shiljilt" >
          <SimpleFormIterator>
            <TextInput label="Нэр" source="shiljiltname" />
            <DateInput label="Огноо" source="shiljiltdate" />
            <TextInput label="Тайлбар" source="shiljilttailbar" />
          </SimpleFormIterator>
        </ArrayInput>
      </FormTab>


    </TabbedForm>
  </Edit>
);
