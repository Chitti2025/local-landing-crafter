
import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "$1,500",
      period: "/month",
      description: "Perfect for small businesses ready to grow their online presence",
      features: [
        "Keyword research & strategy",
        "On-page optimization",
        "Technical SEO audit",
        "Monthly reporting",
        "Local SEO setup"
      ],
      popular: false
    },
    {
      name: "Growth",
      price: "$3,000",
      period: "/month",
      description: "Ideal for established businesses looking to dominate their market",
      features: [
        "Everything in Starter",
        "Advanced link building",
        "Content creation",
        "Conversion optimization",
        "Dedicated account manager",
        "Weekly strategy calls"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "pricing",
      description: "Comprehensive SEO solutions for large organizations",
      features: [
        "Everything in Growth",
        "Multi-location SEO",
        "Advanced analytics",
        "Custom integrations",
        "Priority support",
        "Quarterly strategy reviews"
      ],
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="text-center mb-16">
        <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
          Transparent SEO Pricing for <span className="text-blue-600">Ann Arbor Businesses</span>
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          No hidden fees, no long-term contracts. Choose the plan that fits your business goals 
          and budget. All plans include our performance guarantee.
        </p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {plans.map((plan, index) => (
          <div 
            key={index} 
            className={`relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 ${
              plan.popular ? 'ring-4 ring-blue-600 scale-105' : ''
            }`}
          >
            {plan.popular && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-bold">
                  Most Popular
                </span>
              </div>
            )}
            
            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
              <div className="flex items-baseline mb-4">
                <span className="text-4xl font-bold text-blue-600">{plan.price}</span>
                <span className="text-gray-600 ml-1">{plan.period}</span>
              </div>
              <p className="text-gray-600 mb-8">{plan.description}</p>
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                className={`w-full ${
                  plan.popular 
                    ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                }`}
                size="lg"
              >
                Request Custom Quote
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>
        ))}
      </div>
      
      <div className="text-center mt-12">
        <p className="text-gray-600 text-lg">
          <strong>ROI Guarantee:</strong> We're confident in our results. If you don't see measurable 
          improvement in 90 days, we'll work for free until you do.
        </p>
      </div>
    </section>
  );
};

export default Pricing;
