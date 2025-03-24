import { View, Text } from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import colors from '../../theme/colors';
import Logo from '../../assets/svgs/splashlogo.svg';
import styles from './styles';

const Splash = () => {
    return (
        <LinearGradient
            style={styles.container}
            colors={[colors.PRIMARY_1, colors.PRIMARY_COLOR]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}>

            <View style={styles.innerContainer}>
                 <View style = {styles.logoContainer}>
                    <Logo/>
                 </View>
                 <View style = {styles.textContainer}>
                    <Text style = {styles.versionText}>Version 1.0</Text>
                 </View>
            </View>

        </LinearGradient>
    )
}
export default Splash;
