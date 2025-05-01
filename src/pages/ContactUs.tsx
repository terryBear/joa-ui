import { Col, Container, Row } from "react-bootstrap";
import { Banner } from "../components/Banner/Banner";
import { ContactForm } from "../components/Forms/ContactForm";
import { MainAppLayout } from "../layout/Layout";

export const ContactUs = () => {
  return (
    <MainAppLayout>
      <Banner
        title="Connect with Jewel of Africa Safaris"
        description="With almost 20-years in the trade, Jewel of Africa Safaris has the inspiration and expertise to help you enjoy Africa at its finest. The team responds swiftly to queries and communicates directly with you."
      />
      <div className="card py-5">
        <Container className="my-5">
          <Row>
            <Col xs={12} md={6} className="text-left">
              <h6 className="mb-4">Contact Jewel of Africa Safaris</h6>
              <ContactForm />
            </Col>
            <Col xs={12} md={6} className="text-left">
              <h6>How Can We Help?</h6>
              <p>
                Connect with us via email or phone. Jewel of Africa Safaris’
                dedicated team can respond to your queries, or offer advice, in
                Dutch, English, German or Afrikaans. Contact us now.
              </p>
              <h6 className="mt-5">Contact Jewel of Africa Safaris</h6>
              <p>
                <a
                  href="https://www.google.co.za/maps/place/284+Gouws+Ave,+Wierdapark,+Centurion,+0157/@-25.8592453,28.1322007,17z/data=!3m1!4b1!4m5!3m4!1s0x1e9564c1f1adf3d5:0x3d439411bbcb076f!8m2!3d-25.8592453!4d28.1343894"
                  target="_blank"
                  className="text-decoration-none"
                >
                  284 Gouws Ave
                  <br />
                  Centurion
                  <br />
                  South Africa
                  <br />
                  0157
                </a>
              </p>
              <p>
                <a
                  href="tel:+27 12 656 1831"
                  target="_blank"
                  className="text-decoration-none"
                >
                  SA Office: +27 12 656 1831
                </a>
              </p>
              <p>
                <a
                  href="tel:+1 813 217 5479"
                  target="_blank"
                  className="text-decoration-none"
                >
                  US Mobile: +1 813 217 5479
                </a>
              </p>
              <p>
                <a
                  href="tel:+27 82 821 8876"
                  target="_blank"
                  className="text-decoration-none"
                >
                  Emergency: +27 82 821 8876
                </a>
              </p>
              <p>
                <a
                  href="mail:travel@joasafaris.com"
                  target="_blank"
                  className="text-decoration-none"
                >
                  Email: travel@joasafaris.com
                </a>
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </MainAppLayout>
  );
};
