import React, { useEffect, Suspense } from 'react';
import {
  HashRouter as Router, Switch, Redirect, useHistory, Route,
} from 'react-router-dom';
import { connect } from 'react-redux';
import AppMain from '@/components/Layout/AppMain';
import {MenuItem, UpdateUserInfo, UserInfoState} from '@/store/action';
import routes from "@/router/route";
import { getAdminName, getToken } from "@/utils";
import { Dispatch } from "redux";
import LazyLoading from "@/components/LazyLoading";

interface Props {
  userInfo: UserInfoState;
  doUpdateUserInfo: UpdateUserInfo,
}

const MainRouter: React.FC<Props> = ({ userInfo, doUpdateUserInfo }) => {
  const history = useHistory();

  useEffect(() => {
    if (!userInfo.token) {
      if (!getToken()) {
        history.push(`/login`)
      } else {
        doUpdateUserInfo({
          name: getAdminName(),
          token: getToken(),
        } as UserInfoState);
      }
    }
  }, [userInfo.token]);
  const RouteItem: React.FC<any> = ({ route, parentPath }) => (
    <>
      <Route path={`${parentPath || ``}${route.path}`} component={route.component} exact={!!route.exact} />
      {!!route.children?.length && route.children.map((target: MenuItem) => <RouteItem key={target.name} route={target} parentPath={`${parentPath || ``}${route.path}`} />)}
    </>
  )

  return (
    <AppMain>
      <Suspense fallback={<LazyLoading />}>
        <Switch>
          <Router>
            <Route path="/" exact>
              <Redirect to="/dashBord" />
            </Route>
            {routes.map((route) => <RouteItem key={route.name} route={route} />)}
          </Router>
        </Switch>
      </Suspense>
    </AppMain>
  );
};

// 将 reducer 中的状态插入到组件的 props 中
const mapStateToProps = (state: { userInfo: UserInfoState; }): { userInfo: UserInfoState } => ({
  userInfo: state.userInfo,
});

// 将 对应action 插入到组件的 props 中
const mapDispatchToProps = (dispatch: Dispatch) => ({
  doUpdateUserInfo: (userInfo: UserInfoState) => dispatch(UpdateUserInfo(userInfo)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MainRouter);
