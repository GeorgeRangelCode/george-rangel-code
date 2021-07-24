import { useState, useEffect } from "react";
const api =
  "https://raw.githubusercontent.com/GeorgeRangelCode/george-rangel-code/main/src/data/data.json";

const useGetData = () => {
  const [mydata, setData] = useState([]);

  useEffect(() => {
    fetch(api)
      .then((response) => response.json())
      .then((data) => setData(data.data));
  }, []);

  return mydata;
};

export default useGetData;
