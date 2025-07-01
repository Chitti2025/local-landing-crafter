
import { Play, Star } from "lucide-react";

const VideoTestimonials = () => {
  const videoTestimonials = [
    {
      id: 1,
      thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
      clientName: "Sarah Johnson",
      company: "Ann Arbor Dental Care",
      quote: "Digital Growth Agency transformed our online presence completely. We now rank #1 for 'dentist Ann Arbor' and our patient bookings have doubled.",
      videoUrl: "#"
    },
    {
      id: 2,
      thumbnail: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80",
      clientName: "Mike Chen",
      company: "Chen's Home Services",
      quote: "The ROI from their SEO work has been incredible. We're getting more qualified leads than ever before, and our revenue is up 150% this year.",
      videoUrl: "#"
    },
    {
      id: 3,
      thumbnail: "https://images.unsplash.com/photo-1494790108755-2616b612b5bc?auto=format&fit=crop&w=400&q=80",
      clientName: "Jennifer Martinez",
      company: "Martinez Law Firm",
      quote: "Professional, transparent, and results-driven. They helped us dominate local search results for legal services in Ann Arbor within just 6 months.",
      videoUrl: "#"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Real Stories from Businesses Like Yours
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Watch what local Ann Arbor business owners have to say about working with Digital Growth Agency and the results they've achieved.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {videoTestimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative group cursor-pointer">
                <img 
                  src={testimonial.thumbnail} 
                  alt={`${testimonial.clientName} testimonial`}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300 flex items-center justify-center">
                  <div className="bg-white/90 rounded-full p-4 group-hover:scale-110 transition-transform duration-300">
                    <Play className="w-8 h-8 text-blue-600" />
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <blockquote className="text-gray-700 mb-4 italic">
                  "{testimonial.quote}"
                </blockquote>
                
                <div className="border-t pt-4">
                  <p className="font-semibold text-gray-900">{testimonial.clientName}</p>
                  <p className="text-sm text-gray-600">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a 
            href="#"
            className="inline-flex items-center px-8 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-colors shadow-lg"
          >
            See More Success Stories
            <Play className="w-5 h-5 ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default VideoTestimonials;
