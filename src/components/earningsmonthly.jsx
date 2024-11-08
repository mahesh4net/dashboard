import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// Full daily earnings data for October
const earningsDataMonthly = [
  { date: "October 1, 2024", earnings: 250 },
  { date: "October 2, 2024", earnings: 300 },
  { date: "October 3, 2024", earnings: 150 },
  { date: "October 4, 2024", earnings: 400 },
  { date: "October 5, 2024", earnings: 320 },
  { date: "October 6, 2024", earnings: 220 },
  { date: "October 7, 2024", earnings: 280 },
  { date: "October 8, 2024", earnings: 360 },
  { date: "October 9, 2024", earnings: 410 },
  { date: "October 10, 2024", earnings: 290 },
  { date: "October 11, 2024", earnings: 180 },
  { date: "October 12, 2024", earnings: 260 },
  { date: "October 13, 2024", earnings: 150 },
  { date: "October 14, 2024", earnings: 210 },
  { date: "October 15, 2024", earnings: 380 },
  { date: "October 16, 2024", earnings: 170 },
  { date: "October 17, 2024", earnings: 450 },
  { date: "October 18, 2024", earnings: 230 },
  { date: "October 19, 2024", earnings: 120 },
  { date: "October 20, 2024", earnings: 500 },
  { date: "October 21, 2024", earnings: 330 },
  { date: "October 22, 2024", earnings: 280 },
  { date: "October 23, 2024", earnings: 470 },
  { date: "October 24, 2024", earnings: 310 },
  { date: "October 25, 2024", earnings: 350 },
  { date: "October 26, 2024", earnings: 230 },
  { date: "October 27, 2024", earnings: 190 },
  { date: "October 28, 2024", earnings: 420 },
  { date: "October 29, 2024", earnings: 270 },
  { date: "October 30, 2024", earnings: 310 },
  { date: "October 31, 2024", earnings: 380 },
];

const EarningsChartMonthly = () => {
  const totalEarnings = earningsDataMonthly.reduce(
    (sum, entry) => sum + entry.earnings,
    0
  );
  const isDataInsufficient =
    earningsDataMonthly.length < 2 ||
    Math.max(...earningsDataMonthly.map((d) => d.earnings)) === 0;

  return (
    <div className="container">
      <p>Total Earnings (October)</p>
      <h1>${totalEarnings}</h1>
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
          <AreaChart data={earningsDataMonthly}>
            <XAxis dataKey="date" hide />
            <YAxis hide />
            <Tooltip
              formatter={(value) => `$${value}`}
              labelFormatter={(label) => `Date: ${label}`}
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
  );
};

export default EarningsChartMonthly;
