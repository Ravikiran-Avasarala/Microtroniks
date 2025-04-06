import { StyleSheet } from "react-native";
import fonts from "../../../../theme/fonts";
import colors from "../../../../theme/colors";

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
        fontFamily: fonts.BOLD,
        fontSize: 16,
        fontWeight: '700',
        color: colors.BLUE,
        lineHeight: 24,
        textAlign: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems: 'center'
    },
    contentContainer: {
        flex:1,
        paddingTop:20,
        paddingLeft:10
    },
    subHeader:{fontFamily:fonts.REGULAR,fontWeight:'500',fontSize:14,color:colors.SEMI_GREEN},
    productsContainer:{marginTop:10},
    card: {
           height: 100,
           borderRadius: 16,
           borderWidth: 1,
           borderColor: colors.GRAY,
           backgroundColor: colors.GRAY_1,
   
           padding: 20,
           marginTop: 15
       },
       name:{fontFamily:fonts.REGULAR,fontSize:15,fontWeight:'500',color:colors.DARK_BLUE},
       type:{fontFamily:fonts.REGULAR,fontSize:12,fontWeight:'700',color:colors.PRIMARY_COLOR},
       price: {fontFamily:fonts.REGULAR,fontSize:12,fontWeight:'700',color:colors.DARK_GREEN},
       qty: {fontFamily:fonts.REGULAR,fontSize:14,fontWeight:'500',color:colors.NEUTRAl,paddingHorizontal:15},
       buttonStyle: {
               paddingVertical: 15,
               marginTop: 15,
               marginHorizontal: 10,
               marginBottom: 5,
           },
           buttonTextStyle: {
               fontFamily: fonts.REGULAR,
               fontSize: 16,
               fontWeight: '800',
               color: colors.WHITE_COLOR
           },
           buttonCancelStyle: {
            paddingVertical: 15,
            marginHorizontal: 10,
            marginBottom: 30,
        },
           buttonTextCancelStyle: {
            fontFamily: fonts.REGULAR,
            fontSize: 15,
            fontWeight: '700',
            color: colors.PRIMARY_COLOR
        },
        totalHeader: {fontFamily:fonts.REGULAR,fontSize:16,fontWeight:'300',color:colors.DARK},
        total:{fontFamily:fonts.REGULAR,fontSize:18,fontWeight:'700',color:colors.DARK},
})