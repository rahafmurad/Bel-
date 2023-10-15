import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'

//the stylesheet
import styles from '../style/Style'

const ReqTab = ({ style, orderNumber, Task, startDate, subDate }) => {
    return (

        // the exterior rectangle
        <TouchableOpacity
            onPress={() => console.log("Pressed")}
            style={[styles.tabView, {
                backgroundColor: '#EAEAEA',
                height: 150,
                width: 300,
                marginBottom: 5,
                marginHorizontal: 10,
                elevation: 20,
                shadowColor: '#aaa', // Add shadowColor for shadow effect on iOS
                shadowOffset: { width: 2, height: 2, },
                shadowOpacity: 0.5, // Add shadowOpacity for shadow effect on iOS
                shadowRadius: 5, // Add shadowRadius for shadow effect on iOS
            }, { style }]}>
            {/* the project name */}
            <Text style={[styles.tabText, { fontSize: 15, paddingLeft: '6%', top: '5%', color: '#545454' }]}>Order Number</Text>
            <Text style={[styles.tabText, { fontSize: 13, paddingLeft: '6%', top: '4%', color: '#545454', }]}>{orderNumber}</Text>

            {/* the interior rectangle */}
            <View style={[styles.tabView, {
                backgroundColor: "#fff",
                width: '95%',
                height: '60%',
                marginBottom: 5,
                alignSelf: 'center',
                opacity: 0.75,
                borderRadius: 19,
                marginTop: 15
            }]}>

                <View style={{ flexDirection: 'column', marginTop: 8 }}>
                    <Text style={[styles.tabText, { fontSize: 13, paddingHorizontal: '5%' }]}>Task</Text>
                    <Text style={[styles.tabText, { fontSize: 13, paddingHorizontal: '5%', color: '#545454', }]}>{Task}</Text>
                </View>

                {/* the titles */}
                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5 }}>
                    {/*start date */}
                    <Text style={[styles.tabText, { fontSize: 13, paddingHorizontal: '5%' }]}>Start Date</Text>
                    {/* Submission date */}
                    <Text style={[styles.tabText, { fontSize: 13, paddingHorizontal: '7%' }]}>Submission Date</Text>
                </View>

                {/* the inputs */}
                <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                    <Text style={[styles.tabText, {
                        fontSize: 13, paddingHorizontal: '5%', color: '#545454'
                    }]}>{startDate}</Text>
                    <Text style={[styles.tabText, {
                        fontSize: 13, paddingHorizontal: '8%', color: '#545454'
                    }]}>{subDate}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default ReqTab;