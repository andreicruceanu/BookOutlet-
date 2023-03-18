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
function BookInfoCarousel() {
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
        <SwiperSlide style={{ display: "flex" }}>
          <Badges
            badges={[
              { id: 0, displayName: "BestSeller", icon: "icon-besteller" },
            ]}
          />
          <img
            className={styles.BookInfoCarouselImg}
            width={360}
            height={442}
            src={
              "https://assets.bkz.ro/upload/produse/ZKKJMLDWH/bodyguard-katherine-center-bkz-bg1.webp"
            }
            alt=""
          />
          <BadgesDiscount
            price={43}
            oldPrice={67}
            leftPosition={"16px"}
            bottomPosition={"25px"}
          />
        </SwiperSlide>
        <SwiperSlide style={{ display: "flex" }}>
          <Badges
            badges={[
              { id: 0, displayName: "BestSeller", icon: "icon-besteller" },
            ]}
          />
          <img
            className={styles.BookInfoCarouselImg}
            width={360}
            height={442}
            src={
              "https://assets.bkz.ro/upload/produse/ZKKJMLDWH/bodyguard-katherine-center-bkz-bg2.webp"
            }
            alt=""
          />
        </SwiperSlide>

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
