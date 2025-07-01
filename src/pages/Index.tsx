
import Hero from "@/components/Hero";
import TableOfContents from "@/components/TableOfContents";
import Overview from "@/components/Overview";
import WhyChooseUs from "@/components/WhyChooseUs";
import Services from "@/components/Services";
import Results from "@/components/Results";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <TableOfContents />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Overview />
        <WhyChooseUs />
        <Services />
        <Results />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
