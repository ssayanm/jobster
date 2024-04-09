import propTypes from "prop-types";
import {
  ResponsiveContainer,
  AreaChart,
  CartesianGrid,
  Tooltip,
  Area,
  XAxis,
  YAxis,
} from "recharts";

export default function AreaChartComponent({ data }) {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <AreaChart data={data} margin={{ top: 50 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis allowDecimals={false} />
        <Tooltip />
        <Area type="monotone" dataKey="count" stroke="#EF70FE" fill="#CE53DF" />
      </AreaChart>
    </ResponsiveContainer>
  );
}

AreaChartComponent.propTypes = {
  data: propTypes.any,
};
