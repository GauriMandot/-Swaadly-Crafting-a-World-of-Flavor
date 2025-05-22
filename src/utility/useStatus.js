import { useState, useEffect } from "react";

const useStatus=()=>{
    const [status, setStatus] = useState(true); 

    function getStatus() {
      window.addEventListener("offline", () => {
        setStatus(false);
      });
  
      window.addEventListener("online", () => {
        setStatus(true);
      });
     
    }
  
    useEffect(() => {
      getStatus();
    }, []);

    return status;
  
}

export default useStatus;