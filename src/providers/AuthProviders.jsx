import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";

import axios from "axios";
import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
//create context
export const AuthContext = createContext();
// firebase
const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();

const AuthProviders = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // register user
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // login user
  const logInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // update profile (name & picture )
  const updateUser = (currentUser, userName, profile_picture) => {
    return updateProfile(currentUser, {
      displayName: userName,
      photoURL: profile_picture,
    });
  };

  // social login

  const loginWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // log out user
  const logOutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  //current user is by setting an observer on the Auth object
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log("auth sate change ", currentUser);

      // get  and set token
      if (currentUser) {
        // fetch user korte partam but axios user simple because method header diye hoi na and json e convert korte hoina
        axios.post(`http://localhost:5000/jwt`,{ email: currentUser.email })
          .then((data) => {
            localStorage.setItem("access_token_bistro_boss", data.data.token);
            setLoading(false);
          });
      } else {
        localStorage.removeItem("access_token_bistro_boss");
      }

     
    });

    return () => {
      unsubscribe();
    };
  }, []);

  // data pass
  const authInfo = {
    user,
    loading,
    createUser,
    logInUser,
    updateUser,
    logOutUser,
    loginWithGoogle,
  };

  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProviders;
