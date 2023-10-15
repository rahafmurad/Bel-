import { useState } from 'react';
import { Image, Text, View, TouchableOpacity } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import styles from '../style/Style';

export default function DatePick({setsDate}) {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setDate(currentDate);
    setsDate(currentDate);
 
    setShow(false);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  return (
    <View>
      <TouchableOpacity
        style={[
          styles.Textinput,
          { width: 180 },
          { height: 40 },
          { borderColor: '#EFDFB7' },
          { borderWidth: 3 },
        ]}
        onPress={showDatepicker}
      >
        <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'black', top: '18%', left: '10%' }}>
          {date.toLocaleString('si-LK', { day: '2-digit', month: '2-digit', year: 'numeric' })}
        </Text>
        <Image source={require('C:/Users/rahaf/MilliFProject/assets/Vector.png')} style={{ left: '77%', bottom: '30%' }} />
        <Image
          source={require('C:/Users/rahaf/MilliFProject/assets/bottom.png')}
          style={{ left: '85%', bottom: '70%', width: 30 }}
        />
      </TouchableOpacity>

      {/* Show the time and date picker */}
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          onChange={onChange}
        />
      )}
    </View>
  );
}