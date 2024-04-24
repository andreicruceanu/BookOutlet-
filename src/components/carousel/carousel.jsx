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

import { BiError } from "react-icons/bi";
import { getImageUrl } from "../../utils/images";
import useFetchCached from "../../hooks/useFetchCached";
import endpoints from "../../api/endpoints";

const LoadingSliders = ({ isError }) => {
  return (
    <>
      {isError ? (
        <div className={styles.loaderContainer}>
          <div className={styles.error}>
            <BiError />
          </div>
        </div>
      ) : (
        <div className={styles.loaderContainer}>
          <div className={styles.loaderStyles}></div>
        </div>
      )}
    </>
  );
};

function CarouselSliders() {
  const { data: sliders, isLoading, error } = useFetchCached(endpoints.sliders);

  if (isLoading) {
    return <LoadingSliders />;
  }
  if (error) {
    return <LoadingSliders isError={true} />;
  }

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
      {sliders?.length > 0 &&
        sliders.map(({ desktopImage, url, id }) => (
          <SwiperSlide key={id}>
            <Link to={url} className={styles.carouselLinkImg}>
              <picture className={styles.wrapperImg}>
                <img
                  className={styles.carouselImg}
                  src={getImageUrl(desktopImage)}
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
