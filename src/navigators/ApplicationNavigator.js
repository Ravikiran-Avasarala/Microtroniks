import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';
import Splash from '../screens/splash/Splash';
import Login from '../screens/auth/LoginScreen/Login';
import { useSelector } from 'react-redux';
import Otp from '../screens/auth/OtpScreen/Otp';
import SignUp from '../screens/auth/signupscreen/SignupScreen';
import Success from '../components/template/Success';
import { compose } from '@reduxjs/toolkit';
import MyTabs from './BottomTabs';
import MyAccount from '../screens/protected/MenuTab/MyAccount/MyAccount';
import PaymentHistory from '../screens/protected/MenuTab/Payments/PaymentHistory';
import ContactUs from '../screens/protected/MenuTab/ContactUs/ContactUs';

import OutpassDetailsScreen from '../screens/protected/MenuTab/OutpassDetails/OutPassDetails';
import OutpassSummary from '../screens/protected/MenuTab/OutpassSummary/OutpassSummary';
import OutpassHistory from '../screens/protected/MenuTab/OutPassHistory/OutpassHistory';

const Stack = createNativeStackNavigator();

const options = {
  headerShown: false,
};

const protectedRoutes = [
  {
    name: 'MyTabs',
    component: MyTabs,
    options
  },
  {
    name: 'MyAccount',
    component: MyAccount,
    options
  },
  {
    name: 'PaymentHistory',
    component: PaymentHistory,
    options
  },
  {
    name: 'OutpassHistory',
    component: OutpassHistory,
    options
  },
  {
    name: 'OutpassDetailsScreen',
    component: OutpassDetailsScreen,
    options
  },

  {
    name: 'ContactUs',
    component: ContactUs,
    options
  },
  {
    name: 'OutpassSummary',
    component: OutpassSummary,
    options
  },
   
]
const authRoutes = [
  {
    name: 'LoginScreen',
    component: Login,
    options,
  },
  {
    name: 'Otp',
    component: Otp,
    options,
  },
  {
    name: 'SignUp',
    component: SignUp,
    options,
  },
  {
    name: 'Success',
    component: Success,
    options,
  },
]

function ApplicationNavigator() {
  const [isLoading, setIsLoading] = useState(true);
  const { isLoggedIn } = useSelector(state => state.config);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);
  return isLoading ? (
    <Splash />
  ) : (
    <NavigationContainer>
      <Stack.Navigator>
        {isLoggedIn ? protectedRoutes.map((route, index) => (
          <Stack.Screen
            key={index}
            name={route.name}
            component={route.component}
            options={route.options}
          />
        )) : authRoutes.map((route, index) => (
          <Stack.Screen
            key={index}
            name={route.name}
            component={route.component}
            options={route.options}
          />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default ApplicationNavigator;