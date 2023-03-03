import CarouselMenuItem from "../carousel-menu-item/carousel-menu-item";
import { MdOutlineLibraryBooks } from "react-icons/md";
import {
  AiFillApple,
  AiFillBehanceCircle,
  AiFillGithub,
  AiFillPoundCircle,
  AiOutlineRead,
} from "react-icons/ai";
import { v4 as uuidv4 } from "uuid";
import styles from "./styles.module.css";

const items = [
  {
    icon: <AiOutlineRead />,
    href: "/carti",
    name: "Toate cartile",
  },
  {
    icon: <MdOutlineLibraryBooks />,
    href: "/editura/bookzone",
    name: "Carti Bookzone",
  },
  {
    icon: <AiFillApple />,
    href: "/new",
    name: "Noutati",
  },
  {
    icon: <AiFillPoundCircle />,
    href: "/top",
    name: "Top pachete de carti",
  },
  { icon: <AiFillGithub />, href: "/cattisub", name: "Carti sub 20 lei" },
  { icon: <AiFillBehanceCircle />, href: "/autori", name: "Autorii Bookzone" },
];

function CarouselMenu() {
  return (
    <ul className={styles.listCarouselMenu}>
      {items.map(({ icon, href, name }) => (
        <CarouselMenuItem icon={icon} href={href} name={name} key={uuidv4()} />
      ))}
    </ul>
  );
}

export default CarouselMenu;
