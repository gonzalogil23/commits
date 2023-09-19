import { CircularProgress, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import { getAllCommits } from "../services/commits-service";
import { Commit } from "../types";
import CommitComponent from "./CommitComponent";

const ListOfCommits = () => {
  const [listOfCommits, setListOfCommits] = useState<Commit[]>();

  useEffect(() => {
    getAllCommits().then((res: Commit[]) => {
      setListOfCommits(res);
    });
  }, []);

  if (!listOfCommits) return <CircularProgress />;

  return (
    <Stack
      direction="column"
      justifyContent="flex-start"
      alignItems="stretch"
      spacing={2}
    >
      {listOfCommits
        ? listOfCommits.map((commit) => (
            <CommitComponent
              date={commit.date}
              message={commit.message}
              url={commit.url}
              author={commit.author}
            />
          ))
        : null}
    </Stack>
  );
};

export default ListOfCommits;
