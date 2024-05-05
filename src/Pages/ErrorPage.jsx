import { useRouteError } from "react-router-dom";
import erImg from "../assets/images/error.svg";

export const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div>
      <div id="error-page">
        <h1>Oops!</h1>
        <img src={erImg} alt="" />
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
    </div>
  );
};
