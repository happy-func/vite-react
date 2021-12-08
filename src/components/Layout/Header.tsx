import { Menu as MenuIcon } from '@mui/icons-material';
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import { createStyles, makeStyles, Theme } from '@mui/material';
import clsx from 'clsx';
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

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBarShift: {
      marginLeft: drawerWidth,
      transition: theme.transitions.create([`margin`, `width`], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginRight: 36,
    },
  }),
);

const Header: React.FC<Props> = function ({ AppSlideBar, doUpdateAppSlideBar }) {
  const classes = useStyles();

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
      className={clsx(classes.appBar, {
        [classes.appBarShift]: AppSlideBar.openDrawer,
      })}
      sx={{
        transition: (theme) =>
          theme.transitions.create([`margin`, `width`], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
        width: AppSlideBar.openDrawer ? `100%` : `calc(100% - ${drawerWidth}px)`,
        zIndex: 1201,
      }}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={changeOpenDrawerHandle}
          edge="start"
          className={clsx(classes.menuButton)}>
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
