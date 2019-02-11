import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import BrowseBookScreen from '../screens/BrowseBookScreen'
import BrowseChapterScreen from '../screens/BrowseChapterScreen'
import ChapterScreen from '../screens/ChapterScreen'
import SettingsScreen from '../screens/SettingsScreen'

const HomeStack = createStackNavigator({
    Home: HomeScreen,
});

HomeStack.navigationOptions = {
    tabBarLabel: 'Home',
    tabBarIcon: ({ focused }) => (
        <TabBarIcon
            focused={focused}
            name={
                Platform.OS === 'ios'
                    ? `ios-information-circle${focused ? '' : '-outline'}`
                    : 'md-information-circle'
            }
        />
    ),
};

const BrowseStack = createStackNavigator({
        BrowseBook: BrowseBookScreen,
        BrowseChapter: BrowseChapterScreen,
        Chapter: ChapterScreen,
    },
    {
        initialRouteName: 'BrowseBook',
    }
);

BrowseStack.navigationOptions = {
    tabBarLabel: 'Browse',
    tabBarIcon: ({ focused }) => (
        <TabBarIcon
            focused={focused}
            name={
                Platform.OS === 'ios'
                    ? `ios-information-circle${focused ? '' : '-outline'}`
                    : 'md-information-circle'
            }
        />
    ),
};

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
});

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}
    />
  ),
};

export default createBottomTabNavigator({
        HomeStack,
        BrowseStack,
        SettingsStack,
    }, 
    {
        initialRouteName: 'BrowseStack',
    }
);

