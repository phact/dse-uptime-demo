import {combineReducers} from 'redux';
import {handleAction} from 'redux-actions';
import {routerReducer} from 'react-router-redux';
import RequestReducer from './requestReducers';
import NavigationReducer from './NavigationReducer';


// INITIAL_APP_STATE
const initialAppState = {
    mapView: false,
    mapZoom: 1.8,
    mapCenter: [-58.19601888728513,42.55232832019892],
    appName: 'DSE Uptime UI',
    events: [],
    nodeList: [],
    dcList: [],
    writes: [],
    reads: [],
    snackbarOpen: false,
};

const reducers = combineReducers({
    RequestReducer,
    NavigationReducer,
    app: handleAction(
        'UPDATE',
        (state, action) => ({
            ...state,
            [action.data.key] : action.data.value
        }),
        initialAppState
    ),
    interval: handleAction(
        'SET_INTERVAL',
        (state, action) => ({
            ...state,
            value : action.data
        }),null
    ),
    routing: routerReducer
});

export default reducers;
