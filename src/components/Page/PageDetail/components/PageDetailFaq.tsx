import { Col, Container, Row } from "react-bootstrap";
import { FAQ } from "../../../../constants/faq";
import { Faq } from "../../../Faq/Faq";
import { Divider } from "../../../../ui-library/Divider";

export const PageDetailFaq = () => {
  return (
    <div className="page-detail-faq">
      <Container>
        <Row>
          <Col xs={12} md={12} className="mb-4">
            <h3>More Information About Luxury Safaris</h3>
            <p>
              A Luxury Safari offers tailored itineraries catering to each
              guest’s preferences and interests. Safari itineraries are
              customized to ensure every moment of the safari is meaningful and
              memorable, whether it is a private game drive, a guided bush walk,
              or a helicopter ride over the savannah. Guests participate in
              activities such as wildlife photography, hot air balloon safaris,
              or cultural visits, all while receiving personalized service
              throughout their journey. A Luxury African Safari stands out for
              its ability to seamlessly blend the excitement of wildlife
              encounters with the indulgence of fine living, offering a truly
              exceptional way to experience Africa’s natural beauty.
            </p>
            <Divider />
          </Col>
          <Col xs={12} md={12} className="mb-4">
            <Faq items={FAQ} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};
