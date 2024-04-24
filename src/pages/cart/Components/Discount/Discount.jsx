import { useState } from "react";
import Button from "../../../../components/ui/Button/Button";
import Input from "../../../../components/ui/Input/Input";
import styles from "./styles.module.css";
import { useFormik } from "formik";
import * as Yup from "yup";

const Discount = () => {
  const [visibleInput, setVisibleInput] = useState(false);

  const formik = useFormik({
    initialValues: {
      code: "",
    },

    //Validation Form
    validationSchema: Yup.object({
      code: Yup.string().required("Codul este obligatoriu"),
    }),

    //Submit Form
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div className={styles.container}>
      <div className={styles.flex}>
        <p>Ai un cod de reducere?</p>
        <span onClick={() => setVisibleInput(!visibleInput)}>
          <b>Click aici!</b>
        </span>
      </div>
      {visibleInput && (
        <form className={styles.wrap} onSubmit={formik.handleSubmit}>
          <p className={styles.subtitle}>Introdu codul in casuta de mai jos</p>
          <Input
            id="code"
            name="code"
            formik={formik}
            type="text"
            placeholder="Cod reducere"
          />
          <Button
            formik={formik}
            type="submit"
            variant="secondary"
            name="Aplica reducerea"
          />
        </form>
      )}
    </div>
  );
};

export default Discount;
