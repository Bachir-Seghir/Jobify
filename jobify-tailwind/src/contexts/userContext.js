import React, { useState, createContext, useEffect } from "react";

export const UserContext = createContext();

/* const CURRENT_USER = gql`
  query CURRENT_USER {
    me {
      email
      avatar
      username
      firstName
      lastName
      phone
      address
      birthday
      available
      age
      role {
        name
      }
    }
  }
`; */

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuth, setIsAuth] = useState(false);
  const [token, setToken] = useState("");
  //const [currentUser, { data }] = useLazyQuery(CURRENT_USER);

  useEffect(() => {
    const jwt = localStorage.getItem("token");
    jwt && setIsAuth(true) && setToken(jwt);
  }, []);

  useEffect(() => {
    if (!isAuth) {
      setUser(null);
    } else {
      setUser({ username: "test" });
      //currentUser();
      //data?.me && setUser(data.me);
    }
  }, [
    isAuth,
    //currentUser,
    // data
  ]);
  return (
    <UserContext.Provider
      value={{ user, setUser, isAuth, setIsAuth, token, setToken }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
