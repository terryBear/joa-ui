import { Container } from "react-bootstrap";
import { PageDetailCarousel } from "./components/PageDetailCarousel";
import { PageDetailHeader } from "./components/PageDetailHeader";
import { PageDetailTabs } from "./components/PageDetailTabs";
import { CAROUSEL } from "../../../constants/carousel";
import { Newsletter } from "../../Newsletter/Newsletter";
import { PageDetailFaq } from "./components/PageDetailFaq";

export const PageDetail = () => {
  return (
    <div className="page-detail">
      <Container className="mt-3 mb-5 py-5">
        <PageDetailHeader />
        <PageDetailCarousel slides={CAROUSEL} />
        <PageDetailTabs />
      </Container>
      <Newsletter />
      <Container>
        <PageDetailFaq />
      </Container>
    </div>
  );
};
