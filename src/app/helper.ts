import axios from "axios";

const url = process.env.GHOST_API_URL || "https://ghost.artijo.com/ghost/api/content/";

export const getPosts = async (limit:Number = 9) => {
  const response = await axios.get(url + "posts/?key=" + process.env.GHOST_API_KEY+"&limit="+limit) ;
  return response.data;
};

export const getPost = async (slug: string) => {
  const response = await axios.get(url + "posts/slug/" + slug + "/?key=" + process.env.GHOST_API_KEY+"&include=tags");
  return response.data;
};