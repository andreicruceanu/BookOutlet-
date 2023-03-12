import { AiOutlineHeart, AiTwotoneStar } from "react-icons/ai";
import { HiArrowLongRight } from "react-icons/hi2";
import { CiPercent } from "react-icons/ci";
import { GoBook } from "react-icons/go";
import { FaPhoneAlt, FaTruck } from "react-icons/fa";
import { IoBookOutline, IoInformationCircleSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import BookInfoCarousel from "../../components/bookInfoCarousel/BookInfoCarousel";
import BookStar from "../../components/bookStar/BookStar";
import styles from "./styles.module.css";
import BtnAddToCart from "../../images/adauga-in-cos.svg";
import easyBox from "../../images/easybox-square.jpg";
import ModalEasyBox from "../../components/modal-EasyBox/ModalEasyBox";
import { useEffect, useState } from "react";
import Review from "./Review.jsx";
import axios from "axios";

function BookInfo() {
  const [isOpen, setIsOpen] = useState(false);
  const [bookDetails, setBookDetails] = useState({});

  useEffect(() => {
    const fetchBookDetails = async () => {
      const response = await axios.get("bookDetailsAll.json");
      if (response.status === 200) {
        setBookDetails(response.data);
      }
    };
    fetchBookDetails();
  }, []);

  return (
    <main>
      <div className={styles.containerBig}>
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
                    <div className={styles.infoPhone}>
                      <p>Comanda prin telefon</p>
                      <p className={styles.pd5}>0756 111 111</p>
                    </div>
                    <span className={styles.infoProgram}>
                      <p>L-V 9:30 - 17:30</p>
                    </span>
                  </div>

                  <div className={styles.infoDeliveryIteam}>
                    <FaTruck className={styles.iconTruck} />
                    <div className={styles.infoDelivery}>
                      <p>Livrare in Romania</p>
                      <p className={styles.green}>1-3 zile lucratoare</p>
                    </div>
                  </div>
                  <ModalEasyBox
                    open={isOpen}
                    onClose={() => setIsOpen(false)}
                  />
                  <div className={styles.infoDeliveryIteam}>
                    <img
                      className={styles.easyBoxImg}
                      src={easyBox}
                      width={40}
                      height={40}
                      alt="easyBoxImg"
                    />
                    <div className={styles.infoDelivery}>
                      <p
                        className={styles.easyBox}
                        onClick={() => setIsOpen(true)}
                      >
                        Ridicare din EasyBox
                        <span>
                          <IoInformationCircleSharp />
                        </span>
                      </p>

                      <p className={styles.green}>1-3 zile lucratoare</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`${styles.devider} ${styles.marginTop}`}></div>
        <div className={styles.container}>
          <h2>Specificatii Titlu Carte</h2>
          <div className={styles.productDetails}>
            <div className={styles.productDetailsIteam}>
              <div className={styles.productDetailsIteamTop}>Format</div>
              <div className={styles.productDetailsIteamMiddle}>
                <IoBookOutline />
              </div>
              <div className={styles.productDetailsIteamBottom}>
                <span>130x200</span>
              </div>
            </div>
            <div className={styles.productDetailsIteam}>
              <div className={styles.productDetailsIteamTop}>Număr pagini</div>
              <div className={styles.productDetailsIteamMiddle}>
                <GoBook />
              </div>
              <div className={styles.productDetailsIteamBottom}>
                <span>431</span>
              </div>
            </div>
            <div className={styles.productDetailsIteam}>
              <div className={styles.productDetailsIteamTop}>Editura</div>
              <div className={styles.productDetailsIteamMiddle}>
                <IoBookOutline />
              </div>
              <div className={styles.productDetailsIteamBottom}>
                <span>130x200</span>
              </div>
            </div>
            <div className={styles.productDetailsIteam}>
              <div className={styles.productDetailsIteamTop}>Editura</div>
              <div className={styles.productDetailsIteamMiddle}>
                <IoBookOutline />
              </div>
              <div className={styles.productDetailsIteamBottom}>
                <span>130x200</span>
              </div>
            </div>
            <div className={styles.productDetailsIteam}>
              <div className={styles.productDetailsIteamTop}>Editura</div>
              <div className={styles.productDetailsIteamMiddle}>
                <IoBookOutline />
              </div>
              <div className={styles.productDetailsIteamBottom}>
                <span>130x200</span>
              </div>
            </div>
          </div>
        </div>
        <div className={`${styles.devider} ${styles.marginTop}`}></div>
        <div className={styles.container}>
          <div className={styles.descriptionWrap}>
            <div className={styles.description}>
              <h2>Rezumat Ultimul Foc - Cathya Mp</h2>
              <div className={styles.descriptionContent}>
                <div id="descriere" className={styles.descriptionText}>
                  <p>
                    <strong>
                      Unele iubiri te aduc tot mai aproape de întuneric și te
                      îndepărtează de lumină...
                    </strong>
                  </p>
                  <p>
                    <br />
                  </p>
                  <p>
                    O neatenție a fost suficientă să-i ruineze viața de liceu,
                    după ce Manasseh, fratele băiatului pe care-l place, îi
                    descoperă secretul murdar. Rebecca Godwill este fiica pură
                    și inocentă a preotului din oraș, ai cărei ochi au strălucit
                    dintotdeauna pentru un singur băiat: Samael Morgenstern. Cu
                    toate acestea, el nu i-a oferit niciodată atenția râvnită.
                  </p>
                  <p> </p>
                  <p>
                    <strong>
                      <em>S</em>
                    </strong>
                    𝒆𝒄𝒓𝒆𝒕𝒖𝒍 ei ajunge motivul șantajului pe care Manasseh, un
                    „pui de drac” isteț și fără inimă, îl va folosi pentru a o
                    manipula fără scrupule.{" "}
                  </p>
                  <p>
                    <br />
                  </p>
                  <p>
                    <strong>
                      𝑉a 𝑓𝑎𝑐𝑒 𝑜𝑟𝑖𝑐𝑒 𝑝𝑒𝑛𝑡𝑟𝑢 𝑐𝑎 𝑠𝑒𝑐𝑟𝑒𝑡𝑢𝑙 𝑠𝑎̆ 𝑟𝑎̆𝑚𝑎̂𝑛𝑎̆ 𝑠𝑒𝑐𝑟𝑒𝑡. 𝑃𝐸𝑁𝑇𝑅𝑈
                      𝑇𝑂𝑇𝐷𝐸𝐴𝑈𝑁𝐴!
                    </strong>
                  </p>
                  <p>
                    <br />
                  </p>
                  <p>
                    Fiecare pas pe care-l face, încercând să îndeplinească
                    dorințele bizare ale lui Manasseh, o aduce tot mai aproape
                    de întuneric și o îndepărtează de lumină. Dar Becca nu s-a
                    speriat niciodată de întuneric și ar face orice să fie mai
                    aproape de Samael, chiar dacă va trebui să intre în gașca
                    Crasnicilor din Matlock, un grup misterios din care fac
                    parte cei trei frați Morgenstern.{" "}
                  </p>
                  <p>
                    <br />
                  </p>
                  <p>
                    Noaptea<em> Ultimului foc </em>trebuia să o aducă pe Becca
                    mai aproape de Crasnici și de fericire, însă acea noapte nu
                    face decât să-i lege destinul de fratele greșit, prin firele
                    dureroase ale iubirii și vinovăției.{" "}
                  </p>
                  <p>
                    Odată intrată în lumea Crasnicilor, nu mai poate da înapoi,
                    trebuie să învețe regulile jocului și să nu-și piardă
                    speranța că, dincolo de noapte, arde încă focul unei mari
                    iubiri.{" "}
                  </p>
                  <p>
                    <br />
                  </p>
                  <p>
                    <strong>
                      <em>O dată un Crasnic, mereu un Crasnic!</em>
                    </strong>
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.banner2}>
              <img
                src={
                  "https://assets.bkz.ro/upload/altele/default/banner/1782/Patrat.webp"
                }
                alt=""
                width={310}
                height={310}
              />
            </div>
          </div>
        </div>
        <div className={`${styles.devider} ${styles.marginTop}`}></div>
        <div className={styles.container}>
          <h2>Despre Cathya Mp</h2>
          <div className={styles.authorWrap}>
            <img
              src={"https://assets.bkz.ro/upload/autori/cathya-mp.webp"}
              alt=""
              width={200}
              height={200}
            />
            <div className={styles.authorDetails}>
              <h3>Biografie</h3>
              <p>
                Cu o activitate începută în 2014, Cathya MP se numără printre
                cei mai tineri scriitori contemporani. Rampa de lansare a
                autoarei a fost Wattpad, platforma internațională cu milioane de
                cititori zilnic. Prima ei serie, AME, care aparține genului
                Mafia Romance, a câștigat concursul internațional The Wattys
                2016, la secțiunea „Lecturi captivante”. Publicată de Editura
                Bookzone în 2020, AME a avut un real succes, trilogia
                înregistrând vânzări de peste 40 000 de exemplare până în
                prezent.
              </p>
              <Link to={"/"} className={styles.authorPageLink}>
                <HiArrowLongRight /> Vezi pagina autorului
              </Link>
            </div>
          </div>
        </div>
        <div className={`${styles.devider} ${styles.marginTop}`}></div>
        <div>
          <div className={styles.container}>
            <Review review={bookDetails.rating} />
          </div>
        </div>
      </div>
    </main>
  );
}

export default BookInfo;
