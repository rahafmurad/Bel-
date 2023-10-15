import React, { useMemo, useState  } from 'react';
import {StyleSheet} from 'react-native';
import RadioGroup from 'react-native-radio-buttons-group';

export default function Radio() {

    const radioButtons = useMemo(() => ([
        {
            id: '1', // acts as primary key, should be unique and non-empty string
            label: ' A (Acceptable)                         ',
            value: 'A'
        },
        {
            id: '2',
            label: ' B (Acceptable with notes)      ',
            value: 'B'
        }  ,
        {
            id: '3',
            label: 'C (Accepted-must re-applied)',
            value: 'C'
        } ,
        {
            id: '4',
            label: 'D (Rejected)                             ',
            value: 'D'
        }

    ]), []);

    const [selectedId, setSelectedId] = useState();

    return (
        <RadioGroup 
            radioButtons={radioButtons} 
            onPress={setSelectedId}
            selectedId={selectedId}
        />
    );

}



