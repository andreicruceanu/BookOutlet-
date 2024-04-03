import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { validateForm } from "./validateForm";
import profileApi from "../../../../api/modules/profile.api";
import { toast } from "react-toastify";
import styles from "./styles.module.css";
import { formPersonalInputs, formRadioButtons } from "./dataForm";
import Radio from "../../../../components/ui/InputRadio/Radio";
import Input from "../../../../components/ui/Input/Input";
import content from "../../../../constants/content";
import Button from "../../../../components/ui/Button/Button";
import Checkbox from "../../../../components/ui/Checkbox/Checkbox";

const FormPersonalData = () => {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const [onRequestUpdate, setOnReqestUpdate] = useState(false);
  const [doneRequest, setDoneRequest] = useState(false);

  const formik = useFormik({
    initialValues: {
      gender: "",
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      password: "***********",
      newsletter: true,
    },

    validationSchema: validateForm,

    onSubmit: async (values) => {
      setOnReqestUpdate(true);
      const { response, err } = await profileApi.updateProfile(values);
      setOnReqestUpdate(false);
      if (response) {
        localStorage.setItem("firstName", values.firstName);
        toast.success(response.message);
      }

      if (err) {
        return toast.error(err.errorMessage ? err.errorMessage : err.message);
      }
    },
  });

  useEffect(() => {
    const getProfileUser = async () => {
      setDoneRequest(false);
      const { response, err } = await profileApi.getProfile();
      setDoneRequest(true);

      if (response) {
        const { firstName, lastName, username, email, gender, newsletter } =
          response;
        formik.setValues({
          firstName,
          lastName,
          username,
          email,
          gender,
          newsletter,
          password: "***********",
        });
      }
      if (err) {
        return toast.error(err.errorMessage ? err.errorMessage : err.message);
      }
    };

    getProfileUser();
  }, []);

  if (!user) {
    return navigate("/");
  }
  return (
    <form id="userUpdate" onSubmit={formik.handleSubmit}>
      <label className={styles.personalDataLabel}>Formă de adresare</label>
      <div className={styles.gender}>
        {formRadioButtons.map((input) => (
          <Radio
            formik={formik}
            key={input.id}
            id={input.id}
            name={input.name}
            label={input.label}
            value={input.value}
          />
        ))}
      </div>
      {formPersonalInputs.map((input) => (
        <div className={styles.inputWrap} key={input.id}>
          <label className={styles.personalDataLabel}>{input.label}</label>
          <Input
            className="my-0"
            id={input.id}
            type={input.type}
            placeholder={input.placeholder}
            name={input.name}
            formik={formik}
            disabled={input.disabled}
          />
        </div>
      ))}
      <div className={styles.newsletter}>
        <Checkbox
          id="newsletter"
          name="newsletter"
          formik={formik}
          label={content.newsletter_personal_page}
        />
      </div>
      <div className={styles.wrapBtn}>
        <Button
          className="max-w-250"
          type="submit"
          name={content.save}
          form="userUpdate"
          isLoading={onRequestUpdate}
          disabled={!formik.isValid}
        />
      </div>
    </form>
  );
};

export default FormPersonalData;
