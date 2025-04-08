import {initializeApp} from "firebase/app"
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
    // Aca va el objeto que nos da Firebase:
    apiKey: "AIzaSyCUx7wVoFFFG2YAqhpywt9l8zCXet_Zzqk",
    authDomain: "proyecto-react-d03b8.firebaseapp.com",
    projectId: "proyecto-react-d03b8",
    storageBucket: "proyecto-react-d03b8.firebasestorage.app",
    messagingSenderId: "321233157170",
    appId: "1:321233157170:web:5bf2f3c3f7fb566a4e902b"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);