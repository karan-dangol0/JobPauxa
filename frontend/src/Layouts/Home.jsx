import { Outlet } from "react-router-dom";
import Nav from "./../components/Nav";
import Footer from "./../components/Footer";
const Home = () => {
  return (
      <div className="flex flex-col items-center ">
          <Nav />
      <Outlet />
      <Footer />
    </div>

  );
};

export default Home;