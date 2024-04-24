import React, { useEffect } from "react";
import { BANNERS } from "../../constants/bannerComponentDisplay";
import styles from "./styles.module.css";
import Carousel from "../../components/carousel/carousel";
import CarouselMenu from "../../components/carousel-menu/carousel-menu";
import Autors from "../../components/authors/Authors";
import OnlineLibrary from "../../components/sectionOnlineLibrary/OnlineLibrary";
import { useDispatch, useSelector } from "react-redux";
import InfoHome from "../../components/infoHome/InfoHome";
import SwiperBooks from "../../components/ui/SwiperBooks/SwiperBooks";
import { getBanners } from "../../features/banners/bannersSlice";
import Banner from "../../components/banners/banner/Banner";
import BannerHeader from "../../components/banners/bannerHeader/BannerHeader";
import { getBooks } from "../../features/Books/BooksSlice";
import ContainerSwiperBookStore from "../../components/containers/containerBookStore/ContainerSwiperBookStore";

function BookStore() {
  const {
    topBooks,
    newBooks,
    newsBookoutlet,
    topPackagesBook,
    loading,
    error,
  } = useSelector((state) => state.books);

  const dispatch = useDispatch();
  useEffect(() => {
    const request = dispatch(getBanners());

    return () => {
      request.abort();
    };
  }, [dispatch]);

  useEffect(() => {
    const request = dispatch(getBooks());

    return () => {
      request.abort();
    };
  }, [dispatch]);

  return (
    <main>
      <BannerHeader />
      <div className={`${styles.container} ${styles.borderContainer}`}>
        <div className={styles.carouselContainer}>
          <CarouselMenu />
          <Carousel />
        </div>
      </div>
      <h1 className={styles.homePageTitle}>Librarie Online</h1>
      <Banner type={BANNERS.firstComponent} />
      <ContainerSwiperBookStore>
        <SwiperBooks
          title={"Noutăți Bookoutlet"}
          viewBook={6}
          books={topBooks}
        />
      </ContainerSwiperBookStore>

      <ContainerSwiperBookStore>
        <SwiperBooks title={"Noutăți"} viewBook={6} books={newsBookoutlet} />
      </ContainerSwiperBookStore>

      <OnlineLibrary books={topBooks} />
      <ContainerSwiperBookStore>
        <SwiperBooks title={"Top cărți"} viewBook={6} books={newBooks} />
      </ContainerSwiperBookStore>
      <Banner type={BANNERS.secondaryComponent} />
      <ContainerSwiperBookStore>
        <SwiperBooks
          viewBook={6}
          title={"Top pachete de cărți"}
          books={topPackagesBook}
        />
      </ContainerSwiperBookStore>
      <Autors />
      <InfoHome />
    </main>
  );
}

export default BookStore;
