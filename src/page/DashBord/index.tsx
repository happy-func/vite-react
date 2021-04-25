import React from 'react';
import { Link } from 'react-router-dom'
const DashBordPage: React.FC = () => (
  <div>
    {[...new Array(100).keys()].map((item) => <div key={item}>仪表盘:{item + 1}</div>)}
    <Link to="/accountManage">AccountManage</Link>
  </div>
);

export default DashBordPage;
