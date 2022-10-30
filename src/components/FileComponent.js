import React from 'react';
import { Typography } from 'antd';

const { Title } = Typography;

const FileComponent = (filelist) => {
  const files = filelist.filelist;
  return (
    <div style={{ marginTop: 30 }}>
      <Title level={4}>All files:</Title>
      <ul>
        {Object.values(files).map((file, index) => {
          return (
            <li key={index}>
              <a href={file.raw_url} target='_blank' rel='noreferrer'>
                {file.filename}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FileComponent;
