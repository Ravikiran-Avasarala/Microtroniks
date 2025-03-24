import React from 'react';
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import MText from '../../components/template/MText';
import colors from '../../theme/colors';
import fonts from '../../theme/fonts';

const MInput = ({
  value,
  onChangeText,
  placeholder = '',
  label = '',
  error = '',
  editable = true,
  containerStyle,
  leftIcon,
  leftText,
  rightText,
  rightIcon,
  onRightIconPress,
  keyboardType = 'default',
  maxLength,
  secureTextEntry = false,
  autoCapitalize = 'none'
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      {label && (
        <MText
          title={label}
          color={colors.SECONDARY_TEXT}
          style={styles.label}
        />
      )}
      <View style={styles.inputContainer}>
        {leftIcon && <Pressable style={styles.leftIcon}>{leftIcon}</Pressable>}
        {leftText && <Text style={{ color: colors.PRIMARY_TEXT }}>{leftText}</Text>}
        <TextInput
          style={[styles.input, !editable && styles.disabled]}
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor={colors.PLACE_HOLDER}
          editable={editable}
          keyboardType={keyboardType}
          maxLength={maxLength}
          autoCorrect={false}
          secureTextEntry = {secureTextEntry}
          autoCapitalize={autoCapitalize}
        />
        {rightText && <Text style={{ color: colors.PRIMARY_TEXT }}>{rightText}</Text>}
        {onRightIconPress && rightIcon ? (
          <Pressable style={styles.rightIcon} onPress={onRightIconPress}>
            {rightIcon}
          </Pressable>
        ) : null}
      </View>
      {error ? (
        <View style={styles.errorContainer}>
          {/* <Image
            source={require('../../assets/images/info-circle.png')}
            style={styles.errorIcon}
          /> */}
          <MText
            title={error}
            color={colors.ERROR_40}
            style={styles.errorText}
          />
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
    borderColor: colors.BORDER_COLOR,
    height: 60,
    paddingHorizontal: 10,
    borderRadius: 16,
  },
  leftIcon: {
    marginLeft:10,
    marginRight: 10,
  },
  input: {
    flex: 1,
    color: colors.PRIMARY_TEXT,
    fontFamily: fonts.REGULAR,
    fontSize: 14,
    width: '100%',
    minHeight: 40,
  },
  disabled: {
    color: colors.PLACEHOLDER_DISABLED_TEXT,
  },
  rightIcon: {
    marginRight:10
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
    color: colors.ERROR_40,
  },
});
