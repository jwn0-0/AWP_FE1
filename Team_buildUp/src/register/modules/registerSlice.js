import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
}

const userSlice = createSlice({
    name:'userInfo',
    initialState,
    reducers: {
        inputUser: (state, action) =>{
            state.user = action.payload;
            console.log(state.user);
        },
        inputEmail: (state, action) =>{
            state.email = action.payload;
        },
        inputPassword: (state, action) =>{
            state.password = action.payload;
        },
        inputConfirmPassword: (state, action) =>{
            state.confirmPassword = action.payload;
        },
        errConfirmPassword:(state) =>{
            state.confirmPassword = ""
        }
    }
});

export const {inputUser, inputEmail, inputPassword, inputConfirmPassword, errConfirmPassword} = userSlice.actions;
export default userSlice.reducer;