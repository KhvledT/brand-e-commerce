import AnnouncementBar from "@/components/AnnouncementBar";
import HeaderNav from "@/components/HeaderNav";
import HeroBanner from "@/components/HeroBanner";
import CategoryGrid from "@/components/CategoryGrid";
import ProductCarousel from "@/components/ProductCarousel";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import UtilitySection from "@/components/UtilitySection";
import PageFooter from "@/components/PageFooter";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <AnnouncementBar />
      <HeaderNav />
      <main>
        <HeroBanner />
        <CategoryGrid />
        <ProductCarousel />
      </main>
      <PageFooter />
    </div>
  );
}
