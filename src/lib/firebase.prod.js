import Firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';


//seed the database

const config = {
  // config details
};

const firebase = Firebase.initializeApp(config);


export { firebase };