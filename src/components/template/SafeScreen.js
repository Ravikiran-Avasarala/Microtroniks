import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import colors from '../../theme/colors';

function SafeScreen({
  children,
  statusBar = {
    barStyle: 'dark-content',
    backgroundColor: colors.WHITE_COLOR,
  },
  
}) {
  return (
    <SafeAreaView style={styles.container}>
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
    backgroundColor:colors.WHITE_COLOR
  },
});
