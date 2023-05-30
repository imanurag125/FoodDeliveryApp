import { useState, useEffect } from "react";
import axios from "axios";
import { FETCH_MENU_URL } from "../config";
const useRestrauntMenu = (id) => {
  const [restrauntDetail, setRestrauntDetail] = useState(null);

  useEffect(() => {
    console.log("Inside Menu Use Effect");
    callRestrauntDetailAPI(FETCH_MENU_URL + id);
  }, []);

  async function callRestrauntDetailAPI(url) {
    try {
      const data = await axios.get(url);
      // console.log(data?.data?.data.cards);
      setRestrauntDetail(data?.data?.data.cards);
    } catch {
      //restrauntDetail?.cards[0]?.card?.card?.info?
      console.log("Error calling");
    }
    // console.log(data.data);
  }
  return restrauntDetail;
};

export default useRestrauntMenu;
