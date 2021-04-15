import { Navbar } from "../Header/Navbar/Navbar";
import { Banner } from "../Header/Banner/Banner";
import { Counter } from "./Counter/Counter";

export const Header = () => {
  return (
    <div className="Header">
      <Navbar />
      <Banner />
      <Counter />
    </div>
  );
};
