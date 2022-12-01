import AsyncStorage from '@react-native-async-storage/async-storage';
import createDataContext from "./createDataContext";
import swimApi from "../api/swimApi";
import {navigate} from '../navigationRef'

const swimReducer = (state, action) => {
    switch (action.type) {
        case 'add_error':
            return {
                ...state,
                errorMessage: action.payload
            };
        case 'setLevel':
            return {
                ...state,
                errorMessage: '',
                level       : action.payload
            };
        case 'fetch_max_level':
            return {
                ...state,
                maxLevel: action.payload
            };
        case 'setGender':
            return {
                ...state,
                gender: action.payload,
            };
        case 'setHeight':
            return {
                ...state,
                height: action.payload,
            };
        case 'setWeight':
            return {
                ...state,
                weight: action.payload,
            };
        case 'clear_error_message':
            return {
                ...state,
                errorMessage: ''
            };
        default :
            return state;
    }
};
const setGender = dispatch => (gender) => {
    dispatch({
        type   : 'setGender',
        payload: gender,
    });
}

const setHeight = dispatch => (height) => {
    dispatch({
        type   : 'setHeight',
        payload: height,
    });
}
const setWeight = dispatch => (weight) => {
    dispatch({
        type   : 'setWeight',
        payload: weight,
    });
}


const tryLocalGetLevel = dispatch => async () => {
    // await AsyncStorage.removeItem('level');
    const level = await AsyncStorage.getItem('level');

    if (level) {
        dispatch({
            type   : 'setLevel',
            payload: level
        });
        navigate('mainFlow');
    } else {
        try {
            const response = await swimApi.get('/userLevels');
            if (response.data.length > 0) {
                await AsyncStorage.setItem('level', `${response.data.level}`);
                dispatch({
                    type: 'setLevel',
                    data: response.data[0].level
                });
                navigate('mainFlow');
            } else {
                navigate('questionFlow');
            }
        } catch (err) {
            console.error("ERROR: ", err.message)
            dispatch({
                type   : 'add_error',
                payload: 'Something went wrong set level'
            });
        }
    }


}

const clearErrorMessage = dispatch => () => {
    dispatch({type: 'clear_error_message'});
}

const setLevel = (dispatch) => async (level) => {
    try {
        const response = await swimApi.post('/userLevels', {
            level: level,
        });

        await AsyncStorage.setItem('level', `${response.data.level}`);

        dispatch({
            type: 'setLevel',
            payload: response.data.level
        });

        // navigate('mainFlow');
    } catch (err) {
        console.error("ERROR: ", err.message)
        dispatch({
            type   : 'add_error',
            payload: 'Something went wrong set level'
        });
    }
}
const fetchMaxLevel = (dispatch) => async () => {
    try {
        const response2 = await swimApi.get('/userLevels');
        const userLevel = parseInt(response2.data[0].level || '0');

        const response = await swimApi.get('/archivements2?type=level', {});

        const medalLevel = parseInt(response.data.length > 0 ? response.data[0].value : "0");

        const maxLevel = Math.max(userLevel, medalLevel);

        dispatch({
            type: 'fetch_max_level',
            payload: maxLevel
        });

    } catch (err) {
        console.error("ERROR: ", err.message)
        dispatch({
            type   : 'add_error',
            payload: 'Something went wrong set level'
        });
    }
}

export const {
    Provider,
    Context
} = createDataContext(swimReducer, {
    setLevel,
    clearErrorMessage,
    tryLocalGetLevel,
    setGender,
    setHeight,
    setWeight,
    fetchMaxLevel,
}, {
    token       : null,
    errorMessage: ''
});
