
import { MapPin, Target, TrendingUp } from "lucide-react";

const Overview = () => {
  return (
    <section id="overview" className="py-20">
      <div className="text-center max-w-4xl mx-auto">
        <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-8">
          Grow Your <span className="text-blue-600">Ann Arbor Business</span> with Proven SEO Strategies
        </h2>
        
        <div className="text-lg text-gray-600 leading-relaxed space-y-6 mb-16">
          <p>
            Ann Arbor's competitive digital landscape demands more than cookie-cutter SEO approaches. 
            As a locally-focused SEO agency with 5+ years of Michigan market expertise, we understand 
            the unique challenges facing businesses in Southeast Michigan—from competing with Detroit 
            metro companies to capturing local university traffic. Our data-backed SEO strategies have 
            generated over $50M in documented revenue growth for clients across Ann Arbor, Ypsilanti, 
            and surrounding communities. We specialize in ROI-focused campaigns that deliver measurable 
            results, not vanity metrics. Want better rankings in Ann Arbor? Let's talk.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="font-bold text-xl mb-2">Local Market Expertise</h3>
            <p className="text-gray-600">Deep understanding of Ann Arbor's unique search landscape and consumer behavior.</p>
          </div>
          
          <div className="text-center">
            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Target className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="font-bold text-xl mb-2">Custom Strategy</h3>
            <p className="text-gray-600">Tailored SEO campaigns designed specifically for your business goals and industry.</p>
          </div>
          
          <div className="text-center">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="font-bold text-xl mb-2">Proven Results</h3>
            <p className="text-gray-600">Track record of delivering 200%+ organic traffic growth for local businesses.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Overview;
