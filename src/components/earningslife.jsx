import React from "react";
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const generateLifetimeEarningsData = () => {
  const data = [];
  const startDate = new Date("2024-01-01");
  const endDate = new Date("2024-12-31");

  let currentDate = startDate;
  while (currentDate <= endDate) {
    const earnings = Math.floor(Math.random() * (500 - 100 + 1)) + 100; // Random earnings between $100 and $500
    data.push({
      date: currentDate.toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      }),
      earnings,
    });
    currentDate.setDate(currentDate.getDate() + 1);
  }
  return data;
};

const earningsDataLifetime = generateLifetimeEarningsData();

export default function LifetimeEarningsChart() {
  const totalEarnings = earningsDataLifetime.reduce((sum, entry) => sum + entry.earnings, 0);

  return (
    <div className="container">
      <p>Total Earnings (Lifetime)</p>
      <h1>${totalEarnings.toLocaleString()}</h1>
      <ResponsiveContainer width="100%" height={150}>
        <AreaChart data={earningsDataLifetime}>
          <XAxis dataKey="date" hide />
          <YAxis hide />
          <Tooltip formatter={(value) => `$${value}`} labelFormatter={(label) => `Date: ${label}`} />
          <Area type="monotone" dataKey="earnings" stroke="#4CAF50" fill="#A5D6A7" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
