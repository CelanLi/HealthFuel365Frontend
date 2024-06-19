import { createSlice } from '@reduxjs/toolkit'
import { getUser, loginUser, AvatarEdit } from '../../services/userService';
import { getCookie, invalidateCookie } from '../../util/cookie'

const userStore = createSlice(
    {
        name: 'user',
        initialState: {
            userInfo: await getUser() || {},
            cookie: getCookie("userLogin") || "",
        },
        reducers: {
            setUserInfo(state, action) {
                state.userInfo = action.payload;
            },
            setCookie(state) {
                state.cookie = getCookie("userLogin");
            },
            clearCookie(state) {
                state.userInfo = {};
                state.cookie = "";
                invalidateCookie("userLogin");
            },
            updateAvatar(state, action) {
                state.userInfo.avatar = action.payload;
            }
        }
    }
)

// resolve actions
const { setUserInfo, setCookie, clearCookie, updateAvatar } = userStore.actions;

// get reducer
const userReducer = userStore.reducer;

// fetch user login
const fetchUserLogin = (data) => {
    return async (dispatch) => {
        const successFlag = await loginUser(data);
        if (successFlag) {
            dispatch(setCookie());
            const userInfo = await getUser();
            dispatch(setUserInfo(userInfo));
        }
    }
}

// fetch user information method
const fetchUserInfo = () => {
    return async (dispatch) =>{
        const userInfo = await getUser();
        dispatch(setUserInfo(userInfo));
    }
    
}

const editAvatar = (data) => {
    return async (dispatch) => {
        const successFlag = await AvatarEdit(data);
        if (successFlag){
            dispatch(updateAvatar(data));
        }
    }
}

export { fetchUserLogin, fetchUserInfo, clearCookie, editAvatar };

export default userReducer;