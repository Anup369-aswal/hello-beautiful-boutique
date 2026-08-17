import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Designer from "@/components/Designer";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import WhyChooseUs from "@/components/WhyChooseUs";
import Process from "@/components/Process";
import Gallery from "@/components/Gallery";
import Reviews from "@/components/Reviews";
import Instagram from "@/components/Instagram";
import FAQ from "@/components/FAQ";
import Location from "@/components/Location";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import { getBreadcrumbSchema, getFaqSchema } from "@/lib/schema";

export default function HomePage() {
  const faqSchema = getFaqSchema();
  const breadcrumbSchema = getBreadcrumbSchema();

  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <CustomCursor />
      <Navbar />

      <main id="main-content">
        <Hero />
        <About />
        <Designer />
        <Services />
        <Portfolio />
        <WhyChooseUs />
        <Process />
        <Gallery />
        <Reviews />
        <Instagram />
        <FAQ />
        <Location />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
