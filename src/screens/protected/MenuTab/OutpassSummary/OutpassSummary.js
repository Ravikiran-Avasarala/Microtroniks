import React, { useCallback, useState } from "react";
import MText from "../../../../components/template/MText";
import { View, Pressable, Text, FlatList } from "react-native";
import SafeScreen from "../../../../components/template/SafeScreen";
import BackArrow from '../../../../assets/svgs/back.svg'
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import colors from "../../../../theme/colors";
import AddIcon from '../../../../assets/svgs/Add.svg'
import AddDisabled from '../../../../assets/svgs/AddDisable.svg'
import MinIcon from '../../../../assets/svgs/Min.svg'
import MinDisabled from '../../../../assets/svgs/MinDisabled.svg'
import MButton from "../../../../components/template/MButton";
import PayNowModal from "../../../../components/modals/PayNowModal";

const OutpassSummary = () => {
    const navigation = useNavigation();
    const [products, setProduct] = useState([{ name: '200 V Mother Board', type: 'PCB', price: '2300.00', qty: 1 }, { name: 'Transistor', type: 'PCB', price: '2300.00', qty: 1 }])
    const [paymentModal,setPaymentModal] = useState(false);
    const goBack = useCallback(() => {
        navigation.pop();
    }, [navigation]);
    const orderNow = useCallback(() => {
        setPaymentModal(true)
    }, [navigation]);
    const closePaymentModal = useCallback(() => {
        setPaymentModal(false)
    }, [navigation]);

    const renderItem = ({ item }) => {
        const increaseQty = () => {
            setProduct((prevProducts) =>
                prevProducts.map((product) =>
                    product.name === item.name ? { ...product, qty: product.qty + 1 } : product
                )
            );
        };

        const decreaseQty = () => {
            setProduct((prevProducts) =>
                prevProducts.map((product) =>
                    product.name === item.name && product.qty > 1
                        ? { ...product, qty: product.qty - 1 }
                        : product
                )
            );
        };

        return (
            <View style={styles.productsContainer}>
                <View style={styles.card}>
                    <View style={[styles.row, styles.justifycontent]}>
                        <View>
                            <MText title={`${item.name}`} style={styles.name} />
                            <View style={[styles.row, { alignItems: 'center', paddingTop: 15 }]}>
                                <MText title={`${item.type}`} style={styles.type} />
                                <View style={{ height: 1, backgroundColor: colors.SEMI_GREEN, width: 9, marginHorizontal: 10 }} />
                                <MText title={`₹ ${item.price}`} style={styles.price} />
                            </View>
                        </View>
                        <View style={[styles.row, { alignItems: 'center' }]}>
                            <Pressable style={styles.addIcon} onPress={decreaseQty}>
                                {item.qty > 1 ? <MinIcon /> : <MinDisabled />}
                            </Pressable>
                            <MText title={`${item.qty}`} style={styles.qty} />
                            <Pressable style={styles.addIcon} onPress={increaseQty}>
                                <AddIcon />
                            </Pressable>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
    return (
        <SafeScreen>
            <View style={styles.container}>
                <View style={[styles.row, styles.justifycontent]}>
                    <Pressable onPress={goBack}>
                        <BackArrow />
                    </Pressable>
                    <MText
                        title={`Outpass Summary`}
                        lineHeight={24}
                        color={colors.BLUE}
                        fontWeight="700"
                        size={16}
                        style={styles.profile}
                    />
                    <View>
                        <Text>{"       "}</Text>
                    </View>


                </View>
                <View style={styles.contentContainer}>
                    <MText title={`Products`} style={styles.subHeader} />
                    <FlatList data={products} renderItem={renderItem} />
                </View>
                <View style = {[styles.row,styles.justifycontent,{paddingLeft:10}]}>
                    <MText title={`Total`} style={styles.totalHeader} />
                    <MText title={`₹ 7150.00`} style={styles.total} />  
                </View>
                <MButton
                    title="Order Now"
                    type='solid'
                    size='large'
                    onPress={orderNow}
                    style={styles.buttonStyle}
                    textStyle={styles.buttonTextStyle}
                />
                <MButton
                    title="Cancel Order"
                    type='text'
                    size='large'
                    onPress={goBack}
                    style={styles.buttonCancelStyle}
                    textStyle={styles.buttonTextCancelStyle}
                />
            </View>
            <PayNowModal
                visible={paymentModal}
                onHide={closePaymentModal}
                



            />
        </SafeScreen>

    );

}

export default OutpassSummary;

