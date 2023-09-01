import "../../index.css";
import Typed from "react-typed";

export const Header = () => {
  return (
    <div className="flex flex-col-reverse justify-center items-center lg:flex-row lg:gap-4 lg:pl-6">
      <div className="overflow-hidden rounded-full cursor-pointer hover:rotate-3 transform transition-transform duration-300">
        <img
          className="w-[325px] h-[310px] rounded-3xl text-center mb-4 lg:rounded-full object-cover"
          src="./perfil4.jpeg"
          alt="perfil"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-purple-500 opacity-0 hover:opacity-70 transition-opacity duration-300 rounded-full"></div>
      </div>

      <div>
        <h1 className="text-white text-2xl font-semibold mt-16 mb-1 lg:text-3xl">
          <Typed
            strings={["Olá, Sou Victor Yoshio"]}
            typeSpeed={150}
            backSpeed={150}
            loop
          />
        </h1>

        <p className="text-gray-500 text-center font-medium mb-4 lg:text-lg">
          Desenvolvedor de Software |{" "}
          <span className="font-medium text-purple-500">Full-Stack</span>
        </p>
      </div>
    </div>
  );
};
