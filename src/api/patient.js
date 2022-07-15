import { basePath, apiVersion } from "./config";

export function createPatientApi(patient) {
  const url = `${basePath}/${apiVersion}/create-patient`;
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

export function getPatientsApi() {
  const url = `${basePath}/${apiVersion}/get-patient`;
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

export function getPatientApi(patientId) {
  const url = `${basePath}/${apiVersion}/get-patient/${patientId}`;
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

export function updatePatientApi(patient, patientId) {
  const url = `${basePath}/${apiVersion}/update-patient/${patientId}`;

  const params = {
    method: "PUT",
    body: JSON.stringify(patient),
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

export function deletePatientApi(patientId) {
  const url = `${basePath}/${apiVersion}/delete-patient/${patientId}`;

  const params = {
    method: "DELETE",
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
