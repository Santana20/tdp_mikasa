import * as yup from "yup";
import { exists_DNI } from "../services/api-dni";

export const singinValidationScheme = yup.object().shape({
  nombres: yup.string().required(),
  apellidos: yup.string().required(),
  password: yup.string().required(),
  confirm_password: yup.string().required(),
  email: yup.string().email().required(),
  codigo_doctor: yup.string().required(),
  dni: yup
    .string()
    .required()
    .test("DNI-MAX-8", "El DNI debe tener 8 digitos", function (value) {
      console.log({ value });

      if (value === undefined) {
        return this.createError();
      }

      return value.length === 8 || this.createError();
    })
    .test(
      "Validar DNI",
      "El DNI ingresado no se encuetra en la RENIEC",
      function (value) {
        console.log({ value });

        if (value === undefined || value.length !== 8) return;

        //usando axios
        const data = {
          dni: value,
        };

        return exists_DNI(data)
          .then((data) => {
            console.log("API Response:", { data });
            const { success } = data;

            return success || this.createError();
          })
          .catch((e) => {
            console.log({ e });
          });
      }
    ),
  centro_salud: yup.string().required(),
  ubic_centro_salud: yup.string().required(),
});
