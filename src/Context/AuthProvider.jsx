import { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { auth } from "../Firebase/firebase.init";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
const provider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);

  // google login

  const googleLogin = () => {
    setLoading(true);

    return signInWithPopup(auth, provider);
  };

  // register with gmail, password

  const registerUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //   sign in user
  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // const updateUser profile

  const updateUserProfile = (profile) => {
    return updateProfile(auth.currentUser, profile);
  };

  // reset password

  const resetPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  //   logOut user

  const logOut = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => {
      unSubscribe();
    };
  }, []);

  const authInfo = {
    user,
    loading,
    registerUser,
    googleLogin,
    signInUser,
    updateUserProfile,
    logOut,
    resetPassword,
  };

  return <AuthContext value={authInfo}> {children}</AuthContext>;
};

export default AuthProvider;
