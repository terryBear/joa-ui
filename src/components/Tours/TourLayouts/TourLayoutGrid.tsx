import { useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import DummyTours from "../../../datasets/tours.json";
import { Tour } from "../../../types/tours";
import { TourCard } from "../TourCard/TourCard";
import { FilterCard } from "../Filter/FilterCard";
import { FILTERS } from "../../../constants/filters";

export interface TourLayoutGridProps {
  items?: number;
}

export const TourLayoutGrid = ({ items = 2 }: TourLayoutGridProps) => {
  const [tours, setTours] = useState();
  return (
    <Container className="py-5 my-5">
      <Row>
        <Col xs={12} md={4} lg={3} className="mb-4">
          <FilterCard
            filters={FILTERS}
            handleFilterChange={(event: any) => {
              console.log(event);
            }}
          />
        </Col>
        <Col xs={12} md={8} lg={9} className="mb-4">
          <Row>
            {DummyTours.map((tour, index) => (
              <Col xs={12} md={12 / items} className="mb-4" key={index}>
                <TourCard
                  handleClick={(tour) => {
                    console.log(tour);
                  }}
                  tour={tour}
                />
              </Col>
            ))}
          </Row>
          <Row>
            <Col xs={12} className="text-left">
              <Button
                type="submit"
                className="mt-3 px-5"
                size="sm"
                variant="outline-primary"
              >
                Show More
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
