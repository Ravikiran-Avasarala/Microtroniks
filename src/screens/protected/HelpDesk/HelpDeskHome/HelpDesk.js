import { useNavigation } from "@react-navigation/native";
import React, { useCallback, useState } from "react";
import { FlatList, Pressable, Text, View } from "react-native";
import SafeScreen from "../../../../components/template/SafeScreen";
import styles from "./styles";
import MText from "../../../../components/template/MText";
import colors from "../../../../theme/colors";
import ToggleTab from "./ToggleTab";
import MButton from "../../../../components/template/MButton";
import PlusIcon from '../../../../assets/svgs/plus.svg'
import TicketDetailsModal from "../../../../components/modals/TicketDetailsModal";
import ToggleTabs from "../../../../components/template/ToogleTabs";


const HelpDesk = () => {
    const navigation = useNavigation();
    const [selectedTab, setSelectedTab] = useState('Opened');
    const [tickets, setTickets] = useState([{ name: 'PCB chip is not working properly.', status: 'Open', date: '10 Oct, 2023' }, { name: 'PCB chip is not working properly.', status: 'Resolved', date: '10 Oct, 2023' }, { name: 'PCB chip is not working properly.', status: 'Cancelled', date: '10 Oct, 2023' }]);
    const ticketData = { tNumber: '2324-10-60', tStatus: 'Closed', tRaisedDate: '10 Oct, 2023', tPriority: 'High', tClosedBy: 'Nanda Kishore', tSummary: 'PCB chip is not working properly.', comment: 'PCB chip is not working properly.' }
    const [ticketModal, setTicketModal] = useState(false);

    const closeTicketDetailsModal = useCallback(() => {
        setTicketModal(false)
    }, [navigation]);
    const openTicketModal = useCallback(() => {
        setTicketModal(true)
    }, [navigation]);
    const createTicket = useCallback(() => {
        navigation.push('CreateTicket')
    }, [])

    const renderItem = ({ item }) => {

        return (
            <Pressable style={styles.card} onPress={openTicketModal}>
                <MText title={item.name} size={14} color={colors.BLUE} fontWeight='600' style={styles.headerText} />
                <View style={[styles.row, { paddingTop: 5, alignItems: 'center' }]}>
                    <MText
                        title={`${item.status}`}
                        color={item.status == 'Open' ? colors.PRIMARY_COLOR : colors.GREEN}
                        fontWeight="700"
                        size={12}
                        style={styles.paymentType}
                    />
                    <View style={{ height: 1, backgroundColor: colors.SEMI_GREEN, width: 9, marginHorizontal: 10 }} />
                    <MText
                        title={`${item.date}`}
                        color={colors.SEMI_GREEN}
                        fontWeight="600"
                        size={12}
                        style={styles.paymentDate}
                    />
                </View>
            </Pressable>
        )
    }

    return (
        <SafeScreen>
            <View style={styles.container}>
                <View style={styles.row}>
                    <MText
                        title={`Ticket List`}
                        lineHeight={24}
                        color={colors.BLUE}
                        fontWeight="600"
                        size={16}
                        style={styles.profile}
                    />
                </View>
                <ToggleTabs
                    tabs={['Opened', 'Closed']}
                    selected={selectedTab}
                    setSelected={setSelectedTab}
                    containerStyle = {{alignItems:'center',paddingTop:20}}
                />
                {/* <ToggleTab setSelected={setSelected} selected={selected} /> */}
                <FlatList data={tickets} renderItem={renderItem} />
                <MButton
                    title="Open New Ticket"
                    icon={<PlusIcon />}
                    size='large'
                    backgroundColor={colors.SOFT_GREY}
                    style={styles.buttonStyle}
                    textStyle={styles.buttonTextStyle}
                    onPress={createTicket}
                />
                <TicketDetailsModal visible={ticketModal}
                    onHide={closeTicketDetailsModal} data={ticketData} />

            </View>

        </SafeScreen>

    )
}

export default HelpDesk