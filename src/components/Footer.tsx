
import { MapPin, Phone, Mail, Star } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold mb-4">Digital Growth Agency</h3>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Proudly serving businesses across Ann Arbor, Ypsilanti, Saline, and the greater 
            Southeast Michigan area with results-driven SEO services.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="text-center">
            <div className="bg-blue-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-6 h-6" />
            </div>
            <h4 className="font-bold mb-2">Service Area</h4>
            <p className="text-gray-300">Ann Arbor, MI & Surrounding Areas</p>
          </div>
          
          <div className="text-center">
            <div className="bg-blue-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="w-6 h-6" />
            </div>
            <h4 className="font-bold mb-2">Call Us</h4>
            <p className="text-gray-300">(734) 555-0123</p>
          </div>
          
          <div className="text-center">
            <div className="bg-blue-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="w-6 h-6" />
            </div>
            <h4 className="font-bold mb-2">Email</h4>
            <p className="text-gray-300">hello@digitalgrowthagency.com</p>
          </div>
        </div>
        
        <div className="text-center py-8 border-t border-gray-800">
          <div className="flex items-center justify-center gap-2 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
            ))}
            <span className="ml-2 text-gray-300">5.0 Rating • Google Reviews</span>
          </div>
          
          <p className="text-gray-400">
            © 2024 Digital Growth Agency. All rights reserved. | 
            <span className="ml-2">Licensed SEO Agency in Michigan</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
