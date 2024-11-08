import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// Full array with 365 entries for daily downloads ranging from 100,000 to 500,000
const generateLifetimeDownloadsData = () => {
  const data = [];
  const startDate = new Date("2024-01-01");
  const endDate = new Date("2024-12-31");

  let currentDate = startDate;
  while (currentDate <= endDate) {
    const downloads =
      Math.floor(Math.random() * (150000 - 100000 + 1)) + 100000;
    data.push({
      date: currentDate.toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      }),
      downloads,
    });
    currentDate.setDate(currentDate.getDate() + 1);
  }
  return data;
};

const downloadDataLifetime = generateLifetimeDownloadsData();


export default function LifetimeDownloadsChart() {
  const totalDownloads = downloadDataLifetime.reduce(
    (sum, entry) => sum + entry.downloads,
    0
  );

  return (
    <div className="container">
      <p>Total Downloads (Lifetime)</p>
      <h1>{totalDownloads.toLocaleString()}</h1>
      <ResponsiveContainer width="100%" height={150}>
        <AreaChart data={downloadDataLifetime}>
          <XAxis dataKey="date" hide />
          <YAxis hide />
          <Tooltip
            formatter={(value) => `${value.toLocaleString()} downloads`}
            labelFormatter={(label) => `Date: ${label}`}
          />
          <Area
            type="monotone"
            dataKey="downloads"
            stroke="#2196F3"
            fill="#90CAF9"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
