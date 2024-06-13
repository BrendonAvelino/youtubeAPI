import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';
import YoutubeSearchScreen from './YoutubeSearchScreen';
import Vimeo from './Vimeo';

const Tab = createBottomTabNavigator();

const youtubeIcon = require('../assets/youtube_icon.png'); // Exemplo de ícone local
const vimeoIcon = require('../assets/vimeo_icon.png'); // Exemplo de ícone local

export default function RotaInterna() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconName;

          if (route.name === 'YouTube') {
            iconName = youtubeIcon;
          } else if (route.name === 'Vimeo') {
            iconName = vimeoIcon;
          }

          return <Image source={iconName} style={{ width: 20, height: 20 }} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen name="YouTube" component={YoutubeSearchScreen} />
      <Tab.Screen name="Vimeo" component={Vimeo} />
    </Tab.Navigator>
  );
}
