import React, { useEffect, useState } from "react";
import './Patients.scss'
import { getPatientsApi } from "../../../api/patient"
import ListPatients from "../../../components/Admin/Patients/ListPatients/ListPatients"

export default function Patient() {
    const [patients, setPatients] = useState([])
    const [reloadPatients, setReloadPatients] = useState(false)

    useEffect(() => {
        getPatientsApi().then(response => {
            setPatients(response.patient)
        })
        setReloadPatients(false)
    }, [reloadPatients])

    return (
        <div className="patient">
            <ListPatients
                patients={patients}
                setReloadPatients={setReloadPatients}
            />
        </div>
    )

}