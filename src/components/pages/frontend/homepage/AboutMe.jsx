import { imgPath } from "@/components/helpers/functions-general";
import React from "react";

const AboutMe = () => {
  return (
    <section className="about py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">About Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <img
              src={`${imgPath}/about-3.jpg`}
              alt=""
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <p className="text-lg">
              Hello there! I'm Zhanne Elijah Mariano, i was born in Makati
              Medical Center i am 22 yrs old. my hobbies is playing mobile games
              and watching scary movie. plus i also like to do is listening
              music to energize my soul. In this academic and training. I am a
              highly motivated in any projects and task with a passion for
              building robust and scalable applications. I have a strong
              foundation in and am proficient in various technologies such as
              creating a dashboard I am eager to contribute my skills and
              experience to a dynamic team and work on challenging projects that
              push the boundaries of technology.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

function Hobbies() {
  return (
    <section id="hobbies" className="py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">Hobbies</h2>
        <div className="flex flex-wrap justify-center items-center">
          <div className="p-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8 text-blue-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            ></svg>
            <img src={`${imgPath}/about-3.jpg`} alt="" className="" />
            <p className="mt-2 font-bold">Coding</p>
          </div>
          <div className="p-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8 text-green-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            ></svg>
            <img src={`${imgPath}/exploring-3.jpg`} alt="" />
            <p className="mt-2 font-bold">Reading</p>
          </div>
          <div className="p-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8 text-yellow-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            ></svg>
            <img src={`${imgPath}/exploring-3.jpg`} alt="" className="" />
            <p className="mt-2 font-bold">Traveling</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">Experience</h2>
        <div className="timeline">
          <div className="timeline-item">
            <span className="timeline-dot"></span>
            <h3 className="text-xl font-bold">Frontend Intern</h3>
            <span className="text-gray-500">
              FBS | San Pablo City | 2024 - Present
            </span>
            <ul className="list-disc ml-5 mt-2">
              <li>
                Developed and maintained backend APIs using Node.js and
                Express.js.
              </li>
              <li>
                Implemented RESTful APIs and integrated with frontend
                applications.
              </li>
              <li>Worked on database design and optimization.</li>
            </ul>
          </div>
          <div className="timeline-item">
            <span className="timeline-dot"></span>
            <h3 className="text-xl font-bold">Backend Intern</h3>
            <span className="text-gray-500">
              FBS | San Pablo City | 2024 - Present
            </span>
            <ul className="list-disc ml-5 mt-2">
              <li>Gained practical experience in backend development.</li>
              <li>Contributed to the development of company projects.</li>
              <li>Learned and applied new technologies and best practices.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default { AboutMe, Hobbies, Experience };
