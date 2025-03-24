import { StyleSheet } from "react-native";
import colors from "../../../theme/colors";
import fonts from "../../../theme/fonts";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.WHITE_COLOR
    },
    patternPosition: {
        alignItems: 'flex-end',

    },
    contentContainer: {
        marginTop:20,
        paddingLeft: 5,
        justifyContent: 'center'
    },
    headerContainer: {
        marginLeft: 15
    },
    header: {

        marginTop: 18,
        fontFamily: fonts.REGULAR,
        fontWeight: '800',
        fontSize: 24,
        color: colors.TEXT_COLOR
    },
    subHeader: {
        paddingTop: 10,
        fontFamily: fonts.REGULAR,
        fontWeight: '400',
        fontSize: 16,
        color: colors.TEXT_SECONDARY_COLOR
    },
    credentialContainer: {
        marginTop: 25,
        paddingHorizontal: 15
    },
    buttonStyle: {
        paddingVertical:20,
        marginTop: 15,
        marginHorizontal: 10
    },
    buttonTextStyle: {
        fontFamily: fonts.REGULAR,
        fontSize: 16,
        fontWeight: '800',
        color: colors.WHITE_COLOR
    },
    signUp: {
        flexDirection:'row',
        position: 'absolute',
        bottom: 30,
        alignItems: 'center',
        alignSelf: 'center',
        
    }

})