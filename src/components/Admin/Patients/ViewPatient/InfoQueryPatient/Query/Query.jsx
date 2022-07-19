import React, { useEffect, useState } from "react";
import { getQueryApi } from "../../../../../../api/query";
import QueryPatient from "../QueryPatient";

import './Query.scss'

export default function Query(props) {
    const { patient } = props
    const [queryData, setQueryData] = useState({})

    useEffect(() => {
        if (patient?.identification !== undefined) {
            getQueryApi(patient?.identification)
                .then(response => {
                    setQueryData(response.query)
                })
        }
    }, [patient])

    return (
        <div className="patient">
            {queryData ?
                <QueryPatient
                    queries={queryData}
                /> : <h1>No hay consultas.</h1>}
        </div>
    )
}