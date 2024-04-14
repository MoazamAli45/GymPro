import { app } from "../firbase";
import React, { createContext, useContext, useState, useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { get } from "firebase/database";
const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const auth = getAuth(app);

  const storeUserData = async (user) => {
    try {
      await AsyncStorage.setItem("user", JSON.stringify(user));
      setCurrentUser(user);
    } catch (error) {
      console.error("Error saving user data to AsyncStorage:", error);
    }
  };

  const getUserData = async () => {
    try {
      const user = await AsyncStorage.getItem("user");
      if (user !== null) {
        setCurrentUser(JSON.parse(user));
      }
    } catch (error) {
      console.error("Error getting user data from AsyncStorage:", error);
    }
  };

  useEffect(() => {
    getUserData();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        storeUserData(user);
      } else {
        setCurrentUser(null);
      }
    });

    return unsubscribe;
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </AuthContext.Provider>
  );
};
