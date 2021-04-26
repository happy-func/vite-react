import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Divider, Drawer } from '@material-ui/core';
import { connect } from 'react-redux';
import { AppSlideBarState } from "@/store/action";
import styles from './aside.module.scss';
import Menu from "@/components/Layout/Menu";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: `nowrap`,
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create(`width`, {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create(`width`, {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: `hidden`,
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up(`sm`)]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: `flex`,
    alignItems: `center`,
    justifyContent: `flex-end`,
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
}));

interface Props {
  AppSlideBar: AppSlideBarState;
}

const Aside: React.FC<Props> = function({ AppSlideBar }) {
  const classes = useStyles();

  return (
    <Drawer
      variant="permanent"
      className={clsx(classes.drawer, {
        [classes.drawerOpen]: AppSlideBar.openDrawer,
        [classes.drawerClose]: !AppSlideBar.openDrawer,
      })}
      classes={{
        paper: clsx({
          [classes.drawerOpen]: AppSlideBar.openDrawer,
          [classes.drawerClose]: !AppSlideBar.openDrawer,
        }),
      }}
    >
      <div className={classes.toolbar}>
        {AppSlideBar.openDrawer && <div className={styles.title}>管理后台</div>}
      </div>
      <Divider />
      <Menu />
      <Divider />
    </Drawer>
  )
};

// 将 reducer 中的状态插入到组件的 props 中
const mapStateToProps = (state: { AppSlideBar: any; }) => ({
  AppSlideBar: state.AppSlideBar,
});

export default connect(mapStateToProps)(Aside);
