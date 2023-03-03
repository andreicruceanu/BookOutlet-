import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./styles.module.css";
import "./carousel.css";
import { Link } from "react-router-dom";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import axios from "axios";
import { API_URL_IMG } from "../../api/api-img";

function CarouselSliders() {
  const [dataSliders, setDataSliders] = useState([]);

  useEffect(() => {
    const fetchDataSliders = async () => {
      const response = await axios.get("/sliders.json");
      if (response.status === 200) {
        setDataSliders(response.data);
      }
    };
    fetchDataSliders();
  }, []);
  return (
    <Swiper
      cssMode={true}
      navigation={{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      }}
      pagination={{ clickable: true }}
      mousewheel={true}
      keyboard={true}
      modules={[Navigation, Pagination, Mousewheel, Keyboard]}
      id={styles.mySwiperCarousel}
    >
      {dataSliders.length > 0 &&
        dataSliders.map(({ desktopImageWebp, url, id }) => (
          <SwiperSlide key={id}>
            <Link to={url} className={styles.carouselLinkImg}>
              <picture className={styles.wrapperImg}>
                <img
                  className={styles.carouselImg}
                  src={`${API_URL_IMG}${desktopImageWebp}`}
                  alt="BookOutlet: Librarie (Online) » EDITURA de Carti"
                />
              </picture>
            </Link>
          </SwiperSlide>
        ))}

      <div className="swiper-button-prev sw-prev prevCarousel"></div>
      <div className="swiper-button-next sw-next nextCarousel"></div>
    </Swiper>
  );
}

export default CarouselSliders;
