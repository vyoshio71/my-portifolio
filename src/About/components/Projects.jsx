export const Projects = () => {
  return (
    <div className="flex flex-col items-center lg:pt-40 mt-4">
      <h1 className="text-white font-bold text-xl lg:text-4xl">Projetos</h1>
      <div className="flex lg:flex-row flex-col lg:gap-56 gap-10 mt-4 mb-8">
        <div className="flex lg:flex-row items-center flex-col">
          <img
            src="./ReactNative.jpeg"
            alt="React Native APP"
            className="w-[100px] h-[200px]"
          />

          <div className="flex flex-col items-center justify-center gap-1 pl-4 text-white">
            <h1 className="text-xl font-semibold">React Native</h1>
            <p className="text-lg text-center">
              Projeto de finanças desenvolvido em React Native e JsonServer
            </p>
            <a
              target="blank"
              href="https://github.com/vyoshio71/Finance-ReactNative"
            >
              <button className="rounded-lg p-2 bg-blue-500 hover:bg-blue-800 transition duration-300">
                Acesse o repositório
              </button>
            </a>
          </div>
        </div>

        <div className="flex lg:flex-row flex-col items-center">
          <img
            src="./landing-page.png"
            alt="React Native APP"
            className="w-[150px] h-[150px]"
          />

          <div className="flex flex-col items-center justify-center gap-1 pl-4 text-white">
            <h1 className="text-xl font-semibold">Landing Page</h1>
            <p className="text-lg text-center">
              Desafio proposto pela Escola DNC para criação de uma landing page.
            </p>
            <a
              target="blank"
              href="https://github.com/vyoshio71/Project-Landing-Page"
            >
              <button className="rounded-lg p-2 bg-blue-500 hover:bg-blue-800 transition duration-300">
                Acesse o repositório
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
