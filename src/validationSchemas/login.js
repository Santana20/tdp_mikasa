import * as yup from "yup";

export const loginValidationScheme = yup.object().shape({
  user: yup.string().required("E-mail is required"),
  password: yup.string().required("Password es requerido"),
});
