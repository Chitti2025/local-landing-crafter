
import { useState } from "react";
import { TrendingUp, Users, Zap } from "lucide-react";

const InteractiveBenefits = () => {
  const [activeTab, setActiveTab] = useState("leads");

  const tabs = [
    {
      id: "leads",
      title: "Convert More Qualified Leads",
      icon: TrendingUp,
      content: {
        heading: "Turn Website Visitors Into Paying Customers",
        description: "Our Ann Arbor SEO strategies don't just drive traffic—we attract high-intent visitors who are ready to buy. Through targeted keyword optimization and local search tactics, we help you capture customers at the exact moment they're searching for your services. Our conversion-focused approach has helped local businesses increase their lead quality by 300% while reducing cost per acquisition."
      }
    },
    {
      id: "experts",
      title: "Team of SEO Experts", 
      icon: Users,
      content: {
        heading: "Michigan's Most Experienced SEO Professionals",
        description: "Work directly with certified SEO specialists who live and breathe search engine optimization. Our Ann Arbor team combines technical expertise with deep local market knowledge, ensuring your campaigns are managed by professionals who understand both Google's algorithms and your customers' search behavior. Each team member averages 8+ years of SEO experience across diverse industries."
      }
    },
    {
      id: "opportunities",
      title: "Extend To Other Marketing Opportunities",
      icon: Zap,
      content: {
        heading: "Holistic Digital Marketing Integration",
        description: "SEO is just the beginning. Our comprehensive approach seamlessly integrates with PPC, social media, content marketing, and conversion optimization to maximize your digital presence. We identify cross-channel opportunities that amplify your SEO results, helping Ann Arbor businesses create cohesive marketing strategies that drive exponential growth across all digital touchpoints and customer acquisition channels."
      }
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Tabs */}
          <div className="space-y-4">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full text-left p-6 rounded-xl transition-all duration-300 ${
                  activeTab === tab.id
                    ? "bg-blue-600 text-white shadow-lg"
                    : "bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                }`}
              >
                <div className="flex items-center gap-4">
                  <tab.icon className="w-6 h-6 flex-shrink-0" />
                  <span className="font-semibold text-lg">{tab.title}</span>
                </div>
              </button>
            ))}
          </div>

          {/* Right Column - Content */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            {tabs.map((tab) => (
              <div
                key={tab.id}
                className={`transition-opacity duration-300 ${
                  activeTab === tab.id ? "opacity-100" : "opacity-0 hidden"
                }`}
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {tab.content.heading}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {tab.content.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveBenefits;
