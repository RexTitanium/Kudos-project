import React, { useState, useEffect } from "react";
import axios from "../request/axios";
import SatCard from "./SatCard";

function Row({ fetchUrl }) {
  const [sats, setSats] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setSats(request.data);
      return request;
    }

    fetchData();
  }, [fetchUrl]);
  return (
    <div className="row">
      <SatCard sats={sats} />
    </div>
  );
}

export default Row;

/*const data = requests.map((request) => {
    const addData = request.year ? value : request.valid;
    if (request.cleared !== true) {
      filter = filter + request.fetchUrl + addData;
    }
    return filter;
  });*/
