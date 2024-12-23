import {View, Text, StyleSheet, TextInput, FlatList, ScrollView, TouchableOpacity,} from 'react-native';
import React, {useRef, useState} from 'react';

import RBSheet from 'react-native-raw-bottom-sheet';

import BackIcon from '../assets/back.svg';
import SettingsIcon from '../assets/settings.svg';
import AddIcon from '../assets/add.svg';
import TagIcon from '../assets/tag.svg';
import DotsIcon from '../assets/dots.svg';
import SearchIcon from '../assets/search.svg';
import CreateList from './CreateList';

const Discover = () => {
  const refRBSheet = useRef();

  const originalData = [
    {title: 'Software Engineer', candidates: '10 Candidates', active: true},
    {title: 'UI/UX Designer', candidates: '8 Candidates', active: false},
    {title: 'Product Manager', candidates: '5 Candidates', active: true},
    {title: 'Data Scientist', candidates: '12 Candidates', active: false},
    {title: 'QA Engineer', candidates: '7 Candidates', active: true},
    {title: 'DevOps Engineer', candidates: '6 Candidates', active: false},
    {title: 'Business Analyst', candidates: '9 Candidates', active: true},
    {title: 'Backend Developer', candidates: '10 Candidates', active: false},
    {title: 'Frontend Developer', candidates: '11 Candidates', active: true},
    {title: 'HR Manager', candidates: '4 Candidates', active: false},
  ];

  const [searchText, setSearchText] = useState('');
  const [filteredData, setFilteredData] = useState(originalData);

  const handleSearch = text => {
    setSearchText(text);

    if (text === '') {
      setFilteredData(originalData);
    } else {
      const filtered = originalData.filter(item =>
        item.title.toLowerCase().startsWith(text.toLowerCase()),
      );
      setFilteredData(filtered);
    }
  };

  const renderItem = ({item}) => (
    <View style={styles.listItem}>
      <View
        style={{
          height: 23,
          width: 23,
          backgroundColor: '#4CBEE6',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 11.5,
          marginRight: 5,
        }}>
        <TagIcon style={{height: 14, width: 14}} />
      </View>

      <View style={{flex: 1}}>
        <Text style={styles.listTitle}>{item.title}</Text>
        <Text style={styles.listSubtitle}>{item.candidates}</Text>
      </View>

      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <DotsIcon
          style={{height: 5, width: 18, marginTop: 14, marginBottom: 8}}
        />
        {item.active && <Text style={styles.activeBadge}>Active</Text>}
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <BackIcon style={styles.back} />
        <Text style={styles.title}>My Lists</Text>
        <SettingsIcon style={styles.settings} />
      </View>

      <View style={[styles.titleContainer, {paddingTop: 26}]}>
        <View>
          <Text style={{color: '#4CBEE6', fontSize: 18, fontWeight: '700'}}>
            Wesley Workspace
          </Text>
          <Text style={{color: '#888888', fontSize: 12, fontWeight: '600'}}>
            Total Candidates: 23/100
          </Text>
        </View>

        <TouchableOpacity
          style={{
            height: 40,
            width: 40,
            backgroundColor: '#4CBEE6',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 6.9,
          }}
          onPress={() => refRBSheet.current.open()}>
          <AddIcon />
        </TouchableOpacity>
      </View>

      <View style={styles.searchBarContainer}>
        <TextInput
          placeholder="Search Lists"
          style={styles.searchBar}
          value={searchText}
          onChangeText={handleSearch}
        />
        <SearchIcon style={{tintColor: '#737373'}} />
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          width: '100%',
          backgroundColor: '#EBEFF2',
          marginTop: 48,
          padding: 10,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        }}>
        <FlatList
          data={filteredData}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
        />
      </ScrollView>

      <RBSheet
        ref={refRBSheet}
        height={600}
        openDuration={250}
        closeDuration={250}
        // draggable={true}
        customStyles={{
          container: {
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
          },
        }}>
        <CreateList closeSheet={() => refRBSheet.current.close()} />
      </RBSheet>
    </View>
  );
};

export default Discover;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    backgroundColor: '#FFFFFF',
  },
  titleContainer: {
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  back: {
    width: 20,
    height: 13.33,
    tintColor: '#000000',
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
  },
  settings: {
    height: 24,
    width: 24,
    tintColor: '#000000',
  },
  searchBarContainer: {
    height: 40,
    backgroundColor: '#EBEFF2',
    borderRadius: 8,
    marginHorizontal: 20,
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 13,
  },
  searchBar: {
    fontSize: 14,
    fontWeight: 400,
    color: 'Search Lists',
  },
  listItem: {
    height: 49,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 8,
    borderRadius: 8,
    marginBottom: 10,
    elevation: 2,
  },
  listTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: '#4CBEE6',
  },
  listSubtitle: {
    fontSize: 10,
    fontWeight: 700,
    color: '#888888',
  },
  activeBadge: {
    color: '#55CE63',
    fontWeight: '600',
    fontSize: 12,
    backgroundColor: '#EBEFF2',
    borderTopLeftRadius: 8,
    padding: 5,
  },
});
