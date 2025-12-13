import React from "react";
import Nav from "./components/Nav"; // Navbar
import Footer from "./Footer"; // Footer
import { Button } from "./components/ui/button";
import RegistrationForm from "./components/RegistrationForm"; // import your RegistrationForm

const App = () => {
  return (
    <div className="text-red-500 min-h-screen flex flex-col">
      <Nav /> {/* Navbar at the top */}

      <div className="flex-grow">
        {/* Optional Button */}
        <div className="p-4">
          <Button>Click me</Button>
        </div>

        {/* Registration Form */}
        <RegistrationForm />
      </div>

      <Footer /> {/* Footer at the bottom */}
    </div>
  );
};

export default App;
