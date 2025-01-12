import Image from "next/image";

const GossipBlogs = () => {
  const blogs = [
    {
      id: 1,
      title: "Celebrity Scandals of the Year",
      description: "Catch up on the most shocking celebrity gossip and scandals of the year.",
      image: "/images/blog1.jpeg",
      link: "/blogs/celebrity-scandals",
    },
    {
      id: 2,
      title: "Hollywood’s Power Couples",
      description: "Who’s dating who? Explore the relationships making headlines in Hollywood.",
      image: "/images/blog3.jpeg",
      link: "/blogs/hollywood-power-couples",
    },
    {
      id: 3,
      title: "Behind the Scenes of Reality TV",
      description: "Uncover the untold stories and drama behind your favorite reality shows.",
      image: "/images/blog2.jpeg",
      link: "/blogs/reality-tv-behind-the-scenes",
    },
  ];

  return (
    <section className=" py-12">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Top Gossip Blogs
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <Image
                src={blog.image}
                alt={blog.title}
                width={400}
                height={250}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800">
                  {blog.title}
                </h3>
                <p className="text-gray-600 mt-2 text-sm">
                  {blog.description}
                </p>
                <a
                  href={blog.link}
                  className="inline-block mt-4 text-purple-500 hover:text-purple-600 font-medium"
                >
                  Read More →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GossipBlogs;

