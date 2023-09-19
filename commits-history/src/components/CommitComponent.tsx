import styled from "@emotion/styled";
import React from "react";

const Item = styled.div`
  height: 80px;
  background-color: #1c2025;
  color: #eff2f1;
`;

interface CommitProps {
  date: Date;
  message: string;
  url: string;
}
const CommitComponent = ({ date, message, url }: CommitProps) => {
  return <Item></Item>;
};

export default CommitComponent;
