import React from "react";
import SocialFollow from "../components/SocialFollow";

function Home() {
  return (
    <div className="content content__home">
      <h3 className="content__home-h3">Hello, I'm Ben</h3>
      <p className="content__home--p">
        I'm Full Stack Web Developer with a certificate in Full Stack Web
        Engineering from Columbia University and a background in biology,
        horticulture and landscape design.
      </p>
      <p className="content__home--p">
        For me, the joy of coding lies in finding solutions to problems, solving
        puzzles and self education. I aim to uncover value and significance in
        the process of my work. I am looking for a company to grow with, draw
        from my past experience and love of design, to contribute to my
        prospective work place in meaningful ways.{" "}
      </p>
      <p className="content__home--p"></p>
      <SocialFollow />
    </div>
  );
}

export default Home;
