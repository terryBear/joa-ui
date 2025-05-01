import { createBrowserRouter, RouterProvider } from "react-router";
import { Home } from "../pages/Home";
import { AboutUs } from "../pages/AboutUs";
import { SafariTours } from "../pages/SafariTours";
import { SafariTourCost } from "../pages/SafariToursCost";
import { ContactUs } from "../pages/ContactUs";
import { SafariEnquiry } from "../pages/SafariEnquiry";
import { Experiences } from "../pages/Experiences";
import { Destinations } from "../pages/Destinations";
import { TourPage } from "../pages/TourPage";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
    index: true,
  },
  {
    path: "/about-us",
    children: [
      {
        Component: AboutUs,
        index: true,
      },
    ],
  },
  {
    path: "/experiences",
    Component: Experiences,
    index: true,
  },
  {
    path: "/safari-tour",
    Component: SafariTours,
    index: true,
  },
  {
    path: "/safari-tour/cost",
    Component: SafariTourCost,
    index: true,
  },
  {
    path: "/best-safari-tour",
    Component: SafariTours,
    index: true,
  },
  {
    path: "/best-country-safari",
    Component: SafariTours,
    index: true,
  },
  {
    path: "/all-inclusive-african-safari",
    Component: SafariTours,
    index: true,
  },
  {
    path: "/destination",
    children: [
      {
        Component: Destinations,
        index: true,
      },
      {
        path: "/destination/:slug",
        Component: TourPage,
      },
    ],
  },
  {
    path: "/contact-us",
    Component: ContactUs,
    index: true,
  },
  {
    path: "/safari-enquiry",
    Component: SafariEnquiry,
    index: true,
  },
]);

export const SafariRouter = () => {
  return <RouterProvider router={router} />;
};
