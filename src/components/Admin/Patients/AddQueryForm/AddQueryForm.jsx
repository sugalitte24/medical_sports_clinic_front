import React, { useState } from "react";
import { Form, Input, Button, Row, Col, notification } from "antd";
import { createQueryApi } from "../../../../api/query";
import TextArea from "antd/lib/input/TextArea";
import { MedicineBoxOutlined, HeartOutlined } from "@ant-design/icons";


import "./AddQueryForm.scss"

export default function AddQueryForm(props) {
    const { setIsVisibleModal, setReloadPatients, patient } = props;
    const [queryData, setQueryData] = useState({})

    const createQuery = e => {
        queryData.user_id = patient.identification
        if (!patient.identification) {
            notification["error"]({
                message: "No se encuentra el paciente."
            })
        } else {
            createQueryApi(queryData, patient.identification)
                .then(result => {
                    notification["success"]({
                        message: result
                    })
                    setIsVisibleModal(false)
                    setReloadPatients(true)
                    setQueryData({})
                })
                .catch(err => {
                    notification["error"]({
                        message: err
                    });
                })
        }
    }

    return (
        <div className="add-query-form" >
            <AddForm
                queryData={queryData}
                setQueryData={setQueryData}
                createQuery={createQuery}
            />
        </div>
    )
}

function AddForm(props) {
    const { queryData, setQueryData, createQuery } = props

    return (
        <Form className="form-add" onFinish={createQuery}>

            <Row gutter={[16, 24]}>
                <Col span={4}>
                    <Form.Item>
                        <Input
                            prefix={<HeartOutlined />}
                            placeholder="Frecuencia Cardiaca"
                            value={queryData.hear_rate}
                            onChange={e => setQueryData({ ...queryData, hear_rate: e.target.value })}
                        />
                    </Form.Item>
                </Col>
                <Col span={4}>
                    <Form.Item>
                        <Input
                            prefix={<HeartOutlined />}
                            placeholder="Presión Sanguinea"
                            value={queryData.blood_pressure}
                            onChange={e => setQueryData({ ...queryData, blood_pressure: e.target.value })}
                        />
                    </Form.Item>
                </Col>
                <Col span={4}>
                    <Form.Item>
                        <Input
                            prefix={<MedicineBoxOutlined />}
                            placeholder="Saturación O2"
                            value={queryData.o2_saturation}
                            onChange={e => setQueryData({ ...queryData, o2_saturation: e.target.value })}
                        />
                    </Form.Item>
                </Col>
                <Col span={4}>
                    <Form.Item>
                        <Input
                            prefix={<MedicineBoxOutlined />}
                            placeholder="Peso"
                            value={queryData.weight}
                            onChange={e => setQueryData({ ...queryData, weight: e.target.value })}
                        />
                    </Form.Item>
                </Col>
                <Col span={4}>
                    <Form.Item>
                        <Input
                            prefix={<MedicineBoxOutlined />}
                            placeholder="Talla"
                            value={queryData.size}
                            onChange={e => setQueryData({ ...queryData, size: e.target.value })}
                        />
                    </Form.Item>
                </Col>
                <Col span={4}>
                    <Form.Item>
                        <Input
                            prefix={<MedicineBoxOutlined />}
                            placeholder="IMC"
                            value={queryData.imc}
                            onChange={e => setQueryData({ ...queryData, imc: e.target.value })}
                        />
                    </Form.Item>
                </Col>
            </Row>

            <Row gutter={[16, 24]}>
                <Col span={24}>
                    <Form.Item>
                        <TextArea
                            rows={4}
                            placeholder="Análisis"
                            value={queryData.analysis}
                            onChange={e => setQueryData({ ...queryData, analysis: e.target.value })}
                        />
                    </Form.Item>
                </Col>
            </Row>

            <Row gutter={[16, 24]}>
                <Col span={24}>
                    <Form.Item>
                        <TextArea
                            rows={4}
                            placeholder="Plan de Manejo"
                            value={queryData.plan_manage}
                            onChange={e => setQueryData({ ...queryData, plan_manage: e.target.value })}
                        />
                    </Form.Item>
                </Col>
            </Row>

            <Row gutter={[16, 24]}>
                <Col span={24}>
                    <Form.Item>
                        <TextArea
                            rows={4}
                            placeholder="Diagnóstico"
                            value={queryData.diagnosis}
                            onChange={e => setQueryData({ ...queryData, diagnosis: e.target.value })}
                        />
                    </Form.Item>
                </Col>
            </Row>

            <Row gutter={[16, 24]}>
                <Col span={24}>
                    <Form.Item>
                        <TextArea
                            rows={4}
                            placeholder="Evolución"
                            value={queryData.evolution}
                            onChange={e => setQueryData({ ...queryData, evolution: e.target.value })}
                        />
                    </Form.Item>
                </Col>
            </Row>

            <Form.Item>
                <Button type="primary" htmlType="submit" className="btn-submit" >
                    Guardar Consulta
                </Button>
            </Form.Item>
        </Form>
    )
}