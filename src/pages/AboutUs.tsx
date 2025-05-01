import { Banner } from "../components/Banner/Banner";
import { Team } from "../components/Team/Team";
import { MainAppLayout } from "../layout/Layout";

export const AboutUs = () => {
  return (
    <MainAppLayout>
      <Banner
        title="Discover the Essence of Jewel of Africa Safaris"
        description="Jewel of Africa was founded in 2004 and has built a solid reputation as a top guided-safari and tour operator through consistent delivery of expertise, flexibility and variety."
        image="/images/JOA_Header_AboutUs.jpg"
      />
      <Team />
    </MainAppLayout>
  );
};
