import React, { useCallback, useState } from "react";
import SafeScreen from "../../../../components/template/SafeScreen";
import styles from "./styles";
import BackArrow from '../../../../assets/svgs/back.svg'
import { FlatList, Pressable, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import MText from "../../../../components/template/MText";
import colors from "../../../../theme/colors";
import PaymentDetailsModal from "../../../../components/modals/PaymentDetailsModal";


const PaymentHistory = () => {
    const navigation = useNavigation();
    const [isDetailsModal,setIsDetailsModal] = useState(false)
    
    const paymentHistory = [{ paymentid: '1125-2034-10-60', paymentType: 'Gpay', paymentDate: '10 Oct, 2023', amount: '2567.00' },{ paymentid: '1125-2034-10-60', paymentType: 'Wired', paymentDate: '10 Oct, 2023', amount: '2567.00' },{ paymentid: '1125-2034-10-60', paymentType: 'Phonepe', paymentDate: '10 Oct, 2023', amount: '2567.00' }, { paymentid: '1125-2034-10-60', paymentType: 'Phonepe', paymentDate: '10 Oct, 2023', amount: '2567.00' }, { paymentid: '1125-2034-10-60', paymentType: 'Phonepe', paymentDate: '10 Oct, 2023', amount: '2567.00' }]
    const paymentData = {pamentid:'1204',trNumber:'OPN-2324-10-60',mode:'Phonepe',type:'Credit',amountType:'Open balance',amount:'2300',receivedDate:'10 Oct, 2023',createdby:'Akram'}
    const goBack = useCallback(() => {
        navigation.pop();
    }, [navigation]);

    const openDetailsModal = useCallback(() => {
        setIsDetailsModal(true);
    }, []);

    const closeDetailsModal = useCallback(() => {
        setIsDetailsModal(false);
    }, []);

    const renderItem = useCallback(({ item }) => (
            <Pressable style={styles.card} onPress={openDetailsModal}>
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
                <View style={[styles.row, { paddingTop: 5,alignItems:'center' }]}>
                    <MText
                        title={`${item.paymentType}`}
                        color={colors.BLUE}
                        fontWeight="700"
                        size={12}
                        style={styles.paymentType}
                    />
                    <View style = {{height:1,backgroundColor:colors.SEMI_GREEN,width:9,marginHorizontal:10}}/>
                    <MText
                        title={`${item.paymentDate}`}
                        color={colors.SEMI_GREEN}
                        fontWeight="600"
                        size={12}
                        style={styles.paymentDate}
                    />
                    <View style = {{height:1,backgroundColor:colors.SEMI_GREEN,width:9,marginHorizontal:10}}/>
                    <MText
                        title={`₹ ${item.amount}`}
                        color={colors.DARK_GREEN}
                        fontWeight="700"
                        size={12}
                        style={styles.amount}
                    />
                </View>
            </Pressable>
        
    ), [openDetailsModal]);

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
            <PaymentDetailsModal
                visible={isDetailsModal}
                onHide={closeDetailsModal}
                data={paymentData}



            />
        </SafeScreen>
    )
}
export default PaymentHistory