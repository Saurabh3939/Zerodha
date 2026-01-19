import React, { useEffect, useState } from "react";
import axios from "axios";
import { VerticalGraph } from "../VerticalGraph";

const Holdings = () => {
  const [allHoldings, setAllHoldings] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3002/allHoldings").then((res) => {
      console.log(res.data);
      setAllHoldings(res.data);
    });
  }, []);

  const labels = allHoldings.map((subArray) => subArray["name"]);

  const data = {
    labels,
    datasets: [
      {
        label: "Stock Price",
        data: allHoldings.map((stock) => stock.price),
        backgroundColor: "rgba(255,99,132,0.5)",
      },
    ],
  };

  return (
    <>
      <h3 className='title'>Holdings({allHoldings.length})</h3>

      <div className='order-table'>
        <table>
          <tr>
            <th>Instrument</th>
            <th>Qty.</th>
            <th>Avg. Cost</th>
            <th>LTP</th>
            <th>Curr. Val</th>
            <th>P&L</th>
            <th>Net Chg</th>
            <th>Day Chg</th>
          </tr>
          {allHoldings.map((stock, index) => {
            const curVal = stock.price * stock.qty;
            const isProfit = curVal - stock.avg * stock.qty >= 0.0;
            const profClass = isProfit ? "profit" : "loss";
            const dayClass = stock.isLoss ? "loss" : "profit";
            return (
              <tr key={index}>
                <td>{stock.name}</td>
                <td>{stock.qty}</td>
                <td>{stock.avg.toFixed(2)}</td>
                <td>{stock.price.toFixed(2)}</td>
                <td>{curVal.toFixed(2)}</td>
                <td>{(curVal - stock.avg * stock.qty).toFixed(2)}</td>
                <td className={profClass}>{stock.net}</td>
                <td className={dayClass}>{stock.day}</td>
              </tr>
            );
          })}
        </table>
      </div>
      <div className='row'>
        <div className='col'>
          <h5>
            29,875. <span>55</span>
          </h5>
          <p>Total Investment</p>
        </div>
        <div className='col'>
          <h5>
            31,428. <span>95</span>
          </h5>
          <p>Current Value</p>
        </div>
        <div className='col'>
          <h5>1,553.40 (+5.20%)</h5>
          <p>P&L</p>
        </div>
      </div>
      <VerticalGraph data={data} />
    </>
  );
};

export default Holdings;
