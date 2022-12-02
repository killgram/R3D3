import { resumeClient, ResumeUsersCollectionEnum } from "../../configurations";
import { getDocs, collection, DocumentData } from "firebase/firestore";

const getUsersService = async () => {
  const querySnapshot = await getDocs(
    collection(resumeClient, ResumeUsersCollectionEnum.COLLECTION)
  );
  let data: { user: string; data: DocumentData }[] = [];
  querySnapshot.forEach((doc) => {
    data.push({
      user: doc.id,
      data: doc.data(),
    });
  });
  return data;
};

export { getUsersService };
