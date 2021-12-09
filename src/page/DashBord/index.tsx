import React from 'react';

import ACharts from '@/page/DashBord/components/ACharts';
import BCharts from '@/page/DashBord/components/BCharts';

import styles from './index.module.scss';

const DashBordPage: React.FC = () => {
  return (
    <div>
      <div className={styles.chartRow}>
        <div className={`${styles.aChart} ${styles.chartItem}`}>
          <BCharts />
        </div>
        <div className={`${styles.aChart} ${styles.chartItem}`}>
          <ACharts />
        </div>
      </div>
    </div>
  );
};

export default DashBordPage;
