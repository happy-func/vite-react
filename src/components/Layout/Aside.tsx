import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Dispatch } from 'redux';

import MenuItem from '@/components/Layout/MenuItem';
import routes from '@/router/route';
import { AppSlideBarState, UpdateAppSlideBar } from '@/store/action';
import { MenuItem as MenuItemProps } from '@/store/action';

import {Box} from "@mui/material";
import {drawerWidth, miniDrawerWidth} from "@/components/Layout/Header";

interface Props {
  AppSlideBar: AppSlideBarState;
  doUpdateAppSlideBar: UpdateAppSlideBar;
}

const Aside: React.FC<Props> = function ({ AppSlideBar, doUpdateAppSlideBar }) {
  const history = useHistory();
  // @ts-ignore
  function onMenuSelect(key) {
    if (AppSlideBar.openKey !== key) {
      doUpdateAppSlideBar({
        ...AppSlideBar,
        ...{
          openKey: key,
        },
      });
      const path = (function genPath(routes, parentPath = ''): string {
        let path = '';
        for (const route of routes) {
          if (route.name === key) {
            return parentPath + route.path;
          } else if (route.children?.length) {
            path = genPath(route.children, parentPath + route.path);
          }
        }
        return path;
      })(routes);
      history.push(path || 'dashBord');
    } else {
      doUpdateAppSlideBar({
        ...AppSlideBar,
        ...{
          openKey: ``,
        },
      });
    }
  }
  return (
    <Box
      sx={{
        width: AppSlideBar.openDrawer ? drawerWidth : 80, height: '100vh', flexShrink: 0,
        transition: (theme) =>
          theme.transitions.create([`width`], {
            easing: AppSlideBar.openDrawer ? theme.transitions.easing.easeOut : theme.transitions.easing.sharp,
            duration: AppSlideBar.openDrawer ? theme.transitions.duration.enteringScreen : theme.transitions.duration.leavingScreen,
          }),
      }}
    >
      <Box
        sx={{
          width: `${AppSlideBar.openDrawer ? drawerWidth : miniDrawerWidth}px`,
          height: '100vh',
          position: 'fixed',
          left: 0,
          top: 0,
          zIndex: 89,
          transition: (theme) =>
            theme.transitions.create([`width`], {
              easing: AppSlideBar.openDrawer ? theme.transitions.easing.easeOut : theme.transitions.easing.sharp,
              duration: AppSlideBar.openDrawer ? theme.transitions.duration.enteringScreen : theme.transitions.duration.leavingScreen,
            }),
        }}
      >
        <Box
          sx={{
            height: `62px`,
            lineHeight: `62px`,
            fontSize: `20px`,
            backgroundColor: `#3f51b5`,
            color: `#fff`,
            textAlign: `center`
          }}
        >
          {AppSlideBar.openDrawer && `SYSTEM 管理后台`}
        </Box>
        {routes.map((route) => (
          <MenuItem route={route} key={route.name} open={!!AppSlideBar.openDrawer} onSelect={onMenuSelect} />
        ))}
      </Box>
    </Box>
  );
};

// 将 reducer 中的状态插入到组件的 props 中
const mapStateToProps = (state: { AppSlideBar: any }) => ({
  AppSlideBar: state.AppSlideBar,
});

// 将 对应action 插入到组件的 props 中
const mapDispatchToProps = (dispatch: Dispatch) => ({
  doUpdateAppSlideBar: (appSlideBarState: AppSlideBarState) =>
    dispatch(UpdateAppSlideBar(appSlideBarState)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Aside);
