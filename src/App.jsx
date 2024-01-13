import React from "react";
import axios from "axios";

import { useEffect, useState } from "react";

export default function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      const res = await axios.get(
        "https://data.malariaapitracker.com/data/smsussd/6"
      );
      setLoading(false);
      setData(res.data);
      console.log(data);
    };
    getData();
  }, []);

  return (
    <div className=" min-h-screen grid place-content-center">
      <h1 className="  text-center pt-20 text-3xl">
        {" "}
        Data fetching from the api
      </h1>
      <table className=" mt-10">
        <tr>
          <th>Phone</th>
          <th>Date</th>
          <th>Type</th>
          <th>Village_Gender</th>
          <th>Patient_age</th>
          <th>Pregnant</th>
          <th>Patient_Weight</th>
          <th>Type_of_disease</th>
        </tr>
        {data.map((item, index) => (
          <tr key={index}>
            {loading ? (
              <div className="text-center">Loading .....</div>
            ) : (
              <>
                <td>{item.Phone}</td>
                <td>{item.Date}</td>
                <td>{item.Type}</td>
                <td>{item.Patient_Gender}</td>
                <td>{item.Patient_Age}</td>
                <td>{item.Pregnant}</td>
                <td>{item.Patient_Weight}</td>
                <td>{item.Type_of_disease}</td>
              </>
            )}
          </tr>
        ))}
      </table>
    </div>
  );
}
