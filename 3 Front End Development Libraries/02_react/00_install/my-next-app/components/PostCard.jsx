"use client";
import Link from "next/link";
function PostCard({ posts }) {
  return (
    <>
      {posts.map((post) => (
        <div className="bg-gray-950 p-10" key={post.id}>
          <Link href={`/posts/${post.id}`}>
            <h3 className="text-xl font-bold mb-4">
              {post.id}. {post.title}
            </h3>
          </Link>
          <p className="text-slate-300">{post.body}</p>
          <button
            onClick={() => {
              alert("click funcionando");
            }}
          >
            Click
          </button>
        </div>
      ))}
    </>
  );
}

export default PostCard;
