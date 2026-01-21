import React from "react";

interface InputFieldProps {
  name: string;
  type: string;
  value: string;
  handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void;
  placeholder: string;
}

const InputField: React.FC<InputFieldProps> = ({
  name,
  type,
  value,
  handleChange,
  placeholder,
}) => {
  return (
    <input
      id={name}
      type={type}
      name={name}
      value={value}
      onChange={handleChange}
      placeholder={placeholder}
      className="w-full h-12 px-5 outline-none border border-custom-orange mb-5 mt-1 tracking-wider"
    />
  );
};

export default InputField;
