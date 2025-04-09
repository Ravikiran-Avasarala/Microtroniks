import React from 'react';
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';



import MText from './MText';
import fonts from '../../theme/fonts';
import colors from '../../theme/colors';


const MInput = ({
  value,
  onChangeText,
  placeholder = '',
  label = '',
  error = '',
  editable = true,
  containerStyle,
  inputContainer,
  labelStyle,
  inputStyle,
  leftIcon,
  leftText,
  rightText,
  rightIcon,
  onRightIconPress,
  keyboardType = 'default',
  maxLength,

  multiline = false,
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      {label ? (
        <MText title={label} color={colors.SECONDARY_TEXT} style={[styles.label, labelStyle]} />
      ) : null}
      <View style={[styles.inputContainer, inputContainer]}>
        {leftIcon ? <Pressable style={styles.leftIcon}>{leftIcon}</Pressable> : null}
        {leftText ? <Text style={{ color: colors.PRIMARY_TEXT }}>{leftText}</Text> : null}
        <TextInput
          style={[styles.input, !editable && styles.disabled, inputStyle]}
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor={colors.BLACK}
          editable={editable}
          keyboardType={keyboardType}
          maxLength={maxLength}
          autoCorrect={false}
          multiline={multiline}
          minHeight={multiline ? 160 : undefined}

        />
        {rightText ? <Text style={{ color: colors.PRIMARY_TEXT }}>{rightText}</Text> : null}
        {onRightIconPress && rightIcon ? (
          <Pressable style={styles.rightIcon} onPress={onRightIconPress}>
            {rightIcon}
          </Pressable>
        ) : null}
      </View>
      {error ? (
        <View style={styles.errorContainer}>
          {/* <Image source={require('../../assets/images/info-circle.png')} style={styles.errorIcon} /> */}
          <MText title={error} color={colors.RED} style={styles.errorText} />
        </View>
      ) : null}
    </View>
  );
};

export default MInput;

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  label: {
    marginVertical: 5,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.BORDER,

    paddingHorizontal: 10,
    borderRadius: 8,
  },
  leftIcon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    color: colors.PRIMARY_TEXT,
    fontFamily: fonts.REGULAR,
    fontSize: 14,
    minHeight: 40,
    paddingVertical: 0, // prevent double padding
    textAlign: 'left',
    textAlignVertical: 'top',
  },
  disabled: {
    color: colors.PLACEHOLDER_DISABLED_TEXT,
  },
  rightIconContainer: {
    padding: 5,
  },
  rightIcon: {
    width: 20,
    height: 20,
  },
  errorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  errorIcon: {
    marginRight: 5,
    width: 20,
    height: 20,
  },
  errorText: {
    color: colors.RED,
  },
});
