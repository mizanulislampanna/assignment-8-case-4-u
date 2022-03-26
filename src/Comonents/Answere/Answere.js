import React from "react";
import "./Answere.css";

const Answere = () => {
  return (
    <div className="answere-conatainer">
      <div className="single-answere">
        <p className="heading-answere">How React Works</p>
        <div className="paragraphs">
          <p>
            React works in declarative code. It Devides design by Components.
            React is one Way binding. React creats a virtual dom and compare
            with real dom. and if it find any difference ,is update there by
            states.React does batch updates.
          </p>
        </div>
      </div>
      <div className="single-answere">
        <p className="heading-answere">Props vs States</p>
        <div className="paragraphs">
          <p>
            Props are used for passing data by one component to another, It pss
            through data like drilling.The parent can pass a props. Props can
            read Only.we can't change it.On the other hand state is still
            variables, but directly initialized and managed by the component.it
            can be initialized by props.
          </p>
        </div>
      </div>
      <div className="single-answere">
        <p className="heading-answere">How UseStates Works</p>
        <div className="paragraphs">
          <p>
            UseState is a Hook that allows you to have state variables in
            functional components. You pass the initial state to this function
            and it returns a variable with the current state value and another
            function to update this value .
          </p>
        </div>
      </div>
    </div>
  );
};

export default Answere;
