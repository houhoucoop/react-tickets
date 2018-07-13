import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyBGgz94nhUqI1frpvPJgql7YXnYHNH3OPc',
  authDomain: 'react-redux-homework.firebaseapp.com',
  databaseURL: 'https://react-redux-homework.firebaseio.com',
  projectId: 'react-redux-homework',
  storageBucket: 'react-redux-homework.appspot.com',
  messagingSenderId: '501323069356',
};

firebase.initializeApp(config);
const db = firebase.database();
export default db;
