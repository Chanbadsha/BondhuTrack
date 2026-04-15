"use client";
import GetContextData from "@/app/lib/GetContextData";
import SaveData from "@/app/lib/localStorage/SaveData";
import { useEffect } from "react";

const interactions = [
  {
    id: 1,
    type: "Text",
    description: "Asked for career advice",
    date: "Jan 28, 2026",
    personName: "all",
  },
  {
    id: 2,
    type: "Call",
    description: "Industry conference meetup",
    date: "Feb 03, 2026",
    personName: "all",
  },
  {
    id: 3,
    type: "Video",
    description: "Discussed project collaboration",
    date: "Feb 10, 2026",
    personName: "all",
  },
  {
    id: 4,
    type: "Call",
    description: "Quick catch-up call",
    date: "Feb 18, 2026",
    personName: "all",
  },
  {
    id: 5,
    type: "Text",
    description: "Shared helpful resources",
    date: "Feb 25, 2026",
    personName: "all",
  },
];

const HeroSection = () => {
  const { friends } = GetContextData();
  useEffect(() => {
    SaveData("RecentInteractions", interactions);
  }, []);
  const onTrack = friends.filter(
    (friend) => friend.status === "on-track",
  ).length;
  const needAttention = friends.filter(
    (friend) => friend.status === "overdue",
  ).length;
  const Interactions = () => {
    const int = friends.length - needAttention;

    return int;
  };

  return (
    <div className="flex-1 pt-4 lg:pt-8">
      <div className=" container mx-auto border-b pb-12 border-b-gray-400">
        <div className="max-w-4xl mx-auto text-center pt-6  lg:pt-12 xl:pt-16">
          <h1 className="text-2xl md:text-3xl xl:text-5xl font-bold capitalize">
            Track your friendships with ease
          </h1>
          <p className="px-6 py-2 max-w-2xl mx-auto text-[#64748B]">
            BondhuTrack combines modern tracking with emotional value, helping
            you manage friendships with data-driven insights and simple tools.
          </p>

          <p className="my-2 text-sm text-green-700 font-medium">
            “বন্ধুত্বের যত্ন নিন, সম্পর্ক রাখুন সবসময় জীবন্ত”
          </p>

          <button className="rounded-lg relative w-48  mx-auto group-hover:rounded-xl mt-4  h-10 cursor-pointer flex items-center border border-green-500 bg-green-900 group hover:bg-green-900 active:bg-green-900 active:border-green-500">
            <span className="text-gray-200 group-hover:text-[8px]   font-semibold ml-8 transform group-hover:translate-x-20 transition-all  duration-300">
              Add A Friend
            </span>
            <span className="absolute right-0 h-full w-10 rounded-lg bg-green-900 hover:bg-green-500  flex items-center justify-center transform group-hover:translate-x-0 group-hover:w-full transition-all duration-300">
              <svg
                className="svg w-8 text-white"
                fill="none"
                height={24}
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                viewBox="0 0 24 24"
                width={24}
                xmlns="http://www.w3.org/2000/svg"
              >
                <line x1={12} x2={12} y1={5} y2={19} />
                <line x1={5} x2={19} y1={12} y2={12} />
              </svg>
            </span>
          </button>
        </div>

        {/* Connection Overview */}

        <div className="mt-14 grid grid-cols-2 px-4 xl:px-12 lg:grid-cols-4 gap-6">
          <div className="bg-white py-8  rounded-2xl shadow-sm hover:shadow-md transition p-6 text-center border border-gray-100">
            <h2 className="text-3xl font-bold text-[#0F172A]">
              {friends.length}
            </h2>
            <p className="text-[#64748B] mt-1">Total Friends</p>
          </div>
          <div className="bg-white py-8  rounded-2xl shadow-sm hover:shadow-md transition p-6 text-center border border-gray-100">
            <h2 className="text-3xl font-bold text-[#0F172A]"> {onTrack}</h2>
            <p className="text-[#64748B] mt-1">On Track</p>
          </div>
          <div className="bg-white py-8  rounded-2xl shadow-sm hover:shadow-md transition p-6 text-center border border-gray-100">
            <h2 className="text-3xl font-bold text-[#0F172A]">
              {" "}
              {needAttention}
            </h2>
            <p className="text-[#64748B] mt-1">Need Attention</p>
          </div>
          <div className="bg-white py-8  rounded-2xl shadow-sm hover:shadow-md transition p-6 text-center border border-gray-100">
            <h2 className="text-3xl font-bold text-[#0F172A]">
              {Interactions()}
            </h2>
            <p className="text-[#64748B] mt-1">Interactions This Month</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
