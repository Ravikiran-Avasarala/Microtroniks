import React from "react";
import { useState } from "react";
import SafeScreen from "../../../../components/template/SafeScreen";
import BackArrow from '../../../../assets/svgs/back.svg'
import { Linking, Pressable, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import MText from "../../../../components/template/MText";
import colors from "../../../../theme/colors";
import VerticalDotsIcon from '../../../../assets/svgs/verticaldots.svg'
import MButton from "../../../../components/template/MButton";
import styles from "./styles";
import EmailIcon from '../../../../assets/svgs/email.svg'
const ContactUs = () => {
    const navigation = useNavigation()
    const goBack = () => {
        navigation.pop()
    }

    const openPhoneApp = () => {
        Linking.openURL('tel:+91 8765425896')
            .catch(err => console.error("Couldn't open phone app", err));
    };
    return (
        <SafeScreen>
            <View style={styles.container}>
                <View style={[styles.row, styles.justifycontent]}>
                    <Pressable onPress={goBack}>
                        <BackArrow />
                    </Pressable>
                    <MText
                        title={`Contact Us`}
                        lineHeight={24}
                        color={colors.BLUE}
                        fontWeight="600"
                        size={16}
                        style={styles.profile}
                    />
                    <View>
                        <Text>{"       "}</Text>
                    </View>

                </View>
                <View style={styles.card}>
                    <View style={{ flex: 0.9, flexDirection: 'row' }}>
                        <EmailIcon />
                        <MText
                            title={`info@microtroniks.com`}
                            color={colors.DARK_BLUE}
                            fontWeight="500"
                            size={12}
                            style={styles.contentName}
                        />
                    </View>
                    <View style={{ flex: 0.1 }}>
                        <Pressable onPress={() => { Linking.openURL(`mailto:`) }}>
                            <MText
                                title={`Mail`}
                                color={colors.DARK_BLUE}
                                fontWeight="700"
                                size={12}
                                style={styles.contentAction}
                            />
                        </Pressable>

                    </View>

                </View>
                <View style={[styles.card]}>
                    <View style={{ flex: 0.9, flexDirection: 'row' }}>
                        <EmailIcon />
                        <MText
                            title={`+91 87654 25896`}
                            color={colors.DARK_BLUE}
                            fontWeight="500"
                            size={12}
                            style={styles.contentName}
                        />
                    </View>
                    <Pressable style={{ flex: 0.2 }} onPress={openPhoneApp}>
                        <MText
                            title={`Call now`}
                            color={colors.DARK_BLUE}
                            fontWeight="700"
                            size={12}
                            style={styles.contentAction}
                        />
                    </Pressable>

                </View>

            </View>
        </SafeScreen>
    )
}
export default ContactUs