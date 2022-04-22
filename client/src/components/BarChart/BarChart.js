import React, { useState } from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const PriorityBarChart = ({ priorityData }) => {
  const data = [
    {
      name: "Low",
      uv: priorityData?.[0].Low,
    },
    {
      name: "Medium",
      uv: priorityData?.[0].Medium,
    },
    {
      name: "High",
      uv: priorityData?.[0].High,
    },
    {
      name: "Urgent",
      uv: priorityData?.[0].Urgent,
    },
  ];

  return (
    <>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={50}
          height={40}
          data={data}
          margin={{
            top: 24,
          }}
        >
          <Bar dataKey="uv" fill="#8884d8" barSize={80} />
          <XAxis dataKey="name" axisLine={false} tickLine={false}/>
          <YAxis />
        </BarChart>
      </ResponsiveContainer>
    </>
  );
};

export default PriorityBarChart;
