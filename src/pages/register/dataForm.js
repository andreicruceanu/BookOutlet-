const formRegisterInput = [
  {
    id: "lastName",
    name: "lastName",
    type: "text",
    placeholder: "Numele tău",
  },
  {
    id: "firstName",
    name: "firstName",
    type: "text",
    placeholder: "Prenumele tău",
  },
  {
    id: "email",
    name: "email",
    type: "email",
    placeholder: "Email-ul tău",
  },
  {
    id: "password",
    name: "password",
    type: "password",
    placeholder: "Parola",
  },
  {
    id: "confirmPassword",
    name: "confirmPassword",
    type: "password",
    placeholder: "Confirmă parola",
  },
];

const formRegisterCheckbox = [
  {
    id: "terms",
    name: "terms",
    type: "checkbox",
    label: "Am citit și sunt de acord cu termenii și condițiile",
  },
  {
    id: "newsletter",
    name: "newsletter",
    type: "checkbox",
    label:
      "CONFIRM Că AM PESTE 16 ANI și doresc să primesc cele mai noi oferte",
  },
];

export { formRegisterInput, formRegisterCheckbox };
