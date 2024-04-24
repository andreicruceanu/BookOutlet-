import React from "react";
import ContainerContent from "../Components/ContainerContent/ContainerContent";
import content from "../../../constants/content";

const Vouchers = () => {
  return (
    <ContainerContent
      title={content.my_vouchers}
      subtitle={`0 ${content.vouchers}`}
    ></ContainerContent>
  );
};

export default Vouchers;
