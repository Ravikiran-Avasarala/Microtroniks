import React from "react";
import MText from "../../../../components/template/MText";
import MButton from "../../../../components/template/MButton";
import { Pressable, Text, View } from "react-native";
import SafeScreen from "../../../../components/template/SafeScreen";
import BackArrow from '../../../../assets/svgs/back.svg'
import styles from "./styles";
import VerticalDotsIcon from '../../../../assets/svgs/verticaldots.svg'
import colors from "../../../../theme/colors";
import PrioritySelector from "./PrioritySelector";
import MInput from "../../../../components/template/MInput";

const CreateTicket = () => {
    const goBack = () => {
        navigation.pop()
    }
    return (
        <SafeScreen>
            <View style={styles.container}>
                <View style={[styles.row, styles.justifycontent]}>
                    <Pressable onPress={goBack}>
                        <BackArrow />
                    </Pressable>
                    <MText
                        title={`New Ticket`}
                        lineHeight={24}
                        color={colors.BLUE}
                        fontWeight="600"
                        size={16}
                        style={styles.profile}
                    />
                    <VerticalDotsIcon />
                </View>
                <View style = {styles.contentContainer}>
                    <MText title = {`Priority`} style = {styles.subHeader}/>
                    <PrioritySelector />
                    <MText title = {`Title`} style = {styles.subHeader}/>
                    <MText title = {`Comments`} style = {styles.subHeader}/>

                </View>
            </View>
        </SafeScreen>
    )
}
export default CreateTicket