import React, { FC, useState } from "react";
import { Card } from "../../atoms/Card/Card";
import { FileUpload } from "../../molecules/FileUpload/FileUpload";
import { Input } from "../../atoms/Input/Input";

import "./Wallet.scss";
import { MetaData } from "../../molecules/MetaData/MetaData";
import {
  MetaDataType,
  useAccount,
  mainMint,
  uploadImage,
  uploadMetaData,
} from "../../../utils";
import { useNavigate } from "react-router-dom";
import { Loader } from "../../atoms/Loader/Loader";

export const Wallet: FC = () => {
  const [nftName, setNftName] = useState<string>("");
  const [image, setImage] = useState();
  const [metaDatas, setMetaDatas] = useState<MetaDataType[]>();
  const [amount, setAmount] = useState<string>("");
  const [error, setError] = useState(false);
  const [_, setGlobalAccount] = useAccount();
  const navigate = useNavigate();
  const [loadingMessage, setLoadingMessage] = useState("");

  const mintAction = async () => {
    if (!nftName || !image) {
      setError(true);
    } else {
      setLoadingMessage("Image Uploading");
      const imageUrl = await uploadImage(image);
      setLoadingMessage("Image Uploaded, now uploading meta Data");

      const jsonUrl = await uploadMetaData(
        {
          name: nftName,
          imageUrl: imageUrl,
          amount: amount,
        },
        metaDatas
      );

      setLoadingMessage("Minting NFT");
      mainMint(jsonUrl);
      setTimeout(() => {
        setLoadingMessage("");
      }, 3000);
      setError(false);
    }
  };

  return !loadingMessage ? (
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
              <img
                width="100"
                height="100"
                src={URL.createObjectURL(image)}
                alt="img"
              />
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

      <button
        className="logout"
        onClick={() => {
          setGlobalAccount("");
          navigate("/");
        }}
      >
        X
      </button>

      {error && (
        <div className="error">
          <p>Name section should be filled !!</p>
          <p>Image should be uploaded !!</p>
        </div>
      )}
    </div>
  ) : (
    <Loader message={loadingMessage} />
  );
};
