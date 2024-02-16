const url = process.env.GHOST_API_URL || "https://ghost.artijo.com/ghost/api/content/";
const key = process.env.GHOST_API_KEY || "53b6258f2bcd0522281eab3a11";

export const getPosts = async (limit:Number = 9) => {
  try{
    const response = await fetch(url + "posts/?key=" + key + "&limit=" + limit + "&include=tags", { next: { revalidate: 3600 } });
    return response.json();
  }catch(e){
    return console.log(e);
  }
};

export const getPost = async (slug: string) => {
  try{
    const response = await fetch(url + "posts/slug/" + slug + "/?key=" + key + "&include=tags", { next: { revalidate: 3600 } });
    if(response.status === 404){
      return console.log("Not found");
    }
    return response.json();
  }catch(e){
    return console.log(e);
  }
};

export const getPostsByPage = async (page: Number = 1, limit:Number = 9) => {
  try{
    const response = await fetch(url + "posts/?key=" + key + "&limit=" + limit + "&page=" + page + "&include=tags", { next: { revalidate: 3600 } });
   return response.json();
  } catch(e){
    return console.log(e);
  }
};