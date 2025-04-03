import React from "react";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import Hero from "./Hero";
import Cards from "./Cards";

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* NavBar */}
      <NavBar />
      {/* main section */}
      <main className="flex-grow">
        <section>
          <Hero />
          {/* Create Job Post Cards */}
          <Cards />
        </section>
      </main>

      {/* Footer section */}
      <Footer />
    </div>
  );
};

export default HomePage;
