import * as Yup from "yup";

const passwordRules = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/;

export const validationCreateAccount = Yup.object({
  firstName: Yup.string()
    .max(20, "Prenume trebuie sa aiba maxim 20 de caractere")
    .required("Prenumele este obligatoriu"),
  lastName: Yup.string()
    .max(20, "Nume trebuie sa aiba maxim 20 de caractere")
    .required("Numele este obligatoriu"),
  email: Yup.string()
    .email("Email-ul este invalid")
    .required("Email-ul este obligatoriu"),
  password: Yup.string()
    .required("Parola este obligatorie")
    .matches(
      passwordRules,
      "Parola trebuie să aibă cel puțin 8 caractere, literă mare, literă mică, un număr și un caracter special"
    ),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Passwords must match"
  ),
  terms: Yup.bool().oneOf([true], "Te rugam sa accepti termenii si conditiile"),
});
