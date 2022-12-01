import AsyncStorage from '@react-native-async-storage/async-storage';
import createDataContext from "./createDataContext";
import swimApi from "../api/swimApi";
import {navigate} from '../navigationRef'

const authReducer = (state, action) => {
    switch (action.type) {
        case 'add_error':
            return {...state, errorMessage: action.payload};
        case 'signin':
            return {...state, errorMessage: '', token: action.payload.token, username: action.payload.username,};
        case 'clear_error_message':
            return {...state, errorMessage: ''};
        case 'signout':
            return {...state, token: null, errorMessage: ''};
        default :
            return state;
    }
};

const tryLocalSignin = dispatch => async () => {
    // await AsyncStorage.removeItem('token');
    const token = await AsyncStorage.getItem('token');
    const username = await AsyncStorage.getItem('username');
    if (token) {
        dispatch({type: 'signin', payload: {token, username}});
        navigate('ResolveQuest');
    } else {
        navigate('loginFlow');
    }
}

const clearErrorMessage = dispatch => () => {
    dispatch({type: 'clear_error_message'});
}

const signup = dispatch => async ({username, email, password}) => {
        try {
            const response = await swimApi.post('/signup', {
                username,
                email,
                password
            });
            await  AsyncStorage.setItem('token', response.data.token);
            await  AsyncStorage.setItem('username', username);
            dispatch({type: 'signin', payload: {token:response.data.token, username}});

            navigate('questionFlow');
        } catch (err) {
            dispatch({type: 'add_error', payload: 'Something went wrong with sign up'});
        }
    }


const signin = (dispatch)  => async ({username, password}) => {
    try {
        const response = await swimApi.post('/signin', {
            username,
            password
        });
        await  AsyncStorage.setItem('token', response.data.token);
        await  AsyncStorage.setItem('username', username);

        dispatch({type: 'signin', payload: {token:response.data.token, username}});

        navigate('ResolveQuest');
    } catch (err) {
        console.error(err.message);
        dispatch({type: 'add_error', payload: 'Something went wrong with sign in'});
    }
}

const signout = dispatch => async () => {
    await AsyncStorage.removeItem('token');
    await AsyncStorage.removeItem('level');
    dispatch({type: 'signout'});
    navigate('loginFlow');
}

export const {Provider, Context} = createDataContext(
    authReducer,
    {signin, signout, signup,clearErrorMessage,tryLocalSignin},
    {token: null, errorMessage: ''}
);
