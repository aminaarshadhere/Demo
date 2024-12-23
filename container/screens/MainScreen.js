import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import HomeTab from './CandidatesTab';
import HeartTab from './JobsTab';
import UserTab from './CreateTab';
import SearchTab from './DiscoverTab';
import BagTab from './MessagesTab';

const MainScreen = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <View style={styles.container}>
      {selectedTab == 0 ? (
        <HomeTab />
      ) : selectedTab == 1 ? (
        <HeartTab />
      ) : selectedTab == 2 ? (
        <UserTab />
      ) : selectedTab == 3 ? (
        <SearchTab />
      ) : (
        <BagTab />
      )}

      <View style={styles.bar}>
        <TouchableOpacity
          onPress={() => {
            setSelectedTab(0);
          }}>
          <Image
            source={require('../image/home.png')}
            style={[
              styles.image,
              {tintColor: selectedTab === 0 ? '#000' : '#8e8e8e'},
            ]}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setSelectedTab(1);
          }}>
          <Image
            source={require('../image/heart.png')}
            style={[
              styles.image,
              {tintColor: selectedTab === 1 ? '#000' : '#8e8e8e'},
            ]}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setSelectedTab(2);
          }}>
          <Image
            source={require('../image/user.png')}
            style={[
              styles.image,
              {tintColor: selectedTab === 2 ? '#000' : '#8e8e8e'},
            ]}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setSelectedTab(3);
          }}>
          <Image
            source={require('../image/search.png')}
            style={[
              styles.image,
              {tintColor: selectedTab === 3 ? '#000' : '#8e8e8e'},
            ]}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setSelectedTab(4);
          }}>
          <Image
            source={require('../image/bag.png')}
            style={[
              styles.image,
              {tintColor: selectedTab === 4 ? '#000' : '#8e8e8e'},
            ]}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bar: {
    flexDirection: 'row',
    position: 'absolute',
    width: '100%',
    height: 70,
    backgroundColor: '#fff',
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    elevation: 5,
  },
  image: {
    height: 24,
    width: 24,
  },
});

export default MainScreen;
