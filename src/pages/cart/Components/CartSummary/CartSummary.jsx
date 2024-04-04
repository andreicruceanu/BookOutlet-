import Button from "../../../../components/ui/Button/Button";
import content from "../../../../constants/content";
import styles from "./styles.module.css";
import checkoutBtn from "../../../../images/continua-finalizeaza-comanda.svg";
import { priceDeliveryDisplay } from "../../Cart/function";
import { cost } from "../../../../utils/DeliveryCost";

const CartSummary = ({ totalPriceBooks, priceDelivery, orderFinalPrice }) => {
  const data = [
    {
      id: 0,
      name: content.productCost,
      value: `${totalPriceBooks.toFixed(2)} ${content.currency}`,
    },
    {
      id: 1,
      name: content.deliveryCost,
      value: priceDeliveryDisplay(priceDelivery),
    },
    {
      id: 2,
      name: content.processingCost,
      value: `${cost.processingPrice} ${content.currency}`,
    },
  ];

  return (
    <div className={styles.cartSummary}>
      <h2>{content.orderSummary}</h2>
      <div className={styles.content}>
        {data.map((item) => (
          <div className={styles.wrap} key={item.id}>
            <p className={styles.summaryText}>{item.name}</p>
            <p className={styles.summarySum}>{item.value}</p>
          </div>
        ))}
      </div>
      <div className={styles.totalPriceContainer}>
        <div className={styles.totalPriceWrap}>
          <p className={styles.totalPriceText}>{content.total}</p>
          <p className={styles.totalPriceSum}>
            {`${orderFinalPrice.toFixed(2)} ${content.currency}`}
          </p>
        </div>
        <Button
          className="flex items-center my-0"
          classNameText="w-full text-md"
          name={content.continue}
          startIconImage={checkoutBtn}
        />
      </div>
    </div>
  );
};

export default CartSummary;
