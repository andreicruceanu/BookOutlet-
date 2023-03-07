import { AiFillStar, AiOutlineHeart } from "react-icons/ai";
import { CiPercent } from "react-icons/ci";
import { FaPhoneAlt, FaTruck } from "react-icons/fa";
import { IoInformationCircleSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import BookInfoCarousel from "../../components/bookInfoCarousel/BookInfoCarousel";
import BookStar from "../../components/bookStar/BookStar";
import styles from "./styles.module.css";
import BtnAddToCart from "../../images/adauga-in-cos.svg";

function BookInfo() {
  return (
    <main>
      <div className={styles.container}>
        <div className={styles.wrap}>
          <div className={styles.carousel}>
            <BookInfoCarousel />
          </div>
          <div className={styles.details}>
            <div className={styles.detailsTitle}>
              <Link to={"/"}>Constantin Dulcan </Link>
              <Link to={"/"}>Florentina Fântânaru</Link>
              <h1 className={styles.bookTitle}>Calea vindecarii</h1>
              <span className={styles.bookSubTitle}>
                Pacea dintre inima si minte
              </span>
            </div>
            <div className={styles.detailsInfo}>
              <div className={styles.detailsInfoRating}>
                <div className={styles.detailsInfoStar}>
                  <BookStar rating={3} />
                </div>
                <Link to={"#text"} className={styles.detailsInfoReview}>
                  5 (6 review-uri)
                </Link>
              </div>
              <div className="detailsInfoPrice">
                <div className={styles.oldPrice}>
                  <span className={styles.oldPriceValue}>PRP: 79 Lei</span>
                  <span className={styles.oldPriceInfoWrap}>
                    <IoInformationCircleSharp />
                    <span className={styles.priceInfo}>
                      Acesta este Prețul Recomandat de Producător. Prețul de
                      vânzare al produsului este afișat mai jos.
                    </span>
                  </span>
                </div>
                <div className={styles.newPrice}>
                  <span className={styles.newPriceValue}>69 Lei</span>
                </div>
              </div>
            </div>
            <div className={styles.detailsPricing}>
              <div className={styles.detailsPricingBox}>
                <div className={styles.detailsBonus}>
                  <div className={styles.detailsBonusText}>
                    <span className={styles.textBook}>
                      Bestseller New York Times și USA Today. Una din Cele mai
                      bune cărți din 2022 pe Amazon. Nominalizare Goodreads
                      pentru Cea mai bună carte de dragoste din 2022
                    </span>
                  </div>
                  <br />
                  <span className={styles.textBook}>
                    Cum ai vedea rolurile din Bodyguard inversate? Adică el - un
                    actor celebru, protejat de ea - agent de protecție VIP.
                    Amuzantă și savuroasă, cu personaje vii gata să se desprindă
                    din paginile cărții pentru a-ți rămâne în minte și inimă,
                    aceasta este cea mai recentă poveste de la autoarea care a
                    vândut milioane de exemplare la nivel international.
                  </span>
                </div>
                <div className={styles.detailsBonusSticker}>
                  <p>Bonus lansare: transport la 4,9 lei</p> <CiPercent />
                </div>
              </div>
              <div className={styles.detailsPricingBox}>
                <div className={styles.priceButtonWrap}>
                  <Link className={styles.btnAddToCart} to="/">
                    <img src={BtnAddToCart} alt="btn-add-to-cart" />
                    <p>Adauga in cos</p>
                  </Link>
                  <button className={styles.btnFavorite}>
                    <AiOutlineHeart />
                    <p>Adaugă la favorite</p>
                  </button>
                </div>
                <div className={styles.infoDeliveryWrap}>
                  <div className={styles.infoDeliveryIteam}>
                    <FaPhoneAlt className={styles.iconPhone} />
                    <span className={styles.infoPhone}>
                      <p>Comanda prin telefon</p>
                      <p>0756 111 111</p>
                    </span>
                    <span className={styles.infoProgram}>
                      <p>L-V 9:30 - 17:30</p>
                    </span>
                  </div>

                  <div className={styles.infoDeliveryIteam}>
                    <FaTruck className={styles.iconTruck} />
                    <span className={styles.infoDelivery}>
                      <p>Livrare in Romania</p>
                      <p className={styles.green}>1-3 zile lucratoare</p>
                    </span>
                  </div>
                  <div className={styles.infoDeliveryIteam}>
                    <FaPhoneAlt />
                    <span>
                      <p>Comanda prin telefon</p>
                      <p>0756XXXXXX</p>
                    </span>
                    <span>
                      <p>L-V 9:30 - 17:30</p>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default BookInfo;
