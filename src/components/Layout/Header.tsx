import React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { AppSlideBarState, UpdateAppSlideBar } from "@/store/action";
import {
  AppBar, IconButton, Toolbar, Typography,
} from '@material-ui/core';
import {
  makeStyles, Theme, createStyles,
} from '@material-ui/core/styles';
import clsx from "clsx";
import styles from '@/components/Layout/header.module.scss';
import { Menu as MenuIcon } from '@material-ui/icons';

interface Props {
  AppSlideBar: AppSlideBarState;
  doUpdateAppSlideBar: UpdateAppSlideBar;
}

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) => createStyles({
  appBar: {
    transition: theme.transitions.create([`margin`, `width`], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    zIndex: 1201,
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
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
)

const Header: React.FC<Props> = function({ AppSlideBar, doUpdateAppSlideBar }) {
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
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={changeOpenDrawerHandle}
          edge="start"
          className={clsx(classes.menuButton)}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap className={styles.title} />
      </Toolbar>
    </AppBar>
  );
}

// 将 reducer 中的状态插入到组件的 props 中
const mapStateToProps = (state: { AppSlideBar: any; }) => ({
  AppSlideBar: state.AppSlideBar,
});

// 将 对应action 插入到组件的 props 中
const mapDispatchToProps = (dispatch: Dispatch) => ({
  doUpdateAppSlideBar: (appSlideBarState: AppSlideBarState) => dispatch(UpdateAppSlideBar(appSlideBarState)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
