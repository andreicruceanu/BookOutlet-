import { useAddressContext } from "../AddressContext/AddressContext";
import { RiDeleteBinLine } from "react-icons/ri";
import { getCountyNameById } from "../../../../utils/getCountyNameById";
import { toast } from "react-toastify";

import Modal from "../../../../components/modal/Modal";
import Button from "../../../../components/ui/Button/Button";
import useModal from "../../../../hooks/useModal";
import FormAddress from "../FormAddress/FormAddress";
import styles from "./styles.module.css";
import addressApi from "../../../../api/modules/address.api";

const AddressItem = ({ address }) => {
  const { isOpenModal, onOpenModal, onCloseModal } = useModal();
  const { setAddress } = useAddressContext();

  const handleDeleteAddress = async (addressId) => {
    const { response, err } = await addressApi.deleteAddress(addressId);

    if (response) {
      toast.success("Address deleted");
      setAddress((prev) =>
        [...prev].filter(
          (address) => address._id.toString() !== addressId.toString()
        )
      );
    }
    if (err) {
      toast.error("Something went wrong. Please try again later.");
    }
  };

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
                onClick={() => handleDeleteAddress(address._id)}
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
