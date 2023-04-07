import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
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
import { API_URL_IMG } from "../../api/api-img";
import { getSliders } from "../../features/sliders/sliderSlice";
import LoadingSliders from "../loadingCarousel/LoadingSliders";

function CarouselSliders() {
  const dispatch = useDispatch();
  const { sliders, isLoading, isError } = useSelector((state) => state.sliders);

  useEffect(() => {
    dispatch(getSliders());
  }, [dispatch]);

  if (isLoading) {
    return <LoadingSliders />;
  }
  if (isError) {
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
      {sliders.length > 0 &&
        sliders.map(({ desktopImage, url, id }) => (
          <SwiperSlide key={id}>
            <Link to={url} className={styles.carouselLinkImg}>
              <picture className={styles.wrapperImg}>
                <img
                  className={styles.carouselImg}
                  src={`${API_URL_IMG}${desktopImage}`}
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
