import React from "react";
import { Spin } from "antd";
import styles from './index.module.scss';

const LazyLoading: React.ComponentType<any> = function (props) {
  if (props.error) {
    return <div>加载失败! <button onClick={ props.retry }>重新加载</button></div>;
  }
  return (
    <div className={styles.loadingBox}>
      <Spin size="large" />
    </div>
  );
}

export default LazyLoading;
