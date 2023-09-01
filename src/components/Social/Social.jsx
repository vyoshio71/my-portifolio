import "../../index.css";
import { BiLogoLinkedin } from "react-icons/bi";
import { AiOutlineGithub, AiOutlineInstagram } from "react-icons/ai";

export const Social = () => {
  return (
    <div className="flex gap-2 pt-2 lg:pb-2">
      <div className="w-[35px] h-[35px] flex justify-center items-center">
        <a
          target="blank"
          href="https://www.linkedin.com/in/vyoshio71/"
          className=""
        >
          <BiLogoLinkedin
            width={15}
            height={15}
            color="white"
            className="flex justify-center items-center"
          />
        </a>
      </div>

      <div className="w-[35px] h-[35px] flex justify-center items-center">
        <a target="blank" href="https://github.com/vyoshio71">
          <AiOutlineGithub
            width={35}
            height={35}
            color="white"
            className="flex justify-center items-center"
          />
        </a>
      </div>

      <div className="w-[35px] h-[35px] flex justify-center items-center">
        <a target="blank" href="https://www.instagram.com/victor.yoshio/">
          <AiOutlineInstagram
            width={35}
            height={35}
            color="white"
            className="flex justify-center items-center"
          />
        </a>
      </div>
    </div>
  );
};
