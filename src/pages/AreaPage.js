import React, { useEffect, useState } from "react";

import { filterByArea } from "../http-requests/http-requests";

const AreaPage = () => {
  const [data, setData] = useState(null);
  const fetchData = async () => {
    const data = await filterByArea();
    setData(data);
  };

  console.log(data);

  useEffect(() => {
    fetchData();
  }, []);

  return <div>AreaPage</div>;
};

export default AreaPage;
