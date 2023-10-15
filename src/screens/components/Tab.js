import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'

//the stylesheet
import styles from '../style/Style'
 import Viewproject from '../home/ViewProject'
const Tab = ({itemData , onPress}) => {
    return (

        // the exterior rectangle
        <TouchableOpacity
          onPress={onPress}
            style={[styles.tabView, {
                backgroundColor: '#C4C4C4',
                width: 340,
                height: 170,
                marginBottom:10,
                elevation:3,
                shadowOpacity:1
            }]}>

            {/* the interior rectangle */}
            <View style={[styles.tabView, {
                backgroundColor: "#fff",
                width: 327,
                height: 79,
                marginTop:85,
                alignSelf: 'center',
                opacity: 0.75,
                borderRadius:13,
            }]}>

                {/* the project name */}
                <Text style={[styles.tabText, {
                    fontSize: 18,
                    marginVertical:'2%',
                    marginLeft:'1%',
                }]}> {itemData.project_name} </Text>

                {/* the location icon */}
                <View style={{flexDirection:'row', marginLeft:'1%'}}>
                <Image
                    source={require('C:/Users/rahaf/MilliFProject/assets/location.png')}
                    style={{ height: 16, width: 18 }}
                    resizeMode='contain'
                />

                {/* the location */}
                <Text style={[styles.tabText, {
                    fontSize: 13,
                    color: '#545454',
                    right:'50%',
                    bottom:'1%'
                }]}>{itemData.location}</Text>
                </View>

                {/* the calender icon */}
                <View style={{flexDirection:'row', marginLeft:'1%'}}>
                <Image
                    source={require('C:/Users/rahaf/MilliFProject/assets/calender.png')}
                    style={{ height: 18, width: 18 }}
                    resizeMode='contain'
                />

                {/* the start date */}
                <Text style={[styles.tabText, {
                    fontSize: 13,
                    right:'50%',
                    bottom:'0%'
                }]}>{itemData.start_date}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default Tab;