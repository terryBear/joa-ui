import { Col, Container, Row } from "react-bootstrap";
import { NewsletterForm } from "../Forms/NewsletterForm";

export const Newsletter = () => {
  return (
    <aside className="banner newsletter">
      <div className="banner__content">
        <Container>
          <Row>
            <Col xs={12} md={6} className="text-left">
              <h2 className="text-left">
                Let Jewel of Africa Safaris Help You with Your Next Safari.
              </h2>
              <p className="text-left">
                The expert team at Jewel of Africa Safaris is here to help you
                to plan your tailormade Luxury Treehouse Honeymoon Safari.
                Whether you prefer desert sand, sea or bush experiences, we make
                sure you travel in luxury.
              </p>
            </Col>
            <Col xs={12} md={6} className="banner__form">
              <div className="card">
                <h4>Subscribe Now</h4>
                <p>Subscribe for free resources and news updates.</p>
                <NewsletterForm />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </aside>
  );
};
