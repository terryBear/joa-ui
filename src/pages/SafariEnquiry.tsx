import { JSX, useState } from "react";
import { TripDetails } from "../components/SafariEnquiry/FormComponents/TripDetails";
import { TravelStyle } from "../components/SafariEnquiry/FormComponents/TravelStyle";
import { Budget } from "../components/SafariEnquiry/FormComponents/Budget";
import { ContactInfo } from "../components/SafariEnquiry/FormComponents/ContactInfo";
import { Button, Container, Form } from "react-bootstrap";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import { Banner } from "../components/Banner/Banner";

import { Steps } from "primereact/steps";
import { MainAppLayout } from "../layout/Layout";

export interface StepWizardProps {
  index: number;
  label: string;
  element: JSX.Element;
}

export const SafariEnquiry = () => {
  const [activeStep, setActiveStep] = useState(1);

  const handleFormChange = (number) => {};

  const [steps, setSteps] = useState<StepWizardProps[]>([
    {
      index: 1,
      label: "Trip Details",
      element: <TripDetails index={1} handleFormChange={handleFormChange} />,
    },

    {
      index: 2,
      label: "Travel Style",
      element: <TravelStyle index={2} handleFormChange={handleFormChange} />,
    },

    {
      index: 3,
      label: "Budget",
      element: <Budget index={3} handleFormChange={handleFormChange} />,
    },

    {
      index: 4,
      label: "Contact Info",
      element: <ContactInfo index={4} handleFormChange={handleFormChange} />,
    },
  ]);

  return (
    <MainAppLayout>
      <Banner
        title="Start Your African Safari Journey Today"
        description="For more information on our safaris and tours, and to receive an obligation-free quote for your dream safari, and start your journey today!"
        image="/images/rolling-hills-of-uganda-and-rwanda-2024-10-17-04-32-41-utc.jpg"
      />
      <div className="safari-enquiry">
        <Container className="py-5">
          <Form
            onSubmit={(e) => {
              e.preventDefault();
              e.stopPropagation();
              console.log("Form submitted", e);
            }}
          >
            <div className="card">
              <Steps
                model={steps}
                activeIndex={activeStep - 1}
                readOnly={true}
                className="m-2 pt-4"
                onSelect={(e) => {
                  setActiveStep(e.index + 1);
                }}
              />
              {steps.map((step) => (
                <div
                  key={step.index}
                  className={`step ${
                    activeStep === step.index ? "active" : ""
                  }`}
                >
                  {step.element}
                </div>
              ))}
              <div className="d-flex justify-content-between mt-4 p-4">
                <div>
                  {activeStep !== 1 && (
                    <Button
                      variant="outline-secondary"
                      disabled={activeStep === 1}
                      className="px-5"
                      size="sm"
                      onClick={() => {
                        setActiveStep(activeStep - 1);
                      }}
                    >
                      Previous
                    </Button>
                  )}
                </div>
                <Button
                  variant="primary"
                  onClick={() => {
                    if (activeStep < steps.length) {
                      setActiveStep(activeStep + 1);
                    } else {
                      // Submit the form
                    }
                  }}
                  className="px-5"
                  size="sm"
                  type={activeStep === steps.length ? "submit" : "button"}
                >
                  {activeStep === steps.length ? "Submit" : "Next"}
                </Button>
              </div>
            </div>
          </Form>
        </Container>
      </div>
    </MainAppLayout>
  );
};
