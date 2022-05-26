import React from 'react';
import { Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import styles from './index.module.scss';

const UploadBtn: React.FC = () => {
  return (
    <Button className={styles['upload-btn']} type="primary" icon={<UploadOutlined />} size='large'>
      Upload
    </Button>
  )
};

export default UploadBtn;