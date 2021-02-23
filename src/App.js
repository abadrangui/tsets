import * as React from "react";
import { StudentList, StudentShow, StudentCreate, StudentEdit } from "./students";
import { RecruitList, RecruitShow, RecruitCreate, RecruitEdit } from "./recruit";
import { ClassList, ClassShow, ClassCreate, ClassEdit } from "./classes";
import { TeacherList, TeacherShow, TeacherCreate, TeacherEdit } from "./teachers";
import { Admin, Resource } from "react-admin";
import {
  FirebaseDataProvider,
  FirebaseAuthProvider
} from "react-admin-firebase";
import CustomLoginPage from './CustomLoginPage';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import GroupIcon from '@material-ui/icons/Group';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';

import './App.css';

const config = {
  apiKey: "AIzaSyAxahgHG6LM7cC3krZGqEDW2HAUC9miBwU",
  authDomain: "tsetserleg-e1f52.firebaseapp.com",
  projectId: "tsetserleg-e1f52",
  storageBucket: "tsetserleg-e1f52.appspot.com",
  messagingSenderId: "459529530464",
  appId: "1:459529530464:web:00f58d8dbc8cb06ea2a705"
};

const options = {
  logging: true,
  rootRef: 'root_collection/some_document'
}
const dataProvider = FirebaseDataProvider(config, options);
const authProvider = FirebaseAuthProvider(config, options);

class App extends React.Component {
  render() {
    return (
      <Admin
        loginPage={CustomLoginPage}
        dataProvider={dataProvider}
        authProvider={authProvider}
      >
        <Resource
          options={{
            label: 'Сурагч'
          }}
          name="students"
          icon={AccountBoxIcon}
          list={StudentList}
          show={StudentShow}
          create={StudentCreate}
          edit={StudentEdit}
        />
        <Resource
          options={{
            label: 'Элсэгч'
          }}
          name="recruits"
          icon={AccountCircleIcon}
          list={RecruitList}
          show={RecruitShow}
          create={RecruitCreate}
          edit={RecruitEdit}
        />
        <Resource
          options={{
            label: 'Анги'
          }}
          name="classes"
          icon={GroupIcon}
          list={ClassList}
          show={ClassShow}
          create={ClassCreate}
          edit={ClassEdit}
        />
        <Resource
          options={{
            label: 'Багш'
          }}
          name="teachers"
          icon={SupervisorAccountIcon}
          list={TeacherList}
          show={TeacherShow}
          create={TeacherCreate}
          edit={TeacherEdit}
        />
      </Admin>
    );
  }
}

export default App;
