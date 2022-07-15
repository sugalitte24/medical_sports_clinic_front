import React, { useState } from "react";
import { Form, Input, Select, Button, Row, Col, notification, DatePicker } from "antd";
import { createQueryApi } from "../../../../api/query";
import TextArea from "antd/lib/input/TextArea";
import {
    UserOutlined, IdcardOutlined, FileTextOutlined, MailOutlined, ShopOutlined, SecurityScanOutlined,
    TeamOutlined, GlobalOutlined, PhoneOutlined, ProfileOutlined, BankOutlined,
} from "@ant-design/icons";
import dateFormat from "dateformat";


import "./AddQueryForm.scss"

export default function AddQueryForm(props) {
    const { setIsVisibleModal, setReloadPatients, patient } = props;
    const [queryData, setQueryData] = useState({})

    const createQuery = e => {
        if (!patient.identification) {
            notification["error"]({
                message: "No se encuentra el paciente."
            })
        } else {
            createQueryApi(queryData, patient.identification)
                .then(result => {
                    notification["success"]({
                        message: result.message
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

}