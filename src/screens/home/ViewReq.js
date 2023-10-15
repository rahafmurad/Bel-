import { View, Text, Image } from 'react-native'
import React from 'react'
import styles from './style/Style'
//the components
import LogoContainer from '../components/LogoContainer'
import Rectangle from '../components/Rectangle'
import AppButton from '../components/Button'

const ViewReq = () => {
  const body = () => {
    return (
      <View>
        <Rectangle style={[styles.rectangle, { width: '100%' }, { alignItems: 'center' }]} title={"Order Number"} text={""} />
        <Rectangle style={[styles.rectangle, { width: '100%' }, { alignItems: 'center' }]} title={"Date"} text={""} />

        <View style={{ flexDirection: 'row', marginLeft: '5%', marginTop: '5%' }}>
          <Image
            source={require('C:/Users/shaimaa/Desktop/in_milli/src/assets/location.png')}
            style={{ height: 16, width: 18, marginLeft: '10%' }}
            resizeMode='contain' />

          {/* the location */}
          <Text style={[styles.tabText, {
            fontSize: 13,
            color: '#000',
            marginLeft: '0%',
          }]}>Al-Zaher, Makkah</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <View>

          </View>
        </View>

      </View>
    )
  }
  return (
    <View style={[styles.container, { margin: '8%' }]}>
      <LogoContainer />
      {/* {body()} */}

      {/* view Request  EO: when there is a response */}
      {/* <AppButton style={[styles.BlackButton, {backgroundColor:'#c4c4c4'} ,{ width: 240 }, { alignSelf: 'center'}]} title="View Response"/>*/}

      {/* view Request EO: when there is no response */}
      {/* <AppButton style={[styles.BlackButton, {backgroundColor:'#FFDE59'} ,{ width: 240 }, { alignSelf: 'center'} ]} title="New Requests"/>*/}


      {/* view Request Contractor: when there is a response */}
      {/* <View style={{ flexDirection:'row', backgroundColor:'red',marginTop:'35%', alignSelf: 'center'}}>
       <AppButton style={[styles.BlackButton, {backgroundColor:'#c4c4c4'} ,{ width: 175 }]} title="View Response"/>
       <AppButton style={[styles.BlackButton, {backgroundColor:'#FFDE59'} ,{ width: 175 }]} title="New submission"/>
       </View> */}

      {/* view Request contractor : when there is no response */}
      <Text style={{ fontSize: 22, fontWeight: '700', alignSelf: 'center', marginTop: '50%' }}> Sorry!! {'\n'} there is no response yet :(</Text>
      <AppButton style={[styles.BlackButton, { backgroundColor: '#FFDE59' }, { width: 240 }, { alignSelf: 'center' }, { marginTop: '90%' }]} title="New submission" />
    </View>
  )
}

export default ViewReq