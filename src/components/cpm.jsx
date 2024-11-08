import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// Average CPM data
const cpmData = [
  { time: "1 AM", cpm: 4.3 },
  { time: "2 AM", cpm: 4.2 },
  { time: "3 AM", cpm: 4.8 },
  { time: "4 AM", cpm: 4.0 },
  { time: "5 AM", cpm: 3.2 },
  { time: "6 AM", cpm: 3.5 },
  { time: "7 AM", cpm: 3.8 },
  { time: "8 AM", cpm: 4.0 },
  { time: "9 AM", cpm: 4.2 },
  { time: "10 AM", cpm: 4.5 },
  { time: "11 AM", cpm: 4.3 },
  { time: "12 PM", cpm: 4.1 },
  { time: "1 PM", cpm: 3.9 },
  { time: "2 PM", cpm: 3.7 },
  { time: "3 PM", cpm: 4.0 },
  { time: "4 PM", cpm: 4.2 },
  { time: "5 PM", cpm: 4.4 },
  { time: "6 PM", cpm: 4.5 },
  { time: "7 PM", cpm: 4.3 },
  { time: "8 PM", cpm: 4.0 },
  { time: "9 PM", cpm: 3.8 },
  { time: "10 PM", cpm: 3.2 },
  { time: "11 PM", cpm: 3.4 },
  { time: "12 AM", cpm: 3.5 },
];

const AvgCPMChart = () => {
  // Check if data is insufficient
  const isDataInsufficient =
    cpmData.length < 2 || Math.max(...cpmData.map((d) => d.cpm)) === 0;


return <>
  <div className="container">
    <p>Average CPM (Today)</p>
    <h1>$3.5</h1>

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
        <AreaChart data={cpmData}>
          <XAxis dataKey="time" hide />
          <YAxis hide />
          <Tooltip
            formatter={(value) => `$${value.toFixed(2)}`}
            labelFormatter={(label) => `Time: ${label}`}
          />
          <Area type="monotone" dataKey="cpm" stroke="#FF8C00" fill="#FFB74D" />
        </AreaChart>
      </ResponsiveContainer>
    )}
    </div>
    
  </>
};

export default AvgCPMChart;
