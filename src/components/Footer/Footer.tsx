import { Col, Container, Image, Row } from "react-bootstrap";
import { Divider } from "../../ui-library/Divider";
import { Link } from "react-router";
import { SocialLinks } from "../SocialLinks/SocialLinks";

export const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <div className="footer">
      <Container>
        <Row className="py-5">
          <Col xs={12} md={3} className="mb-4">
            <Image
              src="/business/white-logo.png"
              alt="Logo"
              style={{
                width: 210,
              }}
            />
            <p className="my-4">
              Jewel of Africa Safaris is an award winning, family owned, South
              African, luxury tour operator offering you effortless access to
              personalized, tailor-made safaris in Southern and East Africa.
            </p>
            <p className="m-0">
              <Link to="tel:+18132175479">US Mobile +1 813 217 5479</Link>
            </p>
            <p className="m-0">
              <Link to="tel:+27828218876">SA Mobile +27 82 821 8876</Link>
            </p>
            <p className="m-0">
              <Link to="https://www.google.co.za/maps/place/284+Gouws+Ave,+Wierdapark,+Centurion,+0157/@-25.8592453,28.1322007,17z/data=!3m1!4b1!4m5!3m4!1s0x1e9564c1f1adf3d5:0x3d439411bbcb076f!8m2!3d-25.8592453!4d28.1343894">
                284 Gouws Avenue, Pretoria South Africa, 0157
              </Link>
            </p>
            <p className="m-0">
              <Link to="mailto:travel@joasafaris.com">
                travel@joasafaris.com
              </Link>
            </p>
            <p className="m-0">
              <Link to="https://g.page/joasafaris?gm">Google My Business</Link>
            </p>
          </Col>
          <Col xs={12} md={3} className="mb-4">
            <h6>AFRICAN SAFARIS</h6>
            <p className="m-0">
              <Link to="/destination">Top African Destinations for {date}</Link>
            </p>
            <p className="m-0">
              <Link to="/safari-tour">Top-Rated Safaris & Tours in Africa</Link>
            </p>
            <p className="m-0">
              <Link to="/best-safari-tour">Best Experiences on Safari</Link>
            </p>
            <p className="m-0">
              <Link to="/safari-client-reviews">Our TripAdvisor Reviews</Link>
            </p>
            <h6>IMPORTANT LINKS</h6>
            <p className="m-0">
              <Link to="/destination">Privacy Policy</Link>
            </p>
            <p className="m-0">
              <Link to="/destination">Terms & Conditions</Link>
            </p>
            <p className="m-0">
              <Link to="/destination">Payment</Link>
            </p>
            <p className="m-0">
              <Link to="/destination">African Guide</Link>
            </p>
            <p className="m-0">
              <Link to="/destination">Contact Us</Link>
            </p>
          </Col>
          <Col xs={12} md={3} className="mb-4">
            <h6>BEST SELLING SAFARIS</h6>
            <p className="m-0">
              <Link to="/">Beginners Safari to Luxury South Africa</Link>
            </p>
            <p className="m-0">
              <Link to="/">Highlights of Botswana Safari</Link>
            </p>
            <p className="m-0">
              <Link to="/">Desert Wonders of Namibia Guided Safari</Link>
            </p>
            <p className="m-0">
              <Link to="/">
                Best of Kruger Cape, Town and Victoria Falls Safari
              </Link>
            </p>
            <p className="m-0">
              <Link to="/">Botswana for First Timers</Link>
            </p>
          </Col>
          <Col xs={12} md={3} className="mb-4">
            <h6>TOP SAFARI EXPERIENCES</h6>
            <p className="m-0">
              <Link to="/">Big 5 & Wildlife</Link>
            </p>
            <p className="m-0">
              <Link to="/">Family Friendly</Link>
            </p>
            <p className="m-0">
              <Link to="/">Luxury & Exclusive</Link>
            </p>
            <p className="m-0">
              <Link to="/">Romantic & Honeymoon</Link>
            </p>
            <h6>Social Media</h6>
            <SocialLinks />
            <h6>PARTNERSHIPS</h6>
            <Image
              src="/business/partnerships/SATSA.png"
              alt="Logo"
              style={{
                height: 40,
              }}
            />
          </Col>
        </Row>
        <Divider color="white" />
        <Row>
          <Col xs={12} className="mb-4 text-center">
            <p>© {date} Jewel of Africa Safaris. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
