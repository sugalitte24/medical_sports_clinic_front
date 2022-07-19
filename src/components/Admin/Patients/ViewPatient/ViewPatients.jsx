import React, { useState, useEffect } from "react";
import InfoBasicPatient from "./InfoBasicPatient/InfoBasicPatient";
import Query from "./InfoQueryPatient/Query/Query";
import dateFormat from "dateformat";


import "./ViewPatients.scss"

export default function ViewPatient(props) {
    const { patient } = props
    const [patientData, setPatientData] = useState({})

    useEffect(() => {
        setPatientData({
            identification: patient?.identification,
            document_type: patient?.document_type,
            clinic_history: patient?.clinic_history,
            start_date: dateFormat(patient?.start_date, "dd-mm-yyyy"),
            age: patient?.age,
            name: patient?.name,
            lastname: patient?.lastname,
            email: patient?.email,
            birth_date: dateFormat(patient?.birth_date, "dd-mm-yyyy"),
            city: patient?.city,
            civil_status: patient?.civil_status,
            number_phone: patient?.number_phone,
            gender: patient?.gender,
            address: patient?.address,
            ocupation: patient?.ocupation,
            companion: patient?.companion,
            entity: patient?.entity,
            current_illness: patient?.current_illness,
            pathological: patient?.pathological,
            surgical: patient?.surgical,
            reason_consultation: patient?.reason_consultation,
            tx_ai: patient?.tx_ai,
            family_history: patient?.family_history,
        })
    }, [patient])

    return (
        <div className="view-patient">
            <InfoBasicPatient
                patientData={patientData}
                setPatientData={setPatientData}
            />
            <div>
                <h3>Consultas</h3>
            </div>
            <Query
                patient={patientData}
            />
        </div>
    )
}