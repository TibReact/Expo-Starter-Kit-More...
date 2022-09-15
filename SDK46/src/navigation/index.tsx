import { FontAwesome } from '@expo/vector-icons';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, Pressable } from 'react-native';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
import LinkingConfiguration from './LinkingConfiguration';

import MaterialCommunityIcons from 'react-native-vector-icons/Ionicons';
import {Home} from '../scene/home';
import {Settings} from '../scene/settings';
import {MyWebView} from '../scene/webview';

const Stack = createNativeStackNavigator();

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="TabNav" component={TabNav} options={{ headerShown: false }} />
          <Stack.Screen name="MyWebView" component={MyWebView} />
          <Stack.Screen name="SettingsNav" component={Settings} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}

const Tab = createBottomTabNavigator();

function TabNav() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="HomeTab" component={Home} 
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen name="SettingsTab" component={Settings} 
      options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="settings" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}





