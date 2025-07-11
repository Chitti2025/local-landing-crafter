import Hero from "@/components/Hero";
import TableOfContents from "@/components/TableOfContents";
import Overview from "@/components/Overview";
import WhyChooseUs from "@/components/WhyChooseUs";
import InteractiveBenefits from "@/components/InteractiveBenefits";
import TeamStats from "@/components/TeamStats";
import Services from "@/components/Services";
import LocalizedContent from "@/components/LocalizedContent";
import CaseStudies from "@/components/CaseStudies";
import Results from "@/components/Results";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import BlogPosts from "@/components/BlogPosts";
import Industries from "@/components/Industries";
import RelatedPages from "@/components/RelatedPages";
import ScheduleMeeting from "@/components/ScheduleMeeting";
import VideoTestimonials from "@/components/VideoTestimonials";
import SEOGuides from "@/components/SEOGuides";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <TableOfContents />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Overview />
        <WhyChooseUs />
        <InteractiveBenefits />
        <TeamStats />
        <Services />
        <LocalizedContent />
        <CaseStudies />
        <Results />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </div>
      <BlogPosts />
      <Industries />
      <RelatedPages />
      <ScheduleMeeting />
      <VideoTestimonials />
      <SEOGuides />
      <Footer />
    </div>
  );
};

export default Index;
