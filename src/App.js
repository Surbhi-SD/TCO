import React from "react";
import { Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    LineElement,
    CategoryScale,  // x axis
    LinearScale, // y axis
    PointElement,
    Legend,
    Tooltip,
    Filler
} from 'chart.js';
import './App.css';


ChartJS.register(
    LineElement,
    CategoryScale,  
    LinearScale, 
    PointElement,
    Legend,
    Tooltip,
    Filler
)

function App() {
const data = {
    labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
    datasets: [{
        label: 'BEV',
        data: [666261, 732522, 798783, 865044, 931305, 997566, 1284327, 1361088, 1437849, 1514610, 1591371, 1668132],
        backgroundColor: 'rgba(190, 80, 120, 0.2)',
        borderColor: 'black',
        borderWidth: 1,
        pointBorderColor: 'aqua',
        fill: true,
        tension: 0.4
        },
        {
            label: 'ICE',
            data: [603658, 707316, 810974, 914632, 1018290, 1121948, 1225606, 1329264, 1432922, 1536580, 1640238, 1743896],
            backgroundColor: 'rgba(72 122 180 / .2)',
            borderColor: 'gray',
            borderWidth: 1,
            pointBorderColor: 'blue',
            fill: true,
            tension: 0.4
            }
    ]
};



const options = {
  plugins: {
    legend: true
  },
  scales: {
    x: {
        title: {
            display: true,
            text: 'Years'
        }
    },
    y: {
        title: {
            display: true,
            text: 'TCO ($)'
        }
    }
  }
};

  const LineChart = () => {
    return(
        <div style={
            {
            width: '600px',
            height: '300px'
            }
        }>
      <Line
      data = {data}
      options = {options}
      
      ></Line>
      </div>
    )
  }

 
  
    return (
        <div>
        <LineChart />
        </div>
    )
}


export default App;
