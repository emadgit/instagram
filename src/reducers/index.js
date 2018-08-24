import { combineReducers } from 'redux';

import CommentReducer from './CommentReducer';

export default combineReducers({
    comments : CommentReducer
})

