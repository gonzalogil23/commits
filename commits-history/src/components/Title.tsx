import { Typography } from "@mui/material";
import React from "react";
import styled from "@emotion/styled";

const Text = styled.div`
  color: #6b9ac4;
  width: 100%;
`;

interface TitleProps {
  text: string;
}

const Title = ({ text }: TitleProps) => {
  return (
    <Text>
      <Typography variant="h2" gutterBottom>
        {text}
      </Typography>
    </Text>
  );
};

export default Title;
