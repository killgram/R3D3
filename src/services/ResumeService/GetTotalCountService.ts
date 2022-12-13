import { resumeClient, ResumeCollectionEnum } from "../../configurations";
import {
  getCountFromServer,
  collection,
  query,
  where,
} from "firebase/firestore";

const getTotalCountService = async (year?: number) => {
  let data = [];
  const visitsRef = collection(resumeClient, ResumeCollectionEnum.COLLECTION);
  if (year) {
    for (let i = 0; i < 12; i++) {
      const yearStart = +new Date(year, i);
      const yearEnd = +new Date(year, i + 1, 0, 23, 59, 59);
      const q = query(
        visitsRef,
        where("time", ">=", yearStart),
        where("time", "<=", yearEnd)
      );
      const snapshot = await getCountFromServer(q);
      data.push({
        month: i,
        count: snapshot.data().count,
      });
    }
  } else {
    const snapshot = await getCountFromServer(visitsRef);
    data.push({
      allTotalView: snapshot.data().count,
    });
  }
  return data;
};

export { getTotalCountService };
