import React from "react";
import { useLocation } from "react-router-dom";
import Card1 from "./Cardes/Card1"; // Adjust the path if necessary
import Card2 from "./Cardes/Card2";
import Card3 from "./Cardes/Card3";
import Card4 from "./Cardes/Card4";
import Card5 from "./Cardes/Card5";
import Card6 from "./Cardes/Card6";
import Card8 from "./Cardes/Card8";
import Card9 from "./Cardes/Card9";
import Card10 from "./Cardes/Card10";
import Card11 from "./Cardes/Card11";
import Card12 from "./Cardes/Card12";
const Cards = () => {
  const location = useLocation();
  const {
    name,
    id,
    schoolname,
    image,
    dob,
    phone,
    class: studentClass,
  } = location.state || {};

  return (
    <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-full">
      <h1 className="text-center pt-9 text-pink-200 text-4xl italic">
        Select Your Card
      </h1>
      <div className="grid grid-cols-3 gap-y-2 p-6">
        <Card1
          name={name}
          id={id}
          schoolname={schoolname}
          image={image}
          dob={dob}
          phone={phone}
        />
        <Card2
          name={name}
          id={id}
          schoolname={schoolname}
          image={image}
          dob={dob}
          phone={phone}
          class={studentClass}
        />
        <Card3
          name={name}
          id={id}
          schoolname={schoolname}
          image={image}
          dob={dob}
          phone={phone}
          class={studentClass}
        />
        <Card4
          name={name}
          id={id}
          schoolname={schoolname}
          image={image}
          dob={dob}
          phone={phone}
          class={studentClass}
        />
        <Card5
          name={name}
          id={id}
          schoolname={schoolname}
          image={image}
          dob={dob}
          phone={phone}
          class={studentClass}
        />
        <Card6
          name={name}
          id={id}
          schoolname={schoolname}
          image={image}
          dob={dob}
          phone={phone}
          class={studentClass}
        />

        <Card8
          name={name}
          id={id}
          schoolname={schoolname}
          image={image}
          dob={dob}
          phone={phone}
          class={studentClass}
        />
        <Card9
          name={name}
          id={id}
          schoolname={schoolname}
          image={image}
          dob={dob}
          phone={phone}
          class={studentClass}
        />
        <Card10
          name={name}
          id={id}
          schoolname={schoolname}
          image={image}
          dob={dob}
          phone={phone}
          class={studentClass}
        />
        <Card11
          name={name}
          id={id}
          schoolname={schoolname}
          image={image}
          dob={dob}
          phone={phone}
          class={studentClass}
        />
        <Card12
          name={name}
          id={id}
          schoolname={schoolname}
          image={image}
          dob={dob}
          phone={phone}
          class={studentClass}
        />
      </div>
    </div>
  );
};

export default Cards;
