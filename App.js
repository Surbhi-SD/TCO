import React from "react";
import { Line } from "react-chartjs-2";
import { Bar } from "react-chartjs-2";
import {
    Chart as ChartJS,
    LineElement,
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
    LineElement,
    BarElement,
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

const data1 = {
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

const options1 = {
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

  const LineChart = () => {
    return(
        <div id = 'lineChart'  style={
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

  const BarChart = () => {
    return (
        <div id = 'barChart' style={
            {
            width: '600px',
            height: '1200px',
            marginTop: '100px'
            }
        }>
      <Bar
      data = {data1}
      options = {options1}
      ></Bar>
      <button className="btn">Close</button>
      </div>
    )
  }

  
    return (
        <div>
        <LineChart />
        <BarChart />   
        </div>
    )
}


export default App;
