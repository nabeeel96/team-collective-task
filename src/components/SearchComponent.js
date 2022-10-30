import React, { useState } from 'react';
import { Input, Alert, Spin } from 'antd';
import { allGist } from '../shared/apiConfig';
import SearchResult from './SearchResult';

const { Search } = Input;

const SearchComponent = () => {
  const [username, setUsername] = useState(null);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSearch = async (username) => {
    const usersname = username.trim();
    setUsername(usersname);
    setLoading(true);
    if (usersname && usersname !== '') {
      try {
        const URL = allGist(username);
        const res = await fetch(URL);
        const data = await res.json();

        setData(data);
        setLoading(false);
        setError(false);
      } catch (e) {
        setLoading(false);
        setError(true);
      }
    } else if (usersname === '') {
      setLoading(false);
      setError(true);
    }
    setLoading(false);
  };

  return (
    <>
      <Search
        style={{ marginTop: 20 }}
        placeholder='Search by Username'
        allowClear
        enterButton='Search'
        size='medium'
        onSearch={handleSearch}
      />
      {username !== '' && data && !error ? (
        <SearchResult data={data} username={username} />
      ) : (
        ''
      )}
      {loading ? <Spin tip='Loading...' style={{ marginTop: 30 }} /> : ''}

      {username && data.length === 0 ? (
        <Alert
          message='Error'
          description='No data for this User'
          type='error'
          showIcon
          style={{ marginTop: 10 }}
        />
      ) : (
        ''
      )}

      {username === '' ? (
        <Alert
          message='Error'
          description='Please Enter Valid Username'
          type='error'
          showIcon
          style={{ marginTop: 10 }}
        />
      ) : (
        ''
      )}
    </>
  );
};

export default SearchComponent;
