import React, { useState } from "react";
import Title from "./Title";
import SelectButton from "./SelectButton";
import Stack from "@mui/material/Stack";
import { SearchType } from "../types";
import styled from "@emotion/styled";
import { Divider, Typography } from "@mui/material";
import { getAllCommits } from "../services/commits-service";

const Body = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Text = styled(Typography)`
  color: #eff2f1;
`;
const Home = () => {
  const [search, setSearch] = useState<SearchType>(SearchType.NONE);

  const handle = async () => {
    console.log(await getAllCommits());
  };
  return (
    <div>
      <Title text="Gonzalo Gil last commits" />
      <Body>
        <Text gutterBottom variant="h3">
          Search commits
        </Text>
        <Stack
          direction="row"
          spacing={2}
          divider={<Divider orientation="vertical" flexItem />}
        >
          <SelectButton
            text="All Commits"
            onClick={handle}
            // onClick={() => setSearch(SearchType.ALL_COMMITS)}
          />
          <SelectButton
            text="One By Id"
            onClick={handle}
            // onClick={() => setSearch(SearchType.ONE_BY_ID)}
          />
        </Stack>
      </Body>
    </div>
  );
};

export default Home;
