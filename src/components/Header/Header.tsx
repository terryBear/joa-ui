import { NavBar } from "../Navbar/Navbar";
import { TopBar } from "../Navbar/TopBar";

export const Header = () => {
  return (
    <div className="main-header-top">
      <TopBar />
      <NavBar />
    </div>
  );
};
