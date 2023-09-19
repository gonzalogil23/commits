import styled from "@emotion/styled";
import React from "react";

const Item = styled.div`
  margin-top: 24px;
  width: 100%;
  padding: 12px;
  background-color: #1c2025;
  color: #eff2f1;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const CommitWrapper = styled.div`
  width: 100%;
  font-size: 12px;
`;
interface CommitProps {
  author: string;
  date: string;
  message: string;
  url: string;
}
const CommitComponent = ({ author, date, message, url }: CommitProps) => {
  return (
    <Item>
      <Header>
        <div>
          <b>User: </b>
          {author}
        </div>
        <div>
          <b>Date: </b>
          {date}
        </div>
      </Header>
      <div>
        {" "}
        <b>Message: </b>
        {message}
      </div>
      <CommitWrapper>
        <a href={url} target="_blank" rel="noreferrer">
          {url}
        </a>
      </CommitWrapper>
    </Item>
  );
};

export default CommitComponent;
