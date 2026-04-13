"use client";

import { useContext } from "react";
import { FriendsContext } from "./Context/FriendsProvider";

const GetContextData = () => {
  const { friends, setFriends } = useContext(FriendsContext);
  return { friends, setFriends };
};

export default GetContextData;
