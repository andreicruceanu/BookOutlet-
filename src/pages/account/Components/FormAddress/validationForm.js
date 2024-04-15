import * as Yup from "yup";

export const validationAddress = Yup.object({
  firstName: Yup.string()
    .max(20, "Prenume trebuie sa aiba maxim 20 de caractere")
    .required("Prenumele este obligatoriu"),
  lastName: Yup.string()
    .max(20, "Nume trebuie sa aiba maxim 20 de caractere")
    .required("Numele este obligatoriu"),
  phone: Yup.string().required("Nr. de telefon este obligatoriu"),
  country: Yup.string().required("Tara este obligatorie"),
  county: Yup.string().required("Orasul este obligatoriu"),
  city: Yup.string().required("Localitatea este obligatorie"),
  address: Yup.string().required("Adresa este obligatorie"),
});
