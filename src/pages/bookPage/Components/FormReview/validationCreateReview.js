import * as Yup from "yup";

export const validationCreateReview = Yup.object({
  rating: Yup.number().required("Selecteaza reatingul"),
  text: Yup.string().required("Acest camp este obligatoriu"),
  title: Yup.string().optional().max(50),
});
