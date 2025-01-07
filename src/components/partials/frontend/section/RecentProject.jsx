import { imgPath } from "@/components/helpers/functions-general";
import React from "react";

const RecentProjects = () => {
  return (
    <section className="bg-black py-16">
      <div className="container">
        <div className="projecttexts mb-8">
          <h1>Certificates and Projects</h1>
        </div>
        <div className="recentprojects-wrapper grid grid-cols-[450px_,3fr] gap-5  ">
          <div className="recentcertificates-image grid grid-rows-3 gap-5 max-h-[600px]">
            {Array.from(Array(3).keys()).map((i) => (
              <div className="relative group">
                <p className="absolute left-3  top-3 bg-primary px-4 py-1 rounded-full text-[10px] font-bold z-20 group-hover:opacity-0 transition-opacity">
                  Click Anywhere
                </p>
                <img
                  src={`${imgPath}/about-2.jpg`}
                  alt=""
                  className="rounded-3xl  object-cover  group-hover:opacity-0 transition-opacity max-h-[180px] w-full"
                />
                <div className="absolute group top-3 left-3 text-black p-3  rounded-3xl bg-white opacity-0  group-hover:opacity-80">
                  <h4 className="mb-5">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Cumque, reprehenderit.
                  </h4>
                </div>
              </div>
            ))}
          </div>
          <div className="recentprojects-image ">
            <div className="projects-image grid grid-cols-3  gap-5">
              {Array.from(Array(9).keys()).map((i) => (
                <div className="relative group">
                  <p className="absolute left-3  top-3 bg-primary px-4 py-1 rounded-full text-[10px] font-bold z-20 group-hover:opacity-0 transition-opacity">
                    Click Anywhere
                  </p>
                  <img
                    src={`${imgPath}/about-2.jpg`}
                    alt=""
                    className="rounded-3xl  object-cover  group-hover:opacity-0 transition-opacity max-h-[180px] w-full"
                  />
                  <div className="absolute group top-3 left-3 text-black p-3  rounded-3xl bg-white opacity-0  group-hover:opacity-80">
                    <h4 className="mb-5">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Cumque, reprehenderit.
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecentProjects;