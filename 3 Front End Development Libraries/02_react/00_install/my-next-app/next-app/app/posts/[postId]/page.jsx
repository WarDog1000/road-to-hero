import PostPage from "../page";
import { Suspense } from "react";

async function loadPost(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await res.json();
  return data;
}
async function Page({ params }) {
  const post = await loadPost(params.postId);
  return (
    <div>
      <h2>Post {params.postId}</h2>
      <div>
        <div key={post.id}>
          <h3>
            {post.id}. {post.title}
          </h3>
          <p>{post.body}</p>
        </div>
      </div>
      <hr />
      <h3>Otras publicaciones</h3>
      <Suspense fallback={<div>Cargando publicaciones..</div>}>
        <PostPage />
      </Suspense>
    </div>
  );
}

export default Page;
