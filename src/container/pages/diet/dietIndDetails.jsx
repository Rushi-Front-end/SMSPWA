import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Loader from '../loader/loader';

const DietIndDetails = ({ selectedDay }) => {
    const [dietData, setDietData] = useState({});
    const [spinner, setSpinner] = useState(false);

    const getDietList = () => {
        setSpinner(true);
        axios.get('https://sms-webapi-hthkcnfhfrdcdyhv.eastus-01.azurewebsites.net/api/DietPlan/GetAllDietPlan')
            .then(res => {
                if (res.status === 200 && Array.isArray(res.data)) {
                    const groupedData = groupByDay(res.data);
                    setDietData(groupedData);
                } else {
                    setDietData({});
                }
                setSpinner(false);
            })
            .catch(err => {
                console.log(err);
                setSpinner(false);
            });
    };

    useEffect(() => {
        getDietList();
    }, []);

    // Function to group data by day of the week
    const groupByDay = (data) => {
        return data.reduce((acc, item) => {
            const day = item.dayOfWeek; // Assuming 'dayOfWeek' is the field in your data
            if (!acc[day]) {
                acc[day] = [];
            }
            acc[day].push(item);
            return acc;
        }, {});
    };

    return (
        <div>
            {spinner ? (
                <Loader />
            ) : (
                <>
                    {dietData[selectedDay] && dietData[selectedDay].length > 0 ? (
                        <div className="timetable-deatils-wrapper">
                            <h2 className="text-center">{selectedDay}</h2>
                            <div className="table-responsive pt-2">
                                <table className="table whitespace-nowrap table-sm min-w-full">
                                    <thead>
                                        <tr className="border-b border-defaultborder">
                                            <th scope="col" className="text-start">Type</th>
                                            <th scope="col" className="text-start">Time</th>
                                            <th scope="col" className="text-start">Menu</th>
                                            <th scope="col" className="text-start">Total Calories <br /> (Kcal)</th>
                                            {/* <th scope="col" className="text-start">Created By</th>
                                            <th scope="col" className="text-start">Created At</th> */}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {dietData[selectedDay].map((dt, i) => (
                                            <tr className="border-b border-defaultborder" key={i}>
                                                <td>{dt.mealType}</td>
                                                <td>{dt.time || '8am-10am'}</td>
                                                <td>{dt.menuItems}</td>
                                                <td>{dt.totalCalories}</td>
                                                {/* <td>{dt.createdBy || 'John Smith'}</td>
                                                <td>{dt.createdAt}</td> */}
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    ) : (
                        <div>
                            <h3 className='text-center'>No Data available for {selectedDay}.</h3>
                        </div>
                    )}
                </>
            )}
        </div>
    );
};

export default DietIndDetails;
