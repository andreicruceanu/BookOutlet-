import content from "../../../constants/content";
import ContainerContent from "../Components/ContainerContent/ContainerContent";
import styles from "./styles.module.css";

const Orders = () => {
  return (
    <ContainerContent
      title={content.my_orders}
      subtitle={`0 ${content.orders}`}
    ></ContainerContent>
  );
};

export default Orders;
