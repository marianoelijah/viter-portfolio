import React from 'react'

const Header = () => {
  return (
    <section className="bg-light py-6 text-black">
      <div className="container">
        <header className="flex justify-between items-center text-center">
          <div className="left-nav cursor-pointer  hover:border-b border-black font-bold">
            Zhanne Elijah Mariano
          </div>
          <div className="right-nav">
            <ul className="flex gap-5 ">
              <li className="cursor-pointer  hover:border-b border-black font-bold">
                Home
              </li>
              <li className="cursor-pointer  hover:border-b border-black font-bold">
                About
              </li>
              <li className="cursor-pointer  hover:border-b border-black font-bold">
                Hobbies
              </li>
              <li className="cursor-pointer  hover:border-b border-black font-bold">
                Experience
              </li>
              <li className="cursor-pointer  hover:border-b border-black font-bold">
                Skills
              </li>
              <li className="cursor-pointer  hover:border-b border-black font-bold">
                Contact
              </li>
            </ul>
          </div>
        </header>
      </div>
    </section>
  );
}

export default Header