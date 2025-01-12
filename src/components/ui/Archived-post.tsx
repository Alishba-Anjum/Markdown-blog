import Link from "next/link";

const BlogArchiveSection = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Best Celebrity Scandals of 2024",
      date: "Jan 10, 2024",
      link: "/blogs/celebrity-scandals-2024",
    },
    {
      id: 2,
      title: "Top Fashion Trends from Hollywood",
      date: "Jan 5, 2024",
      link: "/blogs/fashion-trends-hollywood",
    },
    {
      id: 3,
      title: "Behind the Scenes of Reality TV Shows",
      date: "Dec 30, 2023",
      link: "/blogs/reality-tv-behind-the-scenes",
    },
  ];

  return (
    <section className=" text-black py-12">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold mb-8">Blog Archive</h2>
        <div className="space-y-4">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
              <Link href="/"className="text-xl font-semibold  hover:text-purple-500">{post.title}
              </Link>
              <p className=" mt-2">{post.date}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogArchiveSection;
