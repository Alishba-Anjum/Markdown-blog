"use client"
import Image from 'next/image';
import React from 'react'
import TopBlogs from './top-blogs/page';
import PricingCards from './pricing/page';
import BlogArchiveSection from '@/components/ui/Archived-post';
import NewsletterSection from '@/components/ui/Letter';
import Link from 'next/link';



const Home = () => {

  return (
    <div>
    <section className=" h-[400px]">
      <div className=" w-full flex flex-col items-center text-center px-11 gap-11 py-24 md:flex-row md:text-left">
        {/* Left Content: Title and Description */}
        <div className="md:w-1/2">
          <h1 className="text-4xl font-bold md:text-5xl">
            Welcome to <span className="text-purple-500">My Blogs</span>
          </h1>
          <p className="mt-4 text-lg">
            Discover amazing articles, tips, and insights. Whether you're
            looking to learn something new or get inspired, you're in the right
            place!
          </p>
          <div className="mt-6 space-x-4">
            <Link href="/blog"> <button className="bg-purple-500 hover:bg-purple-600  font-medium px-6 py-2 rounded shadow-md">
              Explore Blogs
            </button></Link>
            <Link href="/about"> <button className=" hover:bg-gray-200  font-medium px-6 py-2 rounded shadow-md">
              About Me
            </button> </Link>
          </div>
        </div>

        {/* Right Content: Image */}


        

          <Image
            src="/images/image2.jpeg"
            alt="Hero Illustration"
            height={400}
            width={600}
            className="rounded-lg shadow-2xl"
            priority
          />
       
      </div>

    </section>
    <PricingCards/>
    <TopBlogs/>
    <BlogArchiveSection />
    <NewsletterSection />
    </div>
  );
};





export default Home;



