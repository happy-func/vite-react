import React from 'react';
import { connect } from 'react-redux';
import { AppSlideBarState, UpdateAppSlideBar } from "@/store/action";
import styles from './aside.module.scss';
import { Menu } from "antd";
import routes from "@/router/route";
import { Dispatch } from "redux";
import { useHistory } from "react-router-dom";

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
      const path = (function () {
        for(const route of routes) {
          let str = '';
          if (route.name === key) {
            return route.path;
          } else if (route.children?.length) {
            str = route.path;
            for (const child of route.children) {
              if (child.name === key) {
                return str + child.path;
              }
            }
          }
        }
        return '/dashBord';
      })();
      history.push(path);
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
    <div
      style={{ width: 240 }}
    >
      <div className={styles.asideTitle}>SYSTEM 管理后台</div>
      <Menu
        theme="dark"
        className={styles.menu}
        mode="inline"
        defaultSelectedKeys={['DashBord']}
        onSelect={onMenuSelect}
        inlineCollapsed={!AppSlideBar.openDrawer}
      >
        {routes.map((route) => (route.children?.length ? (
          <SubMenu title={route.meta.title} key={route.name}>
            {route.children.map((child) => (
              <Menu.Item key={child.name}>{child.meta.title}</Menu.Item>
            ))}
          </SubMenu>
        ) : <Menu.Item key={route.name}>{route.meta.title}</Menu.Item>)
        )}
      </Menu>
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
