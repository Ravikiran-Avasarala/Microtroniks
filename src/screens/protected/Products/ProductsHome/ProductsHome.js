import React, { useState } from "react";
import { FlatList, Image, Pressable, Text, View } from "react-native";
import SafeScreen from "../../../../components/template/SafeScreen";
import styles from "./styles";
import ToggleTab from "../../HelpDesk/HelpDeskHome/ToggleTab";
import { useNavigation } from "@react-navigation/native";
import ToggleTabs from "../../../../components/template/ToogleTabs";
import MText from "../../../../components/template/MText";
import LocationPin from '../../../../assets/svgs/locationPin.svg'
import MInput from "../../../../components/template/MInput";
import colors from "../../../../theme/colors";
import SearchIcon from '../../../../assets/svgs/search.svg'
import fonts from "../../../../theme/fonts";
import ItemCard from "./ItemCard";
import CartModal from "../../../../components/modals/CartModal";



const ProductsHome = () => {
    const navigation = useNavigation();
    const [selectedTab, setSelectedTab] = useState('Products');
    const [cartModal, setCartModal] = useState(false);
    const [data, setData] = useState([{ name: '200V Mother Board', type: 'Panel', image: 'https://picsum.photos/300/200', qty: 1 }, { name: '200V Mother Board', type: 'PCB', image: 'https://picsum.photos/300/200', qty: 1 }, { name: '200V Mother Board', type: 'PCB', image: 'https://picsum.photos/300/200', qty: 1 }, { name: '200V Mother Board', type: 'PCB', image: 'https://picsum.photos/300/200', qty: 1 }, { name: '200V Mother Board', type: 'PCB', image: 'https://picsum.photos/300/200', qty: 1 }, { name: '200V Mother Board', type: 'PCB', image: 'https://picsum.photos/300/200', qty: 1 }, { name: '200V Mother Board', type: 'PCB', image: 'https://picsum.photos/300/200', qty: 1 }, { name: '200V Mother Board', type: 'PCB', image: 'https://picsum.photos/300/200', qty: 1 }, { name: '200V Mother Board', type: 'PCB', image: 'https://picsum.photos/300/200', qty: 1 }, { name: '200V Mother Board', type: 'PCB', image: 'https://picsum.photos/300/200', qty: 1 }])
    const [cartData, setCartData] = useState([{ name: '200V Mother Board', type: 'Panel', image: 'https://picsum.photos/300/200', qty: 1 },{ name: '200V Mother Board', type: 'PCB', image: 'https://picsum.photos/300/200', qty: 1 },{ name: '200V Mother Board', type: 'PCB', image: 'https://picsum.photos/300/200', qty: 1 },{ name: '200V Mother Board', type: 'PCB', image: 'https://picsum.photos/300/200', qty: 1 },{ name: '200V Mother Board', type: 'PCB', image: 'https://picsum.photos/300/200', qty: 1 },{ name: '200V Mother Board', type: 'PCB', image: 'https://picsum.photos/300/200', qty: 1 }])
    const handleAdd = (index) => {
        const updated = [...data];
        updated[index].qty += 1;
        setData(updated);
    };

    const handleRemove = (index) => {
        const updated = [...data];
        if (updated[index].qty > 0) {
            updated[index].qty -= 1;
            setData(updated);
        }
    };
    const onCartModalOpen = () => {
        setCartModal(true);
    }
    const closeCartModal = () => {
        setCartModal(false);
    }
    return (
        <SafeScreen>
            <View style={styles.container}>
                <View style={[styles.row, styles.alignItems, styles.justifyContent]}>
                    <ToggleTabs
                        tabs={['Products', 'Favorites']}
                        selected={selectedTab}
                        setSelected={setSelectedTab}
                    />
                    <Pressable style={[styles.row, styles.alignItems]} onPress = {onCartModalOpen}>
                        <LocationPin />
                        <MText title={`HYD`} />
                    </Pressable>
                </View>
                <View>
                    <MInput placeholder="Search Product" leftIcon={<SearchIcon />} inputStyle={{ flex: 1, height: 40, color: colors.BLACK, fontfamily: fonts.REGULAR, fontWeight: '500', fontSize: 14, }} inputContainer={{ backgroundColor: colors.SOFT_GREY_1 }} />
                </View>
                <FlatList data={data} renderItem={({ item, index }) => (
                    <ItemCard
                        item={item}
                        onAdd={() => handleAdd(index)}
                        onRemove={() => handleRemove(index)}
                    />
                )}
                    contentContainerStyle={{ padding: 10 }}
                />




            </View>
            <CartModal
                visible={cartModal}
                onHide={closeCartModal}
                data = {cartData}

            />
        </SafeScreen>
    )
}

export default ProductsHome