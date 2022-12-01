import createDataContext from "./createDataContext";
import swimApi from "../api/swimApi";

const activitySummaryReducer = (state, action) => {
    switch (action.type) {
        case 'fetch_summary':
            return action.payload;
        default :
            return state;
    }
};

const fetchMonthActivitiesSummary= (dispatch) => async () => {
    const date = new Date(), y = date.getFullYear(), m = date.getMonth();
    const firstDay = new Date(y, m, 1);
    firstDay.setHours(0, 0, 0, 0);

    const response = await swimApi.get(`/activitiesSummary?from=${firstDay.toISOString()}`);
    dispatch({
        type   : 'fetch_summary',
        payload: response.data
    });
}
const fetchWeekActivitiesSummary= (dispatch) => async () => {
    const curr = new Date; // get current dateString
    const first = curr.getDate() - curr.getDay(); // First day is the day of the month - the day of the week

    const firstDay = new Date(curr.setDate(first));
    firstDay.setHours(0, 0, 0, 0);

    const response = await swimApi.get(`/activitiesSummary?from=${firstDay.toISOString()}`);
    dispatch({
        type   : 'fetch_summary',
        payload: response.data
    });
}




export const {
    Provider,
    Context
} = createDataContext(activitySummaryReducer, {
    fetchWeekActivitiesSummary,
    fetchMonthActivitiesSummary,
}, []);
