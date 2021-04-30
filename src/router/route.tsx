import React, {lazy} from "react";
import {MenuItem} from "@/store/action";
import EmptyView from '@/components/EmptyView';
import { DashboardFilled, IdcardFilled, GoldenFilled } from '@ant-design/icons';

const routes: MenuItem[] = [{
  name: `DashBord`,
  path: `/dashBord`,
  exact: true,
  component: lazy(() => import("@/page/DashBord/index")),
  meta: {
    icon: <DashboardFilled />,
    title: `控制台`,
  },
}, {
  name: `AccountManage`,
  path: `/accountManage`,
  exact: true,
  component: lazy(() => import("@/page/AccountManage/index")),
  meta: {
    icon: <IdcardFilled/>,
    title: `账号管理`,
  },
}, {
  name: `Child`,
  path: `/child`,
  exact: true,
  component: EmptyView,
  meta: {
    icon: <GoldenFilled/>,
    title: `测试子级`,
  },
  children: [{
    name: `ChildEl`,
    path: `/deep`,
    exact: false,
    component: lazy(() => import("@/page/Child/Child")),
    meta: {
      title: `子页面`,
    },
  }],
}];

export default routes;
