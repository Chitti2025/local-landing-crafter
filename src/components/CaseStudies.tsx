
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Users, DollarSign } from "lucide-react";

const CaseStudies = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mini Case Studies */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
            Real Results from Real Ann Arbor Businesses
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
            <TrendingUp className="w-12 h-12 text-green-600 mb-4" />
            <div className="text-3xl font-bold text-green-600 mb-2">+432%</div>
            <h3 className="font-bold text-lg mb-2">Organic Traffic Growth</h3>
            <p className="text-gray-600 mb-4">Local healthcare practice saw massive traffic increase within 8 months of implementing our SEO strategy.</p>
            <div className="text-sm text-gray-500">Healthcare • Ann Arbor</div>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
            <DollarSign className="w-12 h-12 text-blue-600 mb-4" />
            <div className="text-3xl font-bold text-blue-600 mb-2">$2.3M</div>
            <h3 className="font-bold text-lg mb-2">Revenue Generated</h3>
            <p className="text-gray-600 mb-4">Manufacturing company attributed direct revenue growth to improved search rankings and lead quality.</p>
            <div className="text-sm text-gray-500">Manufacturing • Ypsilanti</div>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
            <Users className="w-12 h-12 text-purple-600 mb-4" />
            <div className="text-3xl font-bold text-purple-600 mb-2">300%</div>
            <h3 className="font-bold text-lg mb-2">Lead Quality Increase</h3>
            <p className="text-gray-600 mb-4">Professional services firm saw dramatic improvement in qualified lead generation and conversion rates.</p>
            <div className="text-sm text-gray-500">Legal Services • Ann Arbor</div>
          </div>
        </div>

        {/* Detailed Case Study */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
                Case Study: Ann Arbor Tech Startup
              </h3>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-4">
                  <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center">
                    <span className="text-green-600 font-bold">100%</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Increase in Sales</div>
                    <div className="text-gray-600">Within 12 months</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-bold">#1</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Google Rankings</div>
                    <div className="text-gray-600">For primary keywords</div>
                  </div>
                </div>
              </div>
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                View Full Case Study
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center">
                  <span className="font-bold text-gray-600">TS</span>
                </div>
                <div>
                  <div className="font-bold text-gray-900">TechStart Solutions</div>
                  <div className="text-gray-500">Software Development • Ann Arbor</div>
                </div>
              </div>
              <blockquote className="text-gray-700 italic leading-relaxed">
                "Working with Digital Growth Agency completely transformed our online presence. We went from page 3 to ranking #1 for our primary keywords, and our qualified leads increased by 300%. Their team truly understands the Ann Arbor market and delivered results that exceeded our expectations. The ROI has been incredible—we've seen a 100% increase in sales directly attributed to improved search visibility."
              </blockquote>
              <div className="mt-6 font-semibold text-gray-900">
                Sarah Johnson, CEO
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold">
            Explore More Case Studies
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
