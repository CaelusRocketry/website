import React from "react";

const Statistics = props => (
  <section className="container mx-auto">
    <p className="bg-accent text-2xl font-bold inline-block my-8 p-3 text-primary-light">
      {props.title}
    </p>
    <div>
      {props.data.map(elem => (
        <div className="transition p-4 flex justify-between border-b border-gray-200 hover:bg-red-300 hover:text-primary-dark">
          <p>{elem.title}</p>
          <p>{elem.value}</p>
        </div>
      ))}
    </div>
    <br></br>
  </section>
);

export default Statistics;
