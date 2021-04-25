import React, {lazy} from "react";
import {MenuItem} from "@/store/action";
import {MoveToInbox as InboxIcon, Mail as MailIcon} from "@material-ui/icons";
import EmptyView from '@/components/EmptyView';

const routes: MenuItem[] = [{
  name: `DashBord`,
  path: `/dashBord`,
  exact: true,
  component: lazy(() => import("@/page/DashBord/index")),
  meta: {
    icon: <InboxIcon/>,
    title: `控制台`,
  },
}, {
  name: `AccountManage`,
  path: `/accountManage`,
  exact: true,
  component: lazy(() => import("@/page/AccountManage/index")),
  meta: {
    icon: <MailIcon/>,
    title: `账号管理`,
  },
}, {
  name: `Child`,
  path: `/child`,
  exact: true,
  component: EmptyView,
  meta: {
    icon: <InboxIcon/>,
    title: `测试子级`,
  },
  children: [{
    name: `ChildEl`,
    path: `/deep`,
    exact: false,
    component: lazy(() => import("@/page/Child/Child")),
    meta: {
      icon: <MailIcon/>,
      title: `子页面`,
    },
  }],
}];

export default routes;
