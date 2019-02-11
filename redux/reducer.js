import { combineReducers } from 'redux'
import { SETTINGS_DARK_UPDATE, SETTINGS_FONT_UPDATE } from './actions'
// const { createStore, combineReducers } = require('redux')

const settingsReducer = (state = {}, action) => {
    switch (action.type) {
        case SETTINGS_FONT_UPDATE:
            return {...state, fontsize: action.payload}
        case SETTINGS_DARK_UPDATE:
            return {...state, darkmode: action.payload}
        default:
            return state
    }
}


const reducer = combineReducers({
    settings: settingsReducer,
})

export default reducer