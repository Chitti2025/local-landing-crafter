
import { Search, Settings, FileText, Link, TrendingUp, BarChart, Globe, Smartphone } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: "Local SEO",
      description: "Dominate local search results and Google My Business listings to capture nearby customers actively searching for your services."
    },
    {
      icon: Settings,
      title: "Technical SEO Audit",
      description: "Comprehensive website analysis to identify and fix technical barriers preventing your site from ranking higher."
    },
    {
      icon: Search,
      title: "Keyword Research",
      description: "Strategic keyword targeting based on search volume, competition analysis, and buyer intent to maximize ROI."
    },
    {
      icon: FileText,
      title: "On-Page Optimization",
      description: "Optimize your website's content, meta tags, and structure to align perfectly with search engine algorithms."
    },
    {
      icon: Link,
      title: "Link Building",
      description: "Earn high-quality backlinks from authoritative websites to boost your domain authority and search rankings."
    },
    {
      icon: TrendingUp,
      title: "Content Strategy & Blogging",
      description: "Create valuable, SEO-optimized content that engages your audience and drives organic traffic growth."
    },
    {
      icon: BarChart,
      title: "SEO Reporting & Analytics",
      description: "Detailed performance tracking with custom dashboards showing traffic, rankings, and conversion metrics."
    },
    {
      icon: Smartphone,
      title: "Mobile SEO Optimization",
      description: "Ensure your website performs perfectly on mobile devices for optimal user experience and rankings."
    }
  ];

  return (
    <section id="services" className="py-20">
      <div className="text-center mb-16">
        <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
          Our <span className="text-blue-600">Ann Arbor SEO Services</span>
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Comprehensive SEO solutions designed to increase your online visibility, 
          drive qualified traffic, and grow your Ann Arbor business.
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <div 
            key={index} 
            className={`p-8 rounded-xl transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
              index % 2 === 0 ? 'bg-white border-2 border-gray-100' : 'bg-gradient-to-br from-blue-50 to-purple-50 border-2 border-blue-100'
            }`}
          >
            <div className="bg-blue-600 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
              <service.icon className="w-7 h-7 text-white" />
            </div>
            <h3 className="font-bold text-xl mb-4 text-gray-900">{service.title}</h3>
            <p className="text-gray-600 leading-relaxed">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
