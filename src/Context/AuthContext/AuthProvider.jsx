import React from "react";
import { AuthContext } from "./AuthContext";

const AuthProvider = ({ children }) => {
  const user = {
    name: "mustakim",
  };
  return (
    <div>
      <AuthContext value={user}>{children}</AuthContext>
    </div>
  );
};

export default AuthProvider;
