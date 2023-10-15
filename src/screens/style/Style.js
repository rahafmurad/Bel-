import { StyleSheet, StatusBar } from 'react-native';

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5
  },
  BlackButton: {
    backgroundColor: "black",
    borderRadius: 40,
    paddingVertical: 13,
    paddingHorizontal: 10,

  },

  YellButton: {
    backgroundColor: "#FFDE59",
    borderRadius: 40,
    paddingVertical: 13,
    paddingHorizontal: 10,
  },
  Logo: {
    resizeMode: 'cover',
    width: 500,
    height: 500,
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [{ translateX: -250 }, { translateY: -450 }],
  },
  Logo1: {
    position: "absolute",
    width: 100,
    height: 100,
    // left: '80%',
    // top: '10%',

  },
  container: {
    flex:1,
    position:'relative',
     alignItem: 'center',


  },

  tabText: {
    fontWeight: 'bold',
    color: '#000000',
    marginLeft: '5%',
  },
  tabView: {
    borderRadius: 23,
  },
  searchcontainer: {
    width: 330,
    height: 55,
    marginTop: 2,
    justifyContent: 'center',
    flexDirection:'row',
    alignItems: 'center',
    alignSelf:'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 50,
    backgroundColor: '#fff',
    elevation: 10, // Add elevation for shadow effect on Android
    shadowColor: '#000', // Add shadowColor for shadow effect on iOS
    shadowOffset: { width: 0, height: 2,},
    shadowOpacity: 0.25, // Add shadowOpacity for shadow effect on iOS
    shadowRadius: 3.84, // Add shadowRadius for shadow effect on iOS
  },
 
  itemStyle: {
    padding: 10,
  },
  StextInput: {
    width: '90%',
    height: 60,
    padding: 10,
    fontSize: 17,
    fontWeight: '600',
    color: '#545454',
  },
 
  textv: {
    fontSize: 17,
    left: '12%',
    color: '#000',
    fontWeight: '500',
  },
  floatingText: {
    height: 47,
    width: 330,
    left: '85%',
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 70, // set the borderRadius to 5 to make it a rectangle
    backgroundColor: '#E5C87D', // added a background color to make it more visible
  },
  floatingButton: {
    position: 'absolute',
    right: 10,
    width: 50,
    height: 50,
    borderRadius: 70, // set the borderRadius to 5 to make it a rectangle
    justifyContent: 'center',
    alignItems: 'center',
  },
  addicon: {
    width: 85,
    height: 85,
  },
  buttonStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    width: 80,
    backgroundColor: '#FFDE59',
    margin: 20,
    bottom: '6%',
    fontWeight: '700',
    borderRadius: 40,
  },
  iconstext: {
    fontSize: 13,
    fontWeight: '500',
    color: '#545454'
  },
  icon: {
    width: 43,
    height: 43,
  },
  Homecontainer: {
    flex: 1,
    marginTop: 450,
    justifyContent: 'center',
    marginHorizontal: 30,
  },
  headtitle: {
    fontSize: 30,
    color: "#000",
    position: "absolute",
    top: '15%',
    fontWeight: "bold",
    alignSelf: "flex-start",

  },
  subtitile: {
    alignSelf: "flex-start",
    color:'#848484',
    top: '35%',
    left: '16%',

  },
  appButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  },


  Textinput: {
    width: 300,
    height: 55,
     margin: 12,
    borderWidth: 1,
    borderColor: '#848484',
    borderRadius: 30,

  },

  smallTextInput: {
    width: 70,
    borderRadius: 20,
    height: 55,
    margin: 12,
    borderWidth: 1,
    top: '90%',
    left: '10%',
    backgroundColor: "#F3F8FF",
    borderColor: '#848484',
  },

  profileImage: {
    height: 120,
    width: 120,
    borderRadius: 100,
    borderBottomWidth: 100,
    marginTop: -70,
    left: 130
  },
  usertype: {
    fontSize: 16,
    fontWeight: '600',
    paddingLeft: 150,
    color: '#000'
  },
  rectangle: {
    alignSelf: 'center',
    flexDirection: 'row',
    width: '85%',
    padding: 12,
    paddingBottom: 14,
    borderColor: '#D9D9D9',
    borderWidth: 2,
    borderRadius: 40,
    marginTop: 18
  },
  smallrec: {
    borderRadius: 40,
    borderColor: '#545454',
    borderWidth: 1.5,
    borderRadius: 10,
    width: '50%',
    left: 100,
    height: 45,
    top: 10,
  },
  editext: {
    fontSize: 16,
    fontWeight: '700',
    color: '#000',
    top: 10,
    left: 40,
    textTransform: "uppercase"
  },
  signature: {
    width: 250,
    height: 150,
    borderColor: '101018',
    borderWidth: 1,
    top: '12%',
  },
  buttonStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    width: 80,
    backgroundColor: '#FFDE59',
    margin: 20,
    bottom: '6%',
    fontWeight: '700',
    borderRadius: 40,
  },

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
export default styles;