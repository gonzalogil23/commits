import React, { useState } from "react";
import Title from "./Title";
import SelectButton from "./SelectButton";
import Stack from "@mui/material/Stack";
import { SearchType } from "../types";
import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import ListOfCommits from "./ListOfCommits";
import SearchById from "./SearchById";

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

  return (
    <div>
      <Title text="Gonzalo Gil" />
      <Body>
        <Text gutterBottom variant="h3">
          Search commits
        </Text>
        <Stack direction="row" spacing={3}>
          <SelectButton
            text="All Commits"
            onClick={() => setSearch(SearchType.ALL_COMMITS)}
          />

          <SelectButton
            text="One By Id"
            onClick={() => setSearch(SearchType.ONE_BY_ID)}
          />
        </Stack>

        {search === SearchType.ALL_COMMITS ? (
          <ListOfCommits />
        ) : (
          search === SearchType.ONE_BY_ID && <SearchById />
        )}
      </Body>
    </div>
  );
};

export default Home;
