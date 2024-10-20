
import axios from 'axios';
import { Chart, ArcElement, Tooltip, Legend, registerables } from 'chart.js';
import { useEffect, useState } from 'react';

import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Line, Bar, Doughnut,} from 'react-chartjs-2';
import { useSchoolId } from '../../../components/common/context/idContext';
import { useDashId } from '../../../components/common/context/allDashIdContext';
Chart.register(...registerables, ArcElement, Tooltip, Legend, ChartDataLabels);
//  LineChart
Chart.defaults.borderColor = "rgba(142, 156, 173,0.1)", Chart.defaults.color = "#8c9097";
const Option1 = {
  responsive: true,
  maintainAspectRatio: false,
  layout: {
    padding: {
      top: 20,  // Adjust this value to give more space at the top
      bottom: 20,
      left: 20,
      right: 20,
    },

  },
  plugins: {
    legend: {
      display: true,
       position:'bottom'
    },
    datalabels: {
      // Enable the data labels plugin
      anchor: 'end',  // Position the label at the end of the bar (top)
      align: 'end',   // Align the label at the top of the bar
      color: '#000',  // Color of the text
      font: {
        weight: 'bold',
      },
      formatter: (value) => {
        return Math.round(value)+ '%';  // Round the value to the nearest whole number
      },
    },
  },
  scales: {
    y: {
      beginAtZero: true
    }
  }
};

const aggregateData = (examData) => {
  const aggregated = examData.reduce((acc, item) => {
    if (!acc[item.month]) {
      acc[item.month] = { totalPassed: 0, totalFailed: 0, totalAppeared: 0 };
    }
    acc[item.month].totalPassed += item.totalPassedStudent;
    acc[item.month].totalFailed += item.totalFailedStudent;
    acc[item.month].totalAppeared += item.totalAppearedStudent;
    return acc;
  }, {});

  return {
    labels: Object.keys(aggregated),
    datasets: [
      {
        label: 'Percentage of Passed Students',
        backgroundColor: 'rgba(132, 90, 223, 0.5)',
        borderColor: 'rgb(132, 90, 223)',
        data: Object.values(aggregated).map(item => 
          item.totalAppeared > 0 ? Math.round((item.totalPassed / item.totalAppeared) * 100) : 0
        ),
      },
      {
        label: 'Percentage of Failed Students',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        borderColor: 'rgb(255, 99, 132)',
        data: Object.values(aggregated).map(item => 
          item.totalAppeared > 0 ? Math.round((item.totalFailed / item.totalAppeared) * 100) : 0
        ),
      },
      // {
      //   label: 'Total Appeared Students',
      //   backgroundColor: 'rgba(54, 162, 235, 0.5)',
      //   borderColor: 'rgb(54, 162, 235)',
      //   data: Object.values(aggregated).map(item => item.totalAppeared),
      // }
    ]
  };
};

const Data1 = (examData) => {
  const { labels, datasets } = aggregateData(examData);
  return { labels, datasets };
};

export function Chartjsline() {
  const {id: schoolId} = useSchoolId();
  const {dashId: dashIDAll} = useDashId();
  const {dashIdCheck: dashIDCheckAll} = useDashId();
  const [examData, setExamData] = useState([]);

  useEffect(() => {
    console.log(dashIDAll,'dashIDCheckAll')
    const fetchExamData = async () => {
      try {
        let dashURL;
        if (dashIDCheckAll) {
          dashURL = axios.post(`https://sms-webapi-hthkcnfhfrdcdyhv.eastus-01.azurewebsites.net/api/DashBoard/GetDashboardExamResultGraph`,{
            schoolId:dashIDAll

          });
        } else {
          dashURL = axios.post(`https://sms-webapi-hthkcnfhfrdcdyhv.eastus-01.azurewebsites.net/api/DashBoard/GetDashboardExamResultGraph`,{
            schoolId:JSON.stringify(schoolId)
          });
        }
  
        const response = await dashURL; // Use axios to fetch data
        const data = response.data; // Axios automatically parses JSON
        setExamData(data);
        console.log(data);
      } catch (error) {
        console.error('Error fetching student data:', error);
      }
    };
    fetchExamData();
  }, [schoolId, dashIDCheckAll]);

  // if (!examData.length) {
  //   return <div>Loading...</div>;
  // }

  return <Bar options={Option1} data={Data1(examData)} height={300} />;
}


//  Barchart
const Option2 = {

  responsive: true,
  maintainAspectRatio: false,
  layout: {
    padding: {
      top: 30,  // Adjust this value to give more space at the top
      bottom: 20,
      left: 20,
      right: 20,
    },

  },
  plugins: {
    legend: {
      display: true,
       position:'bottom'
    },
    datalabels: {
      // Enable the data labels plugin
      anchor: 'end',  // Position the label at the end of the bar (top)
      align: 'end',   // Align the label at the top of the bar
      color: '#000',  // Color of the text
      font: {
        weight: 'bold',
      },
      formatter: (value) => {
        return Math.round(value);  // Round the value to the nearest whole number
      },
    },
  },
  scales: {
    y: {
      beginAtZero: true
    }
  }
};


export function Chartjsbar() {
  const {id: schoolId} = useSchoolId();
  const {dashId: dashIDAll} = useDashId();
  const {dashIdCheck: dashIDCheckAll} = useDashId();
  const [data, setData] = useState({
    labels: [],
    datasets: [
      {
        label: 'Sickness',
        data: [],
        backgroundColor: 'rgba(132, 90, 223, 0.2)',
        borderColor: 'rgb(132, 90, 223)',
        borderWidth: 1,
      },
    ],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        let dashURL;
        if (dashIDCheckAll) {
          dashURL = axios.post(`https://sms-webapi-hthkcnfhfrdcdyhv.eastus-01.azurewebsites.net/api/DashBoard/GetDashboardSickStudentGraph`,{
            schoolId:dashIDAll
          });
        } else {
          dashURL = axios.post(`https://sms-webapi-hthkcnfhfrdcdyhv.eastus-01.azurewebsites.net/api/DashBoard/GetDashboardSickStudentGraph`,{
              schoolId:JSON.stringify(schoolId)
          });
        }
  
        const response = await dashURL;
        console.log('API Response:', response.data); // Log the response

        const apiData = response.data;

        const labels = apiData.map(item => `${item.month} ${item.year}`);
        const values = apiData.map(item => parseInt(item.totalSickStudent, 10) || 0); // Handle non-integer values

        setData({
          labels: labels,
          datasets: [{
            label: 'Sickness',
            data: values,
            backgroundColor: 'rgba(132, 90, 223, 0.2)',
            borderColor: 'rgb(132, 90, 223)',
            borderWidth: 1,
          }],
        });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [schoolId, dashIDCheckAll]);

  return <Bar options={Option2} data={data} height='300px' />;
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
    datalabels: {  // Add this section
      color: '#000',  // Set text color to white
      // anchor: 'end',
      // align: 'end',
      formatter: (value, context) => {
        return value !== 0 ? value : ''; // Avoid showing labels for zero values
      }
    },
  },
};

const Data4 = (studentData) => ({
  type: 'donut',
  labels: [ 'Present', 'Absent'],
  datasets: [{
    label: 'Student',
     data: [
      //studentData.totalStudent, 
      studentData.presentCount, studentData.absentCount],
    //data: ['100', '80', '15'],
    backgroundColor: [
      'rgb(132, 90, 223)',
      'rgb(35, 183, 229)',
      'rgb(255, 99, 132)', // Updated to a valid color
    ],
    hoverOffset: 1,
  }],
});

export function Chartjsdonut() {

  const [studentData, setStudentData] = useState(null);
  const {id: schoolId} = useSchoolId();
  const {dashId: dashIDAll} = useDashId();
  const {dashIdCheck: dashIDCheckAll} = useDashId();

  useEffect(() => {
    const fetchStudentData = async () => {
      try {

        let dashURL;
        if (dashIDCheckAll) {
          dashURL = axios.post(`https://sms-webapi-hthkcnfhfrdcdyhv.eastus-01.azurewebsites.net/api/DashBoard/GetSttudentAttendanceGraph`,{
            schoolId:dashIDAll
          });
        } else {
          dashURL = axios.post(`https://sms-webapi-hthkcnfhfrdcdyhv.eastus-01.azurewebsites.net/api/DashBoard/GetSttudentAttendanceGraph`,{
            schoolId:JSON.stringify(schoolId)
          });
        }
        const response = await dashURL; // Replace with your API URL
        const data = response.data;
        setStudentData(data);
      } catch (error) {
        console.error('Error fetching student data:', error);
      }
    };

    fetchStudentData();
  }, [schoolId, dashIDCheckAll]);

  // Show a loading state while data is being fetched
  if (!studentData) {
    return <div>Loading...</div>;
  }
  

  return <Doughnut options={Option4} data={Data4(studentData)} height='300px' />;
}
//donut
const OptionStaff = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: true,
      position: 'bottom',
    },
    datalabels: {  // Add this section
      color: '#000',  // Set text color to white
      // anchor: 'end',
      // align: 'end',
      formatter: (value, context) => {
        return value !== 0 ? value : ''; // Avoid showing labels for zero values
      }
    },
  },
};

const Data5 = (staffData) => ({
  labels: [ 'Present', 'Absent'],
  datasets: [{
    label: 'Staff',
    data: [
      // staffData.totalStaff || 0,
      staffData.presentCount || 0,
      staffData.absentCount || 0,
    ],
    backgroundColor: [
      'rgb(132, 90, 223)',
      'rgb(35, 183, 229)',
      'rgb(255, 99, 132)',
    ],
    hoverOffset: 1,
  }],
});

export function Chartjsdonut1() {
  const [staffData, setStaffData] = useState(null);
  const { id: schoolId } = useSchoolId();
  const { dashId: dashIDAll } = useDashId();
  const { dashIdCheck: dashIDCheckAll } = useDashId();

  useEffect(() => {
    const fetchStaffData = async () => {
      try {
        const dashURL = dashIDCheckAll
          ? axios.post('https://sms-webapi-hthkcnfhfrdcdyhv.eastus-01.azurewebsites.net/api/DashBoard/GetStaffAttendanceGraph', { schoolId: dashIDAll })
          : axios.post('https://sms-webapi-hthkcnfhfrdcdyhv.eastus-01.azurewebsites.net/api/DashBoard/GetStaffAttendanceGraph', { schoolId: JSON.stringify(schoolId) });

        const response = await dashURL;
        const data = response.data;
        console.log('Staff Data:', data); // Check here for correct values
        setStaffData(data);
      } catch (error) {
        console.error('Error fetching staff data:', error);
      }
    };

    fetchStaffData();
  }, [schoolId, dashIDCheckAll]);

  if (!staffData) {
    return <div>Loading...</div>;
  }

  return <Doughnut options={OptionStaff} data={Data5(staffData)} height='300px' />;
}

// line chart expense
const optionExpense = {

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

export function ChartjsbarExpense() {
  const {id: schoolId} = useSchoolId();
  const {dashId: dashIDAll} = useDashId();
  const {dashIdCheck: dashIDCheckAll} = useDashId();
  const [data, setData] = useState({
    labels: [],
    datasets: [
      {
        label: 'Total Amount',
        data: [],
        backgroundColor: 'rgba(132, 90, 223, 0.2)',
        borderColor: 'rgb(132, 90, 223)',
        borderWidth: 1,
      },
    ],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {

        let dashURL;
        if (dashIDCheckAll) {
          dashURL = axios.post(`https://sms-webapi-hthkcnfhfrdcdyhv.eastus-01.azurewebsites.net/api/DashBoard/GetDashboardExpenseGraph`,{
            schoolId:dashIDAll

          });
        } else {
          dashURL = axios.post(`https://sms-webapi-hthkcnfhfrdcdyhv.eastus-01.azurewebsites.net/api/DashBoard/GetDashboardExpenseGraph`,{
            schoolId:JSON.stringify(schoolId)

          });
        }
        

        const response = await dashURL; // Replace with your API URL
        const apiData = response.data;

        // Aggregate amounts by month
        const aggregatedData = apiData.reduce((acc, curr) => {
          const { month, totalAmount } = curr;
          acc[month] = (acc[month] || 0) + totalAmount;
          return acc;
        }, {});

        const labels = Object.keys(aggregatedData);
        const values = Object.values(aggregatedData);

        setData({
          labels: labels,
          datasets: [{
            label: 'Total Amount',
            data: values,
            backgroundColor: 'rgba(132, 90, 223, 0.2)',
            borderColor: 'rgb(132, 90, 223)',
            borderWidth: 1,
          }],
        });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [schoolId, dashIDCheckAll]);

  return <Bar options={optionExpense} data={data} height='300px' />;
}
