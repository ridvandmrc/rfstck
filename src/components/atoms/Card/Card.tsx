import React, { FC, ReactNode } from "react";

import "./Card.scss";

type CardType = {
  children: ReactNode;
  header: string;
};

export const Card: FC<CardType> = ({ children, header }) => {
  return (
    <div className="card-wrapper">
      <label className="header">{header}</label>
      {children}
    </div>
  );
};
