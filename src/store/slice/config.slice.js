import {createSlice} from '@reduxjs/toolkit';

export const configIntialState = {
    theme: 'light',
    env: 'dev',
    isLoggedIn: false,
    token:'',
};

const configSlice = createSlice({
    name: 'config',
    initialState : configIntialState,
    reducers:{
        setTheme: (state,action)=> {
            state.theme = action.payload
        },
        setEnv: (state, action) => {
            state.env = action.payload;
        },
        setIsLoggedIn: (state, action) => {
            state.isLoggedIn = action.payload;
        },
        setToken: (state, action) => {
            state.token = action.payload;
        },
    }
});

export const {setTheme,setEnv,setIsLoggedIn,setToken} = configSlice.actions;
export default configSlice.reducer;