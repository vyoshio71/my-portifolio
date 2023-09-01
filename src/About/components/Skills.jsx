import { BiLogoMongodb, BiLogoReact, BiLogoTypescript } from "react-icons/bi";
import { BsGit } from "react-icons/bs";
import { DiJavascript1, DiNodejs } from "react-icons/di";

export const Skills = () => {
  return (
    <div className="flex flex-col justify-center items-center lg:pt-40 mt-4">
      <h1 className="text-white lg:text-4xl font-bold text-xl">Habilidades</h1>
      <div className="flex flex-row justify-center p-4 lg:gap-8 gap-2.5">
        <div className="sm:p-2 border-2 border-purple-400 hover:border-4 hover:border-purple-600 hover:scale-110 transition duration-300 ease-in-out rounded-lg lg:p-8 ">
          <BiLogoReact
            color="white"
            className="lg:h-[70px] lg:w-[70px] w-[30px] h-[30px]"
          />
        </div>
        <div className="sm:p-2 border-2 border-purple-400 hover:border-2 hover:border-purple-600 hover:scale-110 transition duration-300 ease-in-out rounded-lg lg:p-8">
          <DiJavascript1
            color="white"
            className="lg:h-[70px] lg:w-[70px] w-[30px] h-[30px]"
          />
        </div>
        <div className="sm:p-2 border-2 border-purple-400 hover:border-2 hover:border-purple-600 hover:scale-110 transition duration-300 ease-in-out rounded-lg lg:p-8">
          <DiNodejs
            color="white"
            className="lg:h-[70px] lg:w-[70px] w-[30px] h-[30px]"
          />
        </div>
        <div className="sm:p-2 border-2 border-purple-400 hover:border-2 hover:border-purple-600 hover:scale-110 transition duration-300 ease-in-out rounded-lg lg:p-8">
          <BiLogoTypescript
            color="white"
            className="lg:h-[70px] lg:w-[70px] w-[30px] h-[30px]"
          />
        </div>
        <div className="sm:p-2 border-2 border-purple-400 hover:border-2 hover:border-purple-600 hover:scale-110 transition duration-300 ease-in-out rounded-lg lg:p-8">
          <BiLogoMongodb
            color="white"
            className="lg:h-[70px] lg:w-[70px] w-[30px] h-[30px]"
          />
        </div>
        <div className="sm:p-2 border-2 border-purple-400 hover:border-2 hover:border-purple-600 hover:scale-110 transition duration-300 ease-in-out rounded-lg lg:p-8">
          <BsGit
            color="white"
            className="lg:h-[70px] lg:w-[70px] w-[30px] h-[30px]"
          />
        </div>
      </div>
    </div>
  );
};
