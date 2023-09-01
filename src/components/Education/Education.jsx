import "../../index.css";

export const Education = () => {
  return (
    <div className="flex flex-col items-center mt-4 gap-2 lg:gap-2">
      <h1 className="text-white font-bold lg:text-lg">Formações</h1>
      <div className="flex flex-col items-center">
        <h2 className="text-white flex flex-row gap-2 lg:text-lg">
          <img src="./formacao.png" /> <b>Unifil</b>
        </h2>
        <h3 className="text-white text-center lg:text-lg">
          Análise e Desenvolvimento de Sistemas
        </h3>

        <div className="flex flex-col items-center mt-2">
          <h2 className="text-white flex flex-row gap-2 lg:text-lg">
            <img src="./formacao.png" /> <b>Escola DNC</b>
          </h2>
          <h3 className="text-white lg:text-lg">Web Development Full-Stack</h3>
        </div>
      </div>
    </div>
  );
};
