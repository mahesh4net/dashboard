import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// Cumulative downloads data
const downloadData = [
  { time: "1 AM", downloads: 2000 },
  { time: "2 AM", downloads: 2500 },
  { time: "3 AM", downloads: 3500 },
  { time: "4 AM", downloads: 4200 },
  { time: "5 AM", downloads: 10000 },
  { time: "6 AM", downloads: 12000 },
  { time: "7 AM", downloads: 15000 },
  { time: "8 AM", downloads: 25000 },
  { time: "9 AM", downloads: 28000 },
  { time: "10 AM", downloads: 34000 },
  { time: "11 AM", downloads: 38200 },
  { time: "12 PM", downloads: 40000 },
  { time: "1 PM", downloads: 42000 },
  { time: "2 PM", downloads: 45000 },
  { time: "3 PM", downloads: 46500 },
  { time: "4 PM", downloads: 50200 },
  { time: "5 PM", downloads: 55000 },
  { time: "6 PM", downloads: 70000 },
  { time: "7 PM", downloads: 85400 },
  { time: "8 PM", downloads: 90000 },
  { time: "9 PM", downloads: 95000 },
  { time: "10 PM", downloads: 99200 },
  { time: "11 PM", downloads: 102000 },
  { time: "12 AM", downloads: 104000 },
];

const TotalDownloadsChart = () => {
  // Check if data is insufficient
  const isDataInsufficient =
    downloadData.length < 2 ||
    Math.max(...downloadData.map((d) => d.downloads)) === 0;

  return (
    <div className="container">
      <p>Total Downloads (Today)</p>
      <h1>104000</h1>
      {isDataInsufficient ? (
        <div
          style={{
            height: 150,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <p>Not enough data</p>
        </div>
      ) : (
        <ResponsiveContainer width="100%" height={150}>
          <AreaChart data={downloadData}>
            <XAxis dataKey="time" hide />
            <YAxis hide />
            <Tooltip
              formatter={(value) => `${value} downloads`}
              labelFormatter={(label) => `Time: ${label}`}
            />
            <Area
              type="monotone"
              dataKey="downloads"
              stroke="#2196F3"
              fill="#90CAF9"
            />
          </AreaChart>
        </ResponsiveContainer>
      )}
    </div>
  );
};

export default TotalDownloadsChart;
