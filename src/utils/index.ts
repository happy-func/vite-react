import Cookies from 'js-cookie';

import { AdminNameKey, TokenKey } from '@/constant/StorageKey';

const options = {
  expires: 7,
};

// 获取token
export const getToken = () => Cookies.get(TokenKey);

// 存储token
export const setToken = (token: string) => Cookies.set(TokenKey, token, options);

// 获取管理员名称
export const getAdminName = () => Cookies.get(AdminNameKey);

// 存储管理员名称
export const setAdminName = (name: string) => Cookies.set(AdminNameKey, name, options);
