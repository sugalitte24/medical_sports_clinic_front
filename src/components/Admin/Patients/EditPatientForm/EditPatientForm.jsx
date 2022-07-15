import React, { useState, useEffect } from "react";
import { Form, Input, Select, Button, Row, Col, notification } from "antd";
import { updatePatientApi } from "../../../../api/patient";
import TextArea from "antd/lib/input/TextArea";
import {
    ShopOutlined, SecurityScanOutlined, TeamOutlined, GlobalOutlined, PhoneOutlined, ProfileOutlined, BankOutlined,
} from "@ant-design/icons";

import "./EditPatientForm.scss"

export default function EditPatientForm(props) {
    const { patient, setIsVisibleModal, setReloadPatients } = props
    const [patientData, setPatientData] = useState({})

    useEffect(() => {
        setPatientData({
            city: patient.city,
            civil_status: patient.civil_status,
            number_phone: patient.number_phone,
            address: patient.address,
            ocupation: patient.ocupation,
            companion: patient.companion,
            entity: patient.entity,
            current_illness: patient.current_illness,
            pathological: patient.pathological,
            surgical: patient.surgical,
            reason_consultation: patient.reason_consultation,
            tx_ai: patient.tx_ai,
            family_history: patient.family_history,
        })
    }, [patient])

    const updatePatient = e => {
        let patientUpdate = patientData

        if (!patientUpdate.civil_status || !patientUpdate.number_phone || !patientUpdate.address) {
            notification["error"]({
                message: "Estado civil, Teléfono y Dirección son Obligatorios."
            })
        } else {
            updatePatientApi(patientUpdate, patient.identification)
                .then(result => {
                    notification["success"]({
                        message: result.message
                    })
                    setIsVisibleModal(false)
                    setReloadPatients(true)
                    setPatientData({ ...patientData })
                })
        }
    }

    return (
        <div className="edit-patient-form">
            <EditForm
                patientData={patientData}
                setPatientData={setPatientData}
                updatePatient={updatePatient}
            />
        </div>
    )
}

function EditForm(props) {

    const { patientData, setPatientData, updatePatient } = props
    const { Option } = Select;
    return (
        <Form className="form-edit" onFinish={updatePatient}>

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
                        <Input
                            prefix={<BankOutlined />}
                            placeholder="Ocupación"
                            value={patientData.ocupation}
                            onChange={e => setPatientData({ ...patientData, ocupation: e.target.value })}
                        />
                    </Form.Item>
                </Col>
            </Row>

            <Row gutter={[16, 24]}>
                <Col span={8}>
                    <Form.Item>
                        <Input
                            prefix={<ProfileOutlined />}
                            placeholder="Dirección"
                            value={patientData.address}
                            onChange={e => setPatientData({ ...patientData, address: e.target.value })}
                        />
                    </Form.Item>
                </Col>
                <Col span={8}>
                    <Form.Item>
                        <Input
                            prefix={<TeamOutlined />}
                            placeholder="Acompañante"
                            value={patientData.companion}
                            onChange={e => setPatientData({ ...patientData, companion: e.target.value })}
                        />
                    </Form.Item>
                </Col>
                <Col span={8}>
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
                    Guardar Paciente
                </Button>
            </Form.Item>


        </Form>
    )
}