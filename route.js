import 'react-native-gesture-handler';

import React, { useEffect  }from 'react';
import { StyleSheet, Text, View, Button, Platform  } from 'react-native';

// import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import SplashScreen from 'react-native-splash-screen';

// import SplashScreen from './src/screen/Splash';
import WelcomeScreen from './src/screen/Welcome';
import SignupScreen from './src/screen/Signup';
import WelcomeFaceScreen from './src/screen/WelcomeFaceId';
// bottomTab
import FeedScreen from './src/screen/Feed';
import TodayTipsScreen from './src/screen/TodayTips';
import TipstersScreen from './src/screen/Tipsters';
import FutureTipScreen from './src/screen/FutureTip';
import SettingScreen from './src/screen/Setting';

// const Bottomtab = createBottomTabNavigator();

// const BottomtabRoute = ({ navigation }) => {
//   return(
//     <Bottomtab.Navigator>
//       <Bottomtab.Screen name="Feed" component={ FeedScreen } />
//       <Bottomtab.Screen name="TodayTips" component={ TodayTipsScreen } />
//       <Bottomtab.Screen name="Tipsters" component={ TipstersScreen } />
//       <Bottomtab.Screen name="FutureTip" component={ FutureTipScreen } />
//       <Bottomtab.Screen name="Setting" component={ SettingScreen } />
//     </Bottomtab.Navigator>
//   );
// };

// const Stack = createNativeStackNavigator();

// const MainStack = () => {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen
//         name="Welcome"
//         component={ WelcomeScreen }
//         options={{ headerShown:false }}
//       />
//       <Stack.Screen name="Signup" component={ SignupScreen } options={{ headerShown:false }}/>
//       <Stack.Screen name="WelcomeFace" component={ WelcomeFaceScreen } options={{ headerShown:false }}/>
//       {/* <Stack.Screen name="WelcomeFace" component={ BottomtabRoute } options={{ headerShown:false }}/> */}
//     </Stack.Navigator>
//   );
// };

export default function Route() {
  return (
    <View style={styles.container}>
      {/* <NavigationContainer> */}
        <SignupScreen />
      {/* </NavigationContainer> */}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: ( Platform.OS === 'ios' ) ? 20 : 0,
  },
});
