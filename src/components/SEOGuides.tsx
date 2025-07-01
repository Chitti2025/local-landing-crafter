
import { Download, FileText, CheckSquare, Map } from "lucide-react";

const SEOGuides = () => {
  const guides = [
    {
      icon: Map,
      title: "The Beginner's Guide to Local SEO in Ann Arbor",
      description: "Step-by-step strategies to dominate local search results and attract more customers in your area.",
      downloadUrl: "#"
    },
    {
      icon: FileText,
      title: "How to Rank Higher on Google Maps",
      description: "Essential tactics for improving your Google My Business profile and local map rankings.",
      downloadUrl: "#"
    },
    {
      icon: CheckSquare,
      title: "DIY Website SEO Audit Checklist",
      description: "A comprehensive 50-point checklist to identify and fix SEO issues on your website.",
      downloadUrl: "#"
    },
    {
      icon: FileText,
      title: "SEO Content Planning Workbook",
      description: "Templates and frameworks for creating SEO-optimized content that drives traffic and conversions.",
      downloadUrl: "#"
    }
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Free SEO Resources for Ann Arbor's Entrepreneurs
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            These actionable guides are designed to help Ann Arbor business owners make smarter SEO decisions, even before they hire an agency.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {guides.map((guide, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200 group">
              <div className="bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors">
                <guide.icon className="w-8 h-8 text-blue-600" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                {guide.title}
              </h3>
              
              <p className="text-gray-600 text-center mb-6">
                {guide.description}
              </p>
              
              <a 
                href={guide.downloadUrl}
                className="w-full inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-colors shadow-lg group-hover:shadow-xl"
              >
                <Download className="w-4 h-4 mr-2" />
                Download Now
              </a>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a 
            href="#"
            className="inline-flex items-center px-8 py-3 bg-gray-800 text-white font-semibold rounded-full hover:bg-gray-900 transition-colors shadow-lg"
          >
            Explore All SEO Resources
            <FileText className="w-5 h-5 ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default SEOGuides;
