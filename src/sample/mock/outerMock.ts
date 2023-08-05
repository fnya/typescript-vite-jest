import axios from 'axios';

export const getUser = async (url: string) => {
  const response = await axios.get(url);
  return response.data;
};
