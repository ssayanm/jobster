import { useLoaderData } from "react-router-dom";

export default function Admin() {
  const { data } = useLoaderData();
  const { users, jobs } = data;
  console.log(users, jobs);
  return <div>Admin</div>;
}
