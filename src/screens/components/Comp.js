import { View, Text, Image } from 'react-native'
import React from 'react'
import styles from '../style/Style'


const Comp = ({ rejected, accepted, Requests, Projects }) => {
    return (
        <View style={{
            width: '90%',
            height: 80,
            alignSelf: 'center',
            alignItems: 'center',
        }}>
            <View style={{
                width: '90%',
                height: 40,
                alignContent: 'center',
                alignSelf: 'center',
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'space-between',
            }}>
                {/* the type if form icon */}
                <Image
                    source={require('C:/Users/rahaf/MilliFProject/assets/x.png')}
                    style={[styles.icon, {height:38},{width:38}]} />

                <Image
                    source={require('C:/Users/rahaf/MilliFProject/assets/T.png')}
                    style={[styles.icon, {height:38},{width:38}]} />

                <Image
                    source={require('C:/Users/rahaf/MilliFProject/assets/buld.png')}
                    style={[styles.icon, {height:38},{width:38}]} />

                <Image
                    source={require('C:/Users/rahaf/MilliFProject/assets/file.png')}
                    style={[styles.icon, {height:38},{width:38}]} />
            </View>
            <View style={{
                width: '84%',
                height: 20,
                flexDirection:'row',
                alignSelf: 'center',
                alignItems: 'center',
                alignContent: 'center',
                justifyContent: 'space-between',
            }}>
                {/* number of rejected forms */}
                <Text style={styles.iconstext}>{rejected}</Text>
                {/* number of accepted forms */}
                <Text style={styles.iconstext}>{accepted}</Text>
                {/* number of rejected forms */}
                <Text style={styles.iconstext}>{Requests}</Text>

                {/* number of rejected forms */}
                <Text style={styles.iconstext}>{Projects}</Text>
            </View>
            <View style={{
                width: '95%',
                height: 20,
                flexDirection:'row',
                alignSelf: 'center',
                alignItems: 'center',
                alignContent: 'center',
                justifyContent: 'space-between',
            }}>
                {/* title of the type of forms */}
                <Text style={styles.iconstext}>Rejected</Text>
                {/* title of the type of forms */}
                <Text style={styles.iconstext}>Accepted</Text>
                {/* title of the type of forms */}
                <Text style={styles.iconstext}>Requests</Text>
                {/* title of the type of forms */}
                <Text style={styles.iconstext}>Projects</Text>
            </View>
        </View>
)}
export default Comp;