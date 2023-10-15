import DocumentPicker from 'react-native-document-picker';
import {
  View,
  Image,
Text,
TouchableOpacity,
} from 'react-native';
import styles from "../style/Style"
import AttachPhoto from './PickImage';



async function PickDocument() {
  try {
    const result = await DocumentPicker.pick({
      type: [DocumentPicker.types.allFiles],
    });
    console.log(
      result.uri,
      result.type, // mime type
      result.name,
      result.size
    );
    // do something with the file data
  } catch (err) {
    if (DocumentPicker.isCancel(err)) {
      // User cancelled the picker
    } else {
      // Error occurred
    }
  }
}


export default PickDocument;