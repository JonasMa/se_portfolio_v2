import React from "react";
import Chips from "./chips";
import jobs from "../content/jobs/jobs.json";

export default function Jobs() {
  return (
    <div className="flex flex-col md:grid md:grid-cols-2-auto gap-x-8 gap-y-4">
      {jobs.map(({ company, duration, description, technologies }, index) => [
        <div
          key={`${index}-0`}
          className="whitespace-nowrap flex justify-between md:block"
        >
          <h4 className="font-sans font-bold">{company}</h4>
          <p className="text-blue-light">
            {duration.from}
            {duration.to && " - " + duration.to}
          </p>
        </div>,
        <div
          key={`${index}-1`}
          className="text-m list-disc marker:text-blue-light"
        >
          {description}
        </div>,
        <Chips
          key={`${index}-2`}
          className="col-start-2"
          chips={technologies}
        />,
      ])}
      <a
        className="font-sans text-blue-light underline col-start-2"
        href="/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        title="Opens resume PDF in a new tab."
      >
        &rarr; &nbsp; Download my resume
      </a>
    </div>
  );
}