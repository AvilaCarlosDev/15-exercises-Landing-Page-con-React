import React from "react";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Card from "./Card";

const Home = () => {
  const cards = [
    {
      title: "Card Title 1",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.",
      imageUrl: "https://picsum.photos/seed/picsum1/500/325",
    },
    {
      title: "Card Title 2",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo magni sapiente, tempore debitis beatae culpa natus architecto.",
      imageUrl: "https://picsum.photos/seed/picsum2/500/325",
    },
    {
      title: "Card Title 3",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.",
      imageUrl: "https://picsum.photos/seed/picsum3/500/325",
    },
    {
      title: "Card Title 4",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo magni sapiente, tempore debitis beatae culpa natus architecto.",
      imageUrl: "https://picsum.photos/seed/picsum4/500/325",
    },
  ];

  return (
    <>
      <Navbar />
      <Jumbotron />
      <div className="container mb-5">
        <div className="row g-4">
          {cards.map((c, idx) => (
            <div className="col-12 col-sm-6 col-lg-3" key={idx}>
              <Card {...c} buttonText="Find Out More!" buttonUrl="#" />
            </div>
          ))}
        </div>
      </div>
      <footer className="bg-dark text-white py-4 mt-auto">
        <div className="container text-center">
          <small>Copyright © Your Website 2025</small>
        </div>
      </footer>
    </>
  );
};

export default Home;
