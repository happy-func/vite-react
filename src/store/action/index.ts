import { RESET_USERINFO, UPDATE_APP_SLIDE_BAR, UPDATE_USERINFO } from '@/store/constant';

export interface UpdateUserInfoAction {
  userInfo: UserInfoState;
  type: UPDATE_USERINFO;
}

export interface ResetUserInfoAction {
  type: RESET_USERINFO;
}

export interface UserInfoState {
  token: string;
  name: string;
}

// 更新用户信息
export const UpdateUserInfo = (userInfo: UserInfoState): UpdateUserInfoAction => ({
  userInfo,
  type: UPDATE_USERINFO,
});

export type UpdateUserInfo = typeof UpdateUserInfo;

// 重置用户信息
export const ResetUserInfo = () => ({
  type: RESET_USERINFO,
});

export type UserInfoAction = UpdateUserInfoAction | ResetUserInfoAction;

export interface MenuItem {
  name: string;
  path: string;
  exact: boolean;
  component: any;
  meta: {
    icon?: any;
    title?: string;
  };
  children?: MenuItem[];
}

export interface AppSlideBarState {
  menuList?: MenuItem[];
  openKey?: string;
  openDrawer?: boolean;
}

export interface UpdateAppSlideBarAction {
  slideBarState: AppSlideBarState;
  type: UPDATE_APP_SLIDE_BAR;
}

// 更新App侧边栏
export const UpdateAppSlideBar = (
  slideBarState: AppSlideBarState,
): UpdateAppSlideBarAction => ({
  slideBarState,
  type: UPDATE_APP_SLIDE_BAR,
});

export type UpdateAppSlideBar = typeof UpdateAppSlideBar;
