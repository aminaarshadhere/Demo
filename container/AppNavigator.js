import {View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Candidates from './screens/CandidatesTab';
import Jobs from './screens/JobsTab';
import Create from './screens/CreateTab';
import Discover from './screens/DiscoverTab';
import Messages from './screens/MessagesTab';

import CandidatesIcon from './assets/candidates.svg';
import JobsIcon from './assets/jobs.svg';
import CreateIcon from './assets/create.svg';
import DiscoverIcon from './assets/discover.svg';
import MessagesIcon from './assets/messages.svg';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        // initialRouteName="Candidates"
        screenOptions={{
          tabBarStyle: {
            height: 71,
            backgroundColor: '#181A20D9',
          },
          // tabBarHideOnKeyboard:true,
          tabBarActiveTintColor: '#A1CE57',
          tabBarInactiveTintColor: '#9E9E9E',
          headerShown: false,
        }}>
        <Tab.Screen
          name="Candidates"
          component={Candidates}
          options={{
            tabBarIcon: ({focused}) => (
              // <Image
              //   source={require('./assets/candidates.png')}
              //   resizeMode="contain"
              //   style={{
              // height: 24,
              // width: 24,
              // tintColor: focused ? '#A1CE57' : '#9E9E9E',
              //   }}
              // />

              <CandidatesIcon
                style={{
                  height: 24,
                  width: 24,
                  tintColor: focused ? '#A1CE57' : '#9E9E9E',
                }}
              />
            ),
            tabBarLabel: 'Candidates',
            tabBarLabelStyle: {
              justifyContent: 'center',
              alignItems: 'center',
              fontSize: 10,
              fontWeight: '700',
            },
          }}
        />
        <Tab.Screen
          name="Jobs"
          component={Jobs}
          options={{
            tabBarIcon: ({focused}) => <JobsIcon width={24} height={24} />,
            tabBarLabel: 'Jobs',
            tabBarStyle: {
              fontSize: 10,
              fontWeight: '700',
            },
          }}
        />
        <Tab.Screen
          name="Create"
          component={Create}
          options={{
            tabBarIcon: ({focused}) => (
              <View
                style={{
                  top: '-27.5',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: 55,
                  height: 55,
                  borderRadius: 27.5,
                  backgroundColor: '#A1CE57',
                }}>
                <CreateIcon width={24} height={24} />
              </View>
            ),
            tabBarLabel: 'Create',
            tabBarLabelStyle: {
              fontSize: 10,
              fontWeight: '700',
            },
          }}
        />
        <Tab.Screen
          name="Discover"
          component={Discover}
          options={{
            tabBarIcon: ({focused}) => <DiscoverIcon width={24} height={24} />,
            tabBarLabel: 'Discover',
            tabBarLabelStyle: {
              fontSize: 10,
              fontWeight: '700',
            },
          }}
        />
        <Tab.Screen
          name="Messages"
          component={Messages}
          options={{
            tabBarIcon: ({focused}) => <MessagesIcon width={24} height={24} />,
            tabBarLabel: 'Messages',
            tabBarLabelStyle: {
              fontSize: 10,
              fontWeight: '700',
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
