import { Banner } from "../components/Banner/Banner";
import { CtaBanner } from "../components/Banner/CtaBanner";
import { PageDetail } from "../components/Page/PageDetail/PageDetail";
import { TourLayoutGrid } from "../components/Tours/TourLayouts/TourLayoutGrid";
import { MainAppLayout } from "../layout/Layout";

export const Experiences = () => {
  return (
    <MainAppLayout>
      <Banner
        title="Experience Luxury Safari Escapes Across Africa's Iconic Landscapes"
        description="Tailor your safari bucket-list from top-rated travel opportunities."
        image="/images/city-of-cape-town-south-africa-2024-09-12-19-50-03-utc.jpg"
      />
      <TourLayoutGrid />
      <CtaBanner />
      <PageDetail />
    </MainAppLayout>
  );
};
