import { lazy } from 'react';

import EmptyView from '@/components/EmptyView';
import { MenuItem } from '@/store/action';

const routes: MenuItem[] = [
  {
    name: `DashBord`,
    path: `/dashBord`,
    exact: true,
    component: lazy(() => import('@/page/DashBord/index')),
    meta: {
      icon: `dashboard`,
      title: `控制台`,
    },
  },
  {
    name: `AccountManage`,
    path: `/accountManage`,
    exact: true,
    component: lazy(() => import('@/page/AccountManage/index')),
    meta: {
      icon: `badge`,
      title: `账号管理`,
    },
  },
  {
    name: `Child`,
    path: `/child`,
    exact: true,
    component: EmptyView,
    meta: {
      icon: `golf_course`,
      title: `测试子级`,
    },
    children: [
      {
        name: `ChildEl`,
        path: `/child`,
        exact: false,
        component: lazy(() => import('@/page/Child/Child')),
        meta: {
          title: `子页面`,
        },
      },
      {
        name: 'ChildEmpty',
        path: '/deep',
        exact: false,
        component: EmptyView,
        meta: {
          title: '深层',
        },
        children: [
          {
            name: 'DeepChildren',
            path: '/page',
            exact: false,
            component: lazy(() => import('@/page/Child/Deep')),
            meta: {
              title: '嵌套',
            },
          },
        ],
      },
    ],
  },
];

export default routes;
