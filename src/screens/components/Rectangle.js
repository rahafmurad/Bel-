import { View, Text } from 'react-native'
import React from 'react';

//the stylesheet

import styles from '../style/Style';
const Rectangle=({title,text, style})=>(
    <View>
    <Text style={{fontSize:16, fontWeight:'600', color:'#000', top:20, left:60}}>
        {title}
    </Text>
    <View style={style}>
        <Text style={{fontSize:14, fontWeight:'700',left:10, paddingRight:10 }}>{text}</Text>
    </View>
    </View>
);
export default Rectangle;