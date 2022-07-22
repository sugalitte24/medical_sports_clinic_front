import React from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import InfoBasicPatient from '../ViewPatient/InfoBasicPatient/InfoBasicPatient';
import ListQuery from '../ViewPatient/InfoQueryPatient/Query/ListQuery/ListQuery';

export default function PDF(props) {
    const { patient, query } = props
    console.log("patiente pdf--->", patient);
    console.log("query pdf--->", query);

    const styles = StyleSheet.create({
        page: {
            flexDirection: 'row',
            backgroundColor: '#E4E4E4'
        },
        section: {
            margin: 10,
            padding: 10,
            flexGrow: 1
        }
    });

    return (

        <Document>
            <Page size="A4">
                <View>
                    <Text>Identificación: </Text>
                    <Text>{patient.identification}</Text>
                </View>
                <View>
                    <Text>Section #2</Text>
                </View>
            </Page>
        </Document>


    )
}