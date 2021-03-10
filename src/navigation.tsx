import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Landing from './screens/Landing';
import Page2 from './screens/Page2';

const Stack = createStackNavigator();

const childApp1_Navigation = () => {
  return (
        <Stack.Navigator>
          <Stack.Screen
            name="childApp1_Home"
            component={Landing}
          />

          <Stack.Screen
            name="childApp1_Page2"
            component={Page2}
          />
        </Stack.Navigator>
   
  );
};

export default childApp1_Navigation;
