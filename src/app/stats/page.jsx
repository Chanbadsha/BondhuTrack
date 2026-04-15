"use client";

import {
  Pie,
  PieChart,
  ResponsiveContainer,
  Cell,
  Legend,
  Tooltip,
} from "recharts";
import { useContext } from "react";
import { InterActionContext } from "../lib/Context/InterActionProvider";

const StatsPage = () => {
  const { interactions } = useContext(InterActionContext);

  const chartData = Object.values(
    (interactions || []).reduce((acc, item) => {
      if (!acc[item.type]) {
        acc[item.type] = { name: item.type, value: 0 };
      }
      acc[item.type].value += 1;
      return acc;
    }, {}),
  );
  const hasData = chartData.length > 0;
  const COLORS = {
    Text: "#3B82F6",
    Call: "#F59E0B",
    Video: "#10B981",
  };

  return (
    <div className="bg-base-300 flex flex-col flex-1">
      <div className="container max-w-7xl px-4 mx-auto mb-12 pt-12">
        <h1 className="text-2xl lg:text-3xl xl:text-5xl font-bold">
          Friendship Analytics
        </h1>
        <div className="bg-white max-w-7xl mb-4 mx-auto mt-4 rounded-lg py-4">
          <p className="px-4 mb-4 text-lg font-semibold">By Interaction Type</p>

          {!hasData ? (
            //  No Data Card
            <div className="flex flex-col items-center justify-center h-[300px] text-center">
              <h2 className="text-xl font-semibold text-gray-700">
                No Data Found
              </h2>
              <p className="text-gray-500 mt-2">
                No interactions available to display analytics.
              </p>
            </div>
          ) : (
            //  Chart
            <ResponsiveContainer width="100%" height={400}>
              <PieChart>
                <Pie
                  data={chartData}
                  dataKey="value"
                  nameKey="name"
                  innerRadius={80}
                  outerRadius={120}
                  paddingAngle={5}
                >
                  {chartData.map((entry, index) => (
                    <Cell key={index} fill={COLORS[entry.name]} />
                  ))}
                </Pie>

                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          )}
        </div>
      </div>
    </div>
  );
};

export default StatsPage;
