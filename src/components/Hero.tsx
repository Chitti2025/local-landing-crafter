
import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 text-white">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="flex items-center gap-2 text-yellow-300">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current" />
              ))}
              <span className="ml-2 text-sm font-medium">5.0 Rating • 500+ Reviews</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              Dominate Google with Expert{" "}
              <span className="text-yellow-300">SEO Services</span> in{" "}
              <span className="text-yellow-300">Ann Arbor, MI</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-blue-100 leading-relaxed">
              Drive more qualified leads and revenue with data-backed SEO strategies. 
              Our Ann Arbor team has helped 1000+ businesses achieve measurable growth 
              through proven search engine optimization.
            </p>
            
            <Button 
              size="lg" 
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold text-lg px-8 py-4 rounded-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-200"
            >
              Get My Free Proposal
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            
            <div className="flex items-center gap-8 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-300">150+</div>
                <div className="text-sm text-blue-200">Industries Served</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-300">500%</div>
                <div className="text-sm text-blue-200">Avg. Traffic Growth</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-300">5+ Years</div>
                <div className="text-sm text-blue-200">Local Expertise</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <img 
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=800&q=80" 
                alt="Digital marketing team working on SEO strategies"
                className="w-full h-96 object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
