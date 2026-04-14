"use client";
import { InterActionContext } from "@/app/lib/Context/InterActionProvider";
import SaveData from "@/app/lib/localStorage/SaveData";
import { useContext } from "react";
import { FaVideo } from "react-icons/fa";
import { MdMessage, MdWifiCalling3 } from "react-icons/md";

const interactionDes = [
  { description: "Asked for career advice" },
  { description: "Had a quick catch-up conversation" },
  { description: "Discussed a new project idea" },
  { description: "Shared helpful learning resources" },
  { description: "Talked about weekend plans" },
  { description: "Followed up on previous discussion" },
  { description: "Checked in after a long time" },
  { description: "Discussed job opportunities" },
  { description: "Planned a meetup for next week" },
  { description: "Congratulated on recent achievement" },
  { description: "Talked about personal goals" },
  { description: "Shared an interesting article" },
  { description: "Discussed study plans together" },
  { description: "Brainstormed startup ideas" },
  { description: "Asked for technical help" },
  { description: "Provided feedback on work" },
  { description: "Talked about travel experiences" },
  { description: "Shared motivational advice" },
  { description: "Discussed upcoming events" },
  { description: "Reconnected after a long gap" },
];
const CheckIn = ({ friendInfo }) => {
  const { interactions, setInteractions } = useContext(InterActionContext);

  const getRandomDescription = () => {
    const randomIndex = Math.floor(Math.random() * interactionDes.length);
    return interactionDes[randomIndex].description;
  };
  const handleCheckIn = (action) => {
    const date = new Date().toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });

    const newInteraction = {
      id: interactions.length + 1,
      type: action,
      description: getRandomDescription(),
      date: date,
      personName: friendInfo.name,
    };
    setInteractions([...interactions, newInteraction]);
    SaveData("RecentInteractions", interactions);
  };
  return (
    <div className="bg-white py-8  mt-12  rounded-2xl shadow-sm hover:shadow-md transition p-6  border border-gray-100">
      <h2 className="text-lg lg:text-xl   font-bold text-[#5d6475]">
        Quick Check-In
      </h2>

      <div className="grid grid-cols-3 gap-2 lg:gap-6 mt-4">
        <button
          onClick={() => handleCheckIn("Call")}
          className="btn flex flex-col text-base sm:text-lg lg:text-xl h-full py-3 lg:py-6"
        >
          <MdWifiCalling3 />
          Call
        </button>
        <button
          onClick={() => handleCheckIn(" Message")}
          className="btn flex flex-col text-base sm:text-lg lg:text-xl h-full py-3 lg:py-6"
        >
          <MdMessage />
          Message
        </button>
        <button
          onClick={() => handleCheckIn("Video")}
          className="btn flex flex-col text-base sm:text-lg lg:text-xl h-full py-3 lg:py-6"
        >
          <FaVideo />
          Video
        </button>
      </div>
    </div>
  );
};

export default CheckIn;
