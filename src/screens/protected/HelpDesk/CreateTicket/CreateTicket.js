import React, { useCallback, useState } from "react";
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
import { useNavigation } from "@react-navigation/native";
import PlusIcon from '../../../../assets/svgs/plus.svg'
import AddProofModal from "../../../../components/modals/AddProofModal";

const CreateTicket = () => {
    const [ticket, setTicket] = useState({ title: '', comments: '', priority: '', proof: {} })
    const [errors, setErrors] = useState({});
    const [addProofVisible,setAddProofVisible] = useState(false)
    const navigation = useNavigation();
    const goBack = () => {
        navigation.pop()
    }
    const handleChange = (field, value) => {
        setTicket((prev) => ({
            ...prev,
            [field]: value,
        }));
    };
    const addProof = useCallback(() => {
        setAddProofVisible(true)
    }, [])
    const closeAddProofModal = useCallback(() => {
        setAddProofVisible(false)
    }, [navigation]);

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
                <View style={styles.contentContainer}>
                    <MText title={`Priority`} style={styles.subHeader} />
                    <PrioritySelector priority={ticket.priority} setPriority={(priority) => handleChange('priority', priority)} />
                    {/* <MText title = {`Title`} style = {styles.subHeader}/>
                    <MText title = {`Comments`} style = {styles.subHeader}/> */}
                    <MInput
                        label="Title"
                        value={ticket.title}
                        placeholder="Title"
                        onChangeText={(text) => {
                            handleChange('title', text);
                            setErrors(prev => ({ ...prev, title: null })); // clear error on change
                        }}
                        labelStyle={styles.subHeader}
                        inputContainer={styles.inputContainer}
                        inputStyle={styles.inputStyle}
                    />

                    <MInput
                        label="Comments"
                        value={ticket.comments}
                        placeholder="Comment"
                        onChangeText={(text) => {
                            handleChange('comments', text);
                            setErrors(prev => ({ ...prev, comments: null })); // clear error on change
                        }}
                        labelStyle={styles.subHeader}
                        inputContainer={styles.inputCommentsContainer}
                        inputStyle={styles.inputStyle}
                        multiline={true}
                    />
                    <MButton
                        title="Add proof / asset "
                        icon={<PlusIcon />}
                        size='large'
                        backgroundColor={colors.SOFT_GREY}
                        style={styles.buttonStyle}
                        textStyle={styles.buttonTextStyle}
                        onPress={addProof}
                    />
                </View>

            </View>
            <AddProofModal
                visible={addProofVisible}
                onHide={closeAddProofModal}
                



            />
        </SafeScreen>
    )
}
export default CreateTicket