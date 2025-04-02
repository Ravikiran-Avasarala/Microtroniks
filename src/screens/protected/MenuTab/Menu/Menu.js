import React from "react";
import { Pressable, Text, View } from "react-native";
import SafeScreen from "../../../../components/template/SafeScreen";
import styles from "./styles";
import DummyIcon from '../../../../assets/svgs/dummy.svg'
import MText from "../../../../components/template/MText";
import colors from "../../../../theme/colors";
import MyAccountIcon from '../../../../assets/svgs/myaccount.svg'
import PaymentsIcon from '../../../../assets/svgs/payment.svg'
import OutpassesIcon from '../../../../assets/svgs/outpasses.svg'
import SettingsIcon from '../../../../assets/svgs/settings.svg'
import ContactIcon from '../../../../assets/svgs/contact.svg'
import SupportIcon from '../../../../assets/svgs/supportvideos.svg'
import RightArrow from '../../../../assets/svgs/rightarrow.svg'
import { useNavigation } from "@react-navigation/native";
import MButton from "../../../../components/template/MButton";


const Menu = () => {
    const navigation = useNavigation()
    const options = [{ name: 'My Account', icon: <MyAccountIcon />, navigateTo: 'MyAccount' },
    { name: 'Payments', icon: <PaymentsIcon />, navigateTo:'PaymentHistory' },
    { name: 'Outpasses', icon: <OutpassesIcon />, navigateTo:'OutpassHistory' },
    { name: 'Settings', icon: <SettingsIcon />, navigateTo:'MyAccount' },
    { name: 'Contact', icon: <ContactIcon />, navigateTo:'ContactUs' },
    { name: 'Support Videos', icon: <SupportIcon />, navigateTo:'MyAccount' }]

    const navigateScreen = (item) => {
        navigation.push(item.navigateTo)
    }
    const logout = () => {
        console.log('Logout')
    }
    return (
        <SafeScreen>
            <View style={styles.container}>
                <View style={styles.row}>
                    <DummyIcon />
                    <View style={styles.column}>
                        <MText
                            title={`Hello, Prasad!`}
                            lineHeight={'130%'}
                            letterSpacing={0.3}
                            color={colors.DARK_GREEN}
                            fontWeight="700"
                            size={20}
                            style={styles.name}
                        />
                        <MText
                            title={`+91 27857 86745`}
                            lineHeight={'130%'}
                            letterSpacing={0.3}
                            color={colors.SEMI_GREEN}
                            fontWeight="500"
                            size={14}
                            style={styles.number}
                        />
                    </View>
                </View>
                <View style={styles.contentContainer}>
                    {options.map((item, index) => (
                        <Pressable style={[styles.content, styles.row]} onPress={()=>navigateScreen(item)}key={index}>
                            <View style={{ flex: 1, flexDirection: 'row' }}>
                                {item.icon}
                                <MText
                                    title={`${item.name}`}
                                    lineHeight={'130%'}
                                    letterSpacing={0.3}
                                    color={colors.SEMI_GREEN}
                                    fontWeight="500"
                                    size={14}
                                    style={styles.contentName}
                                />
                            </View>
                            <RightArrow/>
                        </Pressable>
                    ))}
                </View>
                <MButton
                    title="Logout"
                    type='solid'
                    size='large'
                    color={colors.RED}
                    backgroundColor = {colors.ORANGE}
                    onPress={logout}
                    style={styles.buttonStyle}
                    textStyle={styles.buttonTextStyle}
                />
            </View>
        </SafeScreen>

    )
}

export default Menu