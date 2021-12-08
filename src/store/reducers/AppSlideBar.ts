import { AppSlideBarState, UpdateAppSlideBarAction } from '@/store/action';
import { UPDATE_APP_SLIDE_BAR } from '@/store/constant';

const defaultState: AppSlideBarState = {
  menuList: [],
  openKey: ``,
  openDrawer: true,
};
const AppSlideBar = (
  state: AppSlideBarState = defaultState,
  action: UpdateAppSlideBarAction,
): AppSlideBarState => {
  switch (action.type) {
    case UPDATE_APP_SLIDE_BAR:
      return {
        ...state,
        ...action.slideBarState,
      };
    default:
      return state;
  }
};

export default AppSlideBar;
