import AsyncStorage from '@react-native-async-storage/async-storage';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import {
    FLUSH,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
    REHYDRATE,
    persistReducer,
    persistStore,
} from 'redux-persist';
import configReducer, { configInitialState } from './slice/config.slice';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['config', 'user', 'referral'],
};

const reducers = combineReducers({
    config: configReducer,
});

const rootReducer = (state, action) => {
    if (action.type === 'USER_LOGOUT') {
        const { env } = state.config;
        state = {
            config: { ...configInitialState, env },
        };
    }
    return reducers(state, action);
};

const persistedConfigReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedConfigReducer,
    devTools: Boolean(__DEV__),
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }).concat(logger),
});

export const persistor = persistStore(store);

export const getRootState = () => store.getState();
export const appDispatch = (action) => store.dispatch(action);