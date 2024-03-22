import propTypes from "prop-types";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export default function BarChartComponent({ data }) {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data} margin={{ top: 50 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis allowDecimals={false} />
        <Tooltip />
        <Bar type="monotone" dataKey="count" stroke="#2cb1bc" fill="#bef8fd" />
      </BarChart>
    </ResponsiveContainer>
  );
}

BarChartComponent.propTypes = {
  data: propTypes.array,
};
