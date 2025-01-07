import React from 'react'
import Header from './Partials-2/Header';
import AboutMe from './section/AboutMe';
import Footer from './Partials-2/Footer';
import Banner from './section/Banner';
import Hobbies from './section/Hobbies';
import Experience from './section/Experience';
import Skills from './section/Skills';



const Main = () => {
  return (
    <>
      <Header />
      <Banner/>
      <AboutMe/>
      <Hobbies/>
      <Experience/>
      <Skills/>
      <Footer />
    </>
  );
}

export default Main