import React, { useState } from "react";
import { Form, Input, Select, Button, Row, Col, notification, DatePicker } from "antd";
import { createPatientApi } from "../../../../api/patient";
import TextArea from "antd/lib/input/TextArea";
import {
    UserOutlined, IdcardOutlined, FileTextOutlined, MailOutlined, ShopOutlined, SecurityScanOutlined,
    TeamOutlined, GlobalOutlined, PhoneOutlined, ProfileOutlined, BankOutlined,
} from "@ant-design/icons";
import dateFormat from "dateformat";


import "./AddPatientForm.scss"

export default function AddPatientForm(props) {
    const { setIsVisibleModal, setReloadPatients } = props;
    const [patientData, setPatientData] = useState({})

    const addPatient = e => {
        dateFormat(patientData.birth_date, "yyyy-mm-dd")
        if (!patientData.identification || !patientData.name || !patientData.lastname || !patientData.email
            || !patientData.birth_date) {
            notification["error"]({
                message: "Algunos campos son Obligatorios"
            });
        } else {
            console.log(patientData);
            createPatientApi(patientData)
                .then(response => {
                    notification["success"]({
                        message: response
                    });
                    setIsVisibleModal(false)
                    setReloadPatients(true)
                    setPatientData({})
                })
                .catch(err => {
                    notification["error"]({
                        message: err
                    });
                })
        }
    }

    return (
        <div className="add-patient-form" >
            <AddForm
                patientData={patientData}
                setPatientData={setPatientData}
                addPatient={addPatient}
            />
        </div>
    )
}

function AddForm(props) {
    const { patientData, setPatientData, addPatient } = props
    const { Option } = Select

    return (
        <Form className="form-add" onFinish={addPatient}>

            <Row gutter={[16, 24]}>
                <Col span={6}>
                    <Form.Item>
                        <Input
                            prefix={<IdcardOutlined />}
                            placeholder="Identificación"
                            value={patientData.identification}
                            onChange={e => setPatientData({ ...patientData, identification: e.target.value })}
                        />
                    </Form.Item>
                </Col>
                <Col span={6}>
                    <Form.Item>
                        <Select
                            placeholder="Tipo de Documento"
                            value={patientData.document_type}
                            onChange={e => setPatientData({ ...patientData, document_type: e })}>
                            <Option value="CC">Cédula de Ciudadanía</Option>
                            <Option value="CE">Cédula de Extranjería</Option>
                            <Option value="TI">Tarjeta de Identidad</Option>
                            <Option value="PS">Pasaporte</Option>
                            <Option value="RC">Registro Civil</Option>
                        </Select>
                    </Form.Item>
                </Col>
                <Col span={6}>
                    <Form.Item>
                        <Input
                            prefix={<FileTextOutlined />}
                            placeholder="# Historia Clínica"
                            value={patientData.clinic_history}
                            onChange={e => setPatientData({ ...patientData, clinic_history: e.target.value })}
                        />
                    </Form.Item>
                </Col>
                <Col span={6}>
                    <Form.Item>
                        <DatePicker
                            style={{ width: '100%' }}
                            placeholder="Fecha de Inicio"
                            value={patientData.start_date}
                            onChange={e => setPatientData({ ...patientData, start_date: e })}
                        />
                    </Form.Item>
                </Col>
            </Row>

            <Row gutter={[16, 24]}>
                <Col span={6}>
                    <Form.Item>
                        <Input
                            prefix={<UserOutlined />}
                            placeholder="Nombres"
                            value={patientData.name}
                            onChange={e => setPatientData({ ...patientData, name: e.target.value })}
                        />
                    </Form.Item>
                </Col>
                <Col span={6}>
                    <Form.Item>
                        <Input
                            prefix={<UserOutlined />}
                            placeholder="Apellidos"
                            value={patientData.lastname}
                            onChange={e => setPatientData({ ...patientData, lastname: e.target.value })}
                        />
                    </Form.Item>
                </Col>
                <Col span={6}>
                    <Form.Item>
                        <Input
                            prefix={<MailOutlined />}
                            placeholder="Correo Electrónico"
                            value={patientData.email}
                            onChange={e => setPatientData({ ...patientData, email: e.target.value })}
                        />
                    </Form.Item>
                </Col>
                <Col span={6}>
                    <Form.Item>
                        <DatePicker
                            style={{ width: '100%' }}
                            placeholder="Fecha Nacimiento"
                            value={patientData.birth_date}
                            onChange={e => setPatientData({ ...patientData, birth_date: e })}
                        />
                    </Form.Item>
                </Col>
            </Row>

            <Row gutter={[16, 24]}>
                <Col span={6}>
                    <Form.Item>
                        <Input
                            prefix={<GlobalOutlined />}
                            placeholder="Ciudad"
                            value={patientData.city}
                            onChange={e => setPatientData({ ...patientData, city: e.target.value })}
                        />
                    </Form.Item>
                </Col>
                <Col span={6}>
                    <Form.Item>
                        <Select
                            placeholder="Estado Civil"
                            value={patientData.civil_status}
                            onChange={e => setPatientData({ ...patientData, civil_status: e })}>
                            <Option value="soltero">Soltero</Option>
                            <Option value="casado">Casado</Option>
                            <Option value="viudo">Viudo</Option>
                            <Option value="divorsiado">Divorsiado</Option>
                        </Select>

                    </Form.Item>
                </Col>
                <Col span={6}>
                    <Form.Item>
                        <Input
                            prefix={<PhoneOutlined />}
                            placeholder="Teléfono"
                            value={patientData.number_phone}
                            onChange={e => setPatientData({ ...patientData, number_phone: e.target.value })}
                        />
                    </Form.Item>
                </Col>
                <Col span={6}>
                    <Form.Item>
                        <Select
                            placeholder="Género"
                            value={patientData.gender}
                            onChange={e => setPatientData({ ...patientData, gender: e })}>
                            <Option value="masculino">Masculino</Option>
                            <Option value="femenino">Femenino</Option>
                            <Option value="otros">Otros</Option>
                        </Select>
                    </Form.Item>
                </Col>
            </Row>

            <Row gutter={[16, 24]}>
                <Col span={6}>
                    <Form.Item>
                        <Input
                            prefix={<ProfileOutlined />}
                            placeholder="Dirección"
                            value={patientData.address}
                            onChange={e => setPatientData({ ...patientData, address: e.target.value })}
                        />
                    </Form.Item>
                </Col>
                <Col span={6}>
                    <Form.Item>
                        <Input
                            prefix={<BankOutlined />}
                            placeholder="Ocupación"
                            value={patientData.ocupation}
                            onChange={e => setPatientData({ ...patientData, ocupation: e.target.value })}
                        />
                    </Form.Item>
                </Col>
                <Col span={6}>
                    <Form.Item>
                        <Input
                            prefix={<TeamOutlined />}
                            placeholder="Acompañante"
                            value={patientData.companion}
                            onChange={e => setPatientData({ ...patientData, companion: e.target.value })}
                        />
                    </Form.Item>
                </Col>
                <Col span={6}>
                    <Form.Item>
                        <Input
                            prefix={<ShopOutlined />}
                            placeholder="Entidad"
                            value={patientData.entity}
                            onChange={e => setPatientData({ ...patientData, entity: e.target.value })}
                        />
                    </Form.Item>
                </Col>
            </Row>

            <Row gutter={[16, 24]}>
                <Col span={8}>
                    <Form.Item>
                        <Input
                            prefix={<SecurityScanOutlined />}
                            placeholder="Enfermedad Actual"
                            value={patientData.current_illness}
                            onChange={e => setPatientData({ ...patientData, current_illness: e.target.value })}
                        />
                    </Form.Item>
                </Col>
                <Col span={8}>
                    <Form.Item>
                        <Input
                            prefix={<SecurityScanOutlined />}
                            placeholder="Patlogía"
                            value={patientData.pathological}
                            onChange={e => setPatientData({ ...patientData, pathological: e.target.value })}
                        />
                    </Form.Item>
                </Col>
                <Col span={8}>
                    <Form.Item>
                        <Input
                            prefix={<SecurityScanOutlined />}
                            placeholder="Quirúrgicos"
                            value={patientData.surgical}
                            onChange={e => setPatientData({ ...patientData, surgical: e.target.value })}
                        />
                    </Form.Item>
                </Col>
            </Row>

            <Row gutter={[16, 24]}>
                <Col span={8}>
                    <Form.Item>
                        <TextArea
                            rows={4}
                            placeholder="Razon de la consulta"
                            value={patientData.reason_consultation}
                            onChange={e => setPatientData({ ...patientData, reason_consultation: e.target.value })}
                        />
                    </Form.Item>
                </Col>
                <Col span={8}>
                    <Form.Item>
                        <TextArea
                            rows={4}
                            placeholder="Tx/Ai"
                            value={patientData.tx_ai}
                            onChange={e => setPatientData({ ...patientData, tx_ai: e.target.value })}
                        />
                    </Form.Item>
                </Col>
                <Col span={8}>
                    <Form.Item>
                        <TextArea
                            rows={4}
                            placeholder="Antecedentes Familiares"
                            value={patientData.family_history}
                            onChange={e => setPatientData({ ...patientData, family_history: e.target.value })}
                        />
                    </Form.Item>
                </Col>
            </Row>

            <Form.Item>
                <Button type="primary" htmlType="submit" className="btn-submit" >
                    Crear Paciente
                </Button>
            </Form.Item>
        </Form>
    )
}