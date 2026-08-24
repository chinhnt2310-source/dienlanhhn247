import React, { useEffect } from 'react';
import contentDataRaw from './data/contentData.json';
import { ContentData } from './types';
import { TopHotlineBar } from './components/TopHotlineBar';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { QuickBenefitsSection } from './components/QuickBenefitsSection';
import { InteractiveServicesSection } from './components/InteractiveServicesSection';
import { QuickLookupSection } from './components/QuickLookupSection';
import { PriceListSection } from './components/PriceListSection';
import { ProcessSection } from './components/ProcessSection';
import { ServiceAreaSection } from './components/ServiceAreaSection';
import { GallerySection } from './components/GallerySection';
import { ReviewsSection } from './components/ReviewsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { FaqSection } from './components/FaqSection';
import { PolicySection } from './components/PolicySection';
import { ContactSection } from './components/ContactSection';
import { BottomHotlineSection } from './components/BottomHotlineSection';
import { Footer } from './components/Footer';
import { MobileFloatingCta } from './components/MobileFloatingCta';

const contentData = contentDataRaw as ContentData;

export default function App() {
  useEffect(() => {
    // Set document title
    document.title = `${contentData.company.name} - Sửa chữa & bảo dưỡng điện lạnh Hà Nội`;
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#122033] selection:bg-blue-100 selection:text-[#0b5ed7]">
      {/* 1. Top Hotline bar */}
      <TopHotlineBar company={contentData.company} />

      {/* 2. Site Header */}
      <Header company={contentData.company} navLinks={contentData.navLinks} />

      {/* Main Content Sections */}
      <main id="top" className="flex-grow">
        {/* 3. Hero section */}
        <HeroSection 
          company={contentData.company} 
          trustPills={contentData.trustPills} 
        />

        {/* 4. Quick benefits */}
        <QuickBenefitsSection benefits={contentData.quickBenefits} />

        {/* 5. Services section */}
        <InteractiveServicesSection 
          company={contentData.company} 
          services={contentData.services} 
        />

        {/* 6. Quick Lookup section */}
        <QuickLookupSection lookups={contentData.quickLookups} />

        {/* 7. Price list tables */}
        <PriceListSection 
          company={contentData.company} 
          priceTables={contentData.priceTables} 
        />

        {/* 8. Process Clarity section */}
        <ProcessSection steps={contentData.processSteps} />

        {/* 9. Service Area section */}
        <ServiceAreaSection 
          company={contentData.company} 
          areas={contentData.serviceAreas} 
        />

        {/* 10. Real images / Media section */}
        <GallerySection gallery={contentData.gallery} />

        {/* 11. Customer reviews */}
        <ReviewsSection reviews={contentData.reviews} />

        {/* 12. Actual projects */}
        <ProjectsSection projects={contentData.projects} />

        {/* 13. FAQ */}
        <FaqSection faqs={contentData.faqs} />

        {/* 14. Policy & Transparency */}
        <PolicySection policies={contentData.policies} />

        {/* 15. Contact & Booking Form */}
        <ContactSection company={contentData.company} />
      </main>

      {/* 16. Bottom hotline highlight */}
      <BottomHotlineSection company={contentData.company} />

      {/* 17. Site Footer */}
      <Footer company={contentData.company} />

      {/* 18. Floating Mobile CTA */}
      <MobileFloatingCta company={contentData.company} />
    </div>
  );
}
