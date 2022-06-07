import React, { useState } from 'react';
import { Row, Col } from 'antd';
import Banner from './components/Banner';
import UploadCard from './components/UploadCard';
import styles from './index.module.scss';

const Upload: React.FC = () => {
  const [modelIsReady, setModelIsReady] = useState<boolean>(false)
  const [dataIsReady, setDataIsReady] = useState<boolean>(false)

  return (
    <Row className={styles.upload}>
      <Col span={7}>
        <div className={styles['upload-container']}>
          <div className={styles['upload-container-card']}>
            <UploadCard content={'上传模型'} setIsReady={setModelIsReady} />
          </div>
        </div>
      </Col>
      <Col className={styles.banner} span={10}>
        <Banner allReady={modelIsReady && dataIsReady} />
      </Col>
      <Col span={7}>
        <div className={styles['upload-container']}>
          <div className={styles['upload-container-card']}>
            <UploadCard content={'上传数据'} setIsReady={setDataIsReady} />
          </div>
        </div>
      </Col>
    </Row>
  )
};

export default Upload;