import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import { today } from "../../app/data.js";

const Graph = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart
        width={500}
        height={400}
        data={today}
        margin={{
          top: 24,
          right: 30,
          left: 0,
          bottom: 12,
        }}
      >
        <defs>
          <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#2451B7" stopOpacity={0.2} />
            <stop offset="75%" stopColor="#2451B7" stopOpacity={0.2} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" opacity={0.1} vertical={false} />
        <XAxis dataKey="name" tickLine={false} stroke="" />
        <YAxis axisLine={false} tickLine={false} />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="resolved"
          stroke="#2451B7"
          fill="#EFF7FE"
          dot={true}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default Graph;
