
import { Chart, ArcElement, Tooltip, Legend, registerables } from 'chart.js';
import { Line, Bar, Doughnut,} from 'react-chartjs-2';
Chart.register(...registerables, ArcElement, Tooltip, Legend);

//  LineChart
Chart.defaults.borderColor = "rgba(142, 156, 173,0.1)", Chart.defaults.color = "#8c9097";
const Option1 = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: true,
      position:'bottom'
    },
  },
  cutout: 90,
};
const Data1 = {
  type: 'line',
  labels: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
  ],
  datasets: [{
    label: 'Exams Result',
    backgroundColor: 'rgb(132, 90, 223)',
    borderColor: 'rgb(132, 90, 223)',
    data: [0, 10, 5, 2, 20, 30, 45],
  }]
};
export function Chartjsline() {
  return <Line options={Option1} data={Data1} height='300px' />;
}

//  Barchart
const Option2 = {

  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: true,
       position:'bottom'
    },
  },
  scales: {
    y: {
      beginAtZero: true
    }
  }
};
const Data2 = {
  type: 'bar',
  labels: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
  ],
  datasets: [{
    label: 'Sickness',
    data: [65, 59, 80, 81, 56, 55, 40],
    backgroundColor: [
      'rgba(132, 90, 223, 0.2)',
      'rgba(35, 183, 229, 0.2)',
      'rgba(245, 184, 73, 0.2)',
      'rgba(73, 182, 245, 0.2)',
      'rgba(230, 83, 60, 0.2)',
      'rgba(38, 191, 148, 0.2)',
      'rgba(35, 35, 35, 0.2)'
    ],
    borderColor: [
      'rgb(132, 90, 223)',
      'rgb(35, 183, 229)',
      'rgb(245, 184, 73)',
      'rgb(73, 182, 245)',
      'rgb(230, 83, 60)',
      'rgb(38, 191, 148)',
      'rgb(35, 35, 35)'
    ],
    borderWidth: 1
  }]
};
export function Chartjsbar() {
  return <Bar options={Option2} data={Data2} height='300px' />;
}

//donut
const Option4 = {

  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: true,
       position:'bottom'
    },
  },
};
const Data4 = {
  type: 'donut',
  labels: [
    'Female',
    'Male',
    
  ],
  datasets: [{
    label: 'Student',
    data: [300, 200],
    backgroundColor: [
      'rgb(132, 90, 223)',
      'rgb(35, 183, 229)',
     
    ],
    hoverOffset: 1
  }]
};
export function Chartjsdonut() {
  return <Doughnut options={Option4} data={Data4} height='300px' />;
}

