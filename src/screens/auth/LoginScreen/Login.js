import { Pressable, View } from 'react-native';
import React, { useState } from 'react';
import styles from './styles';
import Pattern from '../../../assets/svgs/loginPattern.svg';
import Logo from '../../../assets/svgs/logo.svg';
import MText from '../../../components/template/MText';
import colors from '../../../theme/colors';
import MInput from '../../../components/template/MInput';
import PhoneIcon from '../../../assets/svgs/phone.svg';
import PasswordIcon from '../../../assets/svgs/lock.svg';
import EyeOff from '../../../assets/svgs/eyeoff.svg';
import EyeOn from '../../../assets/svgs/eyeon.svg';
import MButton from '../../../components/template/MButton';
import { useNavigation } from '@react-navigation/native';
const Login = () => {
    const navigation = useNavigation()
    const [securePassword,setSecurePassword] = useState(true)
    const [loginCredentails, setLoginCredentials] = useState({ phoneNumber: '', password: '' })

    const onChangeLoginCredentials = (type, value) => {
        setLoginCredentials(prevState => ({
            ...prevState,
            [type]: value
        }));
    }
    const navigateToRegiser = () => {
        navigation.push('SignUp')
    }

    const proceed = () => {
        navigation.push('Otp')
    }
    return (
        <View style={styles.container}>
            <View style={styles.patternPosition}>
                <Pattern />
            </View>
            <View style={styles.contentContainer}>
                <Logo />
                <View style={styles.headerContainer}>
                    <MText
                        title={`Welcome Back 👋`}
                        lineHeight={'130%'}
                        color={colors.TEXT_COLOR}
                        fontWeight="800"
                        size={24}
                        style={styles.header}
                    />
                    <MText
                        title={`Sign in to your account`}
                        lineHeight={'130%'}
                        letterSpacing={0.3}
                        color={colors.TEXT_COLOR}
                        fontWeight="400"
                        size={16}
                        style={styles.subHeader}
                    />
                </View>

                <View style={styles.credentialContainer}>
                    <MInput
                        label=""
                        lineHeight={'150%'}
                        letterSpacing={0.3}
                        value={loginCredentails.phoneNumber}
                        placeholder="Phone Number"
                        onChangeText={(value) => { onChangeLoginCredentials('phoneNumber', value) }}
                        keyboardType='number-pad'
                        autoCorrect={false}
                        leftIcon={<PhoneIcon />}
                    />
                    <MInput
                        label=""
                        value={loginCredentails.password}
                        placeholder="Password"
                        onChangeText={(value) => { onChangeLoginCredentials('password', value) }}
                        keyboardType='default'
                        autoCorrect={false}
                        lineHeight={'150%'}
                        letterSpacing={10}
                        containerStyle={{ marginTop: 10 }}
                        leftIcon={<PasswordIcon />}
                        rightIcon={securePassword ? <EyeOff /> : <EyeOn/>}
                        secureTextEntry = {securePassword}
                        onRightIconPress={() => {
                           setSecurePassword(!securePassword)
                        }}
                    />
                </View>
                <MButton
                    title="Sign In"
                    type='solid'
                    size='large'
                    onPress={proceed}
                    style={styles.buttonStyle}
                    textStyle={styles.buttonTextStyle}
                />
            </View>
            <View style={styles.signUp}>

                <MText
                    title={`Don't have an account? `}
                    lineHeight={'150%'}
                    letterSpacing={0.2}
                    color={colors.PLACE_HOLDER}
                    fontWeight="400"
                    size={16}
                    style={[styles.subHeader,{ color: colors.PLACE_HOLDER,fontWeight:'400' }]}
                />
                <Pressable onPress={navigateToRegiser}>
                <MText
                    lineHeight={'150%'}
                    letterSpacing={0.2}
                    title={`Sign Up`}
                    color={colors.PRIMARY_COLOR}
                    fontWeight="800"
                    size={16}
                    style={[styles.subHeader, { color: colors.PRIMARY_COLOR,fontWeight:'800' }]}
                />
                </Pressable>
                
            </View>




        </View>
    )
}
export default Login