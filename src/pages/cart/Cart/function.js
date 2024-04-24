import { cost } from "../../../utils/DeliveryCost";

export const priceDeliveryCalculated = (totalPriceBooks) => {
  return totalPriceBooks > cost.freeShippingFrom
    ? 0
    : cost.standardDeliveryCoast;
};

export const orderFinalPriceCalculated = (totalPriceBooks, priceDelivery) => {
  return totalPriceBooks + priceDelivery + cost.processingPrice;
};

export const priceDeliveryDisplay = (priceDelivery) => {
  return priceDelivery > 0 ? `${priceDelivery} Lei` : `Transport gratuit`;
};
