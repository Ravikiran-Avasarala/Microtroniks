import React from "react";
import { Keyboard, KeyboardAvoidingView, SafeAreaView, Text, View } from "react-native";
import ApplicationNavigator from "./navigators/ApplicationNavigator";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { persistor, store } from "./store";
import { PersistGate } from 'redux-persist/integration/react';
import { Provider as ReduxProvider } from 'react-redux';
const App = () => {
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <KeyboardAvoidingView
                style={{ flex: 1 }}
                keyboardVerticalOffset={0}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                enabled
                onTouchStart={() => Keyboard.dismiss()}
                contentContainerStyle={{ flex: 1 }}
                keyboardShouldPersistTaps="handled"
                keyboardDismissMode="on-drag">
                <ReduxProvider store={store}>
                    <PersistGate loading={null} persistor={persistor}>
                        <ApplicationNavigator />
                    </PersistGate>
                </ReduxProvider>
            </KeyboardAvoidingView>
        </GestureHandlerRootView>
    )
}
export default App