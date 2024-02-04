import axios from "axios";

const url = process.env.GHOST_API_URL || "https://ghost.artijo.com/ghost/api/content/";

export const getPosts = async () => {
  const response = await axios.get(url + "posts/?key=" + process.env.GHOST_API_KEY) ;
  return response.data;
};

export const getPost = async (slug: string) => {
  const response = await axios.get(url + "posts/slug/" + slug + "/?key=" + process.env.GHOST_API_KEY);
  return response.data;
};