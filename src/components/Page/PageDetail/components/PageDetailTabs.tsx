import { Tabs, Tab, Row, Col, Button } from "react-bootstrap";
import { Destination } from "../../../../types/destinations";
import { DESTINATIONS } from "../../../../constants/destinations";
import TOURS from "../../../../datasets/tours.json";
import { TourCard } from "../../../Tours/TourCard/TourCard";
import { Divider } from "../../../../ui-library/Divider";
import { Link } from "react-router";

export const PageDetailTabs = () => {
  return (
    <div className="page-detail-tabs">
      <Tabs
        defaultActiveKey={DESTINATIONS[0].slug}
        id="destinations-tabs"
        className="my-3"
        fill
      >
        {DESTINATIONS.map((destination: Destination) => (
          <Tab
            eventKey={destination.slug}
            title={destination.title}
            key={destination.slug}
          >
            <h4 className="mt-5">{destination.title}</h4>
            <p className="mb-5">{destination.description}</p>
            <Row>
              {TOURS.map((tour, index) => (
                <Col xs={12} md={4} className="mb-4" key={tour.slug}>
                  <TourCard
                    handleClick={(tour) => {
                      console.log(tour);
                    }}
                    tour={tour}
                  />
                </Col>
              ))}
            </Row>
            <h5 className="mt-5 mb-3">More about {destination.title}</h5>
            <p>{destination.long_description}</p>

            <Link to={`/destination/${destination.slug}`}>
              <Button
                type="button"
                className="mt-3 px-5 mb-5"
                size="sm"
                variant="outline-primary"
              >
                View {destination.title} tours
              </Button>
            </Link>
            <Divider />
          </Tab>
        ))}
      </Tabs>
    </div>
  );
};
