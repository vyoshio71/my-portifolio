import "../../index.css";

export default function Languages() {
  return (
    <div className="flex flex-col items-center mt-4 gap-2 lg:pt-8 lg:gap-2">
      <h1 className="text-white font-bold lg:text-xl">Idiomas</h1>
      <div className="flex flex-col items-center">
        <div className="flex flex-row gap-2">
          <img
            className="lg:w-[30px] lg:h-[30px]"
            src="./us.png"
            alt="ingles"
          />
          <p className="text-white md:text-lg">
            <b>EN</b> - Básico
          </p>
        </div>

        <div className="flex flex-row gap-2">
          <img
            className="lg:w-[30px] lg:h-[30px]"
            src="./br.png"
            alt="portugues"
          />
          <p className="text-white md:text-lg">
            <b>PT-BR</b> - Língua Nativa
          </p>
        </div>
      </div>
    </div>
  );
}
