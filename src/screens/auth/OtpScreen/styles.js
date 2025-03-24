import { StyleSheet } from "react-native";
import colors from "../../../theme/colors";
import fonts from "../../../theme/fonts";

export default StyleSheet.create({
    container: {
        flex: 1,
        margin: 15,
        backgroundColor: colors.WHITE_COLOR
    },
    contentContainer: {
        flex: 1,
        alignSelf: 'center',
        flexDirection: 'column'
    },

    header: {

        marginTop: 25,
        fontFamily: fonts.REGULAR,
        fontWeight: '800',
        fontSize: 24,
        color: colors.TEXT_COLOR,
        textAlign: 'center'

    },
    subHeader: {
        paddingTop: 10,
        fontFamily: fonts.REGULAR,
        fontWeight: '400',
        fontSize: 16,
        color: colors.TEXT_SECONDARY_COLOR,
        textAlign: 'center'
    },
    otpContainer: {
        marginTop: 20,
        paddingLeft: 15,
        paddingRight: 15

    },
    optPinCodeContainer: {
        borderRadius: 10,
        backgroundColor: colors.GHOST_WHITE,
        borderColor: colors.GHOST_WHITE,
        width: 70,
        height: 70
    },
    otpActivePinCodeContainer: {
        borderColor: colors.GHOST_WHITE,
    },
    otpDisabledPinCodeContainer: {
        borderColor: colors.GHOST_WHITE,
    },
    otpFocusStick: {
        color: colors.PRIMARY_1
    },
    buttonStyle: {
        paddingVertical: 20,
        marginTop: 25,
        marginHorizontal: 10
    },
    buttonTextStyle: {
        fontFamily: fonts.REGULAR,
        fontSize: 16,
        fontWeight: '800',
        color: colors.WHITE_COLOR
    },
    resendText:{
        fontFamily:fonts.REGULAR,
        fontSize:16,
        fontWeight:'800',
        color:colors.GRAY_67
    },
    countdown:{
        fontFamily:fonts.REGULAR,
        fontSize:16,
        fontWeight:'800',
        color:colors.PRIMARY_COLOR
    }
})