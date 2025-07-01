
const LocalizedContent = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              <span className="text-blue-600">Digital Growth Agency</span> Offers Leading SEO Services in Ann Arbor
            </h2>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              Ann Arbor's unique business landscape—anchored by the University of Michigan and a thriving tech corridor—presents distinct SEO opportunities. From downtown's historic business district to the emerging innovation hubs in Research Park, local companies face fierce competition for digital visibility. Our deep understanding of Ann Arbor's demographics, seasonal search patterns, and local competition gives your business the strategic advantage needed to dominate local search results.
            </p>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              Whether you're targeting university students, local families, or the growing professional population, we craft SEO strategies that resonate with Ann Arbor's diverse market segments. Our team knows which keywords drive traffic during football season, how to capture back-to-school search volume, and where your local customers are actually searching online. This hyperlocal expertise translates into higher rankings, more qualified traffic, and increased revenue for your Ann Arbor business.
            </p>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              From healthcare practices near the hospital district to retail businesses on State Street, we've helped Ann Arbor companies across every industry achieve first-page Google rankings. Our location-specific approach ensures your SEO investment delivers measurable results that directly impact your bottom line.
            </p>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80" 
              alt="Ann Arbor downtown business district and University of Michigan campus"
              className="w-full h-96 object-cover rounded-2xl shadow-xl"
            />
            <div className="absolute inset-0 bg-blue-600/10 rounded-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocalizedContent;
