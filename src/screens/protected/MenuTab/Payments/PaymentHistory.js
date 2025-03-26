import React from "react";
import { useState } from "react";
import SafeScreen from "../../../../components/template/SafeScreen";
import styles from "./styles";
import BackArrow from '../../../../assets/svgs/back.svg'
import { FlatList, Pressable, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import MText from "../../../../components/template/MText";
import colors from "../../../../theme/colors";
import VerticalDotsIcon from '../../../../assets/svgs/verticaldots.svg'
import MButton from "../../../../components/template/MButton";


const PaymentHistory = () => {
    const navigation = useNavigation();
    const paymentHistory = [{ paymentid: '1125-2034-10-60', paymentType: 'Phonepe', paymentDate: '10 Oct, 2023', amount: '2567.00' }, { paymentid: '1125-2034-10-60', paymentType: 'Phonepe', paymentDate: '10 Oct, 2023', amount: '2567.00' }, { paymentid: '1125-2034-10-60', paymentType: 'Phonepe', paymentDate: '10 Oct, 2023', amount: '2567.00' }]
    const goBack = () => {
        navigation.pop()
    }
    const renderItem = ({ item, index }) => {
        console.log(item)
        return (
            <View style={styles.card}>
                <View>
                    <MText
                        title={`${item.paymentid}`}
                        lineHeight={24}
                        color={colors.BLUE}
                        fontWeight="600"
                        size={16}
                        style={styles.paymentID}
                    />
                </View>
                <View style = {[styles.row,{paddingTop:5}]}>
                <MText
                        title={`${item.paymentType}`}
                        lineHeight={24}
                        color={colors.BLUE}
                        fontWeight="600"
                        size={16}
                        style={styles.paymentType}
                    />
                     <MText
                        title={`${item.paymentDate}`}
                        lineHeight={24}
                        color={colors.BLUE}
                        fontWeight="600"
                        size={16}
                        style={styles.paymentDate}
                    />
                    <MText
                        title={`₹ ${item.amount}`}
                        lineHeight={24}
                        color={colors.BLUE}
                        fontWeight="600"
                        size={16}
                        style={styles.amount}
                    />
                </View>
            </View>
        )
    }

    return (
        <SafeScreen>
            <View style={styles.container}>
                <View style={[styles.row, styles.justifycontent]}>
                    <Pressable onPress={goBack}>
                        <BackArrow />
                    </Pressable>
                    <MText
                        title={`Payment History`}
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
                <FlatList data={paymentHistory} renderItem={renderItem} />
            </View>
        </SafeScreen>
    )
}
export default PaymentHistory