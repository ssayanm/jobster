import { Link, useRouteError } from "react-router-dom";

export default function Error() {
  const error = useRouteError();
  console.log(error);
  return (
    <div>
      <h1>Oops ! something went wrong!</h1>
      <Link to="/">back home</Link>
    </div>
  );
}
