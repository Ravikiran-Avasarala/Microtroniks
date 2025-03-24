import { Pressable, ScrollView, TextInput, View } from 'react-native';
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
import SafeScreen from '../../../components/template/SafeScreen';
import BackIcon from '../../../assets/svgs/back.svg'
import RegisterLogo from '../../../assets/svgs/registerlogo.svg'
const SignUp = () => {
    const navigation = useNavigation()

    const [registerData, setRegisterDate] = useState({ firstName: '', lastName: '', moileNumber: '', email: '', password: '', companyName: '', address1: '', address2: '', city: '' })
    const goBack = () => {
        navigation.pop()
    }
    const onChangeRegisterData = (type, value) => {
        setRegisterDate(prevState => ({
            ...prevState,
            [type]: value
        }));
    }
    const inputFields = [
        { key: 'firstName', placeholder: 'First Name', keyboardType: 'default' },
        { key: 'lastName', placeholder: 'Last Name', keyboardType: 'default' },
        { key: 'mobileNumber', placeholder: 'Mobile Number', keyboardType: 'number-pad' },
        { key: 'email', placeholder: 'Email', keyboardType: 'email-address' },
        { key: 'companyName', placeholder: 'Company Name', keyboardType: 'default' },
        { key: 'address1', placeholder: 'Address 1', keyboardType: 'default' },
        { key: 'address2', placeholder: 'Address 2', keyboardType: 'default' },
        { key: 'city', placeholder: 'City', keyboardType: 'default' },
    ];
    const proceed = () => {
        console.log("Hi")
        navigation.push('Success',{subHeader:'Your account has been registered.'})
    }
    return (
        <SafeScreen>
            <View style={styles.container}>
                <Pressable onPress={goBack}>
                    <BackIcon />
                </Pressable>
                <ScrollView >
                    <View style={{ alignSelf: 'center' }}>
                        <RegisterLogo />
                        <MText
                            title={`Register`}
                            lineHeight={'130%'}
                            color={colors.TEXT_COLOR}
                            fontWeight="800"
                            size={20}
                            style={styles.header}
                        />
                    </View>

                    <View style={styles.registerContent}>
                        {inputFields.map(({ key, placeholder, keyboardType }) => (
                            <MInput
                                key={key}
                                label=""
                                lineHeight="150%"
                                letterSpacing={0.3}
                                value={registerData[key]}
                                placeholder={placeholder}
                                onChangeText={value => onChangeRegisterData(key, value)}
                                keyboardType={keyboardType}
                                autoCorrect={false}
                                autoCapitalize="words"
                                containerStyle={{ marginBottom: 15 }}
                            />
                        ))}
                        <MButton
                            title="Create Account"
                            type='solid'
                            size='large'
                            onPress={proceed}
                            style={styles.buttonStyle}
                            textStyle={styles.buttonTextStyle}
                        />
                    </View>
                </ScrollView>

            </View>

        </SafeScreen>

    )
}
export default SignUp