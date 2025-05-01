import { Col, Container, Image, Row } from "react-bootstrap";
import { Divider } from "../../ui-library/Divider";
import { PageDetailCarousel } from "../Page/PageDetail/components/PageDetailCarousel";
import { CAROUSEL } from "../../constants/carousel";

export const Team = () => {
  return (
    <div className="meet-the-team">
      <Container className="py-5 my-5">
        <Row>
          <Col xs={12} className="text-center">
            <h4>Introducing Kobus & Neil</h4>
            <p className="mb-5">
              Jewel of Africa Safaris is an award winning, family business run
              by a father and son team, Kobus and Neil, who have spent their
              lives exploring Africa’s wild spaces. The company’s professional
              service is built on a love for Africa, which is shared with guests
              through the team’s extensive knowledge and insight into its
              precious wildlife, proud people and rich history and heritage. We
              pride ourselves on meticulous communication and attention to
              detail is the essence of our commitment to creating a memorable
              personalized safari experience for guests. Jewel of Africa is a
              registered member of the Southern African Tourism Services
              Association (SATSA) and carries SATIB general public liability
              insurance.
            </p>
            <Divider />
          </Col>
        </Row>
        <Row>
          <Col xs={12} className="text-center">
            <h5>Tailored African Safari & Tours</h5>
            <p className="mb-5">
              The team at Jewel of Africa Safaris has handpicked destinations,
              accommodation and activities based on first-hand experience of the
              very best that Africa has to offer. The company specializes in
              client-focused itineraries that can be tailored to meet unique
              safari specifications.
            </p>
          </Col>
        </Row>
        <Row>
          <Col xs={12} className="text-center">
            <h5>Africa’s Top Safari Destinations</h5>
            <p className="mb-5">
              Jewel of Africa Safaris has close to 20 years’ experience in
              tailoring unique African safaris and can advise you on the best
              time to visit a specific destination or how best to combine
              activities and experiences based on your travel time and
              expectations. From boating in Botswana to gorilla trekking in
              Uganda or visiting the Victoria Falls in Zimbabwe, Jewel of Africa
              can help you to navigate the A to Z of Africa’s best safari
              destinations.
            </p>
          </Col>
        </Row>
        <Row>
          <Col xs={12} className="text-center">
            <h5>Unique Safari Experiences</h5>
            <p className="mb-5">
              Africa’s unique wildlife, scenic splendour and diverse cultures
              are what makes it a top safari destination. Dive the Indian Ocean
              or hike Table Mountain. Helicopter over the Victoria Falls, a
              UNESCO heritage site, or see gorillas in their habitat. From
              honeymoon picnics and luxury accommodation to family-friendly
              safaris and fine food and dining, enjoy the warmth, romance and
              thrill of top African destinations. Choose from, or combine,
              customized experiences for a lifetime of memories. Jewel of Africa
              specializes in customizing personalized itineraries so that you
              get the most from your African safari.
            </p>
          </Col>
        </Row>
      </Container>
      <PageDetailCarousel slides={CAROUSEL} size="xl" />
      <Container className="py-5 my-5">
        <Row>
          <Col xs={12} className="text-center">
            <h4>A Team That Cares</h4>
            <p className="mb-5">
              The Jewel of Africa Safaris’ team prides itself on a commitment to
              helping you experience the best of our beautiful continent through
              care, communication and professional service.
            </p>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={3} className="text-center mb-5">
            <Image
              src="/business/team/Kobus-de-Jonge-Founder.jpg.webp"
              alt="Kobus-de-Jonge-Founder"
              className="img-fluid  mb-3"
            />
            <h5>Kobus de Jonge</h5>
            <h6 className="font-family-button fw-normal">Founder</h6>
          </Col>
          <Col xs={12} md={3} className="text-center mb-5">
            <Image
              src="/business/team/Neil-de-Jonge-Managing-Director.jpg.webp"
              alt="Kobus-de-Jonge-Founder"
              className="img-fluid mb-3"
            />
            <h5>Neil de Jonge</h5>
            <h6 className="font-family-button fw-normal">Managing Director</h6>
          </Col>
          <Col xs={12} md={3} className="text-center mb-5">
            <Image
              src="/business/team/Ina-1.png.webp"
              alt="Kobus-de-Jonge-Founder"
              className="img-fluid mb-3"
            />
            <h5>Ina de Jonge</h5>
            <h6 className="font-family-button fw-normal">Accounts</h6>
          </Col>
          <Col xs={12} md={3} className="text-center mb-5">
            <Image
              src="/business/team/Theo.png.webp"
              alt="Kobus-de-Jonge-Founder"
              className="img-fluid mb-3"
            />
            <h5>Theo Swarts</h5>
            <h6 className="font-family-button fw-normal">
              Digital & Marketing
            </h6>
          </Col>
          <Col xs={12} md={3} className="text-center mb-5">
            <Image
              src="/business/team/Elize-Loubser-Sales-Operations-Manager.jpg.webp"
              alt="Kobus-de-Jonge-Founder"
              className="img-fluid mb-3"
            />
            <h5>Elize Loubser</h5>
            <h6 className="font-family-button fw-normal">
              Sales & Operations Manager
            </h6>
          </Col>
          <Col xs={12} md={3} className="text-center mb-5">
            <Image
              src="/business/team/Adele-Fouche-Reservations-Travel-Specialist.jpg.webp"
              alt="Kobus-de-Jonge-Founder"
              className="img-fluid mb-3"
            />
            <h5>Adele Fouche</h5>
            <h6 className="font-family-button fw-normal">
              Reservations & Travel Specialist
            </h6>
          </Col>
        </Row>
        <Row>
          <Col xs={12} className="text-center py-5 my-5">
            <h4>What Our Clients Are Saying About Jewel of Africa Safaris</h4>
            <p className="mb-5">
              Indulge in the ultimate luxury with our exclusive African safari
              experiences, consistently awarded 5-star reviews and recognized
              with the prestigious TripAdvisor Travelers’ Choice Awards.
              Discover the reasons why travelers from around the globe regard us
              as the leading choice for a remarkable African luxury safari.
            </p>
          </Col>
        </Row>
        <Row>
          <Col xs={12} className="text-center pt-5">
            <h4>Meet Everyone’s Favorite Safari & Guide Expert</h4>
            <p className="mb-0">
              Jewel of Africa Safaris’ MD Neil de Jonge explains what sets the
              company apart and why our slogan is, “You may leave Africa, but
              Africa will never leave you”.
            </p>
          </Col>
        </Row>
      </Container>
      <iframe
        className="main-video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        title="Niel De Jonge v2"
        width="640"
        height="360"
        src="https://www.youtube.com/embed/qntgiuwtMIk?controls=1&amp;rel=0&amp;playsinline=0&amp;cc_load_policy=0&amp;autoplay=0&amp;enablejsapi=1&amp;origin=https%3A%2F%2Fuat.joasafaris.com&amp;widgetid=1&amp;forigin=https%3A%2F%2Fuat.joasafaris.com%2Faboutus%2F&amp;aoriginsup=1&amp;gporigin=https%3A%2F%2Fuat.joasafaris.com%2Froot%2F&amp;vf=1"
        id="widget2"
        data-gtm-yt-inspected-8="true"
      ></iframe>
    </div>
  );
};
