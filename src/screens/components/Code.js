import OTPInputView from '@twotalltotems/react-native-otp-input'
import {
    View,
Image,
StatusBar,
Text,
Pressable,
StyleSheet
} from 'react-native';

const Code =()=>{
    return(
<OTPInputView
    style={{width: '80%', height: 200 , marginLeft:'3%'}}
    pinCount={4}
    // code={this.state.code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
    // onCodeChanged = {code => { this.setState({code})}}
    autoFocusOnLoad
    codeInputFieldStyle={styles.underlineStyleBase}
    codeInputHighlightStyle={styles.underlineStyleHighLighted}
 
    onCodeFilled = {(code => {
        console.log(`Code is ${code}, you are good to go!`)
    })}
/>
    );
};
export default Code;
const styles = StyleSheet.create({
  borderStyleBase: {
    width: 30,
    height: 45
  },

  underlineStyleBase: {
    width: 70,
    borderRadius: 20,
    height: 55,
    padding:'15%',
    borderWidth: 1,
    backgroundColor: "#F3F8FF",
    borderColor: '#848484',
    color:'#000',
    borderBottomWidth: 1,
  },

  underlineStyleHighLighted: {
    borderColor: "#FFDE59",
    color:'#848484',
  },

});