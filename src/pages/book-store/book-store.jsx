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
import InfoHome from "../../components/infoHome/InfoHome";
import ModalNoUser from "../../components/modalNoUser/modalNoUser";
import { useDispatch, useSelector } from "react-redux";
import { setModalNoUser } from "../../features/auth/authSlice";

function BookStore() {
  const dispatch = useDispatch();
  const modalNoUser = useSelector((state) => state.auth.modalNoUser);

  const handleClose = () => dispatch(setModalNoUser(false));

  return (
    <main>
      <ModalNoUser
        textHeader={"Loghează-te"}
        textContent={
          "Pentru a putea adauga la favorite o carte trebuie sa intri in contul tau BookOutlet"
        }
        open={modalNoUser}
        onClose={handleClose}
      />
      <BannerHeader fetchURL={requests.requestBanner} />
      <div className={`${styles.container} ${styles.borderContainer}`}>
        <div className={styles.carouselContainer}>
          <CarouselMenu />
          <Carousel />
        </div>
      </div>
      <h1 className={styles.homePageTitle}>Librarie Online</h1>
      <Banner fetchURL={requests.requestBanner} type={BANNERS.firstComponent} />
      <section className={styles.newProducts}>
        <div className={styles.containerSwiperBooks}>
          <SwiperBooks
            title={"Noutăți Bookzone"}
            fetchURL={requests.requestNewBookzone}
            viewBook={6}
          />
        </div>
      </section>
      <section className={styles.newProducts}>
        <div className={styles.containerSwiperBooks}>
          <SwiperBooks
            title={"Noutăți"}
            fetchURL={requests.requestNewBook}
            viewBook={6}
          />
        </div>
      </section>
      <OnlineLibrary />
      <section className={styles.newProducts}>
        <div className={styles.containerSwiperBooks}>
          <SwiperBooks
            title={"Top cărți"}
            fetchURL={requests.requestNewBookzone}
            viewBook={6}
          />
        </div>
      </section>
      <Banner
        fetchURL={requests.requestBanner}
        type={BANNERS.secondaryComponent}
      />
      <section className={styles.newProducts}>
        <div className={styles.containerSwiperBooks}>
          <SwiperBooks
            viewBook={6}
            title={"Top pachete de cărți"}
            fetchURL={requests.requestNewBookzone}
          />
        </div>
      </section>
      <Autors />
      <InfoHome />
    </main>
  );
}

export default BookStore;
