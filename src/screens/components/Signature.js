import React, { createRef } from 'react';

// import all the components we are going to use
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Alert,
  TouchableHighlight,
} from 'react-native';
import styles from '../style/Style';
import SignatureCapture from 'react-native-signature-capture';

const Signature = ({style}) => {
  const sign = createRef();

  const saveSign = () => {
    sign.current.saveImage();
  };

  const resetSign = () => {
    sign.current.resetImage();
  };

  const _onSaveEvent = (result) => {
    //result.encoded - for the base64 encoded png
    //result.pathName - for the file path name
    console.log(result.encoded);
    Alert.alert('Signature Capture Successfully!');
    
  };

  const _onDragEvent = () => {
    // This callback will be called when the user enters signature
    console.log('dragged');
  };

  return (
<View style={style}>
    <View style={{
      justifyContent: 'center', alignItems: 'center', backgroundColor: '#E7E5E5', width: 265,
      height: 220, left: '20%', borderRadius: 40,
    }}>
      <Text style={[{
        fontSize: 16,
        fontWeight: '700',
        color: '#000',
        right: '30%', top: '10%'
      }]}>Signature :</Text>
      <SignatureCapture
        style={styles.signature}
        ref={sign}
        onSaveEvent={_onSaveEvent}
        onDragEvent={_onDragEvent}
        showNativeButtons={false}
        showTitleLabel={false}
        viewMode={'portrait'}
      />
      <View style={{ flexDirection: 'row' }}>
        <TouchableHighlight
          style={styles.buttonStyle}
          onPress={() => {
            saveSign();
          }}>
          <Text style={{
            fontWeight: '700',
            color: '#000'
          }}>Save</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={[styles.buttonStyle, { backgroundColor: '#D9D9D9' }]}
          onPress={() => {
            resetSign();
          }}>
          <Text style={{
            fontWeight: '700',
            color: '#000'
          }}>Reset</Text>
        </TouchableHighlight>
      </View>
    </View>
</View>
  );
};
export default Signature;




