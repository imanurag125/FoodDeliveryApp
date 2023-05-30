import { useState, useEffect, useReducer } from "react";
import { swiggyUrl } from "../config";
const useDisplayRestrauntName = (updateSearchList) => {
  const [restrauntData, setRestrauntData] = useState([]);

  useEffect(() => {
    getRestrauntData(swiggyUrl);
  }, []);

  async function getRestrauntData(swiggyUrl) {
    try {
      const fetchedData = await fetch(swiggyUrl);

      const result = await fetchedData.json();

      setRestrauntData(result?.data?.cards[2]?.data?.data?.cards);
      updateSearchList(result?.data?.cards[2]?.data?.data?.cards);
    } catch {
      setRestrauntData([]);
      updateSearchList([]);
    }
    // setSearchedList(result?.data?.cards[2]?.data?.data?.cards);
  }

  return restrauntData;
};

export default useDisplayRestrauntName;
