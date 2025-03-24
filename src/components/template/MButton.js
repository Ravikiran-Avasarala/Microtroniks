import React from 'react';
import {
  TouchableOpacity,
  Text,
  View,
  ActivityIndicator,
} from 'react-native';
import colors from '../../theme/colors';


const MButton = ({
  title,
  type = 'solid',
  size = 'medium',
  backgroundColor = colors.PRIMARY_COLOR,
  color = colors.WHITE_COLOR,
  borderRadius = 16,
  textStyle,
  icon,
  iconPosition = 'start',
  fullWidth = false,
  style,
  isLoading = false,
  ...rest
}) => {
  const buttonSize = {
    small: { paddingVertical: 8,   },
    medium: { paddingVertical: 12,  },
    large: { paddingVertical: 16,  },
  }[size];

  const buttonStyle = {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius,
    width: fullWidth ? '100%' : undefined,
    ...buttonSize,
    ...style,
  };

  let content = <Text style={[{ color }, textStyle]}>{title}</Text>;

  if (icon) {
    content = (
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        {iconPosition === 'start' && icon}
        {content}
        {iconPosition === 'end' && icon}
      </View>
    );
  }

  if (type === 'solid') {
    buttonStyle.backgroundColor = backgroundColor;
  } else if (type === 'outline') {
    buttonStyle.borderWidth = 1;
    buttonStyle.borderColor = backgroundColor;
    buttonStyle.backgroundColor = 'transparent';
  } else if (type === 'text' || type === 'link') {
    buttonStyle.backgroundColor = 'transparent';
    if (type === 'link') color = backgroundColor;
  }

  return (
    <TouchableOpacity style={buttonStyle} {...rest}>
      {isLoading ? (
        <ActivityIndicator color={'white'} size={'small'} />
      ) : (
        content
      )}
    </TouchableOpacity>
  );
};

export default MButton;
