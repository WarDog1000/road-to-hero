import PostCard from "@/components/PostCard";
import "./Posts.css";
export const metadata = {
  title: "Posts"
}
async function loadPosts() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const data = await res.json()
  // console.log(data);

// demorando la peticion
await new Promise((resolve) => setTimeout(resolve, 1000));

  return data;
}

async function PostPage() {
  const posts = await loadPosts();
  // console.log(posts);
  return (
    <>
      <h1>Post Page</h1>
      <div className="grid">
        <PostCard posts={posts} />
      </div>
    </>
  );
}

export default PostPage;