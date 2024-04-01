import * as Yup from "yup";

const passwordRules = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/;

export const validationLogIn = Yup.object({
  email: Yup.string()
    .email("Email-ul este invalid")
    .required("Email-ul este obligatoriu"),
  password: Yup.string()
    .required("Parola este obligatorie")
    .matches(
      passwordRules,
      "Parola trebuie să aibă cel puțin 8 caractere, literă mare, literă mică, un număr și un caracter special"
    ),
});
