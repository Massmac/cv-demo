import "./MainPage.css";
import react, {useEffect, useState} from "react";
import { auth, db } from "../auth/Firebase";
import { doc, getDoc } from "firebase/firestore";

 
export const MainPage = () => {
    const [userDetails, setUserDetails] = useState(null)
    const fetchUserData = async () => {
        auth.onAuthStateChanged(async (user) => {
            console.log(user);
            const docRef = doc(db, "Users", user.uid);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()){
                setUserDetails(docSnap.data());
                console.log(docSnap.data);
            }else{
                console.log("failed")
            }
        });
    };
    useEffect(()=> {
        fetchUserData();
    }, []);
    return (
       <div className="main-container" > 
        {userDetails ? (  
            <h3 className="user-d"> Welcome {userDetails.lastName}</h3>

        ) :(

            <p>Loading.... </p>
        )} 
       </div>
          
    );
};