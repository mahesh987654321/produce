import axios from "axios";
import React, { useEffect, useState } from "react";
import "./DashBoard.css";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const DashBoard = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("data.json").then((element) => setData(element.data));
  }, []);
  return (
    <div className="allChart">
      <div>
        <h1>Barchat</h1>
        <BarChart width={600} height={400} data={data}>
          <Bar dataKey={"sell"} fill="#000000"></Bar>

          <XAxis dataKey={"month"}></XAxis>

          <YAxis dataKey={"sell"}></YAxis>
          <Tooltip />

          <Bar dataKey={"investment"} fill="#214354"></Bar>
          <Bar dataKey={"revenue"} fill="#546786"></Bar>
        </BarChart>
      </div>
      <div>
        <h1>LineChart</h1>
        <LineChart
          width={730}
          height={250}
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="sell" stroke="#8884d8" />
          <Line type="monotone" dataKey="month" stroke="#82ca9d" />
          <Line type="monotone" dataKey="investment" stroke="#82ca9d" />
          <Line type="monotone" dataKey="revenue" stroke="#82ca9d" />
        </LineChart>
      </div>
      <div>
        <h1>PieChart</h1>
        <PieChart width={730} height={250}>
          <Pie
            data={data}
            dataKey="month"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={50}
            fill="#8884d8"
          />
          <Pie
            data={data}
            dataKey="sell"
            nameKey="name"
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            fill="#82ca9d"
            label
          />
          <Pie
            data={data}
            dataKey="revenue"
            nameKey="name"
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            fill="#82ca9d"
            label
          />
          <Pie
            data={data}
            dataKey="investment"
            nameKey="name"
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            fill="#82ca9d"
            label
          />
        </PieChart>
      </div>
      <div>
        <h1>AreaChart</h1>
        <AreaChart
          width={730}
          height={250}
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="month"
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#colorUv)"
          />
          <Area
            type="monotone"
            dataKey="sell"
            stroke="#82ca9d"
            fillOpacity={1}
            fill="url(#colorPv)"
          />
          <Area
            type="monotone"
            dataKey="revenue"
            stroke="#82ca9d"
            fillOpacity={1}
            fill="url(#colorPv)"
          />
          <Area
            type="monotone"
            dataKey="investment"
            stroke="#82ca9d"
            fillOpacity={1}
            fill="url(#colorPv)"
          />
        </AreaChart>
      </div>
    </div>
  );
};

export default DashBoard;
