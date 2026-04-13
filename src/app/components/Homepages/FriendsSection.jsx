"use client";
import { FriendsContext } from "@/app/lib/Context/FriendsProvider";
import GetContextData from "@/app/lib/GetContextData";
import { useContext } from "react";
import FriendCard from "../shared/FriendCard";

const FriendsSection = () => {
  const { friends, setFriends } = GetContextData();

  return (
    <div className="container mx-auto">
      <h2 className="text-xl mt-12 font-medium">
        Your Friends ({friends.length})
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-8 xl:gap-x-20 mt-6">
        {friends.map((friend) => (
          <FriendCard key={friend.id} friend={friend} />
        ))}
      </div>
    </div>
  );
};

export default FriendsSection;
