"use client";
import { createContext, useState } from "react";
import GetLSData from "../localStorage/GetLSData";

export const InterActionContext = createContext();
const InterActionProvider = ({ children }) => {
  const interaction = GetLSData("RecentInteractions") || [];

  const [interactions, setInteractions] = useState(interaction);

  return (
    <InterActionContext.Provider value={{ interactions, setInteractions }}>
      {children}
    </InterActionContext.Provider>
  );
};

export default InterActionProvider;
