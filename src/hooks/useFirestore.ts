import { collection, getDocs } from "firebase/firestore";
import { FC, ReactFragment, useEffect, useState } from "react";
import { db } from "../config/firebase";
import { ProjectProps } from "../components/project/Project";


const useFirestore = <T>(collectionName : string) => {
    const [collectionList, setCollectionList] = useState<T[]>([]);
    const [loading, setLoading] = useState(true);

    const collectionRef = collection(db, collectionName);

    useEffect(() => {
        const getCollectionList = async () => {
            try{
                const data = await getDocs(collectionRef);

                const filteredData : T[] = data.docs.map((doc) => ({
                    ...doc.data() as T,
                    id: doc.id,
                }));

                setCollectionList(filteredData);
                setLoading(false);
                console.log(filteredData);
            }catch(err){
                console.log(err);
            }
        } 

        getCollectionList();
    },[]);


    return {collectionList,loading};
}

export default useFirestore;