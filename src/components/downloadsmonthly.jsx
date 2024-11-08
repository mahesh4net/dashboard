import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const downloadDataMonthly = [
  { date: "october 1, 2024", downloads: 120800 },
  { date: "october 2, 2024", downloads: 130800 },
  { date: "october 3, 2024", downloads: 140800 },
  { date: "october 4, 2024", downloads: 110800 },
  { date: "october 5, 2024", downloads: 140850 },
  { date: "october 6, 2024", downloads: 154860 },
  { date: "october 7, 2024", downloads: 145000 },
  { date: "october 8, 2024", downloads: 144000 },
  { date: "october 9, 2024", downloads: 90000 },
  { date: "october 10, 2024", downloads: 125050 },
  { date: "october 12, 2024", downloads: 130800 },
  { date: "october 13, 2024", downloads: 135800 },
  { date: "october 14, 2024", downloads: 120800 },
  { date: "october 15, 2024", downloads: 120800 },
  { date: "october 16, 2024", downloads: 120800 },
  { date: "october 17, 2024", downloads: 120800 },
  { date: "october 18, 2024", downloads: 145000 },
  { date: "october 19, 2024", downloads: 120800 },
  { date: "october 20, 2024", downloads: 145000 },
  { date: "october 21, 2024", downloads: 80000 },
  { date: "october 22, 2024", downloads: 120800 },
  { date: "october 23, 2024", downloads: 120800 },
  { date: "october 24, 2024", downloads: 145000 },
  { date: "october 25, 2024", downloads: 120800 },
  { date: "october 26, 2024", downloads: 130800 },
  { date: "october 27, 2024", downloads: 120800 },
  { date: "october 28, 2024", downloads: 110800 },
  { date: "october 29, 2024", downloads: 130800 },
  { date: "october 30, 2024", downloads: 140800 },
  { date: "october 31, 2024", downloads: 150500 },
];

export default function DownloadsMonthly() {
  const isDataInsufficient =
    downloadDataMonthly.length < 2 ||
    Math.max(...downloadDataMonthly.map((d) => d.downloads)) === 0;

  return (
    <>
      <div className="container">
        <p>Total Downloads (october)</p>
        <h1>4852080</h1>
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
            <AreaChart data={downloadDataMonthly}>
              <XAxis dataKey="date" hide></XAxis>
              <YAxis hide></YAxis>
              <Tooltip
                formatter={(value) => `${value} downloads`}
                labelFormatter={(label) => `Date: ${label}`}
              ></Tooltip>
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
    </>
  );
}
