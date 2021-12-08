import { combineReducers } from 'redux';

import AppSlideBar from '@/store/reducers/AppSlideBar';
import userInfo from '@/store/reducers/userInfo';

export default combineReducers({
  userInfo,
  AppSlideBar,
});
