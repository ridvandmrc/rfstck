import React, { FC, useEffect, useState } from "react";
import { MetaDataType } from "../../../utils";
import { Card } from "../../atoms/Card/Card";
import { Input } from "../../atoms/Input/Input";

import "./MetaData.scss";

type MetaDataPropType = {
  getMetaData: (arg0: MetaDataType[]) => void;
};

export const MetaData: FC<MetaDataPropType> = ({ getMetaData }) => {
  const [metaDatas, setMetaDatas] = useState<MetaDataType[]>([]);
  const [error, setError] = useState(false);

  const [newData, setNewData] = useState<MetaDataType>({ key: "", value: "" });

  useEffect(() => {
    getMetaData?.(metaDatas);
  }, [metaDatas]);

  const addData = () => {
    if (newData.key && newData.value) {
      setMetaDatas(() => [...metaDatas, { ...newData }]);
      setNewData({ key: "", value: "" });
      setError(false);
    } else {
      setError(true);
    }
  };

  const updateData = (index: number, data: string, target: "key" | "value") => {
    const tempData = metaDatas;
    tempData[index][target] = data;
    setMetaDatas([...tempData]);
  };

  return (
    <Card header="Meta Data">
      {metaDatas.map((data, index) => (
        <div key={index} className="meta-data">
          <Input
            placeholder="key"
            value={data.key}
            inputChange={(data) => updateData(index, data, "key")}
          />
          <Input
            placeholder="value"
            value={data.value}
            inputChange={(data) => updateData(index, data, "value")}
          />
        </div>
      ))}
      <div className="meta-data">
        <Input
          placeholder="key"
          value={newData.key}
          inputChange={(data) => setNewData({ ...newData, key: data })}
          error={error}
        />
        <Input
          placeholder="value"
          value={newData.value}
          inputChange={(data) => setNewData({ ...newData, value: data })}
          error={error}
        />
        <button className="add" onClick={() => addData()}>
          +
        </button>
      </div>
    </Card>
  );
};
