import "../../index.css";
import { Social } from "../Social/Social";

export const Footer = () => {
  new Date().getFullYear();
  return (
    <div className="lg:flex lg:justify-around lg:items-center lg:h-[55px] h-[90px] bg-gradient-to-r from-[#212c3f] to-[#1a2b3d] bg-opacity-30">
      <div></div>
      <div className="flex justify-center items-center">
        <h3 className="text-white lg:text-lg pt-3 lg:pb-2.5 lg:pl-40">
          <b>Copyright © </b>
          {new Date().getFullYear()} Victor Yoshio
        </h3>
      </div>

      <div className="flex justify-center items ">
        <Social />
      </div>
    </div>
  );
};
