import { getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged,signOut,createUserWithEmailAndPassword,
    signInWithEmailAndPassword } from "firebase/auth";
  import { useEffect, useState } from "react";
import firebaseInit from "../firebaseinit";
 
  firebaseInit()
  const useFirebase=()=>{
    const auth = getAuth();
    const [user,setUser]=useState({});
    const [loading, setLoading] = useState(true)
   
    const singInGoogle=()=>{
        const googleProvider = new GoogleAuthProvider();
            return signInWithPopup(auth, googleProvider)
            .finally(() => { setLoading(false) });
        
       
       }
  
  
  
  
       useEffect(() => {
       const unSubscrived= onAuthStateChanged(auth, (user) => {
          if (user) {
            setUser(user);
            
          } else {
            
          }
          setLoading(false);
        });
        return ()=>unSubscrived;
      }, [auth]);
  
  
  
  
      const logOut=()=>{
        setLoading(true);
        signOut(auth)
        .then(() => {
          setUser({});
        })
        .finally(() => setLoading(false))
    }
         
    const handleUserRegister = (email, password) => {
           return createUserWithEmailAndPassword(auth, email, password)
        .finally(() => { setLoading(false) });
      };
    
      const handleUserLogin = (email, password) => {
          return signInWithEmailAndPassword(auth, email, password)
          .finally(() => { setLoading(false) });
          
      };
        

      // const hanldeUserInfoRegister = (email) => {
      //   fetch("https://fast-cliffs-41980.herokuapp.com/adminUserInfo", {
      //     method: "POST",
      //     headers: { "content-type": "application/json" },
      //     body: JSON.stringify({ email }),
      //   })
      //     .then((res) => res.json())
      //     .then((result) => console.log(result));
      // };
  
        return {
            user,
            singInGoogle,
            logOut,
            loading,
            handleUserLogin,
            handleUserRegister,
            // hanldeUserInfoRegister

  
        }
      
  
  }
  export default useFirebase