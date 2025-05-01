import { FilterOptions } from "../types/filters";

export const FILTERS: FilterOptions[] = [
  {
    title: "Destinations",
    key: "destinations",
    value: ["Tanzania", "Kenya", "Uganda"],
    component: "checkbox",
  },
  {
    title: "Experiences",
    key: "experiences",
    value: ["Safari", "Beach", "Cultural"],
    component: "checkbox",
  },
  {
    title: "Duration",
    key: "duration",
    value: ["3 Days", "5 Days", "7 Days"],
    component: "range",
  },
  {
    title: "Comfort Levels",
    key: "comfort_level",
    value: ["Luxury", "Mid-range", "Budget"],
    component: "checkbox",
  },
  {
    title: "Accomodation",
    key: "accomodation",
    value: ["Camping", "Lodge", "Hotel"],
    component: "checkbox",
  },
  {
    title: "Amenities",
    key: "amenities",
    value: ["Wi-Fi", "Air Conditioning", "Swimming Pool"],
    component: "checkbox",
  },
];
