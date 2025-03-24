import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import colors from '../../theme/colors';

function SafeScreen({
  children,
  statusBar = {
    barStyle: 'dark-content',
    backgroundColor: colors.PRIMARY_1,
  },
  bg = colors.WHITE_COLOR,
}) {
  return (
    <SafeAreaView style={[styles.container, {backgroundColor: bg}]}>
      <StatusBar
        barStyle={statusBar.barStyle}
        backgroundColor={statusBar.backgroundColor}
      />
      {children}
    </SafeAreaView>
  );
}
export default SafeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
