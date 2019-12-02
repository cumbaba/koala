import React from 'react';
import { Button, Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
 
import SearchScreen from './pages/SearchScreen';
import SportsScreen from './pages/SportsScreen';
import FeedScreen from './pages/FeedScreen';
import TeamScreen from './pages/TeamScreen';
import ProfileScreen from './pages/ProfileScreen';

const SearchStack = createStackNavigator(
  {
    Feed: { screen: FeedScreen },
    Sports: { screen: SportsScreen },
    Seach: { screen: SearchScreen },
    Team: { screen: TeamScreen },
    Profile: { screen: ProfileScreen },
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#EB9005',
      },
      headerTintColor: '#FFFFFF',
      title: 'welcome sevgili koala',
    },
  }
);
const TeamStack = createStackNavigator(
  {
    Feed: { screen: FeedScreen },
    Sports: { screen: SportsScreen },
    Seach: { screen: SearchScreen },
    Team: { screen: TeamScreen },
    Profile: { screen: ProfileScreen },
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#EB9005',
      },
      headerTintColor: '#FFFFFF',
      title: 'Team',
    },
  }
);
const ProfileStack = createStackNavigator(
  {
    Feed: { screen: FeedScreen },
    Sports: { screen: SportsScreen },
    Seach: { screen: SearchScreen },
    Team: { screen: TeamScreen },
    Profile: { screen: ProfileScreen },
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#EB9005',
      },
      headerTintColor: '#FFFFFF',
      title: 'Profile',
    },
  }
);
const SportsStack = createStackNavigator(
  {
    Feed: { screen: FeedScreen },
    Sports: { screen: SportsScreen },
    Seach: { screen: SearchScreen },
    Team: { screen: TeamScreen },
    Profile: { screen: ProfileScreen },
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#EB9005',
      },
      headerTintColor: '#FFFFFF',
      title: 'Sports',
    },
  }
);
const FeedStack = createStackNavigator(
  {
    Feed: { screen: FeedScreen },
    Sports: { screen: SportsScreen },
    Seach: { screen: SearchScreen },
    Team: { screen: TeamScreen },
    Profile: { screen: ProfileScreen },
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#EB9005',
      },
      headerTintColor: '#FFFFFF',
      title: 'Feed',
    },
  }
);
const App = createBottomTabNavigator(
  {
    Feed: { screen: FeedScreen },
    Sports: { screen: SportsScreen },
    Seach: { screen: SearchScreen },
    Team: { screen: TeamScreen },
    Profile: { screen: ProfileScreen },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
        if (routeName === 'Feed') {
          iconName = `ios-information-circle${focused ? '' : '-outline'}`;
        }else if (routeName === 'Sports') {
          iconName = `ios-checkmark-circle${focused ? '' : '-outline'}`;
        } else if (routeName === 'Search') {
          iconName = `ios-checkmark-circle${focused ? '' : '-outline'}`;
        }else if (routeName === 'Team') {
          iconName = `ios-checkmark-circle${focused ? '' : '-outline'}`;
        }else if (routeName === 'Profile') {
          iconName = `ios-checkmark-circle${focused ? '' : '-outline'}`;
        }
        return <IconComponent name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: '#EB9005',
      inactiveTintColor: 'gray',
    },
  }
);
export default createAppContainer(App);