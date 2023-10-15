import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';

const  data = [
  { label: 'Contractor', value: '1' },
  { label: 'Engineering Office', value: '2' },
  { label: 'Owner', value: '3' },
 
];

const Dropdown1 = () => {
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
 


  return (
    <View style={styles.Drobcontainer}>

      <Dropdown
        style={[styles.dropdown, isFocus && { borderColor: '#FFDE59' }]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={data}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={!isFocus ? ' Select One' : '...'}
        searchPlaceholder="Search..."
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={item => {
          setValue(item.label);
          setIsFocus(false);
        }}

      />
    </View>
  );
};

export default Dropdown1;

const styles = StyleSheet.create({
  Drobcontainer: {
    padding: 16,
    width: 240,
    height: 200,
    top: '23%',
    left: '35%'
  },
  dropdown: {
    height: 50,
    borderColor: '#848484',
    borderWidth: 0.5,
    borderRadius: 30,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});