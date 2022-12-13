import { resumeClient, ResumeCollectionEnum } from "../../configurations";
import {
  getDocs,
  collection,
  DocumentData,
  where,
  query,
} from "firebase/firestore";

const getUsersService = async (month: number, year: number) => {
  const visitsRef = collection(resumeClient, ResumeCollectionEnum.COLLECTION);
  const monthStart = +new Date(year, month - 1, 1);
  const monthEnd = +new Date(year, month, 0, 23, 59, 59);
  const q = query(
    visitsRef,
    where("time", ">=", monthStart),
    where("time", "<=", monthEnd)
  );
  const querySnapshot = await getDocs(q);
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
