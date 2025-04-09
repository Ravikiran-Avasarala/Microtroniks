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
        paddingLeft:10
    },
 
    subHeader: { fontFamily: fonts.REGULAR, fontWeight: '600', fontSize: 12, color: colors.BLACK,letterSpacing:0.5,paddingVertical:10 },
    inputContainer:{borderRadius:16,borderWidth:1,borderColor:colors.BORDER_COLOR,},
    inputStyle:{paddingVertical:10,fontSize:14,color:colors.DARK,fontWeight:'400',fontFamily:fonts.REGULAR,textAlignVertical:'top',textAlign:'left',flex:1 },
    inputCommentsContainer:{borderRadius:16,borderWidth:1,borderColor:colors.BORDER_COLOR,   },
    buttonStyle: {
        paddingVertical: 10,
         
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