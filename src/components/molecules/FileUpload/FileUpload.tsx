import React, { FC, useState } from "react";
import { Input } from "../../atoms/Input/Input";

import "./FileUpload.scss";

type FileUploadType = {
  getImage: (image: any) => void;
};

export const FileUpload: FC<FileUploadType> = ({ getImage }) => {
  const [image, setImage] = useState();
  const [imageName, setImageName] = useState("");

  return (
    <div className="file-upload-wrapper">
      <button onClick={() => getImage(image)} className="upload-button">
        Upload
      </button>
      <div className="file-selector">
        <Input value={imageName} placeholder="Upload Image" />
        <input
          onChange={(e) => {
            setImageName((e.target.files?.[0] as any).name);
            setImage(e.target.files?.[0] as any);
          }}
          type="file"
        />
      </div>
    </div>
  );
};
