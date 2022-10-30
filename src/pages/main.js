import React from 'react';
//import Description  from "./TitleDesc";
import SearchComponent from '../components/SearchComponent';
import { Divider } from 'antd';

const Main = () => (
  <>
    <Divider orientation='center'>Search users</Divider>
    <SearchComponent />
  </>
);

export default Main;
