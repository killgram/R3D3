import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { dbResumeConfig } from "./dbResumeConfig";

const resumeApp = initializeApp(dbResumeConfig, "secondary");
const resumeClient = getFirestore(resumeApp);

export { resumeClient };
