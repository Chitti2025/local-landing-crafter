
import { Award, MessageSquare, ThumbsUp } from "lucide-react";

const TeamStats = () => {
  const stats = [
    {
      icon: Award,
      number: "25+",
      label: "Years of Experience",
      description: "Combined team expertise"
    },
    {
      icon: MessageSquare,
      number: "1,100",
      label: "Testimonials",
      description: "From satisfied clients"
    },
    {
      icon: ThumbsUp,
      number: "93%",
      label: "Client Satisfaction Rating",
      description: "Consistently high scores"
    }
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Your Dedicated Local Team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet the Ann Arbor SEO experts who will drive your business growth with proven strategies and personalized service.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{stat.label}</h3>
              <p className="text-gray-600">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamStats;
