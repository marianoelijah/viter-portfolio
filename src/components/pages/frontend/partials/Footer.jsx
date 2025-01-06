import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="pt-20 !text-black">
      <div className="container">
        <div className="grid md:grid-cols-[1.5fr,_1fr,_1fr,_.8fr] gap-5">
          <div className="footer-box max-w-[400px]">
            <h6 className="mb-5">Our Story</h6>
            <p>
              Our origin story is more of an origin statement. We wanted to
              design what we wanted to wear – so we did.
            </p>
            <p>
              Since then, that philosophy has become more about the guy we
              design for and the impact he is looking to make. Our signature
              pieces, like the Sureshot Jogger and the Flintlock Tee, have come
              to stand for ingenuity, creativity and a constant drive to move
              forward and beyond expectations.
            </p>
            <p>
              We keep our impact on the environment low and our standards of
              craftsmanship and customer service high.
            </p>
            <p>
              We’re for good times and even greater design. And we create what
              you want to wear because we wear it too. We are Zanerobe.
            </p>
          </div>

          
          <div className="footer-box">
            <h6 className="mb-15">Unlock 15% Off Your Order</h6>
            <p className="mb-12">
              Sign up to our newsletter to unlock 15% off your order and to be
              first to hear about new drops plus get VIP access to exclusive
              releases, re-stocks, sales & more.
            </p>

            <Link to="/" className="p-4 pb-5 bg-black text-white">
              Sign Up
            </Link>

            <ul className="flex gap-5 pt-10 pb-10">
              <li>
                <Link to="/">
                  <Facebook strokeWidth={1} size={18} />
                </Link>
              </li>
              <li>
                <Link to="/">
                  <Twitter strokeWidth={1} size={18} />
                </Link>
              </li>
              <li>
                <Link to="/">
                  <Instagram strokeWidth={1} size={18} />
                </Link>
              </li>
              <li>
                <Link to="/">
                  <Youtube strokeWidth={1} size={18} />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <p className="text-center py-1 text-xs mb-0">
          © 2024 ZANEROBE. Designed in Sydney, Australia.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
