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
     
    </div>
  );
};

export default PagedResultsPage;
