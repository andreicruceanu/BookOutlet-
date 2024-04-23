import { RiDeleteBinLine } from "react-icons/ri";
import { useAddressContext } from "../AddressContext/AddressContext";

import Modal from "../../../../components/modal/Modal";
import Button from "../../../../components/ui/Button/Button";
import useModal from "../../../../hooks/useModal";
import FormAddress from "../FormAddress/FormAddress";
import styles from "./styles.module.css";
import { getCountyNameById } from "../../../../utils/getCountyNameById";

const AddressItem = ({ address }) => {
  const { isOpenModal, onOpenModal, onCloseModal } = useModal();

  return (
    <>
      {address && (
        <>
          <div className={styles.wrap}>
            <div className={styles.content}>
              <h4>
                {address.firstName} {address.lastName}
              </h4>
              <p>{address.phone}</p>
              <p>{`${address.address}, ${address.city}, ${getCountyNameById(
                address.county
              )}`}</p>
            </div>
            <div className={styles.action}>
              <Button
                variant="secondary"
                name="Modifica"
                className="min-w-210px"
                onClick={onOpenModal}
              />
              <Button
                variant="delete"
                size="largeIcon"
                startIcon={<RiDeleteBinLine />}
              />
            </div>
          </div>
          <Modal
            isOpen={isOpenModal}
            onClose={onCloseModal}
            title="Editează adresa de livrare"
          >
            <FormAddress
              addressValues={address}
              editMode={true}
              onClose={onCloseModal}
            />
          </Modal>
        </>
      )}
    </>
  );
};

const Address = () => {
  const { address } = useAddressContext();

  return (
    <div className={styles.box}>
      {address.length > 0 &&
        address.map((address) => (
          <AddressItem address={address} key={address._id} />
        ))}
    </div>
  );
};

export default Address;
