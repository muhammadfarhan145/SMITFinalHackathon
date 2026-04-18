import Hero from "@/components/home/Hero";
import CoreFLow from "@/components/home/CoreFlow";
import FeaturedRequest from "@/components/home/FeaturedRequest";
import Navbar from "@/components/home/Navbar";
import Footer from "@/components/home/Footer";

export default function home() {
  return (
    <div className="bg-[#F5F3EC]">
    <Navbar />
    <Hero />
    <CoreFLow />
    <FeaturedRequest />
    <Footer />
    </div>
  );
}