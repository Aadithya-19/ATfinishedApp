import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyB_E1AsKKv-ZHiJ7HddJZh6YSSGudUKQ0g',
  authDomain: 'school-attendance-153bb.firebaseapp.com',
  databaseURL: 'https://school-attendance-153bb.firebaseio.com',
  projectId: 'school-attendance-153bb',
  storageBucket: 'school-attendance-153bb.appspot.com',
  messagingSenderId: '347487623671',
  appId: '1:347487623671:web:a82ce0caab56b29740f6f2',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


export default firebase.database();

