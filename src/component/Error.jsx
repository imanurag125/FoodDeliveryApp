import React from "react";
import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div className="error__component">
      <h1 className="error__heading">Oops!</h1>
      <p>Sorry,an unexpected error has occured</p>
      <p className="error--reason">
        {error.status} {error.statusText}
      </p>
    </div>
  );
};

export default Error;
