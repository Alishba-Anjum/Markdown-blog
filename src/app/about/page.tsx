import Image from "next/image";
import { FaUserAlt, FaStar, FaHandshake } from "react-icons/fa";

const AboutPage = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="bg-purple-700 text-white py-20">
        <div className="container mx-auto text-center px-6">
          <h1 className="text-5xl font-bold mb-4">About Alishba Blogs</h1>
          <p className="text-lg max-w-3xl mx-auto">
            Welcome to Alishba Blogs, your go-to source for the latest gossip, celebrity updates, fashion trends, and all things pop culture! Dive into our stories, interviews, and in-depth articles, keeping you informed and entertained.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-extrabold text-purple-700 mb-6">Our Mission</h2>
          <p className="text-lg max-w-2xl mx-auto">
            At Alishba Blogs, we aim to provide our readers with the most accurate, entertaining, and timely updates on everything related to the celebrity world, trending topics, and gossip. Our goal is to inform, engage, and entertain readers with the content that matters most.
          </p>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto text-center px-6">
          <h2 className="text-4xl font-extrabold text-purple-700 mb-6">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <FaUserAlt className="text-purple-700 text-5xl mx-auto mb-4" />
              <h3 className="text-2xl font-semibold text-purple-700 mb-2">Authenticity</h3>
              <p>We value honest, real, and unfiltered content that brings the truth to light while respecting privacy and integrity.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <FaStar className="text-purple-700 text-5xl mx-auto mb-4" />
              <h3 className="text-2xl font-semibold text-purple-700 mb-2">Excellence</h3>
              <p>We’re committed to delivering top-notch content that both entertains and informs. Quality matters to us.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <FaHandshake className="text-purple-700 text-5xl mx-auto mb-4" />
              <h3 className="text-2xl font-semibold text-purple-700 mb-2">Engagement</h3>
              <p>We believe in fostering a community of readers, fans, and industry experts who engage and share their insights with us.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Team Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-extrabold text-purple-700 mb-6">Meet The Team</h2>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            Our passionate team of writers, researchers, and editors is dedicated to bringing you the best celebrity gossip and entertainment news. Get to know the faces behind the stories!
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Image
                src="/images/man1.webp"
                alt="Team Member 1"
                className="rounded-full mx-auto mb-4"
                width={150}
                height={150}
              />
              <h3 className="text-xl font-semibold text-purple-700 mb-2">Alishba Khan</h3>
              <p className="text-gray-600">Founder & CEO</p>
              <p className="mt-4">Alishba is the founder of Alishba Blogs and has a keen interest in celebrity culture. She leads the editorial team and ensures that every article meets the high standards of quality and engagement.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Image
                src="/images/man2.jpeg"
                alt="Team Member 2"
                className="rounded-full mx-auto mb-4"
                width={150}
                height={150}
              />
              <h3 className="text-xl font-semibold text-purple-700 mb-2">John Doe</h3>
              <p className="text-gray-600">Editor-in-Chief</p>
              <p className="mt-4">John is passionate about keeping readers up-to-date with the latest gossip. He has a talent for curating trending topics and bringing them to the forefront of the blog.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Image
                src="/images/man3.jpeg"
                alt="Team Member 3"
                className="rounded-full mx-auto mb-4"
                width={150}
                height={150}
              />
              <h3 className="text-xl font-semibold text-purple-700 mb-2">Sarah Lee</h3>
              <p className="text-gray-600">Lead Writer</p>
              <p className="mt-4">Sarah is a seasoned writer with a flair for storytelling. She is the voice behind many of our most popular celebrity features and gossip columns.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-purple-700 text-white py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-extrabold mb-6">Join Our Community</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Be the first to know about the latest gossip, trends, and exclusive content. Subscribe to our newsletter and never miss an update!
          </p>
          <button className="bg-white text-purple-700 px-8 py-3 rounded-md hover:bg-purple-100 transition-all duration-300">
            Subscribe Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
