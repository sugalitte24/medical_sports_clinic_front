import { basePath, apiVersion } from "./config";

export function singUpApi(data) {
  const url = `${basePath}/${apiVersion}/sign-up`;
  const params = {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" },
  };

  return fetch(url, params)
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      if (result.user) {
        return { ok: true, message: "Usuario creado correctamente." };
      } else {
        return { ok: false, message: result.message };
      }
    })
    .catch((err) => {
      return { ok: false, message: err.message };
    });
}

export function singInApi(data) {
  const url = `${basePath}/${apiVersion}/sign-in`;
  const params = {
    method: "POST",
    body: JSON.stringify(data),
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

export function getUsersApi(token) {
  const url = `${basePath}/${apiVersion}/get-user`;
  const params = {
    method: "GET",
    headers: { "Content-Type": "application/json", Authorization: token },
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

export function getUsersActiveApi(token, status) {
  const url = `${basePath}/${apiVersion}/get-user-active?active=${status}`;
  const params = {
    method: "GET",
    headers: { "Content-Type": "application/json", Authorization: token },
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

export function uploadAvatarApi(token, avatar, userId) {
  const url = `${basePath}/${apiVersion}/upload-avatar/${userId}`;

  const formData = new FormData();
  formData.append("avatar", avatar, avatar.name);
  const params = {
    method: "PUT",
    body: formData,
    headers: { Authorization: token },
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

export function getAvatarApi(avatarName) {
  const url = `${basePath}/${apiVersion}/get-avatar/${avatarName}`;

  return fetch(url)
    .then((response) => {
      return response.url;
    })
    .catch((err) => {
      return err.message;
    });
}

export function updateUserApi(token, user, userId) {
  const url = `${basePath}/${apiVersion}/update-user/${userId}`;

  const params = {
    method: "PUT",
    body: JSON.stringify(user),
    headers: { "Content-Type": "application/json", Authorization: token },
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

export function activateUserApi(token, userId, status) {
  const url = `${basePath}/${apiVersion}/activate-user/${userId}`;

  const params = {
    method: "PUT",
    body: JSON.stringify({ active: status }),
    headers: { "Content-Type": "application/json", Authorization: token },
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

export function deleteUserApi(token, userId) {
  const url = `${basePath}/${apiVersion}/delete-user/${userId}`;

  const params = {
    method: "DELETE",
    headers: { "Content-Type": "application/json", Authorization: token },
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

export function singUpAdminApi(token, data) {
  const url = `${basePath}/${apiVersion}/signUpAdmin`;
  const params = {
    method: "POST",
    body: JSON.stringify(data),
    headers: { Authorization: token, "Content-Type": "application/json" },
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
