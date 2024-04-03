import { Outlet } from "react-router-dom";
import styles from "./styles.module.css";
import ContainerPage from "../Components/ContainerPage/ContainerPage";
import MenuAccount from "../Components/MenuAccount/MenuAccount";
import Avatar from "../Components/Avatar/Avatar";

const LayoutAccount = () => {
  return (
    <ContainerPage>
      <div className={styles.wrap}>
        <Avatar />
        <MenuAccount />
      </div>
      <Outlet />
    </ContainerPage>
  );
};

export default LayoutAccount;
