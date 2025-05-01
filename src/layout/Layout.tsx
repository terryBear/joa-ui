import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";

export const MainAppLayout = (props) => {
  const { children } = props;
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};
