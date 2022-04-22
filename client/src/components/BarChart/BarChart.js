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

  const COLORS = ["#13792B", "#007BFF", "#FF9307", "#DC3545"];

  return (
    <>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={50}
          height={40}
          data={data}
          margin={{
            top: 24,
            right: 24,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" opacity={0.8} />
          <Bar dataKey="uv" fill="#8884d8" barSize={80}>
            {data.map((priority, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % 20]} />
            ))}
          </Bar>
          <XAxis dataKey="name" stroke="#62ABE5" />
          <YAxis stroke="#62ABE5" />
        </BarChart>
      </ResponsiveContainer>
    </>
  );
};

export default PriorityBarChart;
