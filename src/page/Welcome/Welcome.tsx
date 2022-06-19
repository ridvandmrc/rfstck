import React, { FC, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAccount } from "../../utils";
import { useMoralis } from "react-moralis";
import { Loader } from "../../components/atoms/Loader/Loader";

export const Welcome: FC = () => {
  const [walletAccount, setWalletAccount] = useState<boolean | string[]>(false);
  const { authenticate, isAuthenticated } = useMoralis();
  const [loading, setLoading] = useState(false);
  const [_, setGlobAccount] = useAccount();
  const navigate = useNavigate();
  const getAccount = async () => {
    if ((window as any).ethereum) {
      const account = (await (window as any).ethereum.request({
        method: "eth_requestAccounts",
      })) as any;
      setWalletAccount(account);
    }
  };

  useEffect(() => {
    if (walletAccount && isAuthenticated) {
      setGlobAccount((walletAccount as string[])[0] as string);
      navigate("/wallet");
    }
  }, [walletAccount, isAuthenticated]);

  return (
    <div className="welcome">
      {!loading ? (
        <button
          onClick={() => {
            getAccount();
            authenticate();
            setLoading(true);
          }}
        >
          Connect to Your Wallet
        </button>
      ) : (
        <Loader message="You have to complete authentication by MetaMask " />
      )}
    </div>
  );
};
