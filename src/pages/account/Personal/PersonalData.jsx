import { useSelector } from "react-redux";
import MenuAccount from "../MenuAccount/MenuAccount";
import styles from "./styles.module.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import profileApi from "../../../api/modules/profile.api";
import { useFormik } from "formik";
import { validateForm } from "./validateForm";
import { toast } from "react-toastify";
import { formPersonalInputs, formRadioButtons } from "./dataForm";
import Input from "../../../components/ui/Input/Input";
import Checkbox from "../../../components/ui/Checkbox/Checkbox";
import content from "../../../constants/content";
import Radio from "../../../components/ui/InputRadio/Radio";
import Button from "../../../components/ui/Button/Button";

function PersonalData() {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
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
        setFirstName(response.firstName);
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
    <div className={styles.container}>
      <div className={styles.personalData}>
        <div className={styles.personalDataAside}>
          <div className={styles.avatar}>
            <div className={styles.avatarWrap}>
              <span className={styles.avatarImg}>
                {firstName && firstName.slice(0, 1)}
              </span>
              <div className={styles.avatarTextWrap}>
                <p>Bine ai venit,</p>
                <h3>{firstName && firstName}</h3>
              </div>
            </div>
          </div>
          <MenuAccount />
        </div>
        {doneRequest && (
          <div className={styles.personalDataMain}>
            <div className={styles.personalDataWrap}>
              <h3>Date personale</h3>
              <form id="userUpdate" onSubmit={formik.handleSubmit}>
                <label className={styles.personalDataLabel}>
                  Formă de adresare
                </label>
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
                    <label className={styles.personalDataLabel}>
                      {input.label}
                    </label>
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
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default PersonalData;
