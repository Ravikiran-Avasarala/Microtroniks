import React, { useEffect, useState, useRef } from 'react';
import { View, Animated, ScrollView, Text, SafeAreaView, StyleSheet, Dimensions, Platform } from 'react-native';
import Modal from 'react-native-modal';
import colors from '../../theme/colors';
import fonts from '../../theme/fonts';

const SCREEN_HEIGHT = Dimensions.get('screen').height;

const BottomsheetModal = ({
  children,
  cta,
  backgroundLayer,
  visible,
  onHide,
  onBackPress,
  onModalWillShow,
  onModalHide,
  containerStyle,
  sliderHandleStyle,
  scrollEnabled = false,
  keyboardShouldPersistTaps = 'handled',
  testID,
  modalStyle,
  isNotchVisible = true,
  error,
}) => {
  const [scrollOffset, setScrollOffset] = useState(0);
  const [isModalIntervalFinished, setModalIntervalFinished] = useState(false);
  const scrollViewRef = useRef(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [isErrorVisible, setIsErrorVisible] = useState(false);

  useEffect(() => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo({ x: 0, y: 0, animated: false });
    }
  }, [children]);

  useEffect(() => {
    setTimeout(() => {
      setModalIntervalFinished(true);
    }, 1);
  }, []);

  useEffect(() => {
    if (error) {
      const trimmedText = error.replace(/\d+$/, '');
      showError(trimmedText);
    }
  }, [error]);

  const showError = message => {
    if (message !== errorMessage) {
      setErrorMessage(message);
      setIsErrorVisible(true);

      setTimeout(() => {
        setIsErrorVisible(false);
        setErrorMessage('');
      }, 4000);
    }
  };

  const handleOnScroll = event => {
    setScrollOffset(event.nativeEvent.contentOffset.y);
  };

  const handleScrollTo = p => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo(p);
    }
  };

  const getContent = () => (
    <>
      {isNotchVisible && !isErrorVisible && (
        <View style={[styles.sliderHandle, sliderHandleStyle]} />
      )}
      {isErrorVisible && (
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>{errorMessage}</Text>
        </View>
      )}
      <Animated.ScrollView
        scrollEnabled={scrollEnabled}
        ref={scrollViewRef}
        onScroll={handleOnScroll}
        bounces={false}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps={keyboardShouldPersistTaps}
      >
        {children}
      </Animated.ScrollView>
      {cta || null}
      {backgroundLayer || null}
    </>
  );

  const getContainerStyle = () => ({
    ...styles.container,
    ...containerStyle,
  });

  return (
    <Modal
      testID={testID}
      isVisible={visible && isModalIntervalFinished}
      swipeDirection="down"
      style={modalStyle || styles.modal}
      onModalHide={onModalHide}
      onSwipeComplete={onHide}
      onBackdropPress={onHide}
      onBackButtonPress={onBackPress}
      scrollTo={handleScrollTo}
      scrollOffset={scrollOffset}
      scrollOffsetMax={SCREEN_HEIGHT}
      propagateSwipe={true}
      avoidKeyboard={true}
      backdropTransitionInTiming={Platform.OS === 'android' ? 0 : 300}
      useNativeDriverForBackdrop={Platform.OS === 'android' || undefined}
      onModalWillShow={onModalWillShow}
    >
      {Platform.OS === 'android' ? (
        <View style={getContainerStyle()}>{getContent()}</View>
      ) : (
        <View>
          <SafeAreaView forceInset={{ top: 'never', bottom: 'never' }} style={getContainerStyle()}>
            {getContent()}
          </SafeAreaView>
        </View>
      )}
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    margin: 0,
    justifyContent: 'flex-end',
  },
  container: {
    backgroundColor: colors.NATURAL_10,
    maxHeight: SCREEN_HEIGHT * 0.9,
  },
  sliderHandle: {
    width: 40,
    height: 4,
    backgroundColor: colors.NATURAL_40,
    alignSelf: 'center',
    marginVertical: 10,
    borderRadius: 2,
  },
  errorContainer: {
    backgroundColor: 'red',
    padding: 10,
    alignItems: 'center',
  },
  errorText: {
    color: 'white',
    fontSize: 14,
    fontFamily: fonts.REGULAR,
  },
});

export default BottomsheetModal;
