import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TeacherList from '../pages/TeacherList/indes';
import Favorites from '../pages/favorites';
import { Ionicons } from '@expo/vector-icons'

const { Navigator, Screen }  = createBottomTabNavigator()

function StudyTabs() {
  return(
    <Navigator
    tabBarOptions={{
      style:{
        elevation:0,
        shadowOpacity:0,
        height: 64,
      },
      tabStyle:{
        flexDirection: 'row',
        alignItems:'center',
        justifyContent:'center',
      },
      iconStyle:{
        flex: 0,
        width: 20,
        height: 20,
      },
      labelStyle:{
        fontFamily:'Archivo_700Bold',
        fontSize: 13,
        marginLeft: 16,
      },
      inactiveBackgroundColor: '#FAFAFC',
      activeBackgroundColor: '#EBEBF5',
      inactiveTintColor: '#C1CBCC',
      activeTintColor: '#32264D'
    }}
    >
      <Screen
       name="TeacherList" 
       component={TeacherList} 
       options={{
         tabBarLabel: 'Proffys',
         tabBarIcon: ({ color, size, focused }) => {
           return (
            <Ionicons name="ios-easel" color={focused ? '#8257E5': color} size={size} />
           );
         }
       }}
       />
      <Screen 
      name="favorites" 
      component={Favorites}
      options={{
        tabBarLabel: 'Favoritos',
        tabBarIcon: ({ color, size, focused }) => {
          return (
           <Ionicons name="ios-heart" color={focused ? '#8257E5': color} size={size} />
          );
        }
      }}
      />
    </Navigator>
  );
}

export default StudyTabs