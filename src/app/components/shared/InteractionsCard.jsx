/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { useContext, useEffect, useState } from "react";
import GetLSData from "@/app/lib/localStorage/GetLSData";
import { FaVideo } from "react-icons/fa";
import { MdMessage, MdWifiCalling3 } from "react-icons/md";
import { InterActionContext } from "@/app/lib/Context/InterActionProvider";

const InteractionsCard = ({ personName }) => {
  const [data, setData] = useState([]);

  const { interactions } = useContext(InterActionContext);

  useEffect(() => {
    if (interactions) {
      setData(interactions);
    }
  }, [interactions]);

  const sortedData = [...data].sort(
    (a, b) => new Date(b.date) - new Date(a.date),
  );

  return (
    <div>
      {sortedData.length === 0 ? (
        <div className="flex items-center justify-center py-16">
          <div className="bg-white border border-gray-100 shadow-sm rounded-xl p-10 text-center max-w-md">
            <div className="text-5xl mb-4">💬</div>

            <h2 className="text-xl font-bold text-[#0F172A]">
              No interactions found
            </h2>

            <p className="text-[#64748B] mt-2">
              Start chatting or calling your friends to see activity here.
            </p>
          </div>
        </div>
      ) : (
        sortedData.slice(0, 5).map((item) => (
          <div
            key={item.id}
            className="bg-white py-8     hover:shadow-md transition p-6   border-b-2 border-b-gray-100"
          >
            <div className="flex justify-between  items-center mb-4">
              <div className="flex items-center gap-4">
                <div className="text-4xl">
                  {item.type == "Video" ? (
                    <FaVideo />
                  ) : item.type == "Text" ? (
                    <MdMessage />
                  ) : (
                    <MdWifiCalling3 />
                  )}
                </div>
                <div>
                  <h2 className="text-xl  font-bold text-[#0F172A]">
                    {item.type}
                  </h2>
                  <p className="text-[#64748B] mt-1">{item.description}</p>
                </div>
              </div>
              <p className="text-gray-400">{item.date}</p>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default InteractionsCard;
