import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  BarElement,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line, Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  BarElement,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
    plugins : {
        legend : {
            display : false
        }
    },
    scales : {
        y : {
            ticks : {
                display : false
            }
        },
        x : {
            grid : {
                display : false
            }
        }
    }
}


export function Chart({chartType, dataLine, dataBar}) {

    const renderedBarChart = dataBar ? dataBar.map(((dataset, index) => {
        return <div key={index} className='bar-chart-wrapper'>
                    <Bar options={options} data={dataset} className='bar-chart' />
                </div>
    })) :  null

  return (
    <>
        {chartType === "line" &&  <div className='line-chart-card'>
            {<Line options={options} data={dataLine} className='line-chart' />}

            <div className='line-chart-content'>
                <h4>Doctors Booking Performance</h4>
                <hr></hr>
                <p>Performance until the month of July 2023</p>
            </div>
        </div>}

        {
            chartType === "bar" && <div>{renderedBarChart}</div>
        }
        
    </>
  )
}