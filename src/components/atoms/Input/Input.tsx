import React, { FC } from "react";

import "./Input.scss";

type InputType = {
  label: string;
  required: boolean;
  placeholder: string;
  value: string;
  inputChange: (data: string) => void;
  error: boolean;
};

export const Input: FC<Partial<InputType>> = ({
  label,
  placeholder,
  required,
  value,
  inputChange,
  error,
}) => {
  return (
    <div className={`input-wrapper ${error ? "input-error" : ""}`}>
      {label && <label className="header">{label}</label>}
      <input
        onChange={(e) => {
          inputChange?.(e.target.value);
        }}
        placeholder={placeholder}
        value={value}
        required={required}
      />
    </div>
  );
};
