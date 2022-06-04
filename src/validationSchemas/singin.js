import * as yup from "yup";

export const singinValidationScheme = yup.object().shape({
  nombres: yup.string().required(),
  apellidos: yup.string().required(),
  password: yup.string().required(),
  confirm_password: yup.string().required(),
  email: yup.string().email().required(),
  codigo_doctor: yup.string().required(),
  dni: yup.string().required(),
  centro_salud: yup.string().required(),
  ubic_centro_salud: yup.string().required(),
});
