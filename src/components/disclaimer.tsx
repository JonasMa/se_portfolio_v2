import * as React from "react";

const Disclaimer: React.FC = () => {
  return (
    <>
      This website is 100% self built in <strong>React</strong> with{" "}
      <strong>NextJS</strong> and <strong>Tailwind CSS</strong>.{" "}
      <a
        href="https://github.com/JonasMa/se-portfolio-v2"
        target="_blank"
        rel="noreferrer"
        className="underline"
      >
        Check it out on my GitHub{" "}
      </a>{" "}
      if you&apos;re interested.
      <br />
      The website design and functionality is heavily inspired by{" "}
      <a
        href="https://brittanychiang.com/"
        target="blank"
        className="underline"
      >
        Brittany Chiang
      </a>
      .
    </>
  );
};

export default Disclaimer;
