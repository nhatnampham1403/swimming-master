import createDataContext from "./createDataContext";
import swimApi from "../api/swimApi";

const activityReducer = (state, action) => {
    switch (action.type) {
        case 'fetch_activities':
            return action.payload;
        case 'add_activities':
            return [
                ...state,
                action.payload.activity
            ];
        default :
            return state;
    }
};


const fetchActivities = (dispatch) => async () => {
    const response = await swimApi.get(`/activities`);
    dispatch({
        type   : 'fetch_activities',
        payload: response.data
    });
}

async function setActivities(firstDay, dispatch) {
    const response = await swimApi.get(`/activities2?from=${firstDay.toISOString()}`);
    dispatch({
        type   : 'fetch_activities',
        payload: response.data
    });
}

const fetchWeekActivities = (dispatch) => async () => {
    const curr = new Date; // get current dateString
    const first = curr.getDate() - curr.getDay(); // First day is the day of the month - the day of the week

    const firstDay = new Date(curr.setDate(first));
    firstDay.setHours(0, 0, 0, 0);

    await setActivities(firstDay, dispatch);
}
const fetchDayActivities = (dispatch) => async () => {
    const firstDay = new Date; // get current dateString
    firstDay.setHours(0, 0, 0, 0);

    await setActivities(firstDay, dispatch);
}
const fetchMonthActivities = (dispatch) => async () => {
    const date = new Date(), y = date.getFullYear(), m = date.getMonth();
    const firstDay = new Date(y, m, 1);
    firstDay.setHours(0, 0, 0, 0);

    await setActivities(firstDay, dispatch);
}
const addActivities = (dispatch) => async (activity) => {
    const response = await swimApi.post('/activities', activity);
    dispatch({
        type   : 'add_activities',
        payload: response.data
    });
    return response.data.newLevel;

}

const getActivitiesSummmary = (dispatch) => async (firstDay) => {
    const response = await swimApi.get(`/activitiesSummary?from=${firstDay.toISOString()}`);
    return response.data;
}

const getLastActivities = (dispatch) => async () => {
    const response = await swimApi.get(`/activities/last`);
    dispatch({
        type   : 'fetch_activities',
        payload: response.data
    });
}

export const {
    Provider,
    Context
} = createDataContext(activityReducer, {
    fetchActivities,
    addActivities,
    fetchWeekActivities,
    fetchMonthActivities,
    fetchDayActivities,
    getLastActivities,
    getActivitiesSummmary,
}, []);
