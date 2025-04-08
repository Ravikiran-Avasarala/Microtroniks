import React, { useCallback, useState } from "react";
import SafeScreen from "../../../../components/template/SafeScreen";
import BackArrow from '../../../../assets/svgs/back.svg'
import { FlatList, Pressable, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import MText from "../../../../components/template/MText";
import colors from "../../../../theme/colors";
import OutPassDetailsModal from "../../../../components/modals/OutpassDetailsModal";
import styles from "./styles";


const OutpassHistory = () => {
    const navigation = useNavigation();
    const [isDetailsModal, setIsDetailsModal] = useState(false)

    const outpassHistory = [
        {
            outpassID: 'OPN-2324-10-60',
            outpassStatus: 'Open',
            outpassDate: '10 Oct, 2023',
            amount: '2567.00'
        },
        {
            outpassID: 'OPN-2324-10-60',
            outpassStatus: 'Delivered',
            outpassDate: '10 Oct, 2023',
            amount: '2,300.00'
        }, {
            outpassID: 'OPN-2324-10-60',
            outpassStatus: 'Open',
            outpassDate: '10 Oct, 2023',
            amount: '2,300.00'
        }, {
            outpassID: 'OPN-2324-10-60',
            outpassStatus: 'Deivered',
            outpassDate: '10 Oct, 2023',
            amount: '2,300.00'
        },
        {
            outpassID: 'OPN-2324-10-60',
            outpassStatus: 'Open',
            outpassDate: '10 Oct, 2023',
            amount: '2,300.00'
        }]
    const outpassData = { outpassId: '1204', outpassFId: 'OPN-2324-10-60', products: [{ name: '120 volts batter', qty: '10' }, { name: 'PCB', qty: '02' }, { name: 'PCB', qty: '02' }, { name: 'PCB', qty: '02' }, { name: 'PCB', qty: '02' }, { name: 'PCB', qty: '02' }, { name: 'PCB', qty: '02' }, { name: 'PCB', qty: '02' }, { name: 'PCB', qty: '02' }, { name: 'PCB', qty: '02' }, { name: 'PCB', qty: '02' }, { name: 'PCB', qty: '02' }, { name: 'PCB', qty: '02' }] }
    const goBack = useCallback(() => {
        navigation.pop();
    }, [navigation]);

    const openDetailsModal = useCallback(() => {
        setIsDetailsModal(true);
    }, []);

    const closeDetailsModal = useCallback(() => {
        setIsDetailsModal(false);
    }, []);
    const proceed = useCallback(() => {
        navigation.push('OutpassSummary')
    }, []);

    const outPassDetailsNavigate = useCallback((item) => {
        if (item.outpassStatus == 'Delivered') {
            navigation.push('OutpassDetailsScreen')
        } else {
            openDetailsModal()
        }

    }, [])



    const renderItem = useCallback(({ item }) => (
        <Pressable style={styles.card} onPress={() => outPassDetailsNavigate(item)}>
            <View>
                <MText
                    title={`${item.outpassID}`}
                    lineHeight={24}
                    color={colors.BLUE}
                    fontWeight="600"
                    size={16}
                    style={styles.paymentID}
                />
            </View>
            <View style={[styles.row, { paddingTop: 5, alignItems: 'center' }]}>
                <MText
                    title={`${item.outpassStatus}`}
                    color={item.outpassStatus == 'Open' ? colors.PRIMARY_COLOR : colors.GREEN}
                    fontWeight="700"
                    size={12}
                    style={styles.paymentType}
                />
                <View style={{ height: 1, backgroundColor: colors.SEMI_GREEN, width: 9, marginHorizontal: 10 }} />
                <MText
                    title={`${item.outpassDate}`}
                    color={colors.SEMI_GREEN}
                    fontWeight="600"
                    size={12}
                    style={styles.paymentDate}
                />
                <View style={{ height: 1, backgroundColor: colors.SEMI_GREEN, width: 9, marginHorizontal: 10 }} />
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
                        title={`Outpass History`}
                        lineHeight={24}
                        color={colors.BLUE}
                        fontWeight="700"
                        size={16}
                        style={styles.profile}
                    />
                    <View>
                        <Text>{"       "}</Text>
                    </View>

                </View>
                <FlatList data={outpassHistory} renderItem={renderItem} />
            </View>

            <OutPassDetailsModal
                visible={isDetailsModal}
                proceed={proceed}
                onHide={closeDetailsModal}

                data={outpassData}
            />
        </SafeScreen>
    )
}
export default OutpassHistory