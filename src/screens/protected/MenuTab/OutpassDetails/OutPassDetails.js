import React, { useCallback } from 'react';
import { View, Text, ScrollView, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MText from '../../../../components/template/MText';
import BackArrow from '../../../../assets/svgs/back.svg'
import styles from './styles';
import VerticalDotsIcon from '../../../../assets/svgs/verticaldots.svg'
import SafeScreen from '../../../../components/template/SafeScreen';
import colors from '../../../../theme/colors';
import MButton from '../../../../components/template/MButton';
const OutpassDetailsScreen = () => {

    const navigation = useNavigation();
    const goBack = useCallback(() => {
        navigation.pop();
    }, [navigation]);

    const proceed = useCallback(()=>{
        navigation.pop();
    },[navigation])
    return (
        <SafeScreen>
            <View style={styles.container}>
                <View style={[styles.row, styles.justifycontent]}>
                    <Pressable onPress={goBack}>
                        <BackArrow />
                    </Pressable>
                    <MText
                        title={`Outpass Details`}
                        lineHeight={24}
                        color={colors.BLUE}
                        fontWeight="700"
                        size={16}
                        style={styles.profile}
                    />
                    <VerticalDotsIcon />

                </View>
                <ScrollView style={styles.contentContainer}>
                    {/* <View style={styles.contentContainer}> */}
                    <MText
                        title={`Outpass Id / Outpass Financial Year Id :`}
                        lineHeight={18}
                        color={colors.SEMI_GREEN}
                        fontWeight="500"
                        size={12}
                        style={styles.label} />
                    <MText
                        title={`1204 / OPN-2324-10-60`}
                        lineHeight={18}
                        color={colors.BLACK}
                        fontWeight="600"
                        size={12}
                        style={styles.label1} />


                    <DetailRow label="Branch" value="Hyderabad" />
                    <DetailRow label="Company Name" value="Bhavya Agency" />
                    <DetailRow label="Store Incharge" value="10052" />
                    <DetailRow label="Created Date" value="10 Oct, 2023" />
                    <DetailRow label="LR No." value="123#232" />

                    <Text style={styles.sectionTitle}>Products :</Text>

                    <ProductRow name="120 Volts battery ..." quantity="X 10" price="₹ 2,350.00" />
                    <ProductRow name="PCB Panel" quantity="X 5" price="₹ 2,350.00" />
                    <ProductRow name="PCB Panel" quantity="X 6" price="₹ 2,350.00" />


                    <View style={styles.totalContainer}>
                    <MText
                        title={`Total  `}
                        lineHeight={12}
                        color={colors.SEMI_GREEN}
                        fontWeight="500"
                        size={12}
                        style={styles.totalHeader} />
                        <MText
                        title={`₹ 7150.00`}
                        
                        color={colors.BLACK}
                        fontWeight="700"
                        size={15}
                        style={styles.tatalvalue} />
                    </View>

                    {/* <TouchableOpacity style={styles.pdfButton}>
                        <Text style={styles.pdfText}>bhavya agency-OPN-2324-10-60.pdf</Text>
                    </TouchableOpacity> */}
                    <MButton
                    title="bhavya agency-OPN-2324-10-60.pdf"
                    type='solid'
                    size='large'
                    onPress={proceed}
                    backgroundColor={'#EBECFD'}
                    color={'#111111'}
                    style={styles.pdfbuttonStyle}
                    textStyle={styles.pdfTextbuttonStyle}
                />
                </ScrollView>





                <MButton
                    title="Re-order Now"
                    type='solid'
                    size='large'
                    onPress={proceed}
                    
                    style={styles.buttonStyle}
                    textStyle={styles.buttonTextStyle}
                />


            </View>
        </SafeScreen>

    );
};

const DetailRow = ({ label, value }) => (
    <View style={styles.detailRow}>
        <View style={{ flex: 0.5 }}>
            <MText
                title={`${label}`}
                color={colors.SEMI_GREEN}
                fontWeight="600"
                size={12}
                style={styles.sideHeader} />
        </View>
        <MText
            title={`:`}
            color={colors.SEMI_GREEN}
            fontWeight="900"
            size={12}
            style={[styles.sideHeader, { flex: 0.1 }]} />
        <View style={{ flex: 0.5 }}>
            <MText
                title={`${value}`}
                color={colors.BLACK}
                fontWeight="600"
                size={12}
                style={styles.sideHeaderValue} />
        </View>


    </View>
);

const ProductRow = ({ name, quantity, price }) => (
    <><View style={styles.detailRow}>
        <View style={{ flex: 0.5 }}>
            <MText
                title={`${name}`}
                color={colors.SEMI_GREEN}
                fontWeight="600"
                size={12}
                style={styles.productsideHeader} />
        </View>
        <View style={{ flex:0.1 }}>
        <MText
            title={`${quantity}`}
            color={colors.SEMI_GREEN}
            fontWeight="900"
            size={12}
            style={styles.productsideHeader} />
        </View>
       
        <View style={{ flex: 0.5,alignItems:'flex-end' }}>
            <MText
                title={`${price}`}
                color={colors.BLACK}
                fontWeight="600"
                size={12}
                style={styles.productssideHeaderValue} />
        </View>




    </View><View style={{ height: 1, backgroundColor: "#ECECEC", width: "100%", marginTop: 10,marginBottom:10 }} /></>
);



export default OutpassDetailsScreen;
