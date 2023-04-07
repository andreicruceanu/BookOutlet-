import React from "react";
import styles from "./styles.module.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import Badges from "../badges/Badges";
import BadgesDiscount from "../badges/BadgesDiscount";
import { API_URL_IMG } from "../../api/api-img";
function BookInfoCarousel({ badges, bookImg, price, name }) {
  return (
    <>
      <Swiper
        style={{ overflow: "visible" }}
        cssMode={true}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        pagination={{
          clickable: true,
          modifierClass: `swiper-pagination-info`,
          bulletClass: `swiper-pagination-bullet ${
            styles[`costum-bullet-bookInfo`]
          }`,
        }}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        {bookImg &&
          bookImg.map((img) => (
            <SwiperSlide style={{ display: "flex" }} key={img.id}>
              <Badges badges={badges} />
              <img
                className={styles.BookInfoCarouselImg}
                width={360}
                height={442}
                src={`${API_URL_IMG}${img.url}`}
                alt={name}
              />
              <BadgesDiscount
                price={price.price}
                oldPrice={price.oldPrice}
                leftPosition={"16px"}
                bottomPosition={"25px"}
              />
            </SwiperSlide>
          ))}

        <div
          className={`swiper-button-prev sw-prev ${styles.swPrevBookInfo}`}
        ></div>
        <div
          className={`swiper-button-next sw-next ${styles.swNextBookInfo}`}
        ></div>
      </Swiper>
    </>
  );
}

export default BookInfoCarousel;
