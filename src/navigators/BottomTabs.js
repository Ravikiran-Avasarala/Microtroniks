import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import colors from '../theme/colors';
import HomeDisabled from '../assets/svgs/tabs/homedisabled.svg';
import ProductsDisabled from '../assets/svgs/tabs/productsdisabled.svg';
import HelpDeskDisabled from '../assets/svgs/tabs/helpdeskdisabled.svg';
import MenuDisabled from '../assets/svgs/tabs/menudisabled.svg';
import HomeFocused from '../assets/svgs/tabs/homefocused.svg';
import MenuFocused from '../assets/svgs/tabs/menufocused.svg';
import ProductsFocused from '../assets/svgs/tabs/productsfocused.svg';
import HelpdeskFocused from '../assets/svgs/tabs/helpdeskfocused.svg';
import { Text, View } from 'react-native';
import fonts from '../theme/fonts';
import Home from '../screens/protected/Home';
import Products from '../screens/protected/Products';
import HelpDesk from '../screens/protected/HelpDesk';
import Menu from '../screens/protected/Menu';

const Tab = createBottomTabNavigator();



const MyTabs = () => {
    const screenOptions = {
        headerShown: false,
        tabBarActiveTintColor: colors.PRIMARY_COLOR,
        tabBarInactiveTintColor: colors.PRIMARY_1,
    };
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarLabel: ({ focused }) => {
                    let iconColor = focused ? colors.WHITE_COLOR : colors.PRIMARY_1
                    return <Text style={{ color: iconColor, fontSize: 10, fontFamily: fonts.REGULAR, fontWeight: '500', paddingBottom: 10 }}>{route.name}</Text>
                },
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: colors.PRIMARY_1, // Dark blue background
                    // height: 70, // Adjust height
                    borderRadius: 25,
                    margin: 20,
                    alignItems: 'center',
                    justifyContent: 'center',
                    alignSelf: 'center'

                },
                tabBarIconStyle: {
                    justifyContent: 'center', alignSelf: 'center',
                    alignItems: 'center', marginTop: 15
                },
                tabBarIcon: ({ focused }) => {

                    if (route.name === 'Home') {
                        return focused ? <HomeFocused /> : <HomeDisabled />;
                    } else if (route.name === 'Products') {
                        return focused ? <ProductsFocused /> : <ProductsDisabled />;
                    } else if (route.name === 'HelpDesk') {
                        return focused ? <HelpdeskFocused /> : <HelpDeskDisabled />;
                    } else if (route.name === 'Menu') {
                        return focused ? <MenuFocused /> : <MenuDisabled />
                    }
                },



                tabBarActiveTintColor: colors.PRIMARY_COLOR,
                tabBarInactiveTintColor: colors.PRIMARY_1,

            })}
        >
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Products" component={Products} />
            <Tab.Screen name="HelpDesk" component={HelpDesk} />
            <Tab.Screen name="Menu" component={Menu} />
        </Tab.Navigator>
    )
}

export default MyTabs;