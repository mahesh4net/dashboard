import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// Cumulative earnings data
const earningsData = [
  { time: "1 AM", earnings: 5 },
  { time: "2 AM", earnings: 10 },
  { time: "3 AM", earnings: 15 },
  { time: "4 AM", earnings: 20 },
  { time: "5 AM", earnings: 30 },
  { time: "6 AM", earnings: 45 },
  { time: "7 AM", earnings: 60 },
  { time: "8 AM", earnings: 80 },
  { time: "9 AM", earnings: 100 },
  { time: "10 AM", earnings: 120 },
  { time: "11 AM", earnings: 140 },
  { time: "12 PM", earnings: 160 },
  { time: "1 PM", earnings: 170 },
  { time: "2 PM", earnings: 172 },
  { time: "3 PM", earnings: 180 },
  { time: "4 PM", earnings: 200 },
  { time: "5 PM", earnings: 260 },
  { time: "6 PM", earnings: 270 },
  { time: "7 PM", earnings: 275 },
  { time: "8 PM", earnings: 320 },
  { time: "9 PM", earnings: 340 },
  { time: "10 PM", earnings: 350 },
  { time: "11 PM", earnings: 360 },
  { time: "12 AM", earnings: 365 },
];

const EarningsChart = () => {
  // Check if data is insufficient
  const isDataInsufficient =
    earningsData.length < 2 ||
    Math.max(...earningsData.map((d) => d.earnings)) === 0;

  return (
    <>
      <div className="container">
        <p>Earnings (Today)</p>
        <h1>$365</h1>
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
            <AreaChart data={earningsData}>
              <XAxis dataKey="time" hide />
              <YAxis hide />
              <Tooltip
                formatter={(value) => `$${value}`}
                labelFormatter={(label) => `Time: ${label}`}
              />
              <Area
                type="monotone"
                dataKey="earnings"
                stroke="#4CAF50"
                fill="#A5D6A7"
              />
            </AreaChart>
          </ResponsiveContainer>
        )}
      </div>
    </>
  );
};

export default EarningsChart;
