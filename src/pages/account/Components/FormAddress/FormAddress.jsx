import { dataFormContactPerson, dataFormShippingAddress } from "./dataForm";
import Input from "../../../../components/ui/Input/Input";
import { useFormik } from "formik";
import styles from "./styles.module.css";
import Select from "../../../../components/ui/Select/Select";
import { counties } from "./counties";
import Button from "../../../../components/ui/Button/Button";
import content from "../../../../constants/content";
import { validationAddress } from "./validationForm";
import addressApi from "../../../../api/modules/address.api";
import { toast } from "react-toastify";
import { useState } from "react";
import { useAddressContext } from "../AddressContext/AddressContext";

const initialValues = {
  firstName: "",
  lastName: "",
  phone: "",
  country: "Romania",
  county: "",
  city: "",
  address: "",
};

const FormAddress = ({
  addressValues = initialValues,
  onClose,
  editMode = false,
}) => {
  const [onRequestUpdate, setOnReqestUpdate] = useState(false);

  const { setAddress } = useAddressContext();

  const formik = useFormik({
    initialValues: addressValues,
    validationSchema: validationAddress,

    onSubmit: async (values) => {
      if (editMode) {
        setOnReqestUpdate(true);
        const { response, err } = await addressApi.updateAddress({
          ...values,
          addressId: addressValues?._id,
        });
        setOnReqestUpdate(false);
        if (response) {
          setAddress((prev) =>
            [...prev].map((address) =>
              address._id.toString() === response._id.toString()
                ? response
                : address
            )
          );
          onClose();
          toast.success("Address updated");
        }
        if (err) {
          return toast.error(err.errorMessage ? err.errorMessage : err.message);
        }
      } else {
        setOnReqestUpdate(true);
        const { response, err } = await addressApi.saveAddress(values);
        setOnReqestUpdate(false);
        if (response) {
          setAddress((prev) => [...prev, response]);
          onClose();
          toast.success("Address saved");
        }
        if (err) {
          return toast.error(err.errorMessage ? err.errorMessage : err.message);
        }
      }
    },
  });

  const renderFormInputs = (data, formik) => {
    return data.map((item, index) => {
      if (Array.isArray(item)) {
        return (
          <div key={index} className={styles.inputContainer}>
            {item.map((input) => (
              <div key={input.id} className={styles.inputBox}>
                <label className={styles.inputLabel} htmlFor={input.id}>
                  {input.label}
                </label>
                {input.type === "text" ? (
                  <Input
                    id={input.id}
                    type="text"
                    disabled={input?.disabled}
                    name={input.name}
                    formik={formik}
                    className="mt-0"
                  />
                ) : (
                  <Select
                    id={input.id}
                    options={counties}
                    name={input.name}
                    formik={formik}
                  />
                )}
              </div>
            ))}
          </div>
        );
      } else {
        return (
          <div key={item.id} className={styles.inputBox}>
            <label className={styles.inputLabel} htmlFor={item.id}>
              {item.label}
            </label>
            <Input
              id={item.id}
              type="text"
              formik={formik}
              name={item.name}
              className="mt-0"
            />
          </div>
        );
      }
    });
  };

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className={styles.modalContent}>
        <h4>Persoana de contant</h4>
        {renderFormInputs(dataFormContactPerson, formik)}
        <div className="mb-20">
          <h4>Adresa de livrare</h4>
          {renderFormInputs(dataFormShippingAddress, formik)}
        </div>
      </div>
      <div className={styles.buttonWrap}>
        <Button
          name="Salveaza"
          type="submit"
          isLoading={onRequestUpdate}
          className="max-w-220"
        />
        <span className={styles.btnClose} onClick={onClose}>
          {content.cancel}
        </span>
      </div>
    </form>
  );
};

export default FormAddress;
