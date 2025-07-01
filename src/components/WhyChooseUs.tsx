
import { BarChart3, Users, Shield, Award } from "lucide-react";

const WhyChooseUs = () => {
  const features = [
    {
      icon: BarChart3,
      title: "Transparent Monthly Reporting",
      description: "Get detailed insights into your SEO performance with custom dashboards and monthly strategy calls.",
      color: "blue"
    },
    {
      icon: Users,
      title: "Dedicated Account Manager",
      description: "Work directly with an experienced SEO strategist who knows your business and industry inside out.",
      color: "purple"
    },
    {
      icon: Shield,
      title: "Custom SEO Strategy (Not Cookie-Cutter)",
      description: "Every campaign is built from scratch based on your unique goals, competition, and market position.",
      color: "green"
    },
    {
      icon: Award,
      title: "1000+ Campaigns Across 150+ Industries",
      description: "From healthcare to manufacturing, we've driven results for businesses of every size and sector.",
      color: "yellow"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: "bg-blue-100 text-blue-600",
      purple: "bg-purple-100 text-purple-600",
      green: "bg-green-100 text-green-600",
      yellow: "bg-yellow-100 text-yellow-600"
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  return (
    <section id="why-us" className="py-20 bg-gray-50">
      <div className="text-center mb-16">
        <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
          Why Choose <span className="text-blue-600">Digital Growth Agency</span> as Your Ann Arbor SEO Company
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          We're not just another SEO agency. We're your strategic growth partner, focused on delivering 
          transparent results and building long-term success for Ann Arbor businesses.
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 ${getColorClasses(feature.color)}`}>
              <feature.icon className="w-8 h-8" />
            </div>
            <h3 className="font-bold text-xl mb-4 text-gray-900">{feature.title}</h3>
            <p className="text-gray-600 leading-relaxed">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
