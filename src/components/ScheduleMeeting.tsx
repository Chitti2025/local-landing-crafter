
import { Calendar, CheckCircle } from "lucide-react";

const ScheduleMeeting = () => {
  const consultationTopics = [
    "Get a free comprehensive SEO audit",
    "Learn about local ranking strategies for Ann Arbor",
    "Review your current website performance",
    "Discuss your business goals and growth opportunities",
    "Understand our proven SEO process and timeline"
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-8 lg:p-12 shadow-xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  Schedule a Call with Our Ann Arbor SEO Experts
                </h2>
                <p className="text-xl text-gray-600">
                  Ready to talk strategy? Choose a time that works for you and let's discuss how we can help your business grow with proven SEO techniques.
                </p>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">What We'll Cover:</h3>
                <ul className="space-y-3">
                  {consultationTopics.map((topic, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Calendar className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Book Your Free Consultation</h3>
                <p className="text-gray-600 mb-6">Select a convenient time for your 30-minute strategy session.</p>
                
                {/* Calendar embed placeholder - replace with actual calendar service */}
                <div className="bg-gray-100 rounded-lg p-8 mb-6 min-h-[300px] flex items-center justify-center">
                  <div className="text-center">
                    <Calendar className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-500">Calendar integration would go here</p>
                    <p className="text-sm text-gray-400">Calendly, HubSpot, or similar service</p>
                  </div>
                </div>
                
                <a 
                  href="#"
                  className="w-full inline-flex items-center justify-center px-8 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-colors shadow-lg"
                >
                  Click to Schedule a Meeting
                  <Calendar className="w-5 h-5 ml-2" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScheduleMeeting;
