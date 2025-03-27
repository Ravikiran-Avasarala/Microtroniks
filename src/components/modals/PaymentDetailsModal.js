import React from 'react';
import BottomsheetModal from '../template/BottomSheetModal';
import MText from '../template/MText';
import { useNavigation } from '@react-navigation/native';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import colors from '../../theme/colors';
import fonts from '../../theme/fonts';
import Cross from '../../assets/svgs/cross.svg'



const PaymentDetailsModal = ({
    visible,
    onHide,
    data,

}) => {
    const navigation = useNavigation();

    const onHideAction = () => {
        onHide();
    }

    const DetailRow = ({ label, value }) => (
        <View style={styles.content}>
            <MText title={label} style={styles.sideHeader} />
            <MText title=":" style={styles.divider} />
            <MText title={value || '-'} style={styles.details} />
        </View>
    );


    return (
        <BottomsheetModal visible={visible}
            onHide={onHideAction}
            onBackPress={onHideAction}
            scrollEnabled={false}
            keyboardShouldPersistTaps="never"
            isNotchVisible>
            <View style={styles.container}>
                <MText
                    title={`Payment Details`}
                    lineHeight={'100%'}
                    color={colors.BLUE}
                    fontWeight="600"
                    size={16}
                    style={styles.header}
                />

                {data && (
                    <>
                        <DetailRow label="Payment ID" value={data?.pamentid} />
                        <DetailRow label="TR Number" value={data?.trNumber} />
                        <DetailRow label="Mode" value={data?.mode} />
                        <DetailRow label="Type" value={data?.type} />
                        <DetailRow label="Amount Type" value={data?.amountType} />
                        <DetailRow label="Amount" value={data?.amount} />
                        <DetailRow label="Received Date" value={data?.receivedDate} />
                        <DetailRow label="Created By" value={data?.createdby} />
                    </>
                )}
            </View>


            <View style={styles.container}>
                <Pressable onPress={onHideAction} style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <MText
                        title={`Cancel`}
                        lineHeight={'100%'}
                        color={colors.RED}
                        fontWeight="500"
                        size={14}
                        style={styles.cta}
                    />
                    <Cross />
                </Pressable>
            </View>
        </BottomsheetModal>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.WHITE_COLOR,
        margin: 10,
        padding: 20,
        borderRadius: 25
    },
    header: {
        fontFamily: fonts.REGULAR,
        fontSize: 16,
        fontWeight: '600',
        color: colors.BLUE
    },
    content: {
        flex: 1,
        paddingTop: 25,
        flexDirection: 'row'
    },
    sideHeader: {
        flex: 0.3,
        color: colors.SEMI_GREEN,
        fontFamily: fonts.REGULAR,
        fontWeight: '500',
        fontSize: 12
    },
    divider: {
        flex: 0.1,
        color: colors.SEMI_GREEN,
        fontFamily: fonts.REGULAR,
        fontWeight: '500',
        fontSize: 12
    },
    details: {
        flex: 0.5,
        color: colors.BLACK,
        fontFamily: fonts.REGULAR,
        fontWeight: '600',
        fontSize: 12
    },
    cta: {
        fontFamily: fonts.REGULAR,
        color: colors.RED,
        fontSize: 14,
        fontWeight: '600'
    }

})
export default PaymentDetailsModal