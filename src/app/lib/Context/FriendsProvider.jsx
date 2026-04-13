"use client";

import { createContext, useState } from "react";
import GetFriendsData from "../GetFriendsData";

export const FriendsContext = createContext([]);
const FriendsProvider = ({ children }) => {
  const friendData = GetFriendsData();

  const [friends, setFriends] = useState(friendData);
  const friendsContext = { setFriends, friends };
  return (
    <FriendsContext.Provider value={friendsContext}>
      {children}
    </FriendsContext.Provider>
  );
};

export default FriendsProvider;
