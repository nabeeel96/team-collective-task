import React from "react";
import { Alert } from "antd";
import { Cards } from "./Cards";

const SearchResult = (data, username) => {
  const gistData = data?.data;
  return (
    <>
      {username !== null && gistData.length !== 0 ? (
        <>
          <Alert
            message={`${data?.username}'s gists`}
            description={`${gistData?.length} Gists found`}
            type="success"
            showIcon
            style={{ marginTop: 20, marginBottom: 20 }}
          />
          <ul>
            {gistData && gistData.map((val, ind) => {
              return <Cards key={val?.id} gistData={val} />;
            })}
          </ul>
        </>
      ) : null}
    </>
  );
};
export default SearchResult