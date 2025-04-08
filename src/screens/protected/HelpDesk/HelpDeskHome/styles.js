import { StyleSheet } from "react-native";
import colors from "../../../../theme/colors";
import fonts from "../../../../theme/fonts";


export default StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
        paddingHorizontal: 15,
        backgroundColor: colors.WHITE_COLOR

    },
    profile: {
        fontFamily: fonts.BOLD,
        fontSize: 16,
        fontWeight: '600',
        color: colors.BLUE,
        lineHeight: 24,
        textAlign: 'left',

    },
    header: {
        width: '70%',
        marginTop: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignSelf: 'center',
        borderRadius: 8,
        backgroundColor: colors.BORDER_COLOR,
        padding: 10,
    },
    button: {
        alignItems: 'center',
    },
    card: {
        height: 80,
        borderRadius: 16,
        borderWidth: 1,
        borderColor: colors.GRAY,
        backgroundColor: colors.GRAY_1,

        padding: 20,
        marginTop: 15
    },
    headerText: { textAlign: 'left', fontSize: 14, fontWeight: '500', color: colors.DARK_GREEN },
    row: { flexDirection: 'row' },
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
    buttonStyle: {
        paddingVertical: 10,
        marginHorizontal: 10,
        marginBottom:10,
        borderRadius: 16,
        
    },
    buttonTextStyle: {
        fontFamily: fonts.REGULAR,
        fontSize: 14,
        fontWeight: '700',
        color: colors.BLACK,
        paddingLeft:10
    },
})