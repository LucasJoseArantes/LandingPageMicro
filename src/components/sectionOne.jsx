import Button from "./button";
import "../styles/sectionOne.css";

const SectionOne = () => {
  return (
    <section className="sectionImage sectionOne">
     <div className="mainTitle">
        <h1>
          Sua oportunidade de oferecer mais segurança e qualidade está aqui.</h1>
        <Button text="Seja um parceiro" nextSection="#sectionTwo" />
      </div>
    </section>
  );
};

export default SectionOne;
