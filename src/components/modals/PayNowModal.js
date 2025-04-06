import React from 'react';
import BottomsheetModal from '../template/BottomSheetModal';
import MText from '../template/MText';
import { useNavigation } from '@react-navigation/native';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import colors from '../../theme/colors';
import fonts from '../../theme/fonts';
import Cross from '../../assets/svgs/cross.svg'
import RightArrow from '../../assets/svgs/rightarrow.svg'



const PayNowModal = ({
    visible,
    onHide,
    data,

}) => {
    const navigation = useNavigation();

    const onHideAction = () => {
        onHide();
    }




    return (
        <BottomsheetModal visible={visible}
            onHide={onHideAction}
            onBackPress={onHideAction}
            scrollEnabled={false}
            keyboardShouldPersistTaps="never"
            isNotchVisible>
            <View style={styles.container}>
                <MText
                    title={`Select Payment Option`}
                    lineHeight={'100%'}
                    color={colors.BLUE}
                    fontWeight="600"
                    size={16}
                    style={styles.header}
                />
                <View style={[styles.row, styles.justifycontent,styles.alignItems,{marginTop:20}]}>
                    <MText title={`Pay Later`} style={styles.payOption} />
                    <RightArrow />
                </View>

                <View style={{ height: 1, backgroundColor: colors.SEMI_GREEN, width: '100%', marginTop: 10 }} />
                <View style={[styles.row, styles.justifycontent,styles.alignItems,{marginTop:20}]}>
                    <MText title={`Pay Now`} style={styles.payOption} />
                    <RightArrow />
                </View>



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




    cta: {
        fontFamily: fonts.REGULAR,
        color: colors.RED,
        fontSize: 14,
        fontWeight: '600'
    },
    payOption: { fontFamily: fonts.REGULAR, fontSize: 14, fontWeight: '500', color: colors.DARK_GREEN,   },
    row: { flexDirection: 'row' },
    justifycontent: {
        justifyContent: 'space-between'
    },
    alignItems: {alignItems:'center'}

})
export default PayNowModal