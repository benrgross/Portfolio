import React from "react";
import SocialFollow from "../components/SocialFollow";

function Home() {
  return (
    <div className="content content__home">
      <h3 className="content__home-h3">Hello, I'm Ben</h3>
      <p className="content__home--p">
        I'm Full Stack Web Developer with a certificate in Full Stack Web
        Engineering from Columbia University and a background in biology,
        horticulture and landscape design. I have proven to be capable of
        understanding problems from their minute details to their global
        impacts.
      </p>
      <p className="content__home--p">
        I relentlessly work on my projects to provide my colleagues with clear
        and efficient code that they could understand and collaborate with in
        order to develop succinct and well functioning websites.
      </p>
      <p className="content__home--p">
        Finding solutions to problems, solving puzzles and self education are
        amongst the most enjoyable parts of coding for me. I love to seek value
        and significance in the process of my work. I seek to implement these
        values into my applications by utilizing my design and business
        management experience.
      </p>
      <p className="content__home--p">
        While there is an overwhelming amount of information out there to learn,
        I am looking for an employer who can help guide me down the rabbit holes
        of information so that I may more effectively develop my skills as a
        coder, as well as contribute to the business in meaningful ways.
      </p>
      <SocialFollow />
    </div>
  );
}

export default Home;
