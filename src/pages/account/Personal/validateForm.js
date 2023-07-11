import * as Yup from "yup";

export const validateForm = Yup.object({
  firstName: Yup.string()
    .max(20, "Prenume trebuie sa aiba maxim 20 de caractere")
    .required("Prenumele este obligatoriu"),
  lastName: Yup.string()
    .max(20, "Nume trebuie sa aiba maxim 20 de caractere")
    .required("Numele este obligatoriu"),
  email: Yup.string()
    .email("Email-ul este invalid")
    .required("Email-ul este obligatoriu"),

  terms: Yup.bool().oneOf([true], "Te rugam sa accepti termenii si conditiile"),
});
