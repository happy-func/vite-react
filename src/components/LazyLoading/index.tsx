import React from 'react';

import styles from './index.module.scss';
import { PacmanLoader } from 'react-spinners';

const LazyLoading: React.ComponentType<any> = function (props) {
  if (props.error) {
    return (
      <div>
        加载失败! <button onClick={props.retry}>重新加载</button>
      </div>
    );
  }
  return (
    <div className={styles.loadingBox}>
      {/* TODO theme color pacman size */}
      <PacmanLoader />
    </div>
  );
};

export default LazyLoading;
