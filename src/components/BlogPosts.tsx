
import { ArrowRight, Calendar, Clock } from "lucide-react";

const BlogPosts = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Top Local SEO Tips for Businesses in Ann Arbor",
      excerpt: "Discover proven strategies to dominate local search results and attract more customers in Ann Arbor's competitive market.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=400&q=80",
      readTime: "5 min read",
      date: "Dec 15, 2024"
    },
    {
      id: 2,
      title: "How to Improve Google Rankings Without Paid Ads",
      excerpt: "Learn organic SEO techniques that drive sustainable traffic growth without relying on expensive advertising campaigns.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=400&q=80",
      readTime: "7 min read", 
      date: "Dec 10, 2024"
    },
    {
      id: 3,
      title: "On-Page SEO Checklist for 2025",
      excerpt: "A comprehensive guide to optimizing your website pages for maximum search engine visibility and user experience.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=400&q=80",
      readTime: "6 min read",
      date: "Dec 5, 2024"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            From the Digital Growth Agency Blog
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay ahead with the latest SEO insights, local marketing strategies, and digital growth tips specifically for Ann Arbor businesses.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post) => (
            <article key={post.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors">
                  <a href="#" className="block">{post.title}</a>
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <a 
                  href="#" 
                  className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors"
                >
                  Read More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center">
          <a 
            href="#"
            className="inline-flex items-center px-8 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-colors shadow-lg"
          >
            Read More on the Blog
            <ArrowRight className="w-5 h-5 ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default BlogPosts;
