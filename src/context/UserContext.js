import React, { createContext, useContext, useState, useEffect } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userType, setUserType] = useState(null); // 'gig-worker', 'client', or null
  const [isFirstTimeUser, setIsFirstTimeUser] = useState(null); // Boolean

  useEffect(() => {
    // Retrieve from localStorage
    const storedUserType = localStorage.getItem("userType");
    console.log("Checking localStorage for userType:", storedUserType);

    if (storedUserType) {
      setUserType(storedUserType);
      setIsFirstTimeUser(false);
      console.log("User type found:", storedUserType);
    } else {
      setIsFirstTimeUser(true);
      console.log("No user type found, setting as first-time user.");
    }
  }, []);

  return (
    <UserContext.Provider value={{ userType, setUserType, isFirstTimeUser, setIsFirstTimeUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
