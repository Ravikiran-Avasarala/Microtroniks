import React from 'react';
import BottomsheetModal from '../template/BottomSheetModal';
import MText from '../template/MText';
import { useNavigation } from '@react-navigation/native';
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import colors from '../../theme/colors';
import fonts from '../../theme/fonts';
import Cross from '../../assets/svgs/cross.svg'
import RightArrow from '../../assets/svgs/rightarrow.svg'
import ItemCard from '../../screens/protected/Products/ProductsHome/ItemCard';
import MButton from '../template/MButton';



const CartModal = ({
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
            scrollEnabled={true}
            keyboardShouldPersistTaps="never"
            isNotchVisible>
            <View style={styles.container}>
                <MText
                    title={`Cart`}
                    lineHeight={'100%'}
                    color={colors.BLUE}
                    fontWeight="600"
                    size={16}
                    style={styles.header}
                />
                <MText
                    title={`Products`}
                    lineHeight={'100%'}
                    color={colors.BLUE}
                    fontWeight="600"
                    size={16}
                    style={styles.subheader}
                />
                <FlatList data={data} renderItem={({ item, index }) => (
                    <ItemCard
                        item={item}
                        onAdd={() => handleAdd(index)}
                        onRemove={() => handleRemove(index)}
                    />
                )} />
                <MButton
                    title="Create Outpass"
                    type='solid'
                    size='large'
                    style={styles.buttonStyle}
                    textStyle={styles.buttonTextStyle}
                />
            </View>
        </BottomsheetModal>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.WHITE_COLOR,
        padding: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        bottom: 0
    },
    header: {
        fontFamily: fonts.REGULAR,
        fontSize: 16,
        fontWeight: '600',
        color: colors.BLUE
    },
    subheader: { fontFamily: fonts.REGULAR, fontSize: 14, fontWeight: '500', color: colors.SEMI_GREEN, paddingTop: 10 },
    cta: { fontFamily: fonts.REGULAR, color: colors.RED, fontSize: 14, fontWeight: '600' },
    payOption: { fontFamily: fonts.REGULAR, fontSize: 14, fontWeight: '500', color: colors.DARK_GREEN, },
    row: { flexDirection: 'row' },
    justifycontent: {
        justifyContent: 'space-between'
    },
    alignItems: { alignItems: 'center' },
    buttonStyle: {
        paddingVertical: 15,
        marginHorizontal: 10,
        marginTop: 30,
        borderRadius: 16
    },
    buttonTextStyle: {
        fontFamily: fonts.REGULAR,
        fontSize: 16,
        fontWeight: '800',
        color: colors.WHITE_COLOR
    },

})
export default CartModal