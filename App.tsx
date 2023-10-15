import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/screens/home/Home';
import Profile from './src/screens/home/Profile';
import Login from './src/screens/home/Login';
import Signup from './src/screens/home/Signup';
import HomePage from './src/screens/home/HomePage';
import SNA4 from './src/screens/home/SNA4';
import VerCode from './src/screens/home/VerCode';
import VerSucc from './src/screens/home/VerSucc';
import EditProfile from './src/screens/home/EditProfile';

import Projects from './src/screens/home/Projects';
import CreateProject from './src/screens/home/CreateProject';

import Response from './src/screens/home/Response';
import Dropdown1 from './src/screens/components/Dropdown1';

import { SearchBar } from 'react-native-screens';
import SNA1 from './src/screens/home/SNA1';
import SNA2 from './src/screens/home/SNA2';
import SNA3 from './src/screens/home/SNA3';
import Response2 from './src/screens/home/Response2';
import Response3 from './src/screens/home/Response3';
import NaviBar from './src/screens/home/NaviBar';
import Uneval from './src/screens/home/Uneval';
import Viewproject from './src/screens/home/ViewProject';
import Container from './src/screens/home/Container';
const Stack = createNativeStackNavigator();
 const App = () =>
 {
  return (
     <NavigationContainer independent={true}>
       <Stack.Navigator screenOptions= {{headerShown:false}}>
      <Stack.Screen name="Home" component={Home} /> 
        <Stack.Screen name="Login" component={Login} />
         <Stack.Screen name="Signup" component={Signup} />
     <Stack.Screen name="VerCode" component={VerCode} />
     <Stack.Screen name="VerSucc" component={VerSucc} />
       <Stack.Screen name="NaviBar" component={NaviBar} />
    <Stack.Screen name="CreateProject" component={CreateProject} />
     <Stack.Screen name="Profile" component={Profile} />
     <Stack.Screen name="EditProfile" component={EditProfile} />   
     <Stack.Screen name="Viewproject" component={Viewproject} /> 
     <Stack.Screen name="Projects" component={Projects} /> 
     <Stack.Screen name="SNA1" component={SNA1}/>
      <Stack.Screen name="SNA2" component={SNA2}/>
       <Stack.Screen name="SNA3" component={SNA3}/>
      <Stack.Screen name="SNA4" component={SNA4}/>
      <Stack.Screen name="Container" component={Container}/>
 </Stack.Navigator>
 </NavigationContainer> 
  )
};

export default App;