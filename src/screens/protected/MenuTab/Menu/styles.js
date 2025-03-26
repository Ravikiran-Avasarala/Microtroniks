import { StyleSheet } from "react-native";
import colors from "../../../../theme/colors";
import fonts from "../../../../theme/fonts";

export default StyleSheet.create({
    container: {
        flex:1,
        paddingLeft:25,
        paddingRight:10,
        paddingTop:25,
        backgroundColor:colors.WHITE_COLOR
         
    },
    row: {
        flexDirection:'row',
    },
    column:{
        flexDirection:'column'
    },
    name:{
        paddingLeft:10,
        fontFamily:fonts.REGULAR,
        fontWeight:'700',
        fontSize:20,
        color:colors.DARK_GREEN,
        letterSpacing:'0.1'
    },
    number:{
        paddingLeft:10,
        fontFamily:fonts.REGULAR,
        fontWeight:'500',
        fontSize:14,
        color:colors.SEMI_GREEN,
        letterSpacing:'0.1'
    },
    contentContainer: {
        paddingTop:20,
        paddingRight:10
    },
    content:{
        paddingTop:15,
        justifyContent:'center',
        alignItems:'center'
    },
    contentName:{
        alignSelf:'center',
        paddingLeft:10,
        fontFamily:fonts.REGULAR,
        fontWeight:'500',
        fontSize:16,
        color:colors.DARK_BLUE,
        
    },
    buttonStyle: {
        paddingVertical: 20,
        marginTop: 15,
    },
    buttonTextStyle: {
        fontFamily: fonts.REGULAR,
        fontSize: 16,
        fontWeight: '800',
        color: colors.RED
    },
})