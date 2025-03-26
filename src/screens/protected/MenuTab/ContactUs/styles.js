import { StyleSheet } from "react-native";
import colors from "../../../../theme/colors";
import fonts from "../../../../theme/fonts";

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
        paddingHorizontal: 15,
        color:colors.WHITE_COLOR
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
    card:{
        height:70,
        borderRadius:16,
        border:1,
        borderColor:colors.GRAY,
        backgroundColor:colors.GRAY_1,
        justifyContent:'center',
        padding:20,
        flexDirection:'row',
        marginTop: 15
        
    },
    contentName: {
        fontFamily:fonts.REGULAR,
        fontSize:14,
        color:colors.DARK_BLUE,
        fontWeight:'500',
        paddingLeft:15
    },
    contentAction:{
        fontFamily:fonts.REGULAR,
        fontSize:12,
        fontWeight:'700',
        color:colors.PRIMARY_COLOR
    }
})