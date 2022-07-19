import React, { useState } from "react";
import { List, Button } from "antd";
import Modal from "../../../../Modal/Modal";
import { EyeOutlined } from "@ant-design/icons";
import ListQuery from "./Query/ListQuery/ListQuery";
import dateFormat from "dateformat";



import "./QueryPatient.scss"

export default function QueryPatient(props) {
    const { queries } = props;
    const [isVisibleModal, setIsVisibleModal] = useState(false);
    const [modalContent, setModalContent] = useState(null);
    const [modalTitle, setModalTitle] = useState("");

    return (
        <>
            {queries.length > 0 &&
                <div className="list-query">
                    <GetQuery
                        queries={queries}
                        setIsVisibleModal={setIsVisibleModal}
                        setModalTitle={setModalTitle}
                        setModalContent={setModalContent}
                    />

                    <Modal
                        title={modalTitle}
                        isVisible={isVisibleModal}
                        setIsVisible={setIsVisibleModal}
                    >
                        {modalContent}
                    </Modal>
                </div>}
        </>
    )
}

function GetQuery(props) {
    const { queries, setIsVisibleModal, setModalTitle, setModalContent } = props

    const viewQuery = query => {
        let dateQuery = dateFormat(query?.date_query, "dd-mm-yyyy")
        setIsVisibleModal(true)
        setModalTitle(`Consulta del ${dateQuery}`)
        setModalContent(
            <ListQuery
                query={query}
                setIsVisibleModal={setIsVisibleModal}
            />
        )
    }
    return (
        <>
            {queries.length > 0 &&
                <List
                    className="query-active"
                    itemLayout="horizontal"
                    dataSource={queries}
                    renderItem={queryRender => (
                        <QueryList
                            query={queryRender}
                            viewQuery={viewQuery}
                        />
                    )}
                    pagination={true}
                />}
        </>
    )
}

function QueryList(props) {
    const { query, viewQuery } = props
    let dateQuery = dateFormat(query?.date_query, "dd-mm-yyyy")
    return (
        <>
            {query &&
                <List.Item
                    actions={[
                        <Button type="primary" onClick={() => viewQuery(query)}>
                            <EyeOutlined />
                        </Button>
                    ]}>

                    <List.Item.Meta
                        title={`${dateQuery ? dateQuery : "..."} `}
                        description={query?.blood_pressure}
                    />
                </List.Item>}
        </>
    )
} 
