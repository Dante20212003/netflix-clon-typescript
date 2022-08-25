import { useState } from "react";

interface Props {
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error: string;
  type?: string;
}

const Input = ({ placeholder, value, onChange, error, type }: Props) => {
  return (
    <div className={`${error.length > 0 && "error"}`}>
      <div className="form-group ">
        <input
          className="input-text"
          value={value}
          type={type || "text"}
          required
          autoComplete="off"
          onChange={(e) => onChange(e)}
        />
        <label className="label-input">{placeholder}</label>
      </div>

      {error.length > 0 && <p className="error-message">{error}</p>}
    </div>
  );
};

export default Input;
