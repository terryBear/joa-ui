import { FC, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

export interface FaqItemProps {
  key: string;
  question: string;
  answer: string;
}

interface FaqProps {
  items: FaqItemProps[];
}

export const Faq: FC<FaqProps> = ({ items = [] }) => {
  const [activeKey, setActiveKey] = useState<string | null>("0");
  return (
    <Container fluid className="faq-list-container">
      <Row>
        <Col xs={12} md={4} className="mb-4">
          <ul>
            {items.map((item) => (
              <li key={item.key}>
                <Button
                  variant="link"
                  onClick={() => setActiveKey(item.key)}
                  className={`${activeKey === item.key ? "active" : ""}`}
                >
                  {item.question}
                </Button>
              </li>
            ))}
          </ul>
        </Col>
        <Col xs={12} md={8} className="mb-4">
          {items.map((item) => (
            <div
              key={item.key}
              className={`faq-answer ${activeKey === item.key ? "active" : ""}`}
            >
              {item.answer}
            </div>
          ))}
        </Col>
      </Row>
    </Container>
  );
};
