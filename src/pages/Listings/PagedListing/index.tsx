import React, { useState, useEffect } from 'react';

const PagedResultsPage = () => {
  const [data, setData] = useState([]);
  const [pageInfo, setPageInfo] = useState({
    pageIndex: 1,
    pageSize: 10,
    totalCount: 0,
    totalPages: 0,
    hasNextPage: false,
  });

  useEffect(() => {
    fetchData();
  }, []);


  const handleNextPage = () => {
    setPageInfo((prevPageInfo) => ({
      ...prevPageInfo,
      pageIndex: prevPageInfo.pageIndex + 1,
    }));
  };

  const handlePreviousPage = () => {
    setPageInfo((prevPageInfo) => ({
      ...prevPageInfo,
      pageIndex: prevPageInfo.pageIndex - 1,
    }));
  };

  return (
    <div>
      <h1>Paged Results</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{/* Renderize seus dados aqui */}</li>
        ))}
      </ul>
      <div>
        <button onClick={handlePreviousPage} disabled={pageInfo.pageIndex === 1}>
          Previous
        </button>
        <button onClick={handleNextPage} disabled={!pageInfo.hasNextPage}>
          Next
        </button>
      </div>
    </div>
  );
};

export default PagedResultsPage;
