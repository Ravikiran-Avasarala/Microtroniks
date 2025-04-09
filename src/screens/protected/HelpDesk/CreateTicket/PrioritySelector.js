import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const PrioritySelector = ({priority,setPriority}) => {
     


  return (
    <View style={styles.container}>
      {['Low', 'Medium', 'High'].map((level) => {
        const isSelected = priority === level;
        return (
          <TouchableOpacity
            key={level}
            style={[styles.option, isSelected && styles.selectedOption]}
            onPress={() => setPriority(level)}
          >
            <Text style={[styles.text, isSelected && styles.selectedText]}>
              {level}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default PrioritySelector;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#f1f1fc',
    borderRadius: 12,
    overflow: 'hidden',
    marginTop: 10,
  },
  option: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
  },
  selectedOption: {
    backgroundColor: '#635bff',
  },
  text: {
    color: '#000',
    fontWeight: '500',
  },
  selectedText: {
    color: '#fff',
  },
});
