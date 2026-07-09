import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import RegistrationSteps from "@/components/RegistrationSteps";
import ImageBanner from "@/components/ImageBanner";
import InfoSection from "@/components/InfoSection";
import Features from "@/components/Features";
import SportsCoverage from "@/components/SportsCoverage";
import WithdrawalProcess from "@/components/WithdrawalProcess";
import Bonuses from "@/components/Bonuses";
import ComparisonTable from "@/components/ComparisonTable";
import FAQSection from "@/components/FAQSection";
import Testimonials from "@/components/Testimonials";
import BlogsSection from "@/components/BlogsSection";
import ResponsibleGaming from "@/components/ResponsibleGaming";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      
      <RegistrationSteps />
      
      <ImageBanner 
        src="/banners/banner3.png" 
        alt="Live Sports Coverage Banner" 
        width={1456} 
        height={720} 
      />
      
      <SportsCoverage />
      <WithdrawalProcess />
      
      <ImageBanner 
        src="/banners/banner5.png" 
        alt="Bonuses and Rewards Banner" 
        width={1456} 
        height={720} 
      />
      
      <Bonuses />
      <ComparisonTable />
      
      <ImageBanner 
        src="/banners/banner6.png" 
        alt="Join Now Banner" 
        width={1456} 
        height={720} 
      />
      
      <FAQSection />
      <Testimonials />
      <BlogsSection />
      <ResponsibleGaming />
      <Footer />
    </main>
  );
}
