const dataFormContactPerson = [
  [
    {
      id: "lastName",
      name: "lastName",
      type: "text",
      label: "Nume",
    },
    {
      id: "firstName",
      name: "firstName",
      type: "text",
      label: "Prenume",
    },
  ],
  {
    id: "phone",
    name: "phone",
    type: "text",
    label: "Telefon",
  },
];

const dataFormShippingAddress = [
  [
    {
      id: "country",
      name: "country",
      type: "text",
      label: "Tara",
      disabled: true,
    },
    {
      id: "county",
      name: "county",
      type: "select",
      label: "Judet",
    },
  ],
  {
    id: "city",
    name: "city",
    type: "text",
    label: "Localitate",
  },
  {
    id: "address",
    name: "address",
    type: "text",
    label: "Adresa",
  },
];

export { dataFormContactPerson, dataFormShippingAddress };
