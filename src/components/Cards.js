import React, { useState } from 'react';
import { singleGist } from '../shared/apiConfig';
import { Card, Button, Tag, Divider, Typography } from 'antd';
import ForksComponent from './ForksComponent';
import FileComponent from './FileComponent';

const { Title } = Typography;

export const Cards = (gistData) => {
  const allData = gistData.gistData;
  const files = allData.files;
  const fileArr = [];
  for (let file in files) {
    let language = files[file].language;
    if (fileArr.indexOf(language) === -1) {
      fileArr.push(language);
    }
  }

  const noOfFiles = Object.keys(files).length;

  const [data, setData] = useState([]);
  const [show, setShow] = useState(false);

  const moreOpen = async (value) => {
    if (value !== '') {
      try {
        const URL = singleGist(value);
        const res = await fetch(URL);
        const data = await res.json();
        setData(data);
        setShow(true);
      } catch (e) {
        console.log(e);
        setShow(false);
      }
    }
  };
  return (
    <div>
      <Card
        style={{ marginBottom: 30 }}
        title={allData.description || 'No Description'}
      >
        <Title level={4}>
          {noOfFiles} {noOfFiles > 1 ? 'Files' : 'File'}
        </Title>

        <div>
          {fileArr.map((language, index) => {
            return (
              <Tag color='geekblue' key={index}>
                {language}
              </Tag>
            );
          })}
        </div>

        <FileComponent filelist={files} />

        {show && data !== [] ? <ForksComponent forks={data} /> : null}
        <Button
          style={{ float: 'right', marginTop: 20 }}
          type='primary'
          onClick={() => moreOpen(`/${allData.id}`)}
        >
          More
        </Button>
      </Card>
      <Divider dashed />
    </div>
  );
};
