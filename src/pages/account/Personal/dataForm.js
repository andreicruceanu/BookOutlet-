const formPersonalInputs = [
  {
    id: "firstName",
    name: "firstName",
    type: "text",
    label: "Prenume",
    disabled: false,
  },
  {
    id: "lastName",
    name: "lastName",
    type: "text",
    label: "Nume",
    disabled: false,
  },
  {
    id: "username",
    name: "username",
    type: "text",
    label: "Utilizator",
    disabled: false,
  },
  {
    id: "email",
    name: "email",
    type: "email",
    label: "Email",
    disabled: true,
  },
  {
    id: "password",
    name: "password",
    type: "text",
    label: "Parola",
    disabled: true,
  },
];

const formRadioButtons = [
  {
    id: "mr",
    name: "gender",
    type: "radio",
    label: "Dl.",
    value: "Dl",
  },
  {
    id: "mrs",
    name: "gender",
    type: "radio",
    label: "Dna.",
    value: "Dna",
  },
];

export { formPersonalInputs, formRadioButtons };
