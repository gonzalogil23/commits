import styled from "@emotion/styled";
import {
  CircularProgress,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { getAllCommits, getOneCommitById } from "../services/commits-service";
import { Commit } from "../types";
import CommitComponent from "./CommitComponent";

const Form = styled(FormControl)`
  .css-m5hdmq-MuiInputBase-root-MuiInput-root-MuiSelect-root:before {
    border-bottom: 1px solid #eff2f1;
  }
  & svg: {
    color: #eff2f1;
  }
`;

const SearchById = () => {
  const [commitsIds, setCommitsIds] = useState<string[]>();
  const [selectedId, setSelectedId] = useState<string>();
  const [currentCommit, setCurrentCommit] = useState<Commit>();

  useEffect(() => {
    getAllCommits().then((res: Commit[]) => {
      const list = res.map((commit) => {
        return commit.id as string;
      });
      setCommitsIds(list);
    });
  }, []);

  useEffect(() => {
    if (selectedId) {
      getOneCommitById(selectedId).then((response) => {
        setCurrentCommit(response);
      });
    }
  }, [selectedId]);

  if (!commitsIds) return <CircularProgress />;

  return (
    <>
      <Form variant="standard" fullWidth>
        <InputLabel id="select-id" style={{ color: "#eff2f1" }}>
          Commits Ids
        </InputLabel>
        <Select
          labelId="select-id"
          value={selectedId}
          label="Commit Ids"
          onChange={(e) => setSelectedId(e.target.value)}
          style={{ color: "#eff2f1" }}
        >
          {commitsIds?.map((commitId) => (
            <MenuItem value={commitId} key={commitId}>
              {commitId}
            </MenuItem>
          ))}
        </Select>
      </Form>

      {currentCommit && (
        <CommitComponent
          author={currentCommit.author}
          date={currentCommit.date}
          message={currentCommit.message}
          url={currentCommit.url}
        />
      )}
    </>
  );
};

export default SearchById;
