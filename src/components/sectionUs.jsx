import React from "react";
import Button from "./button";
import Pictures from "./pictures";
import "../styles/sectionUs.css";
import picturesUs from '../jsons/picturesUs.json';

const SectionUs = () => {

    console.log(picturesUs);
  
  return (
    <section className="sectionUs" id="sectionUs">
      <div className="usMainContainer">
        <div className="containerUs">
          <div>
            <h2 className='sectionTitle'>Sobre nós</h2>
            <p>
              Denys é a voz e a alma da DMVoz! Com vasta experiência no mercado
              publicitário, atua como locutor, produtor e diretor, oferecendo
              serviços de alta qualidade diretamente de seu Home Studio.
            </p>
          </div>
          <div>
            <h4>Missão </h4>
            <p>
              Nossa missão é fornecer serviços de locução, produção e direção
              que agreguem valor ao mercado publicitário. Com dedicação e
              profissionalismo, buscamos criar conteúdos que envolvam e impactem
              o público, ajudando nossos clientes a alcançarem seus objetivos de
              comunicação.            </p>
          </div>
          <div>
            <h4>Visão</h4>
            <p>
              Ser reconhecido como uma referência no mercado publicitário,
              destacando-se pela qualidade, inovação e comprometimento em todos
              os projetos. Almejamos expandir nosso alcance, consolidando
              parcerias duradouras e inspirando confiança em todos os segmentos
              em que atuamos.
            </p>
          </div>
        </div>

        <Pictures
          mainPath={picturesUs.mainPath}
          side1Path={picturesUs.side1Path}
          side2Path={picturesUs.side2Path}
          bottom1Path={picturesUs.bottom1Path}
          bottom2Path={picturesUs.bottom2Path}
          bottom3Path={picturesUs.bottom3Path}
        />
      </div>

      <Button text="Estou Interessado" nextSection=".sectionCustomer" />
    </section>
  );
};

export default SectionUs;
