import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import { app } from "./app";

const auth = getAuth(app);
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [dynamicId, setDynamicId] = useState(null);

  const googleProvider = new GoogleAuthProvider();
  const gitProvider = new GithubAuthProvider();

  // Create User
  const createUser = (email, password) => {
    setLoading(true);
    // setUpdateProfile(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // Sign In User
  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Sign In with Google
  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // Sign In with GitHub
  const signInWithGitHub = () => {
    setLoading(true);
    return signInWithPopup(auth, gitProvider);
  };

  //Sign Out
  const logOut = () => {
    signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (loggedUser) => {
      setUser(loggedUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const authInfo = { user, createUser, signInUser, signInWithGoogle, signInWithGitHub, loading, logOut, dynamicId, setDynamicId};
  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
