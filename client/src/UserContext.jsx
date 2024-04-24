import {createContext, useEffect, useState} from "react";
import axios from "axios";
import {data} from "autoprefixer";
///note--this context provider is designed to fetch user data from the server when the component mounts and make it available to its children components
 


export const UserContext = createContext({});

export function UserContextProvider({children}) {
  const [user,setUser] = useState(null);
  const [ready,setReady] = useState(false);
  useEffect(() => {
    if (!user) {
      axios.get('/profile').then(({data}) => {
        setUser(data);
        setReady(true);
      });
    }
  }, []);
  return (
    <UserContext.Provider value={{user,setUser,ready}}>
      {children}
    </UserContext.Provider>
  );
}