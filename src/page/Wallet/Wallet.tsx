import React, { FC, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Wallet as WalletComponent } from "../../components/organism/Wallet/Wallet";
import { useAccount } from "../../utils";

import "./Wallet.scss";

export const Wallet: FC = () => {
  const [globalAccount, _] = useAccount();
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      !globalAccount && navigate("/");
    }, 1000);
  }, []);

  return globalAccount ? (
    <WalletComponent />
  ) : (
    <div className="authenticate-error">You have to be Authenticated !!!</div>
  );
};
