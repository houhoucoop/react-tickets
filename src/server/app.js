const express = require('express');
const firebase = require('firebase');

// dbconfig
const config = {
  apiKey: 'AIzaSyBGgz94nhUqI1frpvPJgql7YXnYHNH3OPc',
  authDomain: 'react-redux-homework.firebaseapp.com',
  databaseURL: 'https://react-redux-homework.firebaseio.com',
  projectId: 'react-redux-homework',
  storageBucket: 'react-redux-homework.appspot.com',
  messagingSenderId: '501323069356',
};
firebase.initializeApp(config);
const dbRef = firebase.database().ref().child('items');


const app = express();
app.use(express.json());
const apiRouter = express.Router();

// render item list
const itemList = () => {
  const dbItems = [];
  dbRef.on('value', (snap) => {
    snap.forEach((item) => {
      dbItems.push(item.val());
    });
  });
  return dbItems;
};

// Retrieve all items
apiRouter.get('/items', (req, res) => {
  res.send(itemList());
});

// Retrieve single item by ID
apiRouter.get('/items/:id', (req, res) => {
  const dbItems = itemList();
  const item = dbItems.find(x => x.id === req.params.id);
  res.send(item);
});

// Create a new item
apiRouter.post('/items', (req, res) => {
  dbRef.child(req.body.id).set(
    req.body,
  );
  res.send(itemList());
});

// Update item by ID
apiRouter.put('/items/:id', (req, res) => {
  dbRef.child(req.params.id).update(req.body);
  res.send(itemList());
});

// delete item by ID
apiRouter.delete('/items/:id', (req, res) => {
  dbRef.child(req.params.id).remove();
  res.send(itemList());
});

// set /api as base route
app.use('/api', apiRouter);

module.exports = app;
