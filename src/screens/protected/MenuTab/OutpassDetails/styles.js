import { StyleSheet } from "react-native";
import colors from "../../../../theme/colors";
import fonts from "../../../../theme/fonts";

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
        paddingHorizontal: 15

    }, row: { flexDirection: 'row' },
    justifycontent: {
        justifyContent: 'space-between'
    },
    profile: {
        fontFamily: fonts.BOLD,
        fontSize: 16,
        fontWeight: '700',
        color: colors.BLUE,
        lineHeight: 24,
        textAlign: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems: 'center'
    },
    contentContainer: {
        flex: 1
    },
    label: {
        paddingTop: 14,
        fontFamily: fonts.REGULAR,
        fontWeight: '500',
        fontSize: 12,
        color: colors.SEMI_GREEN,

    },
    label1: {
        paddingTop: 5,
        fontFamily: fonts.REGULAR,
        fontWeight: '600',
        fontSize: 12,
        color: colors.BLACK,
    },
    productsideHeader: {
        paddingVertical: 10,
        fontFamily: fonts.REGULAR,
        fontWeight: '500',
        fontSize: 12,
        color: colors.SEMI_GREEN,
    },
    productssideHeaderValue: {
        paddingVertical: 10,
        fontFamily: fonts.REGULAR,
        fontWeight: '600',
        fontSize: 12,
        color: colors.BLACK,
    },
    pdfbuttonStyle: {
        paddingVertical: 15,
        marginTop: 15,
        marginHorizontal: 30,
        marginBottom: 5,
        borderRadius: 1,
        borderColor: '#ECECEC'
    },
    pdfTextbuttonStyle: {
        fontFamily: fonts.SEMIBOLD,
        fontSize: 12,
        fontWeight: '400',
        color: colors.BLACK
    },

    sideHeader: {

        paddingTop: 30,
        fontFamily: fonts.REGULAR,
        fontWeight: '500',
        fontSize: 12,
        color: colors.SEMI_GREEN,

    },
    sideHeaderValue: {

        paddingTop: 30,

        fontFamily: fonts.REGULAR,
        fontWeight: '600',
        fontSize: 12,
        color: colors.BLACK,
    },
    value: {
        paddingTop: 14,
        fontFamily: fonts.REGULAR,
        fontWeight: '600',
        fontSize: 12,
        color: colors.BLACK,
    },
    detailRow: {
        flexDirection: 'row',
        alignItems: 'center',
        alignContent: 'center'
    },
    sectionTitle: {
        paddingTop: 30,
        fontFamily: fonts.BOLD,
        fontWeight: '700',
        fontSize: 18
    },
    totalContainer: {
        flex: 1,
        alignContent: 'flex-end',
        textAlign: 'right',
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'flex-end'
    },
    totalHeader: {
        fontFamily: fonts.BOLD,
        fontWeight: '500',
        fontSize: 12,
        color: colors.SEMI_GREEN
    },
    tatalvalue: {
        fontFamily: fonts.BOLD,
        fontWeight: '700',
        fontSize: 15,
        color: colors.BLACK

    },
    buttonStyle: {
        paddingVertical: 15,
        marginTop: 15,
        marginHorizontal: 10,
        marginBottom: 30,
    },
    buttonTextStyle: {
        fontFamily: fonts.REGULAR,
        fontSize: 16,
        fontWeight: '800',
        color: colors.WHITE_COLOR
    },
})