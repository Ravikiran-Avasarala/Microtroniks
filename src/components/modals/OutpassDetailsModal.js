import React from 'react';
import BottomsheetModal from '../template/BottomSheetModal';
import MText from '../template/MText';
import { useNavigation } from '@react-navigation/native';
import { FlatList, Pressable, ScrollView, StyleSheet, View } from 'react-native';
import colors from '../../theme/colors';
import fonts from '../../theme/fonts';
import Cross from '../../assets/svgs/cross.svg';
import MButton from '../template/MButton';

const OutPassDetailsModal = ({ visible, proceed, onHide, data}) => {
    const navigation = useNavigation();

    const onHideAction = () => {
        onHide();
    };
    const onNavigationAction = () => {
        proceed();
        onHide();
    };

    return (
        <BottomsheetModal
            visible={visible}
            onHide={onHideAction}
            onBackPress={onHideAction}
            scrollEnabled={true}
            keyboardShouldPersistTaps="never"
            isNotchVisible
        >
            <View style={styles.container}>
                <MText
                    title="Your Order is ready for you"
                    lineHeight="100%"
                    color={colors.BLUE}
                    fontWeight="700"
                    size={18}
                    style={styles.header}
                />

                {data && (
                    <View style={styles.content}>
                        <MText
                            title="Outpass Id / Outpass Financial Year Id :"
                            style={styles.subheader}
                        />
                        <MText
                            title={`${data.outpassId} / ${data.outpassFId}`}
                            style={styles.subheaderValue}
                        />
                        <MText
                            title="Products :"
                            style={[styles.header, { color: colors.DARK_GREEN, paddingTop: 20 }]}
                        />
                        <View style={{ marginTop: 10, borderWidth: 1, borderColor: colors.BORDER, borderRadius: 5 }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', borderBottomWidth: 1, borderColor: colors.BORDER, padding: 10 }}>
                                <MText title="Name" style={[styles.details, { flex: 1, textAlign: 'left', paddingLeft: 10 }]} />
                                <MText title="Qty" style={[styles.details, { flex: 1, textAlign: 'right', paddingRight: 10 }]} />
                            </View>
                            <FlatList
                                data={data.products}
                                keyExtractor={(item, index) => index.toString()}
                                renderItem={({ item, index }) => (
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', borderBottomWidth: index !== data.products.length - 1 ? 1 : 0, borderColor: colors.BORDER, padding: 10 }}>
                                        <MText title={item.name || '-'} style={[styles.sideHeader, { flex: 1, textAlign: 'left', paddingLeft: 10 }]} />
                                        <MText title={item.qty || '-'} style={[styles.sideHeader, { flex: 1, textAlign: 'right', paddingRight: 10 }]} />
                                    </View>
                                )}
                            />
                        </View>
                        <MButton
                    title="View More"
                    type='solid'
                    size='large'
                    onPress={onNavigationAction}
                    style={styles.buttonStyle}
                    textStyle={styles.buttonTextStyle}
                />
                    </View>
                )}
            </View>

            <View style={styles.container}>
                <Pressable onPress={onHideAction} style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <MText
                        title="Cancel"
                        lineHeight="100%"
                        color={colors.RED}
                        fontWeight="500"
                        size={14}
                        style={styles.cta}
                    />
                    <Cross />
                </Pressable>
            </View>
        </BottomsheetModal>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.WHITE_COLOR,
        margin: 10,
        padding: 20,
        borderRadius: 25,
    },
    header: {
        fontFamily: fonts.REGULAR,
        fontSize: 18,
        fontWeight: '700',
        color: colors.BLUE,
    },
    subheader: {
        fontFamily: fonts.REGULAR,
        fontSize: 12,
        fontWeight: '500',
        color: colors.SEMI_GREEN,
        paddingTop: 10,
        letterSpacing: 0.9,
    },
    subheaderValue: {
        fontFamily: fonts.REGULAR,
        fontSize: 12,
        fontWeight: '600',
        color: colors.BLACK,
        paddingTop: 5,
        letterSpacing: 0.9,
    },
    content: {
        flex: 1,
        paddingTop: 25,
    },
    sideHeader: {
        color: colors.SEMI_GREEN,
        fontFamily: fonts.REGULAR,
        fontWeight: '500',
        fontSize: 12,
    },
    cta: {
        fontFamily: fonts.REGULAR,
        color: colors.RED,
        fontSize: 14,
        fontWeight: '600',
    },
    details: {
        flex: 0.5,
        color: colors.BLACK,
        fontFamily: fonts.REGULAR,
        fontWeight: '700',
        fontSize: 12
    },
    buttonStyle: {
            paddingVertical: 15,
            marginHorizontal: 10,
            marginTop: 30,
            borderRadius:0
        },
        buttonTextStyle: {
            fontFamily: fonts.REGULAR,
            fontSize: 16,
            fontWeight: '800',
            color: colors.WHITE_COLOR
        },
});

export default OutPassDetailsModal;
