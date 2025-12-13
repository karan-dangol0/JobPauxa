import React from 'react';
import Nav from './components/Nav'; // import your navbar component
import Footer from './Footer';                   // import your footer component

const App = () => {
  return (
    <div className="text-red-500 min-h-screen flex flex-col">
      <Nav />  {/* Navbar at the top */}

      <div className="flex-grow">
        App
      </div>

      <Footer />  {/* Footer at the bottom */}
    </div>
  );
};

export default App;
