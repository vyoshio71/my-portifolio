export const Profile = () => {
  return (
    <div className="lg:flex lg:flex-row lg:justify-evenly lg:mt-40 flex flex-col-reverse mt-20 items-center">
      <div className="flex flex-col items-center lg:gap-4 gap-2">
        <h1 className="text-white font-bold lg:text-4xl text-xl mt-4">
          Saiba quem <span className="text-purple-500">sou eu</span>{" "}
        </h1>
        <div className="text-center">
          <p className="text-white text-lg font-medium ">
            Olá, Sou <span className="text-purple-500">Victor Yoshio</span> do{" "}
            <span className="text-purple-500">Paraná</span> -{" "}
            <span className="text-purple-500">Brasil</span>.
            <br />
            Estudante de Análise e Desenvolvimento de Sistemas na Universidade
            Unifil. <br />
            Sempre fui apaixonado por tecnologia, atualmente meu foco é
            desenvolvedor full-stack. <br />
            Procuro sempre estar estudando e me atualizando e aprendendo novas
            linguagens e tecnologias do mercado.
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <img
          src="./animated-img.gif"
          alt="animated logo"
          className="rounded-2xl w-[50%] h-[50%]"
        />
      </div>
    </div>
  );
};
