/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View, StyleSheet, ScrollView, Image} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator, DrawerItems} from 'react-navigation-drawer';
import {SafeAreaView} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';

import SearchScreen from './pages/SearchScreen';
import FeedScreen from './pages/FeedScreen';
import TeamScreen from './pages/TeamScreen';
import ProfileScreen from './pages/ProfileScreen';
import SettingsScreen from './pages/SettingsScreen';
import NavigationDrawerStructure from './api/NavigationDrawerStructure';

const SearchNavigator = createBottomTabNavigator(
  {
    Feed: {screen: FeedScreen},
    Seach: {screen: SearchScreen},
    Team: {screen: TeamScreen},
    Profile: {screen: ProfileScreen},
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      tabBarIcon: ({focused, horizontal, tintColor}) => {
        const {routeName} = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
        if (routeName === 'Feed') {
          iconName = `ios-information-circle${focused ? '' : '-outline'}`;
        } else if (routeName === 'Search') {
          iconName = `ios-checkmark-circle${focused ? '' : '-outline'}`;
        } else if (routeName === 'Team') {
          iconName = `ios-checkmark-circle${focused ? '' : '-outline'}`;
        } else if (routeName === 'Profile') {
          iconName = `ios-checkmark-circle${focused ? '' : '-outline'}`;
        }
        return <IconComponent name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: '#EB9005',
      inactiveTintColor: 'gray',
    },
  },
);

const Search_StackNavigator = createStackNavigator({
  First: {
    screen: SearchNavigator,
    navigationOptions: ({navigation}) => ({
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
    navigationOptions: ({navigation}) => ({
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
    navigationOptions: ({navigation}) => ({
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
    navigationOptions: ({navigation}) => ({
      title: 'About',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#EB9005',
      },
      headerTintColor: '#fff',
    }),
  },
});
const DrawerNavigatorExample = createDrawerNavigator(
  {
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
  },
  {
    contentComponent: props => (
      <SafeAreaView style={styles.container}>
        <View
          style={{
            height: 80,
            alignItems: 'center',
            direction: 'ltr',
            justifyContent: 'center',
            flexDirection: 'row',
          }}>
          <Image
            source={require('./images/profile.png')}
            style={styles.drawerHeader}
          />
          <View
            style={{
              height: 30,
              width: 200,
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
            }}>
            <Text style={{fontSize: 15}}> Fenasi </Text>
            <Text style={{fontSize: 15}}> Mahmut </Text>
          </View>
        </View>
        <ScrollView style={styles.navigationArea}>
          <DrawerItems {...props} />
        </ScrollView>
      </SafeAreaView>
    ),
  },
);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
  },
  drawerHeader: {
    height: 70,
    width: 70,
    backgroundColor: 'grey',
  },
  navigationArea: {
    width: 300,
  },
});
export default createAppContainer(DrawerNavigatorExample);
