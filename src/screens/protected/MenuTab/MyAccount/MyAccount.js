import React from "react";
import { useState } from "react";
import SafeScreen from "../../../../components/template/SafeScreen";
import styles from "./styles";
import BackArrow from '../../../../assets/svgs/back.svg'
import { Pressable, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import MText from "../../../../components/template/MText";
import colors from "../../../../theme/colors";
import VerticalDotsIcon from '../../../../assets/svgs/verticaldots.svg'
import MButton from "../../../../components/template/MButton";
const MyAccount = () => {
    const navigation = useNavigation()
    
    const details = [{ header: 'Name', value: 'Nanda Kishore' }, { header: 'Customer ID', value: '1305' }, { header: 'Company Name', value: 'Bhavya Agency' }, { header: 'Operating Branch', value: 'Hyderabad' }, { header: 'Customer Since', value: '01 Sep, 2023' }, { header: 'Phone Number', value: '9900887711' }, { header: 'Email', value: 'nanda@yopmail.com' }, { header: 'City', value: 'Hyderabad' }]
    const goBack = () => {
        navigation.pop()
    }
    const editDetails = () => {
        console.log('edit Details')
    }
    return (
        <SafeScreen>
            <View style={styles.container}>
                <View style={[styles.row, styles.justifycontent]}>
                    <Pressable onPress={goBack}>
                        <BackArrow />
                    </Pressable>
                    <MText
                        title={`Profile`}
                        lineHeight={24}
                        color={colors.BLUE}
                        fontWeight="600"
                        size={16}
                        style={styles.profile}
                    />
                    <VerticalDotsIcon />
                </View>
                <View style={styles.contentContainer}>
                    {details.map((item) => (
                        <View style={styles.row}>
                            <View style={{ flex: 0.5 }}>
                                <MText
                                    title={`${item.header}`}
                                    color={colors.SEMI_GREEN}
                                    fontWeight="500"
                                    size={12}
                                    style={styles.contentName}
                                />
                            </View>
                            <MText
                                title={`:`}
                                color={colors.SEMI_GREEN}
                                fontWeight="500"
                                size={12}
                                style={styles.contentName}
                            />
                            <View style={{ flex: 0.5 }}>
                                <MText
                                    title={`${item.value}`}
                                    color={colors.BLACK}
                                    fontWeight="500"
                                    size={12}
                                    style={styles.contentValue}
                                />
                            </View>
                        </View>
                    ))}
                   
                </View>
                <MButton
                    title="Edit Now"
                    type='solid'
                    size='large'
                    onPress={editDetails}
                    style={styles.buttonStyle}
                    textStyle={styles.buttonTextStyle}
                />
            </View>
        </SafeScreen>
    )
}
export default MyAccount