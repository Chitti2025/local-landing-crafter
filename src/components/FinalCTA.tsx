
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Mail } from "lucide-react";

const FinalCTA = () => {
  return (
    <section id="get-started" className="py-20 bg-gradient-to-r from-gray-900 to-blue-900 text-white">
      <div className="text-center max-w-4xl mx-auto">
        <h2 className="text-3xl lg:text-5xl font-bold mb-6">
          Ready to Accelerate Growth in <span className="text-yellow-300">Ann Arbor</span>?
        </h2>
        
        <p className="text-xl text-gray-300 mb-12 leading-relaxed">
          We'd love to learn about your goals and show you exactly how we can help your business 
          dominate local search results. Get a free, no-obligation SEO proposal tailored to your 
          Ann Arbor business.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
          <Button 
            size="lg" 
            className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold text-lg px-8 py-4 rounded-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-200"
          >
            Get My Free Proposal
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          
          <div className="flex items-center gap-4 text-gray-300">
            <span>or</span>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>(734) 555-0123</span>
            </div>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold">1</span>
            </div>
            <h3 className="font-bold text-lg mb-2">Free Consultation</h3>
            <p className="text-gray-300">We analyze your current SEO and discuss your goals</p>
          </div>
          
          <div>
            <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold">2</span>
            </div>
            <h3 className="font-bold text-lg mb-2">Custom Strategy</h3>
            <p className="text-gray-300">We create a tailored plan for your business</p>
          </div>
          
          <div>
            <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold">3</span>
            </div>
            <h3 className="font-bold text-lg mb-2">Start Growing</h3>
            <p className="text-gray-300">Watch your rankings and revenue climb</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
