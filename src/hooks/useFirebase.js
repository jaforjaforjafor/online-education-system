import { useEffect, useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged,signOut, getIdToken, createUserWithEmailAndPassword, signInWithEmailAndPassword,updateProfile, } from "firebase/auth";
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication()
const useFirebase =()=>{
    const [user,setUser]=useState({});
    const [isLoading,setIsLoading]=useState(true);
    const [authError, setAuthError] = useState('');
    const [admin, setAdmin] = useState(false);
    const [token,setToken]=useState('');

    const auth=getAuth();
    //registration process
    const registerUser=(email,password,name,history)=>{
        setIsLoading(true);
        createUserWithEmailAndPassword(auth,email,password)
        .then((userCredential) => {
            // Signed in 
            setAuthError('');
            const newUser={email, displayName:name}
            setUser(newUser);
            //save user to the database
            saveUser(email,name,'POST');
            //send name after firebase creation
            updateProfile(auth.currentUser, {
                displayName: name
              }).then(() => {
                // Profile updated!
                // ...
              }).catch((error) => {
               
              });
              
            history.replace('/');
            // ...
          })
          .catch((error) => {
            
            setAuthError (error.message);
            // ..
          })
          .finally(()=>setIsLoading(false));
    }
    const loginUser=(email,password,location,history)=>{
        setIsLoading(true);

        signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const destination=location?.state?.from || '/';
    history.replace(destination);
    // Signed in 
    setAuthError('');  
      // ...
  })
  .catch((error) => {
    
    setAuthError (error.message);

  })
  .finally(()=>setIsLoading(false));

    }
    
    const signInUsingGoogle =(location,history)=>{
        const googleProvider=new GoogleAuthProvider();
        setIsLoading(true);
         signInWithPopup(auth,googleProvider)
        .then(result =>{
            
            const user=result.user;
             //save google user to the database
             saveUser(user.email,user.displayName,'PUT' );
            setAuthError('');
            const destination=location?.state?.from || '/';
            history.replace(destination);
        })
        .catch((error)=>{
            setAuthError(error.message)
        })
        .finally(()=>setIsLoading(false));
       
    }
   
    //observe whether user auth state changed or not
    useEffect( () =>{
        const unsubscribe=onAuthStateChanged(auth,(user) =>{
            if(user){
                setUser(user);
                getIdToken(user)
                .then(idToken =>{setToken(idToken);
                })
                
            }
            else{
                setUser({})
            }
            setIsLoading(false);
            return()=>unsubscribe;

            
        });
    },[auth]);
    useEffect(()=>{
        fetch(`https://pure-oasis-80814.herokuapp.com/users/${user.email}`)
        .then(res =>res.json())
        .then(data =>setAdmin(data.admin))
    },[user.email])
    const logOut=()=>{
        setIsLoading(true);
        
        signOut(auth)
        .then(() =>{
            //sign-out successful
         }).catch((error)=>{
            //an error happend
        })
        .finally(()=>setIsLoading(false));
        
    };
    const saveUser=(email,displayName, method)=>{
        const user={email,displayName};
       fetch('https://pure-oasis-80814.herokuapp.com/users',{
        method: method,
        headers:{
            'content-type': 'application/json'
        },
        body:JSON.stringify(user)
       })
       .then()
    };
   
   

    return{
        user,
        admin,
        token,
        registerUser,
        authError,
        isLoading,
        loginUser,
        signInUsingGoogle,
        logOut
    }
}
export default useFirebase;