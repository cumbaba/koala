import React from 'react';
import { Button, Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createStackNavigator} from 'react-navigation-stack';
 
import SearchScreen from './pages/SearchScreen';
import FeedScreen from './pages/FeedScreen';
import TeamScreen from './pages/TeamScreen';
import ProfileScreen from './pages/ProfileScreen';
import AlarmsScreen from './pages/AlarmsScreen';
import PeopleScreen from './pages/PeopleScreen';
import AboutScreen from './pages/AboutScreen';
import SettingsScreen from './pages/SettingsScreen';
import NavigationDrawerStructure from'./api/NavigationDrawerStructure'

const SearchStack = createStackNavigator(
  {
    Feed: { screen: FeedScreen },
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
const FeedStack = createStackNavigator(
  {
    Feed: { screen: FeedScreen },
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

const SearchNavigator = createBottomTabNavigator(
  {
    Feed: { screen: FeedScreen },
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

const Search_StackNavigator = createStackNavigator({
  First: {
    screen: SearchNavigator,
    navigationOptions: ({ navigation }) => ({
      title: 'Profile',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#EB9005',
      },
      headerTintColor: '#fff',
    }),
  },
});
const Profile_StackNavigator = createStackNavigator({
  First: {
    screen: ProfileScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Profile',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#EB9005',
      },
      headerTintColor: '#fff',
    }),
  },
});

const Settings_StackNavigator = createStackNavigator({
  First: {
    screen: SettingsScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'Settings',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#EB9005',
      },
      headerTintColor: '#fff',
    }),
  },
});
const About_StackNavigator = createStackNavigator({
  First: {
    screen: SettingsScreen,
    navigationOptions: ({ navigation }) => ({
      title: 'About',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#EB9005',
      },
      headerTintColor: '#fff',
    }),
  },
});
const DrawerNavigatorExample = createDrawerNavigator({
  
  MainScreen: {
    screen: Search_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Main',
    },
  },
  ProfileScreen: {
    screen: Profile_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Profile',
    },
  },
  SettingsScreen: {
    screen: Settings_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Settings',
    },
  },
  AboutScreen: {
    screen: About_StackNavigator,
    navigationOptions: {
      drawerLabel: 'About',
    },
  },
});
export default createAppContainer(DrawerNavigatorExample);