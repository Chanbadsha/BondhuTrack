import CheckIn from "@/app/components/shared/CheckIn";
import FriendInfoBtn from "@/app/components/shared/FriendInfoBtn";
import InteractionsCard from "@/app/components/shared/InteractionsCard";
import GetFriendsData from "@/app/lib/GetFriendsData";
import Image from "next/image";
import toast from "react-hot-toast";

import { FaArchive, FaVideo } from "react-icons/fa";
import { LuHistory } from "react-icons/lu";
import { MdDeleteForever, MdNotificationsPaused } from "react-icons/md";

const FriendDetailsPage = async ({ params }) => {
  const { friendId } = await params;
  const friends = GetFriendsData();
  const friend = friends.find((friend) => friend.id == friendId);
  const {
    id,
    name,
    picture,
    days_since_contact,
    status,
    tags,
    goal,
    next_due_date,
    email,
  } = friend;

  const formatted = new Date(next_due_date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  const defaultClick = () => {
    toast("This feature will be available soon. Stay tuned!", {
      icon: "ℹ️",
    });
  };

  return (
    <div className="bg-base-300 pb-12  px-0">
      <div className="grid gap-y-12 md:gap-y-0   lg:container  sm:px-4 pt-12 mx-auto grid-cols-1 sm:grid-cols-8  w-full min-h-screen">
        {/* Friend Info Card */}
        <div className=" sm:col-span-3 xl:col-span-2 px-12  sm:px-0">
          <div className="card   bg-white py-6 shadow-sm">
            <figure className=" ">
              <Image
                src={picture}
                alt={`Picture of ${name}`}
                width={120}
                height={120}
                // className="rounded-full"
                className={` p-1 border-y-3 rounded-full ${status == "overdue" ? "border-y-red-500" : status == "almost due" ? "border-y-[#EFAD44]" : "border-y-green-700"}`}
              ></Image>
            </figure>
            <div className="card-body px-0 w-full items-center text-center">
              <h2 className="card-title  ">{name}</h2>
              <p>{days_since_contact}d Ago</p>
              <p
                className={` capitalize text-white px-4 py-2 font-semibold rounded-2xl ${status == "overdue" ? "bg-red-400" : status == "almost due" ? "bg-[#EFAD44]" : "bg-green-900"}`}
              >
                {status}
              </p>
              <div className="flex gap-2">
                {tags.map((tag, ind) => (
                  <p
                    className="bg-green-200 capitalize font-semibold sm:text-xs md:text-base lg:text-xs xl:text-base  flex  items-center py-2 rounded-2xl px-4"
                    key={ind}
                  >
                    {tag}
                  </p>
                ))}
              </div>
              <p>
                <span className="font-semibold">Email: </span>
                {email}
              </p>
            </div>
          </div>
          {/* Friend Info btn */}
          <FriendInfoBtn />
        </div>
        {/* Friend Details Section */}
        <div className="  sm:col-span-5  xl:col-span-6 px-4 xl:px-12">
          {/* Connection Overview */}
          <div className=" grid grid-cols-3 gap-2 xl:gap-6">
            <div className="bg-white py-8  rounded-2xl shadow-sm hover:shadow-md transition xl:px-6 text-center border border-gray-100">
              <h2 className="text-xl sm:text-base md:text-xl lg:text-2xl xl:text-3xl font-bold text-[#0F172A]">
                {days_since_contact}
              </h2>
              <p className="text-[#64748B] mt-1 text-lg sm:text-base px-1">
                Days Since Contact
              </p>
            </div>
            <div className="bg-white py-8  rounded-2xl shadow-sm hover:shadow-md transition xl:px-6 text-center border border-gray-100">
              <h2 className="text-xl sm:text-base md:text-xl lg:text-2xl xl:text-3xl font-bold text-[#0F172A]">
                {goal}
              </h2>
              <p className="text-[#64748B] mt-1 text-lg sm:text-base px-1">
                Goal (Days)
              </p>
            </div>
            <div className="bg-white py-8  rounded-2xl shadow-sm hover:shadow-md transition xl:px-6 text-center border border-gray-100">
              <h2 className="text-xl sm:text-base md:text-xl lg:text-2xl xl:text-3xl font-bold text-[#0F172A]">
                {formatted}
              </h2>
              <p className="text-[#64748B] mt-1 text-lg sm:text-base px-1">
                Next Due
              </p>
            </div>
          </div>

          {/* Relationship Goal */}
          <div className="bg-white py-8  mt-12  rounded-2xl shadow-sm hover:shadow-md transition p-6  border border-gray-100">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#0F172A]">
                Relationship Goal
              </h2>
              <button className="btn">Edit</button>
            </div>
            <p className="text-[#64748B] mt-1">
              Connect every <span className="font-bold">{goal} days</span>
            </p>
          </div>

          {/* Quick Check-In */}
          <CheckIn friendInfo={friend} />

          {/* Recent Interactions */}
          <div className="mt-6 bg-white        ">
            <div className="flex justify-between items-center pb-0 p-6 ">
              <p className="font-semibold lg:text-2xl text-[#5d6475]">
                Recent Interactions
              </p>
              <button className="btn">
                <LuHistory />
                Full History
              </button>
            </div>
            <InteractionsCard personName={name}></InteractionsCard>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendDetailsPage;
