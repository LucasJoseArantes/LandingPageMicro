import React from "react";
import { useEffect, useState } from "react";
import TitleSubtitle from "./titleSubtitle";
import "../styles/sectionCustomer.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Autoplay } from "swiper/modules"; // Adicione o módulo Autoplay
import tesimonaljson from "../jsons/testimonials.json";


const TestimonialCard = ({ name, testimonial, logo }) => {
  return (
    <div className="testimonial-card">
      <p className="testimonial-text">{testimonial}</p>
      <div className="testimonial-footer">
        <img src={logo} alt={name} className="testimonial-logo" />
        <h3 className="testimonial-name">{name}</h3>
      </div>
    </div>
  );
};

const Customer = () => {
  const [slidesPerView, setSlideperView] = useState(4);

  useEffect(() => {
    
    function handleResize() {
      console.log(window.innerWidth);
      if (window.innerWidth < 820) {
        setSlideperView(1);
      }
      else if (window.innerWidth < 1024) {
        setSlideperView(1);
      }
      else if (window.innerWidth < 1440) {
        setSlideperView(3);
      }
      else {
        setSlideperView(4);
      }
    }
  
    handleResize();
  
    window.addEventListener("resize", handleResize);
  
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  
  
  }, []);

  return (
    <section className="sectionImage sectionCustomer" id="sectionCustomer">
      <TitleSubtitle
        title="Depoimentos"
        subtitle="Saiba quem são nossos parceiros, e o que têm a dizer sobre nós"
      />
      <div className="swiperContainer">
        <Swiper
          className="mySwiper"
          spaceBetween={35}
          slidesPerView={slidesPerView}
          navigation={{}}
          modules={[Navigation, Autoplay]} // Inclua o módulo Autoplay
          style={{ padding: "0px 35px" }}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        >
          {tesimonaljson.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <TestimonialCard {...testimonial} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Customer;
