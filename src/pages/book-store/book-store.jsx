import React from "react";
import { BANNERS } from "../../constants/bannerComponentDisplay";
import styles from "./styles.module.css";
import Carousel from "../../components/carousel/carousel";
import CarouselMenu from "../../components/carousel-menu/carousel-menu";
import Banner from "../../components/banner/Banner";
import BannerHeader from "../../components/bannerHeader/BannerHeader";
import Autors from "../../components/authors/Authors";
import OnlineLibrary from "../../components/sectionOnlineLibrary/OnlineLibrary";
import SwiperBooks from "../../components/SwiperBooks/SwiperBooks";
import requests from "../../constants/requests";

function BookStore() {
  return (
    <main>
      <BannerHeader fetchURL={requests.requestBanner} />
      <div className={styles.container}>
        <div className={styles.carouselContainer}>
          <CarouselMenu />
          <Carousel />
        </div>
      </div>
      <h1 className={styles.homePageTitle}>Librarie Online</h1>
      <Banner fetchURL={requests.requestBanner} type={BANNERS.firstComponent} />
      <SwiperBooks
        title={"Noutăți Bookzone"}
        fetchURL={requests.requestNewBookzone}
      />
      <SwiperBooks title={"Noutăți"} fetchURL={requests.requestNewBook} />
      <OnlineLibrary />
      <SwiperBooks title={"Top cărți"} fetchURL={requests.requestNewBookzone} />
      <Banner
        fetchURL={requests.requestBanner}
        type={BANNERS.secondaryComponent}
      />

      <SwiperBooks
        title={"Top pachete de cărți"}
        fetchURL={requests.requestNewBookzone}
      />
      <Autors />
    </main>
  );
}

export default BookStore;
