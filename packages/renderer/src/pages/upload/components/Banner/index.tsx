import React from 'react';
import { Button } from 'antd';
import styles from './index.module.scss';

const Banner: React.FC = () => {
  return (
    <div className={styles.banner}>
      <div>shieldImg</div>
      <Button>开始分析</Button>
    </div>
  )
};

export default Banner;