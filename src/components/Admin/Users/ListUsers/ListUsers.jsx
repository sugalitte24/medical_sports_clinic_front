import React, { useEffect, useState } from "react";
import { Switch, List, Avatar, Button, notification } from "antd";
import NoAvatar from "../../../../assets/img/no-avatar.png"
import "./ListUsers.scss"
import { EditOutlined, StopOutlined, DeleteOutlined, CheckOutlined } from "@ant-design/icons";
import Modal from "../../../Modal/Modal";
import EditUserForm from "../EditUserForm/Index";
import { getAvatarApi, activateUserApi } from "../../../../api/user";
import { getAccessTokenApi } from "../../../../api/auth"

export default function ListUsers(props) {
  const { usersActive, usersInactive, setReloadUsers } = props;
  const [viewUsersActives, setViewUsersActives] = useState(true)
  const [isVisibleModal, setIsVisibleModal] = useState(false)
  const [modalTitle, setModalTitle] = useState("")
  const [modalContent, setModalContent] = useState(null)

  return (
    <div className="list-users">
      <div className="list-users__switch">
        <Switch
          defaultChecked
          onChange={() => setViewUsersActives(!viewUsersActives)}
        />
        <span>
          {viewUsersActives ? "Usuarios Activos" : "Usuarios Inactivos"}
        </span>
      </div>

      {viewUsersActives ? (
        <UsersActive
          setReloadUsers={setReloadUsers}
          usersActive={usersActive}
          setIsVisibleModal={setIsVisibleModal}
          setModalTitle={setModalTitle}
          setModalContent={setModalContent}
        />
      ) : (
        <UsersInactive
          usersInactive={usersInactive}
          setReloadUsers={setReloadUsers}
        />
      )}

      <Modal
        title={modalTitle}
        isVisible={isVisibleModal}
        setIsVisible={setIsVisibleModal}
      >
        {modalContent}
      </Modal>
    </div>
  )
}

function UsersActive(props) {
  const {
    usersActive,
    setIsVisibleModal,
    setModalTitle,
    setModalContent,
    setReloadUsers
  } = props;

  const editUser = user => {
    setIsVisibleModal(true);
    setModalTitle(
      `Editar ${user.name ? user.name : "..."} ${user.lastname ? user.lastname : "..."
      }`
    );
    setModalContent(
      <EditUserForm
        user={user}
        setIsVisibleModal={setIsVisibleModal}
        setReloadUsers={setReloadUsers}
      />
    );
  };

  return (
    <List
      className="users-active"
      itemLayout="horizontal"
      dataSource={usersActive}
      renderItem={user => (
        <UserActive
          user={user}
          editUser={editUser}
          setReloadUsers={setReloadUsers}
        />
      )}
    />
  );
}

function UserActive(props) {
  const { user, editUser, setReloadUsers } = props;
  const [avatar, setAvatar] = useState(null);

  useEffect(() => {
    if (user.avatar) {
      getAvatarApi(user.avatar).then(response => {
        setAvatar(response);
      });
    } else {
      setAvatar(null);
    }
  }, [user]);

  const desactivateUser = () => {
    const accesToken = getAccessTokenApi();

    activateUserApi(accesToken, user._id, false)
      .then(response => {
        notification["success"]({
          message: response
        });
        setReloadUsers(true);
      })
      .catch(err => {
        notification["error"]({
          message: err
        });
      });
  };


  return (
    <List.Item
      actions={[
        <Button type="primary" onClick={() => editUser(user)}>
          <EditOutlined />
        </Button>,
        <Button type="danger" onClick={desactivateUser} >
          <StopOutlined />
        </Button>,
        <Button type="danger" onClick={() => console.log("Eliminar Usuario")}>
          <DeleteOutlined />
        </Button>,
      ]}
    >
      <List.Item.Meta
        avatar={<Avatar src={avatar ? avatar : NoAvatar} />}
        title={`${user.name ? user.name : '...'}
              ${user.lastname ? user.lastname : '...'}`}
        description={user.email}
      />
    </List.Item>
  )
}

function UsersInactive(props) {
  const { usersInactive, setReloadUsers } = props
  return (
    <List
      className="users-active"
      itemLayout="horizontal"
      dataSource={usersInactive}
      renderItem={user => <UserInactive user={user} setReloadUsers={setReloadUsers} />}
    />
  )
}

function UserInactive(props) {
  const { user, setReloadUsers } = props

  const [avatar, setAvatar] = useState(null)

  useEffect(() => {
    if (user.avatar) {
      getAvatarApi(user.avatar).then(response => {
        setAvatar(response)
      })
    } else {
      setAvatar(null)
    }
  }, [user])

  const activateUser = () => {
    const token = getAccessTokenApi();

    activateUserApi(token, user._id, true).then(response => {
      notification["success"]({
        message: response
      });
      setReloadUsers(true)
    }).catch(err => {
      notification["error"]({
        message: err
      })
    })
  }

  return (
    <List.Item
      actions={[
        <Button
          type="primary"
          onClick={activateUser}
        >
          <CheckOutlined />
        </Button>,
        <Button
          type="danger"
          onClick={() => console.log("Eliminar Usuario")}
        >
          <DeleteOutlined />
        </Button>,
      ]}
    >
      <List.Item.Meta
        avatar={<Avatar src={avatar ? avatar : NoAvatar} />}
        title={`${user.name ? user.name : '...'}
              ${user.lastname ? user.lastname : '...'}`}
        description={user.email}
      />
    </List.Item>
  )
}