import { initializeApp } from "firebase/app";
import { FirebaseConfig } from "./dbConfig";
import { getFirestore } from "firebase/firestore";

const app = initializeApp(FirebaseConfig);
const client = getFirestore(app);

export { client };
