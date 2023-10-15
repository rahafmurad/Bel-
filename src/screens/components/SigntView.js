import { View, Text ,Image} from 'react-native'
import React from 'react';

//the stylesheet

import styles from '../style/Style';

const SigntView=({image})=>(
    <View> 
    <Text style={{paddingLeft:11,fontWeight:'bold',color:'black',}}> Signature :</Text>
    <View style={{   width: 150,

        height: 90,
         margin: 12,
        borderWidth: 1,
        borderColor: '#848484',
       }} >
      
 </View>
    </View>
);
export default SigntView;