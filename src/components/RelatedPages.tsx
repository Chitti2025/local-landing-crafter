
import { ArrowRight } from "lucide-react";

const RelatedPages = () => {
  const relatedPages = [
    {
      title: "SEO Services in Ypsilanti",
      description: "Professional SEO services for Ypsilanti businesses"
    },
    {
      title: "Local SEO for Healthcare",
      description: "Specialized SEO strategies for medical practices"
    },
    {
      title: "PPC Management in Ann Arbor",
      description: "Google Ads and paid search management services"
    },
    {
      title: "Website Design Services",
      description: "Custom web design and development solutions"
    },
    {
      title: "SEO for Real Estate",
      description: "Digital marketing for real estate professionals"
    },
    {
      title: "Content Marketing Services",
      description: "Strategic content creation and marketing campaigns"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Explore More SEO Services and Locations
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how we help businesses grow across different locations and specialized services throughout Southeast Michigan.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {relatedPages.map((page, index) => (
            <a 
              key={index}
              href="#"
              className="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200"
            >
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {page.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{page.description}</p>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all duration-300 ml-4" />
              </div>
            </a>
          ))}
        </div>

        <div className="text-center">
          <a 
            href="#"
            className="inline-flex items-center px-8 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-colors shadow-lg"
          >
            See All Services
            <ArrowRight className="w-5 h-5 ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default RelatedPages;
