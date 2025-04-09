import React from 'react';
import { View, Pressable, StyleSheet } from 'react-native';
import MText from './MText'; // Custom text component

const ToggleTabs = ({
  tabs = [],
  selected,
  setSelected,
  containerStyle = {},
  tabStyle = {},
  activeTabStyle = {},
  inactiveTabStyle = {},
  textStyle = {},
  activeTextStyle = {},
  inactiveTextStyle = {},
  showArrow = true,
  arrowColor = '#6563f0',
  arrowWrapperStyle = {},
  tabWidth = 112, // Default tab width
}) => {
  const totalTabs = tabs.length;
  const totalWidth = tabWidth * totalTabs;

  const getArrowPosition = () => {
    const selectedIndex = tabs.findIndex(tab => tab === selected);
    const leftPercent = (100 / totalTabs) * selectedIndex + (100 / totalTabs / 2);
    return { left: `${leftPercent}%`, transform: [{ translateX: -6 }] }; // center the arrow
  };

  return (
    <View style={[styles.container, containerStyle]}>
      <View style={[styles.toggleContainer, { width: totalWidth }, tabStyle]}>
        {tabs.map((tabLabel, index) => {
          const isActive = selected === tabLabel;
          return (
            <Pressable
              key={index}
              style={[
                styles.tab,
                { width: tabWidth },
                isActive ? [styles.activeTab, activeTabStyle] : [styles.inactiveTab, inactiveTabStyle],
              ]}
              onPress={() => setSelected(tabLabel)}
            >
              <MText
                title={tabLabel}
                size={12}
                fontWeight='700'
                letterSpacing={0.9}
                style={[
                  styles.text,
                  textStyle,
                  isActive ? [styles.activeText, activeTextStyle] : [styles.inactiveText, inactiveTextStyle],
                ]}
                color={isActive ? '#fff' : '#000'}
              />
            </Pressable>
          );
        })}
      </View>

      {showArrow && (
        <View style={[styles.arrowWrapper, { width: totalWidth }, arrowWrapperStyle]}>
          <View style={[styles.arrow, { borderTopColor: arrowColor }, getArrowPosition()]} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 5,
    paddingLeft:10
  },
  toggleContainer: {
    flexDirection: 'row',
    backgroundColor: '#EDEEFF',
    borderRadius: 8,
    overflow: 'hidden',
  },
  tab: {
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
  },
});

export default ToggleTabs;
