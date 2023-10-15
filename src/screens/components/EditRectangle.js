import { View, TouchableOpacity, Text, TextInput } from 'react-native'
import React from 'react'

//the stylesheet
import styles from '../style/Style';

const EditRectangle = ({ title, placeholder, style, data, setData }) => (
    <View>
  
        <Text style={{ fontSize: 16, fontWeight: '600', color: '#000', top: 20, left: 60 }}>
            {title}
        </Text>
        
       
        <View style={[styles.rectangle, {style}]}>
            <TextInput style={{ fontSize: 16, fontWeight: '600', color: '#545454', left: 10, paddingBottom: 0, padding: 0 }}
            placeholder={placeholder} 
            value={data}
            onChangeText={text => setData(text)}
            />
        </View>
    </View>
);
export default EditRectangle;