import FriendCard from "../shared/FriendCard";
import GetFriendsData from "@/app/lib/GetFriendsData";

const FriendsSection = () => {
  const friendsList = GetFriendsData();

  return (
    <div className="container pb-12 px-6 lg:px-12 mx-auto">
      <h2 className="text-xl mt-12 font-medium">
        Your Friends ({friendsList.length})
      </h2>

      {friendsList.length === 0 ? (
        <div className="mt-6 flex justify-center">
          <div className="border rounded-lg p-8 lg:py-16 text-center text-gray-500 bg-gray-50 w-full ">
            <h3 className="text-lg md:text-3xl xl:text-5xl capitalize font-semibold text-gray-700">
              No friends yet
            </h3>
            <p className="mt-2 text-sm lg:text-base">
              Start adding friends to see them here.
            </p>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-8 mt-6">
          {friendsList.map((friend) => (
            <FriendCard key={friend.id} friend={friend} />
          ))}
        </div>
      )}
    </div>
  );
};

export default FriendsSection;
