import { Image, Pressable, Text, View } from "react-native";
import styles from "./styles";
import MText from "../../../../components/template/MText";
import colors from "../../../../theme/colors";
import AddIcon from '../../../../assets/svgs/Add.svg'
import AddDisabled from '../../../../assets/svgs/AddDisable.svg'
import MinIcon from '../../../../assets/svgs/Min.svg'
import MinDisabled from '../../../../assets/svgs/MinDisabled.svg'


const ItemCard = ({ item, onAdd, onRemove }) => {
    return (
        <View style={styles.card}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <View style={styles.infoSection}>
                <MText title={`${item.name}`} style={styles.title} />
                <MText title={`${item.type}`} style={[styles.subtitle, { color: item.type == 'Panel' ? '#F48F1F' : '#636AEF' }]} />

                <View style={styles.quantityContainer}>
                    <Pressable onPress={onRemove} style={styles.qtyBtn}>
                        {item.qty > 0 ? <MinIcon /> : <MinDisabled />}

                    </Pressable>
                    <MText title={`${item.qty.toString()}`} style={styles.qtyText} />
                    
                    <Pressable onPress={onAdd} style={styles.qtyBtn}>
                        <AddIcon />
                    </Pressable>
                </View>
            </View>
        </View>
    );
};
export default ItemCard;