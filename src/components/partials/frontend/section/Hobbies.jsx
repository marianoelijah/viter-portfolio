import { imgPath } from "@/components/helpers/functions-general";
import React from "react";

const Hobbies = () => {
  return (
    <section className="bg-green-800 py-16">
      <div className="container">
        <div className="hobbies-wrapper flex justify-between">
          <div className="hobbies-image relative group">
            <p className="absolute left-3  top-3 bg-primary px-4 py-1 rounded-full text-[13px] font-bold z-20 group-hover:opacity-0 transition-opacity">
              READING
            </p>
            <img
              src={`${imgPath}/reading.png`}
              alt=""
              className="rounded-3xl size-[400px] object-cover  group-hover:opacity-0 transition-opacity"
            />
            <div className="absolute group top-3 left-3 text-black p-3 max-w-[425px] w-full max-h-[425px] h-full rounded-3xl bg-white opacity-0  group-hover:opacity-80">
              <h4 className="mb-5">Get To Know Me:</h4>
              <ul className="flex flex-col gap-5">
                <li>Reading is one of my form of escaping to reality</li>
                <li>Fictional stories help me to understand different perspectives and emotions.</li>
                <li>It helps me to reduce Stress and Anxiety</li>
                <li>It really helps me to nurtures the mind, body, and soul. </li>
                <li>Its helps me to know more about the fictional stories and making me to think delusional </li>
              </ul>
            </div>
          </div>
          <div className="hobbies-image relative group">
            <p className="absolute left-3  top-3 bg-primary px-4 py-1 rounded-full text-[13px] font-bold z-20 group-hover:opacity-0 transition-opacity">
              FILMING
            </p>
            <img
              src={`${imgPath}/filming.png`}
              alt=""
              className="rounded-3xl size-[400px] object-cover  group-hover:opacity-0 transition-opacity"
            />
            <div className="absolute group top-3 left-3 text-black p-3 max-w-[425px] w-full max-h-[425px] h-full rounded-3xl bg-white opacity-0  group-hover:opacity-80">
              <h4 className="mb-5">Get To Know Me:</h4>
              <ul className="flex flex-col gap-5">
                <li>I really love taking a pictures</li>
                <li>This images was taken when we go to HongKong to have a family celebration</li>
                <li>That place was so gorgeous</li>
                <li>Also the rides their was so Insane but Enjoyable</li>
              </ul>
            </div>
          </div>
          <div className="hobbies-image relative group">
            <p className="absolute left-3  top-3 bg-primary px-4 py-1 rounded-full text-[13px] font-bold z-20 group-hover:opacity-0 transition-opacity">
              EXPLORING
            </p>
            <img
              src={`${imgPath}/exploring-1.jpg`}
              alt=""
              className="rounded-3xl size-[400px] object-cover  group-hover:opacity-0 transition-opacity"
            />
            <div className="absolute group top-3 left-3 text-black p-3 max-w-[425px] w-full max-h-[425px] h-full rounded-3xl bg-white opacity-0  group-hover:opacity-80">
              <h4 className="mb-5">Get To Know Me:</h4>
              <ul className="flex flex-col gap-5">
                <li>This photo was taken when we explore the places in HongKong and Macau</li>
                <li>I really enjoy taking adventure on any trip that we go, it's really fun</li>
                <li>Having this trip was a daydream to me</li>
                <li>And having a new memories unlock was so perfectly</li>
              </ul>
            </div>
          </div>

          {/* <div className="aboutme-text text-white max-w-[800px] flex flex-col justify-center text-justify">
            <h1 className="mb-5">Hobbies</h1>
            <p className="leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
              adipisci ipsa perspiciatis delectus fugit quae, maxime
              repellendus. Reiciendis alias quis magnam recusandae at distinctio
              atque. Officia impedit perferendis distinctio minus incidunt vitae
              enim deleniti explicabo eum quos quae, accusamus, ea nisi
              reprehenderit hic aspernatur in sequi corporis dicta dolorum
              veniam non laborum esse quod. Quos a officia aperiam magni
              facilis?
            </p>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Hobbies;