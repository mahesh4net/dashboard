import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// Full daily CPM data for October
const cpmDataMonthly = [
  { date: "October 1, 2024", cpm: 3.5 },
  { date: "October 2, 2024", cpm: 4.1 },
  { date: "October 3, 2024", cpm: 2.9 },
  { date: "October 4, 2024", cpm: 3.2 },
  { date: "October 5, 2024", cpm: 4.0 },
  { date: "October 6, 2024", cpm: 3.6 },
  { date: "October 7, 2024", cpm: 4.2 },
  { date: "October 8, 2024", cpm: 3.9 },
  { date: "October 9, 2024", cpm: 3.0 },
  { date: "October 10, 2024", cpm: 3.7 },
  { date: "October 11, 2024", cpm: 4.3 },
  { date: "October 12, 2024", cpm: 2.8 },
  { date: "October 13, 2024", cpm: 3.1 },
  { date: "October 14, 2024", cpm: 3.3 },
  { date: "October 15, 2024", cpm: 4.5 },
  { date: "October 16, 2024", cpm: 3.2 },
  { date: "October 17, 2024", cpm: 3.6 },
  { date: "October 18, 2024", cpm: 4.0 },
  { date: "October 19, 2024", cpm: 3.5 },
  { date: "October 20, 2024", cpm: 3.8 },
  { date: "October 21, 2024", cpm: 4.4 },
  { date: "October 22, 2024", cpm: 3.1 },
  { date: "October 23, 2024", cpm: 3.9 },
  { date: "October 24, 2024", cpm: 4.2 },
  { date: "October 25, 2024", cpm: 2.9 },
  { date: "October 26, 2024", cpm: 4.1 },
  { date: "October 27, 2024", cpm: 3.0 },
  { date: "October 28, 2024", cpm: 4.3 },
  { date: "October 29, 2024", cpm: 3.7 },
  { date: "October 30, 2024", cpm: 4.5 },
  { date: "October 31, 2024", cpm: 3.4 },
];

const CPMChartMonthly = () => {
  const isDataInsufficient =
    cpmDataMonthly.length < 2 ||
    Math.max(...cpmDataMonthly.map((d) => d.cpm)) === 0;

  return (
    <div className="container">
      <p>Average CPM (October)</p>
      <h1>$3.2</h1>
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
          <AreaChart data={cpmDataMonthly}>
            <XAxis dataKey="date" hide />
            <YAxis hide />
            <Tooltip
              formatter={(value) => `$${value} CPM`}
              labelFormatter={(label) => `Date: ${label}`}
            />
            <Area
              type="monotone"
              dataKey="cpm"
              stroke="#FFA726"
              fill="#FFCC80"
            />
          </AreaChart>
        </ResponsiveContainer>
      )}
    </div>
  );
};

export default CPMChartMonthly;
