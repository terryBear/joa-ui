import { Banner } from "../components/Banner/Banner";
import { CtaBanner } from "../components/Banner/CtaBanner";
import { PageDetail } from "../components/Page/PageDetail/PageDetail";
import { TourLayoutGrid } from "../components/Tours/TourLayouts/TourLayoutGrid";
import { MainAppLayout } from "../layout/Layout";

const Helmet = () => {
  return (
    <head>
      <title>Home</title>
      <meta name="description" content="Home page of Jewel of Africa Safaris" />
      <link rel="icon" href="/favicon.ico" />
    </head>
  );
};

export const Home = () => {
  return (
    <MainAppLayout>
      <Helmet />
      <Banner image="/images/giant-sand-dunes-namib-desert-namibia-2024-10-18-15-16-10-utc.jpg" />
      <TourLayoutGrid />
      <CtaBanner />
      <PageDetail />
    </MainAppLayout>
  );
};
