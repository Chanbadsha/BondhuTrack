/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { useContext, useEffect, useState } from "react";
import { InterActionContext } from "../lib/Context/InterActionProvider";
import { FaVideo } from "react-icons/fa";
import { MdMessage, MdWifiCalling3 } from "react-icons/md";

const TimelinePage = () => {
  const [mounted, setMounted] = useState(false);
  const { interactions } = useContext(InterActionContext);
  const [selected, setSelected] = useState("Filter By ⬇️");
  const [filterData, setFilterData] = useState(interactions);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <p>Loading...</p>;

  const handleFilter = (filterBy) => {
    setSelected(filterBy);
    if (filterBy == "All") {
      setFilterData(interactions);
    } else {
      const data = interactions.filter((filter) => filter.type == filterBy);
      setFilterData(data);
    }
  };
  return (
    <div className="container px-4 mx-auto pt-12">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl lg:text-3xl font-bold">TimeLine</h1>

        <div className="dropdown dropdown-center">
          <div tabIndex={0} role="button" className="btn m-1">
            {selected}
          </div>
          <ul
            tabIndex="-1"
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
          >
            <li>
              <button onClick={() => handleFilter("Call")}>Call</button>
            </li>
            <li>
              <button onClick={() => handleFilter("Text")}>Text</button>
            </li>
            <li>
              <button onClick={() => handleFilter("Video")}>Video</button>
            </li>
            <li>
              <button onClick={() => handleFilter("All")}>All</button>
            </li>
          </ul>
        </div>
      </div>
      <div className="my-4">
        {filterData.length > 0 ? (
          filterData?.map((interaction) => (
            <div
              key={interaction.id}
              className="bg-white  mt-2 rounded-2xl shadow-sm hover:shadow-md transition p-6 border border-gray-100"
            >
              <div className="flex  items-center gap-4">
                <div className="text-4xl">
                  {interaction.type == "Video" ? (
                    <FaVideo />
                  ) : interaction.type == "Text" ? (
                    <MdMessage />
                  ) : (
                    <MdWifiCalling3 />
                  )}
                </div>
                <div>
                  <p className=" lg:text-xl  text-[#0F172A] capitalize">
                    {`${interaction.type} with ${interaction.personName == "all" ? "Chan Badsha" : interaction.personName} for ${interaction.description}`}
                  </p>
                  <p className="text-[#64748B] mt-1">{interaction.date}</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="flex items-center justify-center py-20">
            <div className="bg-white border border-gray-100 shadow-sm rounded-2xl p-10 text-center max-w-md w-full">
              <div className="text-5xl mb-4">📭</div>

              <h2 className="text-xl font-bold text-[#0F172A]">
                No interactions found
              </h2>

              <p className="text-[#64748B] mt-2">
                No {selected !== "Filter By ⬇️" ? selected : ""} interactions
                available. Try selecting a different filter or add new activity.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TimelinePage;
