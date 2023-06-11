import { doc, collection, writeBatch, query, getDocs } from "firebase/firestore";
import { db } from "../index";

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
  // Use this function only when adding more category items to the store to the
  const batch = writeBatch(db);
  const collectionRef = collection(db, collectionKey);

  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  });

  await batch.commit();
};

export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(db, "categories");
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map((doc) => doc.data());
};
