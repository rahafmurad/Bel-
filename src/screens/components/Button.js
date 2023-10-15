import { TouchableOpacity, Text ,Image} from "react-native";
import styles from "../style/Style"
const AppButton = ({ onPress, title ,style ,titilestyle}) => (
    <TouchableOpacity onPress={onPress} style={style}>
      <Text style={[styles.appButtonText ,titilestyle]}>{title}</Text>
    
    </TouchableOpacity>

  );

  
  export default AppButton;

