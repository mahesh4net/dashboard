import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// Full array with 365 entries for daily CPM values ranging from $2 to $5
const generateLifetimeCPMData = () => {
  const data = [];
  const startDate = new Date("2024-01-01");
  const endDate = new Date("2024-12-31");

  let currentDate = startDate;
  while (currentDate <= endDate) {
    const cpm = (Math.random() * (5 - 2) + 2).toFixed(2); // Random CPM between $2 and $5
    data.push({
      date: currentDate.toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      }),
      cpm: parseFloat(cpm),
    });
    currentDate.setDate(currentDate.getDate() + 1);
  }
  return data;
};


const cpmDataLifetime = generateLifetimeCPMData();

export default function LifetimeCPMChart() {
  const averageCPM = (
    cpmDataLifetime.reduce((sum, entry) => sum + entry.cpm, 0) /
    cpmDataLifetime.length
  ).toFixed(2);

  return (
    <div className="container">
      <p>Average CPM (Lifetime)</p>
      <h1>${averageCPM}</h1>
      <ResponsiveContainer width="100%" height={150}>
        <AreaChart data={cpmDataLifetime}>
          <XAxis dataKey="date" hide />
          <YAxis hide />
          <Tooltip
            formatter={(value) => `$${value.toFixed(2)}`}
            labelFormatter={(label) => `Date: ${label}`}
          />
          <Area type="monotone" dataKey="cpm" stroke="#FF9800" fill="#FFE0B2" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
