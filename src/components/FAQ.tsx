
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "How long does SEO take to show results in Ann Arbor?",
      answer: "Typically, you'll start seeing initial improvements in 3-4 months, with significant results in 6-12 months. Local SEO often shows faster results, while competitive national keywords may take longer. We provide monthly progress reports so you can track improvements every step of the way."
    },
    {
      question: "What industries do you specialize in for Ann Arbor SEO?",
      answer: "We've successfully worked with over 150 industries, including healthcare, manufacturing, professional services, retail, technology, and more. Our local Ann Arbor expertise spans everything from University of Michigan adjacent businesses to automotive suppliers and healthcare practices."
    },
    {
      question: "How do you measure SEO success for Ann Arbor businesses?",
      answer: "We track multiple metrics including organic traffic growth, keyword rankings, local search visibility, lead generation, and most importantly - revenue impact. Every client receives a custom dashboard showing their specific KPIs and ROI from our SEO efforts."
    },
    {
      question: "Do you require long-term contracts?",
      answer: "No long-term contracts required. We believe in earning your business every month through results, not locking you into lengthy agreements. Most clients stay with us long-term because they see consistent growth and value from our services."
    },
    {
      question: "How is your Ann Arbor SEO different from national agencies?",
      answer: "We understand the local Ann Arbor market, including seasonal trends, local competition, University impact, and regional search behavior. Plus, you get direct access to senior strategists, not junior account managers. We're invested in the Ann Arbor business community's success."
    },
    {
      question: "What's included in your SEO reporting?",
      answer: "Monthly reports include keyword ranking changes, organic traffic growth, competitor analysis, technical SEO health, backlink profile updates, and revenue attribution. We also provide quarterly strategy reviews and recommendations for continued growth."
    }
  ];

  return (
    <section id="faq" className="py-20">
      <div className="text-center mb-16">
        <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
          SEO in <span className="text-blue-600">Ann Arbor</span>: Frequently Asked Questions
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Get answers to the most common questions about SEO services for Ann Arbor businesses.
        </p>
      </div>
      
      <div className="max-w-4xl mx-auto">
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`} 
              className="bg-white rounded-lg shadow-sm border border-gray-200"
            >
              <AccordionTrigger className="px-6 py-4 text-left font-semibold text-lg hover:text-blue-600">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-600 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
