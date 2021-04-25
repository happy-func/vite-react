import React, { useMemo } from "react";
import {
  AppSlideBarState, MenuItem as MenuProps, UpdateAppSlideBar,
} from "@/store/action";
import {
  Collapse, List,
  ListItem, ListItemIcon, ListItemText,
} from "@material-ui/core";
import {
  createStyles, makeStyles, Theme,
} from "@material-ui/core/styles";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import routes from "@/router/route";
import { useHistory } from "react-router-dom";

interface Props {
  AppSlideBar: AppSlideBarState;
  doUpdateAppSlideBar: UpdateAppSlideBar;
}

interface MenuItemProps extends Props {
  route: MenuProps;
  className?: any;
  path: string;
}

const useStyles = makeStyles((theme: Theme) => createStyles({
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

const MenuItem: React.FC<MenuItemProps> = function({ route, className, AppSlideBar, doUpdateAppSlideBar, path }) {
  const classes = useStyles();
  const history = useHistory();
  const open = useMemo(function() {
    return route.name === AppSlideBar.openKey || !!route.children?.find((child) => child.name === AppSlideBar.openKey);
  }, [AppSlideBar.openKey]);

  function onClick() {
    if (open) {
      doUpdateAppSlideBar({
        ...AppSlideBar,
        ...{
          openKey: ``,
        },
      });
    } else {
      doUpdateAppSlideBar({
        ...AppSlideBar,
        ...{
          openKey: route.name,
        },
      })
      if (!route.children?.length) {
        history.push(path);
      }
    }
  }
  return (
    <>
      <ListItem selected={AppSlideBar.openKey === route.name} button className={className} onClick={onClick}>
        <ListItemIcon>{route.meta.icon}</ListItemIcon>
        <ListItemText primary={route.meta.title} />
      </ListItem>
      {!!route.children?.length && (
        // <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {route.children.map((child) => <MenuItem path={`${path}${child.path}`} route={child} className={classes.nested} key={child.name} AppSlideBar={AppSlideBar} doUpdateAppSlideBar={doUpdateAppSlideBar} />)}
          </List>
        // </Collapse>
      )}
    </>
  );
};

const Menu: React.FC<Props> = function({ doUpdateAppSlideBar, AppSlideBar }) {
  return (
    <List>
      {routes.map((route) => <MenuItem path={route.path} route={route} key={route.name} doUpdateAppSlideBar={doUpdateAppSlideBar} AppSlideBar={AppSlideBar}/>)}
    </List>
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

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
