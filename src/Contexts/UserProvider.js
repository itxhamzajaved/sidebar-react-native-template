import React, {createContext, useEffect, useMemo, useState} from 'react';

export const UserContext = createContext();

const UserProvider = props => {
  const [userDetails, setUserDetails] = useState({});

  return (
    <UserContext.Provider
      value={{
        userDetails,
        setUserDetails,
      }}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserProvider;
