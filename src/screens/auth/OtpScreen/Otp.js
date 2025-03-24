import { Pressable, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import styles from './styles';
import BackIcon from '../../../assets/svgs/back.svg'
import SafeScreen from '../../../components/template/SafeScreen';
import OtpPattern from '../../../assets/svgs/otpheader.svg'
import MText from '../../../components/template/MText';
import colors from '../../../theme/colors';
import { useNavigation } from '@react-navigation/native';
import { OtpInput } from "react-native-otp-entry";
import MButton from '../../../components/template/MButton';
import { useDispatch } from 'react-redux';
import {setIsLoggedIn} from '../../../store/slice/config.slice'
const Otp = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch()
    const [countdown, setCountdown] = useState(30);
    const [isDisabled, setIsDisabled] = useState(true);
    useEffect(() => {
        if (countdown > 0) {
            const timer = setInterval(() => {
                setCountdown(prevCount => prevCount - 1);
            }, 1000);

            return () => clearInterval(timer);
        } else {
            setIsDisabled(false);
        }
    }, [countdown]);
    const goBack = () => {
        navigation.pop()
    }
    const verifyOtp = () => {
        console.log("OTP VERIFIED")
        dispatch(setIsLoggedIn(true))

    }
    const handleResendOTP = () => {
        setCountdown(30);
        setIsDisabled(true);
    };

    return (
        <SafeScreen>
            <View style={styles.container}>
                <Pressable onPress={goBack}>
                    <BackIcon />
                </Pressable>

                <View style={styles.contentContainer}>
                    <View style={{ alignSelf: 'center' }}>
                        <OtpPattern />
                    </View>
                    <MText
                        title={`Enter OTP`}
                        lineHeight={'130%'}
                        textAlign={'center'}
                        color={colors.TEXT_COLOR}
                        fontWeight="800"
                        size={24}
                        style={styles.header}
                    />
                    <MText
                        title={`We have sent  you a 4 digit code to your `}
                        textAlign={'center'}
                        lineHeight={'130%'}
                        letterSpacing={0.3}
                        color={colors.TEXT_COLOR}
                        fontWeight="400"
                        size={16}
                        style={styles.subHeader}
                    />
                    <MText
                        title={`mobile number.`}
                        textAlign={'center'}
                        lineHeight={'130%'}
                        letterSpacing={'0.3'}
                        color={colors.TEXT_COLOR}
                        fontWeight="400"
                        size={16}
                        style={styles.subHeader}
                    />
                    <OtpInput
                        numberOfDigits={4}
                        autoFocus={false}
                        hideStick={false}
                        blurOnFilled={true}
                        disabled={false}
                        type="numeric"
                        secureTextEntry={true}
                        focusStickBlinkingDuration={500}
                        onTextChange={(text) => console.log(text)}
                        onFilled={(text) => console.log(`OTP is ${text}`)}
                        textInputProps={{
                            accessibilityLabel: "One-Time Password",
                        }}
                        textProps={{
                            accessibilityRole: "text",
                            accessibilityLabel: "OTP digit",
                            allowFontScaling: false,
                        }}
                        theme={{
                            containerStyle: styles.otpContainer,
                            pinCodeContainerStyle: styles.optPinCodeContainer,
                            pinCodeTextStyle: styles.otpPinCodeText,
                            focusStickStyle: styles.otpFocusStick,
                            focusedPinCodeContainerStyle: styles.otpActivePinCodeContainer,
                            filledPinCodeContainerStyle: styles.otpFilledPinCodeContainer,
                            disabledPinCodeContainerStyle: styles.otpDisabledPinCodeContainer,
                        }}
                    />
                    <MButton
                        title="Verify OTP"
                        type='solid'
                        size='large'
                        onPress={verifyOtp}
                        style={styles.buttonStyle}
                        textStyle={styles.buttonTextStyle}
                    />
                    {isDisabled ?
                        <View style={{ flexDirection: 'row', alignSelf: 'center', paddingTop: 20 }}>
                            <MText
                                title={`Resend the OTP in`}
                                textAlign={'center'}
                                lineHeight={'130%'}
                                letterSpacing={'0.3'}
                                color={colors.GRAY_67}
                                fontWeight="400"
                                size={16}
                                style={styles.resendText}
                            />
                            <MText
                                title={` ${countdown} `}
                                textAlign={'center'}
                                lineHeight={'130%'}
                                letterSpacing={'0.3'}
                                color={colors.PRIMARY_COLOR}
                                fontWeight="400"
                                size={16}
                                style={styles.countdown}
                            />
                            <MText
                                title={`seconds`}
                                textAlign={'center'}
                                lineHeight={'130%'}
                                letterSpacing={'0.3'}
                                color={colors.TEXT_COLOR}
                                fontWeight="400"
                                size={16}
                                style={styles.resendText}
                            />
                        </View> :
                        <Pressable style={{ flexDirection: 'row', alignSelf: 'center', marginTop: 20, paddingHorizontal: 15, paddingVertical: 20 }} onPress={handleResendOTP}>
                            <MText
                                title={`Re-send the OTP`}
                                textAlign={'center'}
                                lineHeight={'150%'}
                                letterSpacing={'0.2'}
                                color={colors.PRIMARY_COLOR}
                                fontWeight="400"
                                size={16}
                                style={styles.countdown}
                            />
                        </Pressable>
                    }



                </View>
            </View>
        </SafeScreen>

    )
}
export default Otp