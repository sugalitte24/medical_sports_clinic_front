import { basePath, apiVersion } from "./config";

export function createQueryApi(patient, patientId) {
  const url = `${basePath}/${apiVersion}/create-query/${patientId}`;
  const params = {
    method: "POST",
    body: JSON.stringify(patient),
    headers: { "Content-Type": "application/json" },
  };

  return fetch(url, params)
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      return result.message;
    })
    .catch((err) => {
      return err.message;
    });
}

export function getQueryApi(patientId) {
  const url = `${basePath}/${apiVersion}/get-query/${patientId}`;
  const params = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  };

  return fetch(url, params)
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      return result;
    })
    .catch((err) => {
      return err.message;
    });
}
