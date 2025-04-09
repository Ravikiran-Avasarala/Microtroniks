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
        row: {flexDirection:'row'},
        alignItems:{alignItems:'center'},
        justifyContent: {justifyContent:'space-between'},
        card: {
            flexDirection: 'row',
            backgroundColor: colors.GRAY_1,
            borderWidth:1,
            borderRadius: 16,
            marginBottom: 12,
            alignItems: 'center',
            borderColor:colors.GRAY
             
          },
          image: {
            width: 100,
            height: 100,
            borderRadius: 8,
            marginRight: 10,
            backgroundColor: '#eee',
          },
          infoSection: {
            flex: 1,
            justifyContent: 'space-between',
          },
          title: {
            fontSize: 16,
            fontWeight: '600',
            color: '#333',
          },
          subtitle: {
            fontSize: 14,
            color: '#6563f0',
            marginVertical: 4,
          },
          quantityContainer: {
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 8,
          },
          qtyBtn: {
            width: 30,
            height: 30,
            borderRadius: 15,
            backgroundColor: '#f1f1f1',
            justifyContent: 'center',
            alignItems: 'center',
          },
          qtySymbol: {
            fontSize: 20,
            fontWeight: '600',
          },
          qtyText: {
            marginHorizontal: 12,
            fontSize: 16,
            fontWeight: '500',
          },
})