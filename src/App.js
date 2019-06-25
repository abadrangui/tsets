import * as React from "react";
import { PostList, PostShow, PostCreate, PostEdit } from "./posts";
import { CommentList, CommentShow, CommentCreate, CommentEdit } from "./comments";
import { Admin, Resource } from "react-admin";
import {
  FirebaseRealTimeSaga,
  FirebaseDataProvider,
  FirebaseAuthProvider
} from "react-admin-firebase";
import CommentIcon from '@material-ui/icons/Comment';

import { firebaseConfig } from './FIREBASE_CONFIG';

const options = {
  logging: true,
  rootRef: 'rootrefcollection/QQG2McwjR2Bohi9OwQzP',
  // app: firebaseAppInstance
  // watch: ['posts'];
  // dontwatch: ['comments'];
}

const authProvider = FirebaseAuthProvider(firebaseConfig, options);
const dataProvider = FirebaseDataProvider(firebaseConfig, options);
const firebaseRealtime = FirebaseRealTimeSaga(dataProvider, options);

class App extends React.Component {
  render() {
    return (
      <Admin
        customSagas={[firebaseRealtime]}
        dataProvider={dataProvider}
        authProvider={authProvider}
      >
        <Resource
          name="posts"
          list={PostList}
          show={PostShow}
          create={PostCreate}
          edit={PostEdit}
        />
        <Resource
          name="comments"
          icon={CommentIcon}
          list={CommentList}
          show={CommentShow}
          create={CommentCreate}
          edit={CommentEdit}
        />
      </Admin>
    );
  }
}

export default App;
