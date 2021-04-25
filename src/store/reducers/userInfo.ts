import { UserInfoAction, UserInfoState } from "@/store/action";
import { RESET_USERINFO, UPDATE_USERINFO } from "@/store/constant";

const defaultState: UserInfoState = {
  token: ``,
  name: ``,
},

  UserInfo = (state: UserInfoState = defaultState, action: UserInfoAction): UserInfoState => {
    switch (action.type) {
    case UPDATE_USERINFO:
      return action.userInfo;
    case RESET_USERINFO:
      return defaultState;
    default:
      return state;
    }
  };

export default UserInfo;
