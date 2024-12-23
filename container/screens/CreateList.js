import {View, Text, StyleSheet, TouchableOpacity, Switch} from 'react-native';
import React, {useState} from 'react';

import CloseIcon from '../assets/close.svg';
import TagIcon from '../assets/tag.svg';

const CreateList = ({closeSheet}) => {
  const [toggleStates, setToggleStates] = React.useState({
    screening: false,
    shortlisted: false,
    awaitingReview: false,
    interviewScheduled: false,
    interviewing: false,
    offerPending: false,
  });

  const toggleSwitch = key => {
    setToggleStates(prevState => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  };

  return (
    <View style={styles.sheetMainContainer}>
      <View
        style={{
          paddingTop: 10,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Text style={{fontSize: 20, fontWeight: 700}}>Creat a List</Text>
        <TouchableOpacity style={{width: 24, height: 24}}>
          <CloseIcon onPress={closeSheet} />
        </TouchableOpacity>
      </View>

      <View style={styles.sheetInnerContainer}>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Text style={styles.sheetInnerTitle}>Manage Candidates</Text>
          <Text style={styles.sheetDescription}>
            Use this template to manage Candidates through a hiring process
            pipeline
          </Text>
        </View>

        {[
          {label: 'NEW CANDIDATE', key: 'newCandidate', toggle: false},
          {label: 'SCREENING', key: 'screening', toggle: true},
          {label: 'SHORTLISTED', key: 'shortlisted', toggle: true},
          {label: 'AWAITING REVIEW', key: 'awaitingReview', toggle: true},
          {label: 'INTERVIEW SCHEDULED',key: 'interviewScheduled',toggle: true,},
          {label: 'INTERVIEWING', key: 'interviewing', toggle: true},
          {label: 'OFFER PENDING', key: 'offerPending', toggle: true},
          {label: 'HIRED', key: 'hired', toggle: false},
          {label: 'REJECTED', key: 'rejected', toggle: false},
        ].map(({label, key, toggle}) => (
          <View style={styles.optionContainer} key={key}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <TagIcon />
              <Text style={styles.optionLabel}>{label}</Text>
            </View>
            {toggle && (
              <Switch
                thumbColor={'#4CBEE6'}
                value={toggleStates[key]}
                onValueChange={() => toggleSwitch(key)}
              />
            )}
          </View>
        ))}

        <TouchableOpacity style={styles.useTemplateButton}>
          <Text style={styles.useTemplateText}>
            USE "MANAGE CANDIDATE" TEMPLATE
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CreateList;

const styles = StyleSheet.create({
  sheetMainContainer: {
    backgroundColor: '#FFFFFF',
    padding: 20,
  },
  sheetInnerContainer: {
    marginTop: 32,
    padding: 20,
    paddingTop: 23,
    backgroundColor: '#F1F3F6',
    borderRadius: 13.72,
  },
  sheetInnerTitle: {
    fontSize: 22,
    fontWeight: 700,
    color: '#4CBEE6',
  },
  sheetDescription: {
    fontSize: 16,
    fontWeight: 400,
    color: '#757575',
    textAlign: 'center',
  },
  optionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop:5
  },
  optionLabel: {
    fontSize: 16,
    fontWeight: 700,
    color: '#757575',
    marginLeft: 11,
  },
  useTemplateButton: {
    backgroundColor: '#4CBEE6',
    paddingVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
    marginTop: 43,
  },
  useTemplateText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 700,
  },
});
