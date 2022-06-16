import React, { FC, useState } from "react";
import { Card } from "../../atoms/Card/Card";
import { FileUpload } from "../../molecules/FileUpload/FileUpload";
import { Input } from "../../atoms/Input/Input";

import "./Wallet.scss";
import { MetaData } from "../../molecules/MetaData/MetaData";
import { MetaDataType } from "../../../utils";

export const Wallet: FC = () => {
  const [nftName, setNftName] = useState<string>("");
  const [image, setImage] = useState("");
  const [metaDatas, setMetaDatas] = useState<MetaDataType[]>();
  const [amount, setAmount] = useState<string>("");
  const [error, setError] = useState(false);

  const mintAction = () => {
    if (!nftName || !image) {
      setError(true);
    } else {
      console.log("nft name: ", nftName);
      console.log("datas: ", metaDatas);
      console.log("Amount: ", amount);
      setError(false);
    }
  };

  return (
    <div className="wallet-wrapper">
      <Card header="General Info">
        <div className="general-info">
          <div className="info-content">
            <Input
              label="Name"
              value={nftName}
              inputChange={(data) => setNftName(data)}
              placeholder="NFT Name *"
              required
              error={error}
            />
            <FileUpload getImage={(imagePath) => setImage(imagePath)} />
          </div>
          <div className="image">
            {!image ? (
              <div className="image-placeholder" />
            ) : (
              <img width="100" height="100" src={image} alt="img" />
            )}
          </div>
        </div>
      </Card>

      <MetaData getMetaData={(metaData) => setMetaDatas(metaData)} />

      <Card header="Price">
        <Input
          label="Amount"
          placeholder="Amount"
          value={amount}
          inputChange={(data) => setAmount(data)}
        />
      </Card>
      <button className="mint-button" onClick={mintAction}>
        Mint
      </button>

      {error && (
        <div className="error">
          <p>Name section should be filled !!</p>
          <p>Image should be uploaded !!</p>
        </div>
      )}
    </div>
  );
};
