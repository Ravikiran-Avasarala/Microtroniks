import { StyleSheet } from "react-native";
import colors from "../../../../theme/colors";
import fonts from "../../../../theme/fonts";

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
        paddingHorizontal: 15,
        backgroundColor:colors.WHITE_COLOR

    },
    row: { flexDirection: 'row' },
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
    justifycontent: {
        justifyContent: 'space-between'
    },
    contentContainer: {
        flex: 1,
        paddingTop: 20,
    },
    contentName: {

        fontFamily: fonts.REGULAR,
        fontSize: 12,
        color: colors.SEMI_GREEN,
        paddingTop: 25,
        paddingLeft: 15

    },
    contentValue: {

        fontFamily: fonts.REGULAR,
        fontSize: 12,
        color: colors.BLACK,
        paddingTop: 25,
        paddingLeft: 15

    },
    buttonStyle: {
        paddingVertical: 20,
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