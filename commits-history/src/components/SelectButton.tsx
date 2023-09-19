import { Button } from "@mui/material";
import React from "react";

interface SelectButtonProps {
  onClick: () => void;
  text: string;
}
const SelectButton = ({ onClick, text }: SelectButtonProps) => {
  return <Button onClick={onClick}>{text}</Button>;
};

export default SelectButton;
