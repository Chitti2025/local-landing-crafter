
import { Button } from "@/components/ui/button";
import { Star, ArrowRight } from "lucide-react";

const Results = () => {
  return (
    <section id="results" className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
      <div className="text-center mb-16">
        <h2 className="text-3xl lg:text-5xl font-bold mb-4">
          We Help Businesses in <span className="text-yellow-300">Ann Arbor</span> Thrive
        </h2>
        <p className="text-xl text-blue-100 max-w-3xl mx-auto">
          Real results from real clients. Our data-driven approach delivers measurable growth 
          that directly impacts your bottom line.
        </p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8 mb-16">
        <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
          <div className="text-4xl font-bold text-yellow-300 mb-2">+432%</div>
          <div className="text-lg font-semibold mb-2">Organic Traffic Growth</div>
          <div className="text-blue-200">Local Healthcare Practice</div>
        </div>
        
        <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
          <div className="text-4xl font-bold text-yellow-300 mb-2">$2.3M</div>
          <div className="text-lg font-semibold mb-2">Revenue Generated</div>
          <div className="text-blue-200">Manufacturing Company</div>
        </div>
        
        <div className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
          <div className="text-4xl font-bold text-yellow-300 mb-2">#1</div>
          <div className="text-lg font-semibold mb-2">Google Rankings</div>
          <div className="text-blue-200">Professional Services</div>
        </div>
      </div>
      
      <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 max-w-4xl mx-auto">
        <div className="flex items-center gap-2 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-5 h-5 fill-yellow-300 text-yellow-300" />
          ))}
        </div>
        <blockquote className="text-xl italic mb-6">
          "Working with Digital Growth Agency transformed our online presence completely. 
          We went from page 3 to ranking #1 for our primary keywords, and our leads increased by 300%. 
          Their team truly understands the Ann Arbor market."
        </blockquote>
        <div className="font-semibold">
          Sarah Johnson, CEO
          <div className="text-blue-200 font-normal">TechStart Solutions, Ann Arbor</div>
        </div>
      </div>
      
      <div className="text-center mt-12">
        <Button 
          size="lg" 
          className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold text-lg px-8 py-4 rounded-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-200"
        >
          Explore Case Studies
          <ArrowRight className="ml-2 w-5 h-5" />
        </Button>
      </div>
    </section>
  );
};

export default Results;
