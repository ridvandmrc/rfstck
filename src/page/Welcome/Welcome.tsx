import React, { FC } from "react";
import { useNavigate } from "react-router-dom";

export const Welcome: FC = () => {
  const navigate = useNavigate();
  return (
    <div className="welcome">
      <button onClick={() => navigate("/wallet")}>
        Connect to Your Wallet
      </button>
    </div>
  );
};
