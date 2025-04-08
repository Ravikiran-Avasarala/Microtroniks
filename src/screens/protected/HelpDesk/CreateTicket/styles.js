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
        paddingTop:20,
        paddingLeft:20
    },
 
    subHeader: { fontFamily: fonts.REGULAR, fontWeight: '600', fontSize: 12, color: colors.BLACK,letterSpacing:0.5 }
})