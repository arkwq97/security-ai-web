import React, { useState } from 'react';
import { Button, Card } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import styles from './index.module.scss';

interface UploadCardProps {
  content: string
  setIsReady: Function
}

const UploadCard: React.FC<UploadCardProps> = ({content, setIsReady}) => {
  const [uploadFilePath, setUploadFilePath] = useState<String>('UpLoadFilePath');

  const isReady = () => {
    setIsReady(true)
  }

  return (
    <Card title={uploadFilePath} className='shadow-1-down'>
      <div className={styles['upload-card-body']}>
        <Button icon={<UploadOutlined />} onClick={isReady} size='middle'>
          {content}
        </Button>
      </div>
    </Card>
  )
};

export default UploadCard;