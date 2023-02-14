import { createContext, useEffect, useState } from "react";

import { createUserDocumentFromAuth, onAuthStateChangedListener } from "../../utils/firebase";

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user && user.uid) {
        createUserDocumentFromAuth(user.uid, user.displayName, user.email);
      }
      setCurrentUser(user);
    });

    return setCurrentUser(unsubscribe);
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
