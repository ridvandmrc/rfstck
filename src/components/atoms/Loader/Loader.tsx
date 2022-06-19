import React, { FC } from "react";

import "./Loader.scss";

type LoaderType = {
  message: string;
};

export const Loader: FC<LoaderType> = ({ message }) => {
  return (
    <div className="loader-wrapper">
      Loading !!
      <p>{message}</p>
    </div>
  );
};
