import { Menu as MenuIcon } from '@mui/icons-material';
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import styles from '@/components/Layout/header.module.scss';
import { AppSlideBarState, UpdateAppSlideBar } from '@/store/action';

interface Props {
  AppSlideBar: AppSlideBarState;
  doUpdateAppSlideBar: UpdateAppSlideBar;
}

const drawerWidth = 240;

const Header: React.FC<Props> = function ({ AppSlideBar, doUpdateAppSlideBar }) {
  function changeOpenDrawerHandle() {
    doUpdateAppSlideBar({
      ...AppSlideBar,
      ...{
        openDrawer: !AppSlideBar.openDrawer,
      },
    });
  }
  return (
    <AppBar
      position="fixed"
      sx={{
        transition: (theme) =>
          theme.transitions.create([`margin`, `width`], {
            easing: AppSlideBar.openDrawer ? theme.transitions.easing.easeOut : theme.transitions.easing.sharp,
            duration: AppSlideBar.openDrawer ? theme.transitions.duration.enteringScreen : theme.transitions.duration.leavingScreen,
          }),
        width: AppSlideBar.openDrawer ? `100%` : `calc(100% - ${drawerWidth}px)`,
        zIndex: 1201,
        marginLeft: AppSlideBar.openDrawer ? 0 : drawerWidth,
      }}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={changeOpenDrawerHandle}
          edge="start"
          sx={{
            marginRight: 36,
          }}>
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap className={styles.title} />
      </Toolbar>
    </AppBar>
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

export default connect(mapStateToProps, mapDispatchToProps)(Header);
