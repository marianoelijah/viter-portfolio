import { imgPath } from "@/components/helpers/functions-general";
import React from "react";

const AboutMe = () => {
  return (
    <section className="bg-green-950 py-16">
      <div className="container">
        <div className="aboutme-wrapper flex justify-between">
          <div className="aboutme-image relative group">
            <p className="absolute left-3  top-3 bg-primary px-4 py-1 rounded-full text-[10px] font-bold z-20 group-hover:opacity-0 transition-opacity">
              Click Anywhere
            </p>
            <img
              src={`${imgPath}/about-me.png`}
              alt=""
              className="rounded-3xl size-[450px] object-cover  group-hover:opacity-0 transition-opacity"
            />
            <div className="absolute group top-3 left-3 text-black p-3 max-w-[425px] w-full max-h-[425px] h-full rounded-3xl bg-white opacity-0  group-hover:opacity-80">
              <h4 className="mb-5">Personal Information:</h4>
              <ul className="flex flex-col gap-5">
                <li>Name: Zhanne Elijah Mariano</li>
                <li>Age: 22</li>
                <li>Sex: Male</li>
                <li>Height: 5'11</li>
                <li>Contact Number: 09051927620</li>
                <li>
                  Address: Brgy. Tagbakin, Tiaong, Quezon{" "}
                </li>
              </ul>
            </div>
          </div>
          <div className="aboutme-text text-white max-w-[800px] flex flex-col justify-center text-justify">
            <h1 className="mb-5">About Me</h1>
            <p className="leading-relaxed">
              My personality has depends on what people treat me. but i'm a good 
              person and a lot of people see me as a kind and innocent one but 
              the truth is they never know who i really am. 
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
              adipisci ipsa perspiciatis delectus fugit quae, maxime
              repellendus. Reiciendis alias quis magnam recusandae at distinctio
              atque. Officia impedit perferendis distinctio minus incidunt vitae
              enim deleniti explicabo eum quos quae, accusamus, ea nisi
              reprehenderit hic aspernatur in sequi corporis dicta dolorum
              veniam non laborum esse quod. Quos a officia aperiam magni
              facilis?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;