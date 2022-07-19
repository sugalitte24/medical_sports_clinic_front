import React from "react";
import { Form, Input, Row, Col } from "antd";
import TextArea from "antd/lib/input/TextArea";
import {
    UserOutlined, IdcardOutlined, FileTextOutlined, MailOutlined, ShopOutlined, SecurityScanOutlined,
    TeamOutlined, GlobalOutlined, PhoneOutlined, ProfileOutlined, BankOutlined, CalendarOutlined, SmileOutlined,
    HeartOutlined, UserSwitchOutlined
} from "@ant-design/icons";


import "./InfoBasicPatient.scss"

export default function InfoBasicPatient(props) {
    const { patientData } = props


    return (
        <Form className="form-view" layout="vertical">

            <Row gutter={[16, 24]}>
                <Col span={6}>
                    <Form.Item label="Identificación:">
                        <Input
                            prefix={<IdcardOutlined />}
                            value={patientData.identification}
                            readOnly={true}
                        />
                    </Form.Item>
                </Col>
                <Col span={3}>
                    <Form.Item label="Documento:">
                        <Input
                            prefix={<IdcardOutlined />}
                            value={patientData.document_type}
                            readOnly={true}
                        />
                    </Form.Item>
                </Col>
                <Col span={6}>
                    <Form.Item label="# Historia Clínica:">
                        <Input
                            prefix={<FileTextOutlined />}
                            value={patientData.clinic_history}
                            readOnly={true}
                        />
                    </Form.Item>
                </Col>
                <Col span={6}>
                    <Form.Item label="Fecha de Inicio:">
                        <Input
                            prefix={<CalendarOutlined />}
                            value={patientData.start_date}
                            readOnly={true}
                        />
                    </Form.Item>
                </Col>
                <Col span={3}>
                    <Form.Item label="Edad:">
                        <Input
                            prefix={<UserSwitchOutlined />}
                            value={patientData.age}
                            readOnly={true}
                        />
                    </Form.Item>
                </Col>
            </Row>

            <Row gutter={[16, 24]}>
                <Col span={6}>
                    <Form.Item label="Nombres:">
                        <Input
                            prefix={<UserOutlined />}
                            value={patientData.name}
                            readOnly={true}
                        />
                    </Form.Item>
                </Col>
                <Col span={6}>
                    <Form.Item label="Apellidos:">
                        <Input
                            prefix={<UserOutlined />}
                            value={patientData.lastname}
                            readOnly={true}
                        />
                    </Form.Item>
                </Col>
                <Col span={6}>
                    <Form.Item label="Correo Electrónico:">
                        <Input
                            prefix={<MailOutlined />}
                            value={patientData.email}
                            readOnly={true}
                        />
                    </Form.Item>
                </Col>
                <Col span={6}>
                    <Form.Item label="Fecha Nacimiento:">
                        <Input
                            prefix={<CalendarOutlined />}
                            value={patientData.birth_date}
                            readOnly={true}
                        />
                    </Form.Item>
                </Col>
            </Row>

            <Row gutter={[16, 24]}>
                <Col span={6}>
                    <Form.Item label="Ciudad:">
                        <Input
                            prefix={<GlobalOutlined />}
                            value={patientData.city}
                            readOnly={true}
                        />
                    </Form.Item>
                </Col>
                <Col span={6}>
                    <Form.Item label="Estado Civil:">
                        <Input
                            prefix={<HeartOutlined />}
                            value={patientData.civil_status}
                            readOnly={true}
                        />

                    </Form.Item>
                </Col>
                <Col span={6}>
                    <Form.Item label="Teléfono:">
                        <Input
                            prefix={<PhoneOutlined />}
                            value={patientData.number_phone}
                            readOnly={true}
                        />
                    </Form.Item>
                </Col>
                <Col span={6}>
                    <Form.Item label="Género:">
                        <Input
                            prefix={<SmileOutlined />}
                            value={patientData.gender}
                            readOnly={true}
                        />
                    </Form.Item>
                </Col>
            </Row>

            <Row gutter={[16, 24]}>
                <Col span={6}>
                    <Form.Item label="Dirección:">
                        <Input
                            prefix={<ProfileOutlined />}
                            value={patientData.address}
                            readOnly={true}
                        />
                    </Form.Item>
                </Col>
                <Col span={6}>
                    <Form.Item label="Ocupación:">
                        <Input
                            prefix={<BankOutlined />}
                            value={patientData.ocupation}
                            readOnly={true}
                        />
                    </Form.Item>
                </Col>
                <Col span={6}>
                    <Form.Item label="Acompañante:">
                        <Input
                            prefix={<TeamOutlined />}
                            value={patientData.companion}
                            readOnly={true}
                        />
                    </Form.Item>
                </Col>
                <Col span={6}>
                    <Form.Item label="Entidad:">
                        <Input
                            prefix={<ShopOutlined />}
                            value={patientData.entity}
                            readOnly={true}
                        />
                    </Form.Item>
                </Col>
            </Row>

            <Row gutter={[16, 24]}>
                <Col span={8}>
                    <Form.Item label="Enfermedad Actual:">
                        <Input
                            prefix={<SecurityScanOutlined />}
                            value={patientData.current_illness}
                            readOnly={true}
                        />
                    </Form.Item>
                </Col>
                <Col span={8}>
                    <Form.Item label="Patología:">
                        <Input
                            prefix={<SecurityScanOutlined />}
                            value={patientData.pathological}
                            readOnly={true}
                        />
                    </Form.Item>
                </Col>
                <Col span={8}>
                    <Form.Item label="Quirúrgicos:">
                        <Input
                            prefix={<SecurityScanOutlined />}
                            value={patientData.surgical}
                            readOnly={true}
                        />
                    </Form.Item>
                </Col>
            </Row>

            <Row gutter={[16, 24]}>
                <Col span={8}>
                    <Form.Item label="Razón Consulta:">
                        <TextArea
                            rows={4}
                            value={patientData.reason_consultation}
                            readOnly={true}
                        />
                    </Form.Item>
                </Col>
                <Col span={8}>
                    <Form.Item label="Tx/Ai:">
                        <TextArea
                            rows={4}
                            value={patientData.tx_ai}
                            readOnly={true}
                        />
                    </Form.Item>
                </Col>
                <Col span={8}>
                    <Form.Item label="Antecedentes Familiares:">
                        <TextArea
                            rows={4}
                            value={patientData.family_history}
                            readOnly={true}
                        />
                    </Form.Item>
                </Col>
            </Row>
        </Form>
    )
}