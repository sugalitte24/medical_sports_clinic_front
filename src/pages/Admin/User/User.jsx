import React, { useEffect, useState } from "react";
import './User.scss'
import { getAccessTokenApi } from "../../../api/auth"
import { getUsersActiveApi } from "../../../api/user"
import ListUsers from "../../../components/Admin/Users/ListUsers/ListUsers";

export default function SignIn() {

  const [usersActive, setUsersActive] = useState([])
  const [usersInactive, setUsersInactive] = useState([])
  const [reloadUsers, setReloadUsers] = useState(false)
  const token = getAccessTokenApi();

  useEffect(() => {
    getUsersActiveApi(token, true).then(response => {
      setUsersActive(response.users)
    })
  }, [token])

  useEffect(() => {
    getUsersActiveApi(token, false).then(response => {
      setUsersInactive(response.users)
    })
    setReloadUsers(false)
  }, [token, reloadUsers])

  return (
    <div className="users">
      <ListUsers
        usersActive={usersActive}
        usersInactive={usersInactive}
        setReloadUsers={setReloadUsers} />
    </div>
  );
}
