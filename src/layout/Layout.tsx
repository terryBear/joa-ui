/* eslint-disable @typescript-eslint/no-explicit-any */
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";

export const MainAppLayout = (props: any) => {
  const { children } = props;
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};
