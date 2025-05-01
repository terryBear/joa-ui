import { Banner } from "../components/Banner/Banner";
import { CtaBanner } from "../components/Banner/CtaBanner";
import { PageDetail } from "../components/Page/PageDetail/PageDetail";
import { TourLayoutGrid } from "../components/Tours/TourLayouts/TourLayoutGrid";
import { MainAppLayout } from "../layout/Layout";

export const SafariTourCost = () => {
  return (
    <MainAppLayout>
      <Banner />
      <TourLayoutGrid />
      <CtaBanner />
      <PageDetail />
    </MainAppLayout>
  );
};
