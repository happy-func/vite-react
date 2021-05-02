import React from 'react';
import { connect } from 'react-redux';
import { AppSlideBarState, UpdateAppSlideBar } from "@/store/action";
import styles from './aside.module.scss';
import { Menu } from "antd";
import routes from "@/router/route";
import { Dispatch } from "redux";
import { useHistory } from "react-router-dom";
import { MenuItem as MenuItemProps } from "@/store/action";

interface Props {
  AppSlideBar: AppSlideBarState;
  doUpdateAppSlideBar: UpdateAppSlideBar;
}

const { SubMenu } = Menu;

const Aside: React.FC<Props> = function({ AppSlideBar, doUpdateAppSlideBar }) {
  const history = useHistory();
  // @ts-ignore
  function onMenuSelect(e) {
    const { key } = e;
    if (AppSlideBar.openKey !== key) {
      doUpdateAppSlideBar({
        ...AppSlideBar,
        ...{
          openKey: key,
        },
      });
      const path = (function genPath(routes, parentPath = ''): string {
        let path = '';
        for(const route of routes) {
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
  const MenuItem = ({ route, ...props}: { route: MenuItemProps }) => (route.children?.length ? (
    <SubMenu title={route.meta.title} key={route.name} icon={route.meta.icon || <div />} {...props}>
      {route.children.map((child) => <MenuItem route={child} key={child.name} />)}
    </SubMenu>
  ) : <Menu.Item key={route.name} icon={route.meta.icon || <div />} {...props}>{route.meta.title}</Menu.Item>)
  return (
    <div
      style={{ width: 240, height: '100vh' }}
      className={AppSlideBar.openDrawer ? '' : styles.tinyMenu}
    >
      <div className={`${styles.fixedMenu} ${AppSlideBar.openDrawer ? '' : styles.tinyMenu}`} style={{ width: 240, height: '100vh' }}>
        <div className={styles.asideTitle}>{AppSlideBar.openDrawer && `SYSTEM 管理后台`}</div>
        <Menu
          theme="dark"
          className={styles.menu}
          mode="inline"
          defaultSelectedKeys={['DashBord']}
          onSelect={onMenuSelect}
          inlineCollapsed={!AppSlideBar.openDrawer}
        >
          {routes.map((route) => <MenuItem route={route} key={route.name} />)}
        </Menu>
      </div>
    </div>
  )
};

// 将 reducer 中的状态插入到组件的 props 中
const mapStateToProps = (state: { AppSlideBar: any; }) => ({
  AppSlideBar: state.AppSlideBar,
});

// 将 对应action 插入到组件的 props 中
const mapDispatchToProps = (dispatch: Dispatch) => ({
  doUpdateAppSlideBar: (appSlideBarState: AppSlideBarState) => dispatch(UpdateAppSlideBar(appSlideBarState)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Aside);
