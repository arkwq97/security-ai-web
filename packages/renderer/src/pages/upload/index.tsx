import React from 'react';
import { Row, Col } from 'antd';
import Banner from './components/Banner';
import UploadBtn from './components/UploadBtn';
import styles from './index.module.scss';

const Upload: React.FC = () => {
  return (
    <Row className={styles.upload}>
      <Col span={7}>
        <div className={styles['upload-card']}>
          <div className={styles['upload-btn']}>
            <UploadBtn />
          </div>
        </div>
      </Col>
      <Col className={styles.banner} span={10}>
        <Banner />
      </Col>
      <Col span={7}>
        <div className={styles['upload-card']}>
          <div className={styles['upload-btn']}>
            <UploadBtn />
          </div>
        </div>
      </Col>
    </Row>
  )
};

export default Upload;