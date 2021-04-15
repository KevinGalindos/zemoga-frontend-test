import { Header } from "../../components/Header/Header";
import { Celebrities } from "../../components/Celebrities/Celebrities";
import { Footer } from "../../components/Footer/Footer";
import { AddNewName } from "../../components/AddNewName/AddNewName";

export const Home = () => {
  return (
    <div className="Home">
      <Header />
      <div className="container content">
        <Celebrities />
        <AddNewName />
        <Footer />
      </div>
    </div>
  );
};
