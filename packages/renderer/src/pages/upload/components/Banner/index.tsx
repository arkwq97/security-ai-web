import React from 'react';
import { Button, Tooltip } from 'antd';
import styles from './index.module.scss';

interface BannerProps {
  allReady: boolean
}

/**
 * 根据材料上传情况条件渲染分析按钮
 * @param allReady
 * @returns
 */
const readerBtn = (allReady: boolean): JSX.Element => {
  if(allReady) {
    return (<Button type='primary' size='large'>开始分析</Button>)
  } else {
    return (
      <Tooltip placement='top' title={'请先上传材料'}>
        <Button type='primary' size='large' disabled={true}>开始分析</Button>
      </Tooltip>
    )
  }
}

const Banner: React.FC<BannerProps> = ({allReady}) => {
  return (
    <div className={styles.banner}>
      <div className={styles['banner-img']}>
      </div>
      {readerBtn(allReady)}
    </div>
  )
};

export default Banner;