import React from 'react';
import { Text } from 'react-native';
 
import fonts from '../../theme/fonts';


const MText = ({
  h1,
  h2,
  h3,
  h4,
  h5,
  p,
  size,
  bold,
  italic,
  fontFamily,
  title,
  style,
  lineHeight,
  color,
  textAlign,
  textDecoration,
  fontWeight,
  textShadow,
  letterSpacing,
  textTransform,
  selectable,
  ellipsizeMode,
  accessibilityProps,
  ...rest
}) => {
  const calculateLineHeight = (fontSize) => {
    return Math.round(fontSize * 1.2);
  };

  const textStyle = [
    h1 && {
      fontSize: 48,
      lineHeight: lineHeight || calculateLineHeight(48),
    },
    h2 && {
      fontSize: 32,
      lineHeight: lineHeight || calculateLineHeight(32),
    },
    h3 && {
      fontSize: 20,
      lineHeight: lineHeight || calculateLineHeight(20),
    },
    h4 && {
      fontSize: 18,
      lineHeight: lineHeight || calculateLineHeight(18),
    },
    h5 && {
      fontSize: 16,
      lineHeight: lineHeight || calculateLineHeight(16),
    },
    p && {
      fontSize: 12,
      lineHeight: lineHeight || calculateLineHeight(12),
    },
    size && {
      fontSize: size,
    },
    bold && { fontWeight: 'bold' },
    italic && { fontStyle: 'italic' },
    { fontFamily: fonts.REGULAR },
    fontFamily && { fontFamily: fontFamily },
    color && { color: color },
    textAlign && { textAlign: textAlign },
    textDecoration && { textDecorationLine: textDecoration },
    textShadow && { textShadow: textShadow },
    letterSpacing && { letterSpacing: letterSpacing },
    textTransform && { textTransform: textTransform },
    selectable !== undefined && { selectable: selectable },
    fontWeight && { fontWeight: fontWeight },
    style,
  ];

  return (
    <Text
      style={textStyle}
      ellipsizeMode={ellipsizeMode}
      {...accessibilityProps}
      {...rest}>
      {title}
    </Text>
  );
};

export default MText;
