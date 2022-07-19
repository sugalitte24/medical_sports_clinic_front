import React, { useState } from "react";
import { List, Button, notification, Modal as ModalAntd } from "antd";
import { EditOutlined, DeleteOutlined, EyeOutlined, FileAddOutlined } from "@ant-design/icons";
import Modal from "../../../Modal/Modal";
import { deletePatientApi } from "../../../../api/patient";
import AddPatientForm from "../AddPatientsForm/AddPatientForm";
import EditPatientForm from "../EditPatientForm/EditPatientForm"
import ViewPatient from "../ViewPatient/ViewPatients"
import AddQueryForm from "../AddQueryForm/AddQueryForm"

import "./ListPatients.scss"

const { confirm } = ModalAntd;

export default function ListPatients(props) {
    const { patients, setReloadPatients } = props;
    const [isVisibleModal, setIsVisibleModal] = useState(false);
    const [modalTitle, setModalTitle] = useState("");
    const [modalContent, setModalContent] = useState(null);

    const addPatientModal = () => {
        setIsVisibleModal(true)
        setModalTitle("Creando nuevo Paciente")
        setModalContent(<AddPatientForm
            setIsVisibleModal={setIsVisibleModal}
            setReloadPatients={setReloadPatients}
        />)
    }

    return (
        <div className="list-patients">
            <div className="list-patients__header">
                <Button type="primary" onClick={addPatientModal}>
                    Nuevo Paciente
                </Button>

            </div>
            <GetPatients
                patients={patients}
                setIsVisibleModal={setIsVisibleModal}
                setModalTitle={setModalTitle}
                setModalContent={setModalContent}
                setReloadPatients={setReloadPatients}
            />

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

function GetPatients(props) {
    const { patients, setIsVisibleModal, setModalTitle, setModalContent, setReloadPatients } = props

    const editPatient = patient => {
        setIsVisibleModal(true)
        setModalTitle(`Editar ${patient.name} ${patient.lastname}`)
        setModalContent(
            <EditPatientForm
                patient={patient}
                setIsVisibleModal={setIsVisibleModal}
                setReloadPatients={setReloadPatients}
            />
        )
    }

    const viewPatient = patient => {
        setIsVisibleModal(true)
        setModalTitle(`Paciente ${patient.name} ${patient.lastname}`)
        //console.log("data patient listpatient-->", patient);
        setModalContent(
            <ViewPatient
                patient={patient}
                setIsVisibleModal={setIsVisibleModal}
            />
            //<h1>camilo es gay</h1>
        )
    }

    const addQuery = patient => {
        setIsVisibleModal(true)
        setModalTitle(`Consulta ${patient.name} ${patient.lastname}`)
        setModalContent(
            <AddQueryForm
                patient={patient}
                setIsVisibleModal={setIsVisibleModal}
                setReloadPatients={setReloadPatients}
            />
        )
    }

    return (

        <List
            className="patients-active"
            itemLayout="horizontal"
            dataSource={patients}
            renderItem={patientRender => (
                <PatientList
                    patient={patientRender}
                    editPatient={editPatient}
                    viewPatient={viewPatient}
                    addQuery={addQuery}
                    setReloadPatients={setReloadPatients}
                />
            )}
            pagination={true}
        />
    )
}

function PatientList(props) {
    const { patient, editPatient, setReloadPatients, viewPatient, addQuery } = props
    const showDeleteConfirm = () => {
        confirm({
            title: "Eliminando Paciente",
            content: `¿Estas seguro que quieres eliminar a ${patient.name} ${patient.lastname}?`,
            okText: "Eliminar",
            okType: "danger",
            cancelText: "Cancelar",
            onOk() {
                deletePatientApi(patient.identification)
                    .then(response => {
                        notification["success"]({
                            message: response
                        });
                        setReloadPatients(true);
                    })
                    .catch(err => {
                        notification["error"]({
                            message: err
                        });
                    });
            }
        });
    };

    return (
        <List.Item
            actions={[
                <Button type="primary" onClick={() => viewPatient(patient)}>
                    <EyeOutlined />
                </Button>,
                <Button type="primary" onClick={() => addQuery(patient)}>
                    <FileAddOutlined />
                </Button>,
                <Button type="primary" onClick={() => editPatient(patient)}>
                    <EditOutlined />
                </Button>,
                <Button type="danger" onClick={showDeleteConfirm}>
                    <DeleteOutlined />
                </Button>
            ]}
        >
            <List.Item.Meta
                title={`
                    ${patient.name ? patient.name : "..."} 
                    ${patient.lastname ? patient.lastname : "..."}
                `}
                description={patient.email}
            />
        </List.Item>
    );
}