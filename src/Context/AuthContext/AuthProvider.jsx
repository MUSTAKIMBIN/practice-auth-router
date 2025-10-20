import React from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../../firebase.config";

const AuthProvider = ({ children }) => {
  const createUserByEmail = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signInByEmail = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const authInfo = { createUserByEmail, signInByEmail };
  return (
    <div>
      <AuthContext value={authInfo}>{children}</AuthContext>
    </div>
  );
};

export default AuthProvider;
