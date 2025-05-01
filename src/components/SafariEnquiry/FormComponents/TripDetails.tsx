import { FC, useState } from "react";
import { StepFormTemplateProps } from "../../../types/forms";
import { Form } from "react-bootstrap";
import { MultiSelect } from "primereact/multiselect";
import { DESTINATIONS } from "../../../constants/destinations";
import { Calendar } from "primereact/calendar";
import { Nullable } from "primereact/ts-helpers";
import { Slider } from "primereact/slider";
import { InputNumber } from "primereact/inputnumber";
import { InputSwitch } from "primereact/inputswitch";

const data = {
  title:
    "Together, we’ll shape a distinctive journey that resonates with meaning and leaves a timeless impression.",
  description:
    "Complete the form below to help us understand your travel preferences and create a personalized itinerary that reflects your unique style.",
};

const destination_options = DESTINATIONS.map((destination) => ({
  name: destination.title,
  code: destination.id,
}));

const adultAgeRanges = [
  { name: "18-25", code: "18-25" },
  { name: "26-35", code: "26-35" },
  { name: "36-45", code: "36-45" },
  { name: "46-55", code: "46-55" },
  { name: "56-65", code: "56-65" },
  { name: "66+", code: "66+" },
];
const childAgeRanges = [
  { name: "0-2", code: "0-2" },
  { name: "3-5", code: "3-5" },
  { name: "6-8", code: "6-8" },
  { name: "9-11", code: "9-11" },
  { name: "12-14", code: "12-14" },
  { name: "15-16", code: "15-16" },
];

export const TripDetails: FC<StepFormTemplateProps> = ({
  index,
  handleFormChange,
}) => {
  const [selectedDestinations, setSelectedDestinations] = useState<string[]>(
    []
  );
  const [travelDate, setTravelDate] = useState<Nullable<Date>>(null);
  const [nights, setNights] = useState<number>([5, 45]);
  const [adults, setAdults] = useState<number>(0);
  const [hasChildren, setHasChildren] = useState<boolean>(false);
  const [children, setChildren] = useState<number>(0);
  const [adultAges, setAdultAges] = useState<number[]>([]);
  const [childAges, setChildAges] = useState<number[]>([]);

  return (
    <div className="form-detail">
      <h4>{data.title}</h4>
      <p>{data.description}</p>
      <Form.Group className="mb-4">
        <Form.Label className="fw-bold">
          Where would you like to travel?
        </Form.Label>
        <div>
          <MultiSelect
            value={selectedDestinations}
            onChange={(e) => setSelectedDestinations(e.value)}
            options={destination_options}
            optionLabel="name"
            placeholder="Select Destinations..."
            className="w-50"
          />
        </div>
      </Form.Group>
      <Form.Group className="mb-4">
        <Form.Label className=" fw-bold">
          When would you like to depart?
        </Form.Label>
        <div>
          <Calendar
            value={travelDate}
            onChange={(e) => setTravelDate(e.value)}
            placeholder="Select Departure Date"
            className="w-50"
          />
        </div>
      </Form.Group>
      <Form.Group className="mb-4">
        <div>
          <Form.Label className="fw-bold">
            How many nights on safari?
          </Form.Label>
        </div>
        <div>
          <Slider
            value={nights}
            onChange={(e) => setNights(e.value)}
            range
            min={5}
            max={45}
            step={1}
          />
          <div>
            <Form.Label className="mb-0 mt-2">
              <small>
                <i>*nights in Country</i>
              </small>
            </Form.Label>
          </div>
          <div className="d-flex justify-content-between">
            <small>
              {nights[0]} <sup>Nights</sup>
            </small>
            <small>
              {nights[1] > 45 ? `${nights[1]}+` : nights[1]}
              <sup>Nights</sup>
            </small>
          </div>
        </div>
      </Form.Group>
      <Form.Group className="mb-4">
        <Form.Label className=" fw-bold">
          How many adults will be travelling?
        </Form.Label>
        <div className="d-flex align-items-center">
          <InputNumber
            value={adults}
            onValueChange={(e) => setAdults(e.value)}
            min={0}
            max={100}
            className="w-10"
          />
          <Form.Label className="my-0 ms-5 d-flex align-items-center">
            <InputSwitch
              checked={hasChildren}
              onChange={(e) => setHasChildren(e.value)}
              className="mx-2"
            />
            I'm travelling with children
          </Form.Label>
        </div>
      </Form.Group>
      <Form.Group className="mb-4">
        <Form.Label className=" fw-bold">
          What are the ages of the adults travelling?
        </Form.Label>
        <div>
          <MultiSelect
            value={adultAges}
            onChange={(e) => setAdultAges(e.value)}
            options={adultAgeRanges}
            optionLabel="name"
            placeholder="Select Age Ranges..."
            className="w-50"
          />
        </div>
      </Form.Group>
      {hasChildren && (
        <>
          <Form.Group className="mb-4">
            <Form.Label className=" fw-bold">
              How many children will be travelling?
            </Form.Label>
            <div>
              <InputNumber
                value={children}
                onValueChange={(e) => setChildren(e.value)}
                min={0}
                max={20}
                className="w-10"
              />
            </div>
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Label className=" fw-bold">
              What are the ages of the children travelling?
            </Form.Label>
            <div>
              <MultiSelect
                value={childAges}
                onChange={(e) => setChildAges(e.value)}
                options={childAgeRanges}
                optionLabel="name"
                placeholder="Select Age Ranges..."
                className="w-50"
              />
            </div>
          </Form.Group>
        </>
      )}
    </div>
  );
};
