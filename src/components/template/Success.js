import { Pressable, StyleSheet, View } from 'react-native';
import React, { useState } from 'react';
import colors from '../../theme/colors';
import SuccessIcon from '../../assets/svgs/success.svg'
import SafeScreen from './SafeScreen';
import MText from './MText';
import fonts from '../../theme/fonts';
import MButton from './MButton';

const Success = (props) => {
    const proceed = () => {
        console.log("hi")
    }
    return (
        <SafeScreen>
            <View style={{ flex: 1, alignSelf: 'center', backgroundColor: colors.WHITE_COLOR, justifyContent: 'center' }}>
                <SuccessIcon />
                <MText
                    title={`Success`}
                    lineHeight={'100%'}
                    color={colors.TEXT_COLOR}
                    fontWeight="700"
                    size={28}
                    style={{
                        marginTop: 14,
                        fontFamily: fonts.REGULAR,
                        fontWeight: '700',
                        fontSize: 28,
                        color: colors.TEXT_COLOR,
                        textAlign: 'center'
                    }}
                />
                <MText
                    title={`${props.route.params.subHeader}`}
                    lineHeight={'100%'}
                    color={colors.TEXT_COLOR}
                    fontWeight="500"
                    size={28}
                    style={{

                        marginTop: 14,
                        fontFamily: fonts.REGULAR,
                        fontWeight: '500',
                        fontSize: 14,
                        color: colors.TEXT_COLOR,
                        textAlign: 'center'
                    }}
                />
               
            </View>
            <MButton
                    title="Go to home"
                    type='solid'
                    size='large'
                    onPress={proceed}
                    style={styles.buttonStyle}
                    textStyle={styles.buttonTextStyle}
                />
        </SafeScreen>

    )
}
const styles = StyleSheet.create({
    buttonStyle: {
        paddingVertical: 20,
        marginTop: 15,
        marginHorizontal: 30,
        marginBottom:30,
    },
    buttonTextStyle: {
        fontFamily: fonts.REGULAR,
        fontSize: 16,
        fontWeight: '800',
        color: colors.WHITE_COLOR
    },
})
export default Success