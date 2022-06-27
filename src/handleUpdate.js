import {doc, updateDoc} from "firebase/firestore";
import {firestore} from "./firebase";


const handleUpdate = async () => {
    const userDoc= doc(firestore,"polls", params)
    const data = {
        question: question,
        answer: serviceList
    };
    try{

        updateDoc(userDoc,data).then(
            await new Promise(r => setTimeout(r, 5000)))
    }catch(e){
        postMessage(e)
    }

}
export default handleUpdate;