import React from 'react';

const AccountManagePage: React.FC = () => (
  <div>
    <div>账号管理</div>
    {[... new Array(10000).keys()].map((item) => <div key={item}>账号管理{item}</div>)}
  </div>
);

export default AccountManagePage;
