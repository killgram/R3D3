import { client, AccessesCollectionEnum } from "../../configurations";
import { doc, getDoc, updateDoc } from "firebase/firestore";

const addFieldService = async (
  projectName: string,
  fieldName: string,
  data: any
) => {
  const querySnapshot = await getDoc(
    doc(
      client,
      AccessesCollectionEnum.COLLECTION,
      `${projectName.toUpperCase()}`
    )
  );
  const oldData = querySnapshot.data();
  const newData: any = {};
  newData[fieldName.toUpperCase()] = {
    ...data,
  };
  const newArr = {
    ...oldData?.list[0],
    ...newData,
  };
  await updateDoc(
    doc(
      client,
      AccessesCollectionEnum.COLLECTION,
      `${projectName.toUpperCase()}`
    ),
    {
      list: [newArr],
    }
  );
  return true;
};

export { addFieldService };
