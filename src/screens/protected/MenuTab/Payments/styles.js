import { StyleSheet } from "react-native";
import colors from "../../../../theme/colors";
import fonts from "../../../../theme/fonts";

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
        paddingHorizontal: 15

    },
    row: { flexDirection: 'row' },
    justifycontent: {
        justifyContent: 'space-between'
    },
    profile: {
        fontFamily: fonts.REGULAR,
        fontSize: 16,
        fontWeight: '600',
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
    card: {
        height: 100,
        borderRadius: 16,
        border: 1,
        borderColor: colors.GRAY,
        backgroundColor: colors.GRAY_1,

        padding: 20,
        marginTop: 15
    },
    paymentID: {
        fontFamily: fonts.REGULAR,
        fontSize: '12',
        fontWeight: '800',
        color: colors.BLACK,
        paddingTop: 10
    },
    paymentType: {
        fontFamily: fonts.REGULAR,
        fontWeight: '700',
        fontSize: '12',
    },
    paymentDate: {
        fontFamily: fonts.REGULAR,
        fontWeight: '500',
        fontSize: '12',
        color: colors.SEMI_GREEN
    },
    amount:{  fontFamily: fonts.REGULAR,
        fontWeight: '700',
        fontSize: '12',
        color: colors.DARK_GREEN}
})