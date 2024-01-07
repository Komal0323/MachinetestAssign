import React, { useEffect, useRef } from "react";
import "./Dashboard.css";
import Chart from 'chart.js/auto';



const Dashboard = () => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(()=>{
    if (chartInstance.current){
      chartInstance.current.destroy();
    }
    const myChartRef = chartRef.current.getContext("2d");

    chartInstance.current = new Chart(myChartRef,{
      type:'doughnut',
      data:{
        labels:[
          'Male',
          'Female',
          'Unknown'
        ],
        datasets:[{
          data:[40,35,25],
          backgroundColor:[
            '#2F4F4F',
            '#1E90FF',
            '#FF8C00'
          ],
        }
          
        ],
        
      }
    });
    return()=>{
      if(chartInstance.current){
        chartInstance.current.destroy();
      }
    }
  },[]);
  return (
    <div className="dashboard">
      <div className="section">
        <div className="table-items">
          <table className="data" rules="rows">
            <thead>
              <tr>
                <th colspan="5" className="head">
                  Ad Insights
                  <span>
                    <i className="fa-regular fa-circle-question"></i>
                  </span>
                </th>
              </tr>
            </thead>
            <tr className="updown">
              <th>
                Campaigns<i class="angl fa-solid fa-angle-down"></i>
              </th>
              
              <th>
                Clicks<i class="angl fa-solid fa-angle-down"></i>
              </th>
              <th>
                Cost<i class="angl fa-solid fa-angle-down"></i>
              </th>
              <th>
                Conversions<i class="angl fa-solid fa-angle-down"></i>
              </th>
              <th>Revenue</th>
            </tr>
            <tr>
              <td>Cosmetics</td>
              <td>712</td>
              <td>USD 4,272</td>
              <td>8</td>
              <td>USD 16,568</td>
            </tr>

            <tr>
              <td>Serums</td>
              <td>3,961</td>
              <td>USD 27,331</td>
              <td>115</td>
              <td>USD 362,526</td>
            </tr>

            <tr>
              <td>Facewash</td>
              <td>9,462</td>
              <td>USD 76,831</td>
              <td>123</td>
              <td>USD 226,800</td>
            </tr>

            <tr>
              <td>Shampoos</td>
              <td>439</td>
              <td>USD 2,151</td>
              <td>5</td>
              <td>USD 11,029</td>
            </tr>

            <tr>
              <td>Conditioners</td>
              <td>1,680</td>
              <td>USD 3,864</td>
              <td>49</td>
              <td>USD 175,245</td>
            </tr>

            <tr>
              <td>Facewash 2</td>
              <td>4,978</td>
              <td>USD 29,370</td>
              <td>189</td>
              <td>USD 623,106</td>
            </tr>

            <tr>
              <td>Total</td>
              <td>26,510</td>
              <td>USD 1,43,819</td>
              <td>489</td>
              <td>USD 15,73,563</td>
            </tr>
          </table>
        </div>
        <div className="chart">
          <table className="data" rules="rows">
            <thead>
              <tr>
                <th colspan="5" className="head">
                  Ad Insights
                  <select name="clicks" id="clicks">
                    <option value="volvo">Clicks</option>
                    <option value="saab">1</option>
                    <option value="opel">2</option>
                    <option value="audi">3</option>
                  </select>
                  <span>
                    <i className="fa-regular fa-circle-question"></i>
                  </span>
                </th>
              </tr>
            </thead>
            <tr>
              <td>
              
              </td>
            </tr>
          </table>
        </div>
      </div>
      <canvas id="can" ref={chartRef} />
    </div>
  );
};

export default Dashboard;
