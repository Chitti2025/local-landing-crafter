
import { 
  Stethoscope, 
  Wrench, 
  Scale, 
  GraduationCap, 
  ShoppingBag, 
  UtensilsCrossed,
  Sparkles,
  Building,
  Laptop
} from "lucide-react";

const Industries = () => {
  const industries = [
    {
      icon: Stethoscope,
      name: "Healthcare & Clinics",
      description: "Medical practices, dental offices, and healthcare providers"
    },
    {
      icon: Wrench,
      name: "Home Services",
      description: "Plumbing, HVAC, roofing, and contractor services"
    },
    {
      icon: Scale,
      name: "Legal & Law Firms",
      description: "Attorneys, legal practices, and consulting services"
    },
    {
      icon: GraduationCap,
      name: "Education & Training",
      description: "Schools, tutoring centers, and training institutes"
    },
    {
      icon: ShoppingBag,
      name: "Ecommerce & Retail",
      description: "Online stores, retail shops, and product businesses"
    },
    {
      icon: UtensilsCrossed,
      name: "Restaurants & Hospitality",
      description: "Dining establishments, cafes, and hospitality services"
    },
    {
      icon: Sparkles,
      name: "Beauty & Wellness",
      description: "Salons, spas, fitness centers, and wellness services"
    },
    {
      icon: Building,
      name: "Real Estate & Property",
      description: "Realtors, property management, and real estate services"
    },
    {
      icon: Laptop,
      name: "SaaS & IT Services",
      description: "Software companies, IT support, and tech services"
    }
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Industries We Help Grow in Ann Arbor
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From healthcare to home services, we deliver scalable SEO solutions for businesses across industries in Ann Arbor with proven results-driven strategies.
          </p>
        </div>

        <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-8 mb-12">
          {industries.map((industry, index) => (
            <div key={index} className="text-center p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <industry.icon className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{industry.name}</h3>
              <p className="text-gray-600 text-sm">{industry.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-gray-600 mb-6">Not sure if we serve your industry?</p>
          <a 
            href="#"
            className="inline-flex items-center px-8 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-colors shadow-lg"
          >
            Contact Us Today
          </a>
        </div>
      </div>
    </section>
  );
};

export default Industries;
