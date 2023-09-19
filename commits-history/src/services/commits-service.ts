import axios from "axios";

const API_URL = "http://localhost:8080";

export const getAllCommits = async () => {
  const response = await axios.get(`${API_URL}/commits`);
  return response.data;
};

export const getOneCommitById = async (id: string) => {
  const response = await axios.get(`${API_URL}/commits/${id}`);

  return response.data;
};
