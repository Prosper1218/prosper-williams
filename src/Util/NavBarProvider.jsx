import React, {createContext, useContext, useState} from "react";

export const navP = createContext();
const NavBarProvider = ({children}) => {
   const [Active, setActive] = useState(false);
   return (
      <div>
         <navP.Provider value={{Active, setActive}}> {children}</navP.Provider>
      </div>
   );
};

export const useNavProvider = () => {
   return useContext(navP);
};

export default NavBarProvider;
