const NewsletterSection = () => {
  return (
    <section className="bg-purple-700 py-12 text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold mb-4">Subscribe to Our Newsletter</h2>
        <p className="text-lg mb-8">
          Stay updated with the latest gossip, trends, and celebrity news. Subscribe now and never miss a post!
        </p>
        <form className="max-w-xl mx-auto space-y-6">
          <div>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-md focus:outline-none text-black focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <button className="bg-white text-purple-700 px-6 py-3 rounded-md hover:bg-purple-100 transition-all duration-300">
            Subscribe Now
          </button>
        </form>
      </div>
    </section>
  );
};

export default NewsletterSection;
