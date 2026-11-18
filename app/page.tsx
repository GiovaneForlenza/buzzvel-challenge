import CallToAction from "@/components/CallToAction";
import Categories from "@/components/Categories";
import ContactSection from "@/components/ContactSection";
import FeaturedCourse from "@/components/FeaturedCourse";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Navbar from "@/components/Navbar";
import People from "@/components/People";
import TestimonialStats from "@/components/TestimonialStats";

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Categories />
        <FeaturedCourse />
        <HowItWorks />
        <TestimonialStats />
        <People />
        <ContactSection />
        <CallToAction />
      </main>
      <Footer />
    </>
  );
}
