import router from './src/router.js';

const firebaseConfig = {
  apiKey: 'AIzaSyBs3zGwOqw1iWIBQ3Pr3Z2ganZL-ENCHbQ',
  authDomain: 'ransa-a4280.firebaseapp.com',
  databaseURL: 'https://ransa-a4280.firebaseio.com',
  projectId: 'ransa-a4280',
  storageBucket: 'ransa-a4280.appspot.com',
  messagingSenderId: '77149483170',
  appId: '1:77149483170:web:5de15cbf8d202f1eb4a7fb'
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

router();

console.log('holaaa');