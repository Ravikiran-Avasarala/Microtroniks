import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import fonts from '../../../../theme/fonts';

const ToggleTab = ({setSelected,selected}) => {
  

  return (
    <View style={styles.container}>
      <View style={styles.toggleContainer}>
        <TouchableOpacity
          style={[
            styles.tab,
            selected === 'Opened' ? styles.activeTab : styles.inactiveTab,
          ]}
          onPress={() => setSelected('Opened')}
        >
          <Text style={[styles.text, selected === 'Opened' ? styles.activeText : styles.inactiveText]}>
            Opened
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.tab,
            selected === 'Closed' ? styles.activeTab : styles.inactiveTab,
          ]}
          onPress={() => setSelected('Closed')}
        >
          <Text style={[styles.text, selected === 'Closed' ? styles.activeText : styles.inactiveText]}>
            Closed
          </Text>
        </TouchableOpacity>
      </View>

      
      <View style={styles.arrowWrapper}>
        <View
          style={[
            styles.arrow,
            selected === 'Opened' ? { left: '25%' } : { right: '25%' },
          ]}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop:20,
    alignItems: 'center',
  },
  toggleContainer: {
    flexDirection: 'row',
    backgroundColor: '#EDEEFF',
    borderRadius: 8,
    overflow: 'hidden',
  },
  tab: {
    width: 112, // Half of 224
    height: 33,
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeTab: {
    backgroundColor: '#6563f0',
  },
  inactiveTab: {
    backgroundColor: '#EDEEFF',
  },
  text: {
    fontSize: 12,
    fontWeight: '700',
    fontFamily:fonts.REGULAR,
    letterSpacing: 0.9,
  },
  activeText: {
    color: '#fff',
  },
  inactiveText: {
    color: '#000',
  },
  arrowWrapper: {
    position: 'relative',
    height: 10,
    width: 224,
    alignItems: 'center',
  },
  arrow: {
    position: 'absolute',
    top: 0,
    width: 0,
    height: 0,
    borderLeftWidth: 6,
    borderRightWidth: 6,
    borderTopWidth: 8,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderTopColor: '#6563f0',
    // transform: [{ rotate: '180deg' }],
  },
});

export default ToggleTab;
