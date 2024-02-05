import { env } from "process";

const url = process.env.GHOST_API_URL || "https://ghost.artijo.com/ghost/api/content/";

export const getPosts = async (limit:Number = 9) => {
  const response = await fetch(url + "posts/?key=" + process.env.GHOST_API_KEY + "&limit=" + limit + "&include=tags");
  return response.json();
};

export const getPost = async (slug: string) => {
  const response = await fetch(url + "posts/slug/" + slug + "/?key=" + process.env.GHOST_API_KEY + "&include=tags");
  return response.json();
};