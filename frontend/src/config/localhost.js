const firebaseConfig = {
  apiKey: 'AIzaSyB_2vAMuRICt057Vt8STqV3w45ES_duFcg',
  authDomain: 'woof-pack-dog-walking-app.firebaseapp.com',
  databaseURL:
    'https://woof-pack-dog-walking-app.firebaseio.com',
  projectId: 'woof-pack-dog-walking-app',
  storageBucket: 'woof-pack-dog-walking-app.appspot.com',
  messagingSenderId: '624875266303',
  appId: '1:624875266303:web:136e6753f0288552',
};

// Cloud Functions
// const backendUrl = `http://localhost:5000/${
//   firebaseConfig.projectId
// }/us-central1/api/api`;

// App Engine / Debug
const backendUrl = `http://localhost:8080/api`;

export default {
  firebaseConfig,
  backendUrl,
};
