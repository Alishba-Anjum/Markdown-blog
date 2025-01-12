const ContactSection = () => {
    return (
      <section className="bg-purple-700 py-12 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-extrabold mb-4">Get in Touch</h2>
          <p className="text-lg mb-8">
            We’d love to hear from you! If you have any questions or suggestions, please don’t hesitate to reach out.
          </p>
          <form className="max-w-2xl mx-auto space-y-6">
            <div>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <div>
              <textarea
                placeholder="Your Message"
                className="w-full px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                rows={4}
              ></textarea>
            </div>
            <button className="bg-white text-purple-700 px-6 py-3 rounded-md hover:bg-purple-100 transition-all duration-300">
              Send Message
            </button>
          </form>
        </div>
      </section>
    );
  };
  
  export default ContactSection;
  