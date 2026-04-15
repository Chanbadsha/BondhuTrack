"use client";

import toast from "react-hot-toast";
import { FaArchive } from "react-icons/fa";
import { MdDeleteForever, MdNotificationsPaused } from "react-icons/md";

const FriendInfoBtn = () => {
  const defaultClick = () => {
    toast("This feature will be available soon. Stay tuned!", {
      icon: "ℹ️",
    });
  };
  return (
    <div>
      <div
        onClick={defaultClick}
        className="bg-white py-8  mt-6  rounded-2xl shadow-sm hover:shadow-md transition p-6  border border-gray-100"
      >
        <h2 className="text-xl  flex items-center gap-1 justify-center font-bold text-[#0F172A]">
          <MdNotificationsPaused />
          Snooze 2 weeks
        </h2>
      </div>
      <div
        onClick={defaultClick}
        className="bg-white py-8  mt-2  rounded-2xl shadow-sm hover:shadow-md transition p-6  border border-gray-100"
      >
        <h2 className="text-xl  flex items-center gap-1 justify-center font-bold text-[#0F172A]">
          <FaArchive />
          Archive
        </h2>
      </div>
      <div
        onClick={defaultClick}
        className="bg-white py-8  mt-2  rounded-2xl shadow-sm hover:shadow-md transition p-6  border border-gray-100"
      >
        <h2 className="text-xl text-red-500  flex items-center gap-1 justify-center font-bold ">
          <MdDeleteForever />
          Delete
        </h2>
      </div>
    </div>
  );
};

export default FriendInfoBtn;
