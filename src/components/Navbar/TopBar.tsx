import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router";
import { SocialLinks } from "../SocialLinks/SocialLinks";

export const TopBar = () => {
  return (
    <div className="top-bar">
      <Container>
        <Row>
          <Col xs={12} md={2}>
            <div className="top-bar__content">
              <span className="me-3">Find Us:</span>
              <SocialLinks />
            </div>
          </Col>
          <Col xs={12} md={6}>
            <div className="top-bar__content">
              <Link to="mailto:TRAVEL@JOASAFARIS.COM">
                <span className="">TRAVEL@JOASAFARIS.COM</span>
              </Link>
              <Link to="tel:18132175479">
                <span className="">
                  <svg
                    aria-hidden="true"
                    className=""
                    viewBox="0 0 512 512"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"></path>
                  </svg>
                </span>
                <span className="">US +1 813 217 5479</span>
              </Link>
              <Link to="tel:27828218876">
                <span className="">
                  <svg
                    aria-hidden="true"
                    className=""
                    viewBox="0 0 512 512"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"></path>
                  </svg>{" "}
                </span>
                <span className="">SA +27 82 821 8876</span>
              </Link>
            </div>
          </Col>
          <Col xs={12} md={4}>
            <div className="top-bar__content">
              <Link to="/safari-tour">
                <span className="">Award winning safaris</span>
              </Link>
              <span className=""> | </span>
              <Link to="/safari-enquiry">
                <span className="">Enquire Now</span>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
