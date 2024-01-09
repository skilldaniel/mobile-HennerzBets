import React, { Component } from 'react';  
import { Platform, StyleSheet, View, Text, Image, TouchableOpacity, Alert, ImageBackground } from 'react-native';  

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import WelcomeScreen from './src/screen/Welcome';
import SignupScreen from './src/screen/Signup';
import WelcomeFaceScreen from './src/screen/WelcomeFaceId';
// bottomTab
import FeedScreen from './src/screen/Feed';
import TodayTipsScreen from './src/screen/TodayTips';
import TipstersScreen from './src/screen/Tipsters';
import FutureTipScreen from './src/screen/FutureTip';
import SettingScreen from './src/screen/Setting';

const Tab = createBottomTabNavigator();

function TabScreen(){
  return(
    <Tab.Navigator>
      <Tab.Screen name="Feed" component={ FeedScreen } />
      <Tab.Screen name="Today" component={ TodayTipsScreen } />
      <Tab.Screen name="Tipsters" component={ TipstersScreen } />
      <Tab.Screen name="Future" component={ FutureTipScreen } />
      <Tab.Screen name="Setting" component={ SettingScreen } />
    </Tab.Navigator>
  );
}

const NavigateStack = createStackNavigator();
function NavigateStackScreen(){
  return(
    <NavigateStack.Navigator>
      <NavigateStack.Screen 
        name="Welcome" 
        component={ WelcomeScreen } 
        options={{headerShown:false}}
      />
      <NavigateStack.Screen 
        name="Signup"
        component = { SignupScreen }
        options={{headerShown:false}}
      />
      <NavigateStack.Screen 
        name="WelcomeFace"
        component = { WelcomeFaceScreen }
        options={{headerShown:false}}
      />
      <NavigateStack.Screen 
        name="Tab"
        component = { TabScreen }
        options={{headerShown:false}}
      />
    </NavigateStack.Navigator>
  )
};

export default class App extends Component{  

  render(){
    return(
      <View style = { styles.MainContainer }>
        <NavigationContainer>
          <NavigateStackScreen />
        </NavigationContainer> 
    </View>          
    );  
  }
}

const styles = StyleSheet.create(  
{  
    MainContainer: {  
        flex: 1,
        justifyContent: 'center',
        paddingTop: ( Platform.OS === 'ios' ) ? 0 : 0,
    },  
    SplashScreen_RootView:{  
        justifyContent: 'center',  
        flex:1,  
        margin: 0,  
        position: 'absolute',  
        width: '100%',  
        height: '100%', 
      },  
   
    SplashScreen_ChildView:{  
        justifyContent: 'center',  
        alignItems: 'center',  
        flex:1,  
    },  
    bottomTabIcon: {
      width: 25,
      height: 25,
    },
}); 

// export default function App() {
//   return (
//     <Route />
//   );
// }

