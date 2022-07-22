import React, { useState, useEffect } from "react";
import { Form, Input, Row, Col, Button } from "antd";
import { MedicineBoxOutlined, HeartOutlined } from "@ant-design/icons";
import TextArea from "antd/lib/input/TextArea";
import { PDFDownloadLink } from "@react-pdf/renderer";


import "./ListQuery.scss"
import PDF from "../../../../PDF/PDF";

export default function ListQuery(props) {

    const { query, patient } = props
    const [queryData, setQueryData] = useState({})

    useEffect(() => {
        setQueryData({
            user_id: query?.user_id,
            date_query: query?.date_query,
            hear_rate: query?.hear_rate,
            blood_pressure: query?.blood_pressure,
            weight: query?.weight,
            size: query?.size,
            imc: query?.imc,
            o2_saturation: query?.o2_saturation,
            analysis: query?.analysis,
            plan_manage: query?.plan_manage,
            diagnosis: query?.diagnosis,
            evolution: query?.evolution,
        })
    }, [query])


    const passPDF = e => {

        //console.log("patiente pdf--->", patient);
        //console.log("query pdf--->", query);
        return (
            window.open(
                <PDF
                    patient={patient}
                    query={query}
                />)
        )
    }

    return (
        <Form className="form-view" layout="vertical">

            <Row gutter={[16, 24]}>
                <Col span={4}>
                    <Form.Item label="Frecuencia Cardiaca">
                        <Input
                            prefix={<HeartOutlined />}
                            value={queryData?.hear_rate}
                            readOnly={true}
                        />
                    </Form.Item>
                </Col>
                <Col span={4}>
                    <Form.Item label="Presión Sanguinea">
                        <Input
                            prefix={<HeartOutlined />}
                            value={queryData?.blood_pressure}
                            readOnly={true}
                        />
                    </Form.Item>
                </Col>
                <Col span={4}>
                    <Form.Item label="Saturación O2">
                        <Input
                            prefix={<MedicineBoxOutlined />}
                            value={queryData?.o2_saturation}
                            readOnly={true}
                        />
                    </Form.Item>
                </Col>
                <Col span={4}>
                    <Form.Item label="Peso">
                        <Input
                            prefix={<MedicineBoxOutlined />}
                            value={queryData?.weight}
                            readOnly={true}
                        />
                    </Form.Item>
                </Col>
                <Col span={4}>
                    <Form.Item label="Talla">
                        <Input
                            prefix={<MedicineBoxOutlined />}
                            value={queryData?.size}
                            readOnly={true}
                        />
                    </Form.Item>
                </Col>
                <Col span={4}>
                    <Form.Item label="IMC">
                        <Input
                            prefix={<MedicineBoxOutlined />}
                            value={queryData?.imc}
                            readOnly={true}
                        />
                    </Form.Item>
                </Col>
            </Row>

            <Row gutter={[16, 24]}>
                <Col span={24}>
                    <Form.Item label="Análisis">
                        <TextArea
                            rows={4}
                            value={queryData?.analysis}
                            readOnly={true}
                        />
                    </Form.Item>
                </Col>
            </Row>

            <Row gutter={[16, 24]}>
                <Col span={24}>
                    <Form.Item label="Plan de Manejo">
                        <TextArea
                            rows={4}
                            value={queryData?.plan_manage}
                            readOnly={true}
                        />
                    </Form.Item>
                </Col>
            </Row>

            <Row gutter={[16, 24]}>
                <Col span={24}>
                    <Form.Item label="Diagnóstico">
                        <TextArea
                            rows={4}
                            value={queryData?.diagnosis}
                            readOnly={true}
                        />
                    </Form.Item>
                </Col>
            </Row>

            <Row gutter={[16, 24]}>
                <Col span={24}>
                    <Form.Item label="Evolución">
                        <TextArea
                            rows={4}
                            value={queryData?.evolution}
                            readOnly={true}
                        />
                    </Form.Item>
                </Col>
            </Row>

            <Form.Item>
                <PDFDownloadLink
                    document={
                        <PDF
                            patient={patient}
                            query={query}
                        />}
                    fileName="historiaclinica.pdf"
                >
                    {({ blob, url, loading, error }) =>
                        loading ? "Loading document..." : "Download now!"
                    }
                </PDFDownloadLink>
            </Form.Item>
        </Form>
    )

}