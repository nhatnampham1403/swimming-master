import createDataContext from "./createDataContext";
import swimApi from "../api/swimApi";

const archivementReducer = (state, action) => {
    switch (action.type) {
        case 'fetch_archivements':
            return action.payload ? {
                ...state,
                archivements: action.payload
            } : state;
         case 'fetch_level':
             return {
                 ...state,
                 level: action.payload
             };
        default :
            return state;
    }
};

const fetchArchivements = (dispatch) => async () => {
    const response = await swimApi.get('/archivements2?category=speed', {});
    const response2 = await swimApi.get('/archivements2?category=distance', {});
    const results = [
        ...response.data,
        ...response2.data
    ];
    for (const archive of results) {
        if (archive.category === "speed") {
            archive.value = new Date(archive.value * 1000).toISOString().substr(14, 5);
        } else if (archive.category === "distance") {
            archive.value += " km";
        }
    }
    dispatch({
        type: 'fetch_archivements',
        payload: results,
    });


    // navigate('mainFlow');
}
const fetchLevel = (dispatch) => async () => {
    console.log('fetchLevel');
    const response = await swimApi.get('/archivements2?type=level', {});
    dispatch({
        type: 'fetch_level',
        payload: (response.data.length>0?response.data[0].value:null),
    });
}

export const {
    Provider,
    Context
} = createDataContext(archivementReducer, {
    fetchArchivements,
    fetchLevel,
}, {});
