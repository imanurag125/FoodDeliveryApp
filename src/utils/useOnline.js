import { useState, useEffect } from "react";

const useOnline = () => {
  const [isOnline, setIsOnline] = useState(true);
  useEffect(() => {
    function handleOnline() {
      setIsOnline(true);
    }

    function handleOfline() {
      setIsOnline(false);
    }
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOfline);

    return () => {
      window.removeEventListener("offline", handleOfline);
      window.removeEventListener("online", handleOnline);
    };
  }, []);
  // console.log("JJJJ", isOnline);
  return isOnline;
};
export default useOnline;
/* */
