import axios from "axios";
import { API_DNI_URL, API_DNI_TOKEN } from "@env";

const headers = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${API_DNI_TOKEN}`,
};

export const exists_DNI = (json_data) => {
  return axios
    .post(`${API_DNI_URL}`, json_data, {
      headers: headers,
    })
    .then((response) => {
      const { data } = response;
      return data;
    });
};
