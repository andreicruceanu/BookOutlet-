import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const UserContext = createContext({});

export function UserContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const currentUser = localStorage.getItem("currentUser");

  useEffect(() => {
    if (currentUser && currentUser !== "null") {
      axios.get("/api/profile").then(({ data }) => {
        setUser(data);
      });
    }
  }, [currentUser]);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children};
    </UserContext.Provider>
  );
}
