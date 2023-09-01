import { AiOutlineGithub, AiOutlineInstagram } from "react-icons/ai";
import { BiLogoLinkedin } from "react-icons/bi";

export const SocialMedia = () => {
  return (
    <div className="flex flex-col items-center gap-2 mt-4 mb-4 lg:mt-0 lg:mb-0 lg:ml-36">
      <h1 className="text-white font-bold lg:text-2xl lg:font-bold">
        Encontre me em
      </h1>
      <p className="text-white lg:text-md">
        Sinta-se à vontade para{" "}
        <span className="text-purple-500">se conectar</span> comigo
      </p>
      <div className="flex flex-row justify-center gap-4">
        <div className="lg:w-[50px] lg:h-[50px] w-[35px] h-[35px] border border-white bg-white rounded-full flex justify-center items-center hover:bg-opacity-90 hover:backdrop-blur-md lg:bg-opacity-0">
          <a
            target="blank"
            href="https://www.linkedin.com/in/vyoshio71/"
            className=""
          >
            <BiLogoLinkedin
              color="black"
              className="flex justify-center items-center sm:w-[15px] sm:h-[15px] lg:w-[30px] lg:h-[30px]"
            />
          </a>
        </div>

        <div className="lg:w-[50px] lg:h-[50px] w-[35px] h-[35px] border border-white bg-white rounded-full flex justify-center items-center">
          <a target="blank" href="https://github.com/vyoshio71">
            <AiOutlineGithub
              color="black"
              className="flex justify-center items-center sm:w-[15px] sm:h-[15px] lg:w-[30px] lg:h-[30px]"
            />
          </a>
        </div>

        <div className="lg:w-[50px] lg:h-[50px] w-[35px] h-[35px] border border-white bg-white rounded-full flex justify-center items-center">
          <a target="blank" href="https://www.instagram.com/victor.yoshio/">
            <AiOutlineInstagram
              color="black"
              className="flex justify-center items-center sm:w-[15px] sm:h-[15px] lg:w-[30px] lg:h-[30px]"
            />
          </a>
        </div>
      </div>
    </div>
  );
};
