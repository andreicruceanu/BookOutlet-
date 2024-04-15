import { dataFormContactPerson, dataFormShippingAddress } from "./dataForm";
import Input from "../../../../components/ui/Input/Input";
import { useFormik } from "formik";
import styles from "./styles.module.css";
import Select from "../../../../components/ui/Select/Select";
import { counties } from "./counties";
import Button from "../../../../components/ui/Button/Button";
import content from "../../../../constants/content";
import { validationAddress } from "./validationForm";

const FormAddress = ({ onClose }) => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      phone: "",
      country: "Romania",
      county: "",
      city: "",
      address: "",
    },
    validationSchema: validationAddress,

    onSubmit: (values) => {
      console.log(values);
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
        <Button name="Salveaza" type="submit" className="max-w-220" />
        <span className={styles.btnClose} onClick={onClose}>
          {content.cancel}
        </span>
      </div>
    </form>
  );
};

export default FormAddress;
