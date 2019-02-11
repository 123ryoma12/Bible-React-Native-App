import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import { addContact } from './actions'
import reducer from './reducer'

const DEFAULT_STATE = {
    settings: {
        fontsize: 5,
        darkmode: false,
    },
}

export const store = createStore(reducer, DEFAULT_STATE, applyMiddleware(thunk))

console.log(store.getState())

