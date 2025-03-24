import { StyleSheet } from "react-native";
import colors from "../../../theme/colors";
import fonts from "../../../theme/fonts";

export default StyleSheet.create({
    container: {
        flex: 1,
        margin: 15,
        backgroundColor: colors.WHITE_COLOR
    },
    header: {

        marginTop: 18,
        fontFamily: fonts.REGULAR,
        fontWeight: '800',
        fontSize: 20,
        color: colors.TEXT_COLOR,
        textAlign: 'center'
    },
    registerContent: {
        marginTop: 20,
        paddingHorizontal: 10
    },
    buttonStyle: {
        paddingVertical: 20,
        marginTop: 15,
        marginHorizontal: 10
    },
    buttonTextStyle: {
        fontFamily: fonts.REGULAR,
        fontSize: 16,
        fontWeight: '800',
        color: colors.WHITE_COLOR
    },
})