import { combineReducers } from 'redux';
import userInfo from '@/store/reducers/userInfo';
import AppSlideBar from "@/store/reducers/AppSlideBar";

export default combineReducers({
  userInfo,
  AppSlideBar,
});
