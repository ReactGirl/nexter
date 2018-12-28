import { combineReducers} from 'redux'
import {reducer as formReducer } from 'redux-form'
import selectedArticleReducer from './postsReducer'

export default combineReducers ({
  articles: selectedArticleReducer,
  form: formReducer
})
