import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Text} from 'react-native';
import AddEvents from '../tabScreens/AddEvents';
import Events from '../tabScreens/Events';
import Setting from '../tabScreens/Setting';

const Tab = createBottomTabNavigator();

const Home = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let icon;

          if (route.name === 'Events') {
            icon = focused ? '🎉' : '🏆'; // Replace with your preferred emojis
          } else if (route.name === 'AddEvent') {
            icon = focused ? '➕' : '➕';
          } else if (route.name === 'Setting') {
            icon = focused ? '⚙️' : '⚙️';
          }

          return <Text style={{fontSize: size, color}}>{icon}</Text>;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'blue',
        inactiveTintColor: 'black',
        style: {backgroundColor: '#f0f0f0'}, // Add background color here
      }}>
      <Tab.Screen
        name="Events"
        component={Events}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="AddEvent"
        component={AddEvents}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Setting"
        component={Setting}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};

export default Home;
