const PricingCards = () => {
    const pricingPlans = [
      {
        id: 1,
        name: "Basic",
        price: "$5/month",
        description: "Perfect for individuals who want access to basic blog features.",
        features: ["Access to all articles", "Monthly newsletter", "Community support"],
      },
      {
        id: 2,
        name: "Pro",
        price: "$15/month",
        description: "Ideal for professionals looking for advanced insights and tools.",
        features: [
          "Everything in Basic",
          "Ad-free experience",
          "Exclusive content",
          "Priority support",
        ],
      },
      {
        id: 3,
        name: "Enterprise",
        price: "$30/month",
        description: "Best for teams or businesses with multiple users.",
        features: [
          "Everything in Pro",
          "Team accounts",
          "Analytics dashboard",
          "Dedicated support",
        ],
      },
    ];
  
    return (
      <section className="py-12">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-8 ">
            Pricing Plans
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {pricingPlans.map((plan, index) => (
              <div
                key={plan.id}
                className={`rounded-lg shadow-lg overflow-hidden transform transition-all hover:scale-105 duration-300 ${
                  index === 1 ? "bg-purple-500 text-white" : "bg-white text-purple-500"
                }`}
              >
                <div className="p-6">
                  <h3
                    className={`text-2xl font-bold ${
                      index === 1 ? "text-white" : "text-purple-500"
                    }`}
                  >
                    {plan.name}
                  </h3>
                  <p className="mt-2 text-4xl font-semibold">{plan.price}</p>
                  <p className="mt-4">{plan.description}</p>
                  <ul className="mt-4 space-y-2">
                    {plan.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center text-sm"
                      >
                        <span
                          className={`mr-2 ${
                            index === 1 ? "text-green-300" : "text-green-500"
                          }`}
                        >
                          ✔
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button
                    className={`mt-6 font-medium px-6 py-3 rounded-md shadow-md w-full ${
                      index === 1
                        ? "bg-white text-purple-500 hover:bg-purple-100"
                        : "bg-purple-500 text-white hover:bg-purple-500"
                    }`}
                  >
                    Choose {plan.name}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default PricingCards;
  
  