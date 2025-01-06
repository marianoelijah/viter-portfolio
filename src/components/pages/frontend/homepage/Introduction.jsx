import React from 'react'

const Introduction = () => {
  return (
    <section>
      <div className="container">
        <div className="wrapper flex flex-col items-center justify-center h-screen bg-cover bg-center">
          <div className="title text-center text-white">
            <h1 className="text-4xl font-bold mb-4">Hello, I'm Elias</h1>
            <p className="text-lg mb-4">Get Ready With Me</p>
            <a
              href="#about"
              className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Learn More
            </a>
          </div>
          <div className="Cards">
            <img src="" alt="" />
            <div></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Introduction
