import { client, AccessesCollectionEnum } from "../../configurations";
import { doc, getDoc, updateDoc } from "firebase/firestore";

const deleteFieldService = async (projectName: string, fieldName: string) => {
  const querySnapshot = await getDoc(
    doc(
      client,
      AccessesCollectionEnum.COLLECTION,
      `${projectName.toUpperCase()}`
    )
  );
  const oldData = querySnapshot.data();
  const oldArray = oldData?.list?.[0];
  delete oldArray[fieldName.toUpperCase()];
  const newArr = {
    ...oldArray,
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

export { deleteFieldService };
