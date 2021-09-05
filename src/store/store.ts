import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'

import ListReducer from './reducers/listReducer';
import NotificationReducer from './reducers/notificationReducer';

const rootReducer = combineReducers({
    list: ListReducer,
    notification: NotificationReducer
})

const store = createStore(rootReducer, composeWithDevTools())

export type RootState = ReturnType<typeof rootReducer>

export default store;