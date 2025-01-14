"use client";
import { useState, useEffect } from "react";
import { client } from "@/sanity/lib/client"; // Adjust the import path based on your setup
import Image from "next/image";
import Link from "next/link";
import { FaFolderPlus } from "react-icons/fa";

interface Post {
  heading: string;
  description: string;
  postDate: string;
  imageUrl: string;
}

const Blog = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const query = `*[_type == 'blogPost']{
          heading,
          description,
          postDate,
          "imageUrl": image.asset->url
        }`;

        const data = await client.fetch(query);
        setPosts(data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <div className="flex items-center mt-11 justify-between m-auto w-3/4 lg:px-11">
            <h1 className="text-4xl font-bold text-center  "> Gossips Blogs</h1>
        <Link href="/studio/structure/blogPost">
        <button className='flex gap-4 items-center text-2xl border px-4 py-3 rounded-lg border-black'>
          <FaFolderPlus  /> Create a Post </button>
       </Link>
        </div>
      <div className="container mx-auto p-4 px-11 justify-center gap-4 flex flex-wrap">
        {posts.length > 0 ? (
          posts.map((post, index) => (
            <div
              key={index}
              className="p-4 w-[350px] flex flex-col gap-4 h-auto border"
            >
              <h1 className="font-bold text-2xl">{post.heading}</h1>
              <Image
                src={post.imageUrl}
                alt={post.heading}
                width={300}
                height={300}
              />
              <p>{post.description}</p>
              <p className="underline">
                {new Date(post.postDate).toLocaleDateString()}
              </p>
            </div>
          ))
        ) : (
          <p>No posts available</p>
        )}
      </div>
    </div>
  );
};

export default Blog;

