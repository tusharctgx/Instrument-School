import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { app } from "../firebase/firebase.config";



export const AuthContext = createContext(null);
const auth = getAuth(app);
const AuthProvider = ({Children}) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createuser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  }


  const signUp = (email, password) => {
      setLoading(true);
      return signInWithEmailAndPassword(email, password);
  }

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  }
  useEffect(() =>{
      const unsubscribe = onAuthStateChanged(auth, currentUser => {
        setUser(currentUser);
        console.log('current user', currentUser);
      });
      return () => {
        return unsubscribe();
      }
  }, [])
  

  const authInfo = {
    user,
    loading,
    createuser,
    signUp,
    logOut
  }
  return (
    <AuthContext.Provider value={authInfo}>
      {Children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;