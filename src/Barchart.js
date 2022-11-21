import React from "react";
import { Bar } from "react-chartjs-2";
import {
    Chart as ChartJS,
    BarElement,
    CategoryScale,  // x axis
    LinearScale, // y axis
    PointElement,
    Legend,
    Tooltip,
    Filler
} from 'chart.js';
import './App.css';


ChartJS.register(
    BarElement,
    CategoryScale,  
    LinearScale, 
    PointElement,
    Legend,
    Tooltip,
    Filler
)

function Barchart() {
    const data = {
        labels: ['1', '4', '7', '8', '12'],
        datasets: [{
            label:'BEV-Capex',
            data: [600000, 600000, 810000, 810000, 810000],
            backgroundColor: 'blue',
            stack: 'BEV'
            },
            {
                label: 'BEV-Opex',
                data: [34534, 138136, 241738, 276272, 414408],
                backgroundColor: 'orange',
                stack: 'BEV'
                },
           {
                label: 'BEV-Interest',
                data: [31727, 126908, 232589, 274816, 443724],
                backgroundColor: 'gray',
                stack: 'BEV'
                },
            {
                label: 'ICE-Capex',
                data: [500000, 500000, 500000, 500000,  500000],
                backgroundColor: 'black',
                stack: 'ICE'
            },
            {
                label: 'ICE-Opex',
                data: [74912, 299648, 524384, 599296, 898944],
                backgroundColor: 'yellow',
                stack: 'ICE'
            },
            {
                label: 'ICE-Interest',
                data: [28746, 114984, 201222, 229968, 344952],
                backgroundColor: 'aqua',
                stack: 'ICE'
            }
        ]
    }

    const options = {
        plugins: {
          legend: true
        },
        scales: {
          x: {
              title: {
                  display: true,
                  text: 'Years'
              },
              stacked: true
          },
          y: {
              title: {
                  display: true,
                  text: 'USD-($)'
              },
              stacked: true
          }
        }
      };

      const BarChart = () => {
        return (
            <div style={
                {
                width: '600px',
                height: '1200px',
                marginTop: '100px'
                }
            }>
          <Bar
          data = {data}
          options = {options}
          ></Bar>
          </div>
        )
      }

      return (
        <div>
        <BarChart />   
        </div>
    )
} 

export default Barchart;