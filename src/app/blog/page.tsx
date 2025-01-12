"use client"
import Image from "next/image";
import Link from "next/link";
import { FaFolderPlus } from "react-icons/fa";
import { useState, useEffect } from 'react'
interface Post {
    heading: string;
    description: string;
    postDate: string;
    imageUrl: string;
  }
  
  
  async function getPosts(): Promise<Post[]> {
    const projectId = "p1czusi5"; // Replace with your Sanity project ID
    const dataset = "production";    // Replace with your dataset name
    const query = `*[_type == 'blogPost']{
      heading,
      description,
      postDate,
      "imageUrl": image.asset->url
    }`;
    const url = `https://${projectId}.api.sanity.io/v2021-10-21/data/query/${dataset}?query=${encodeURIComponent(query)}`;
  
    const response = await fetch(url);
    if (!response.ok) throw new Error("Failed to fetch posts");
  
    const data = await response.json();
    return data.result as Post[];
  }  
  export default async function Blog() {

    let data: Post[] = [];
    try {
      data = await getPosts();
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  
    return (
      <div>
       
        <div className="flex items-center mt-11 justify-between m-auto w-3/4 px-11">
            <h1 className="text-4xl font-bold text-center  "> Gossips Blogs</h1>
        <Link href="/studio/structure/blogPost;f4c43ba9-cb7f-47b2-b921-1961922e46a5%2Ctemplate%3DblogPost">
        <button className='flex gap-4 items-center text-2xl border px-4 py-3 rounded-lg border-black'>
          <FaFolderPlus  /> Create a Post </button>
       </Link>
        </div>
<div className="container mx-auto p-4 px-11 justify-center gap-4 flex flex-wrap ">

          {data.length > 0 ? (
            data.map((item, index) => (
              <div  key={index} className="p-4 w-[350px] flex flex-col gap-4 h-auto border " >
              <h1>Gossips Blogs</h1>
                <h1 className="font-bold text-2xl">{item.heading}</h1>
                <Image src={item.imageUrl} alt={item.heading} width={300} height={300} />
                <p>{item.description}</p>
                <p className="  underline">{new Date(item.postDate).toLocaleDateString()}</p>
              </div>
            ))
          ) : (
            <p>No posts available</p>
          )}
        </div>
      </div>
    );
  }