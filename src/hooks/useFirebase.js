import { useEffect, useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged,signOut, getIdToken } from "firebase/auth";
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication()
const useFirebase =()=>{
    const [user,setUser]=useState({});
    const [isLoading,setIsLoading]=useState(true);
    const [authError, setAuthError] = useState('');
    const [admin, setAdmin] = useState(false);

    const auth=getAuth();

    
    const signInUsingGoogle =()=>{
        setIsLoading(true);
        const googleProvider =new GoogleAuthProvider();
         return signInWithPopup(auth,googleProvider)
        .then(result =>{
            setUser(result.user);
        })
        .finally(()=>setIsLoading(false));
       
    }
   
    //observe whether user auth state changed or not
    useEffect( () =>{
        onAuthStateChanged(auth,(user) =>{
            if(user){
                getIdToken(user)
                .then(idToken =>localStorage.setItem('idToken',idToken))
                setUser(user);
            }
            else{
                setUser({})
            }
            setIsLoading(false);
        });
    },[])
    const logOut=()=>{
        setIsLoading(true);
        signOut(auth)
        .then(() =>{ })
        .finally(()=>setIsLoading(false));
        
    }
    return{
        user,
        isLoading,
        signInUsingGoogle,
        logOut
    }
}
export default useFirebase;