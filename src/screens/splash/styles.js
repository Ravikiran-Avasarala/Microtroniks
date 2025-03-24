import { StyleSheet } from "react-native";
import fonts from "../../theme/fonts";
import colors from "../../theme/colors";

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  innerContainer: {
    flex: 1,
  },
  logoContainer: {
    flex: 10,  // Takes more space, keeping the logo in the center
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    flex: 1,  // Pushes text to the bottom
    justifyContent: 'center',
    alignItems: 'center',
  },
  versionText:{
    fontFamily:fonts.REGULAR,
    fontSize:16,
    fontWeight:'600',
    letterSpacing:0.3,
    color:colors.WHITE_COLOR


  }
})