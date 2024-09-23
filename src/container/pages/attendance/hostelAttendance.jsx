import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Loader from '../loader/loader';
import DatePicker from 'react-datepicker';
import { toast } from 'react-toastify';
import { useSchoolId } from '../../../components/common/context/idContext';
import Select from 'react-select';


const getFormattedToday = () => {
    const today = new Date();
    const yyyy = today.getFullYear();
    let mm = today.getMonth() + 1; // Months start at 0!
    let dd = today.getDate();
    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;
    return dd + '/' + mm + '/' + yyyy;
};
const HostelAttendance = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [data, setData] = useState([]);
    const [spinner, setSpinner] = useState(false);
    const formattedToday = getFormattedToday();

    const [changedAttendance, setChangedAttendance] = useState(new Set())

    const {id: schoolId} = useSchoolId();


    const getHosteliteAttandance = () => {
        setSpinner(true);
        axios.get(`https://sms-webapi-hthkcnfhfrdcdyhv.eastus-01.azurewebsites.net/api/HostelAttendance/GetHostelattendanceBySearchFilter?schoolId=${schoolId}`)
            .then(res => {
                setData(res.data);
                setSpinner(false);
            })
            .catch(err => console.log(err));
    };
    useEffect(() => {
        getHosteliteAttandance();
    }, [schoolId]);

    
    const updateAttendanceData = (index) => {
        setChangedAttendance(prev => {
            let newValue = new Set([...prev])
            if(prev.has(index)) {
                newValue.delete(index)
            } else {
                newValue = new Set([...prev, index])
            }
            return newValue
        })
    }

    const handleCancel = (index) => {
        setChangedAttendance(prev => {
            let newValue = new Set([...prev])
            if(prev.has(index)) {
                newValue.delete(index)
            }
            return newValue
        })
    }

    const handleSingleSave = async (index) => {
        const status = (getStatus(data[index].inTime, data[index].outTime) === "Present")
        
        if(changedAttendance.has(index)) {
            await handleSave({status: !status, index: index})
        }
    }

    const handleSaveAll = async () => {
        for (const item of changedAttendance) {
            try {
              const response = await handleSingleSave(item);
              handleCancel(item)
            } catch (error) {
              console.error('Error making API call:', error);
            }
          }
    }


    const handleSave = async ({status, index}) => {
            // Ensure inTime and outTime are in the correct format (hh:mm:ss)
    let formattedInTime = ""
    let formattedOutTime = ""

    if(status) {
        formattedInTime = "10:00:00"
        formattedOutTime = "18:00:00"
    } else {
        formattedInTime = "00:00:00"
        formattedOutTime = "00:00:00"
    }

        await axios.put(`https://sms-webapi-hthkcnfhfrdcdyhv.eastus-01.azurewebsites.net/api/HostelAttendance?id=${data[index].id}`, {
            studentID: data[index].studentId,
            id: data[index].id,
            inTime: formattedInTime,
            outTime: formattedOutTime,
            attendanceDate: formattedToday,
            submittedBy: 0
        })
            .then((res) => {
                if(res.status === 200 || res.status === 204){
                getHosteliteAttandance();
                toast.success('Data updated successfully');
                }
            })
            .catch(err => console.log(err));
    };

    const getStatus = (inTime, outTime) => {
        return ((inTime === "00:00:00" || inTime === "00:00") && (outTime === "00:00:00" || outTime === "00:00")) ? 'Absent' : 'Present';
    };

    return (
        <div>
            <h4 className='pt-4 borderBottom'>Hostel Attendance</h4>
            <div className="hostel-flex-container pb-4 pt-2">
                <div className='flex justify-between'>
                    <div className="hostel-innerflex-container">
                        <div className='flex flex-row items-center'>
                            <div className="breadcrumbs !border-0">
                                <ol className="flex items-center whitespace-nowrap min-w-0">
                                    <li className="text-sm">
                                        <Link className="flex items-center text-primary hover:text-primary dark:text-primary" to={`${import.meta.env.BASE_URL}dashboard`}>
                                            Dashboard
                                            <svg className="flex-shrink-0 mx-3 overflow-visible h-2.5 w-2.5 text-black-300 dark:text-white/10 rtl:rotate-180"
                                                width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M5 1L10.6869 7.16086C10.8637 7.35239 10.8637 7.64761 10.6869 7.83914L5 14"
                                                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                            </svg>
                                        </Link>
                                    </li>
                                    <li className="text-sm text-gray-500 dark:text-[#8c9097] dark:text-white/50 hover:text-primary truncate" aria-current="page">
                                        Attendance
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='create-stud-table'>
                <div className='box p-4'>
                    <h4>Hostel Attendance List</h4>
                    <div className='common-attend-filter-list pt-4'>
                        <div className='grid grid-cols-12 sm:gap-6'>
                            <div className="xl:col-span-3 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                                <div className="input-group !flex-nowrap">
                                    <div className="input-group-text text-[#8c9097] dark:text-white/50"> <i className="ri-calendar-line"></i> </div>
                                    <DatePicker placeholderText="Choose date" className="ti-form-input focus:z-10" dateFormat="dd/MM/yyyy"
                                                        showMonthDropdown="true"
                                                        showYearDropdown="true"  showIcon selected={startDate} onChange={(date) => setStartDate(date)} />
                                </div>
                            </div>
                            <div className="xl:col-span-2 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                                <button type="button" className="ti-btn ti-btn-warning-full !rounded-full ti-btn-wave">Filter</button>
                            </div>
                            <div className="xl:col-span-5 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                                {/* <div className="flex rounded-sm search-box">
                                    <input type="search" placeholder='Search' id="hs-trailing-button-add-on-with-icon" name="hs-trailing-button-add-on-with-icon" className="ti-form-input rounded-none rounded-s-sm focus:z-10" />
                                    <button aria-label="button" type="button" className="inline-flex search-icon flex-shrink-0 justify-center items-center rounded-e-sm border border-transparent font-semibold bg-warning text-white hover:bg-warning focus:z-10 focus:outline-none focus:ring-0 focus:ring-warning transition-all text-sm">
                                        <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                        </svg>
                                    </button>
                                </div> */}
                            </div>
                            <div className="xl:col-span-2 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                                <button type="button" className="ti-btn ti-btn-warning-full !rounded-full ti-btn-wave" onClick={handleSaveAll}>Mark All Present</button>
                            </div>
                        </div>
                    </div>
                    <div className="student-table-details pt-4">
                        <div className="table-responsive">
                            <table className="table whitespace-nowrap table-bordered table-sm min-w-full">
                                <thead>
                                    <tr className="border-b border-defaultborder">
                                        <th scope="col" className="text-start">#</th>
                                        <th scope="col" className="text-start">Name</th>
                                        <th scope="col" className="text-start">Class</th>
                                        <th scope="col" className="text-start">In Time</th>
                                        <th scope="col" className="text-start">Out Time</th>
                                        <th scope="col" className="text-start">Status</th>
                                        <th scope="col" className="text-start">Attendance</th>
                                        <th scope="col" className="text-start">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        // spinner ? <Loader /> :
                                            data.map((dt, index) => {
                                                const status = getStatus(dt.inTime, dt.outTime);

                                                return (
                                                    <tr className="border-b border-defaultborder" key={index}>
                                                        <td>{index + 1}</td>
                                                        <td>{dt.fullName}</td>
                                                        <td>{dt.className} - {dt.sectionName}</td>
                                                        <td>
                                                            <input
                                                                type="time"
                                                                value={dt.inTime}
                                                                className="timePicker"
                                                                id="startTime"
                                                                name="startTime"
                                                                disabled
                                                            />
                                                        </td>
                                                        <td>
                                                            <input
                                                                type="time"
                                                                value={dt.outTime}
                                                                className="timePicker"
                                                                id="endTime"
                                                                name="endTime"
                                                                disabled
                                                            />
                                                        </td>
                                                        <td>
                                                            <span className={`badge ${status === 'Present' ? 'bg-success/10 text-success' : 'bg-danger/10 text-danger'}`}>
                                                                {status}
                                                            </span>
                                                        </td>
                                                        <td>
                                                            <ToggleSwitch status={status} index={index} updateAttendanceData={updateAttendanceData} />
                                                        </td>
                                                        <td>
                                                            <div className="ti-dropdown hs-dropdown">
                                                                <button type="button"
                                                                    className="ti-btn ti-btn-ghost-primary ti-dropdown-toggle me-2 !py-2 !shadow-none"
                                                                    aria-expanded="false">
                                                                    <i className="ri-arrow-down-s-line align-middle inline-block"></i>
                                                                </button>
                                                                <ul className="hs-dropdown-menu ti-dropdown-menu hidden">
                                                                    <li> <button type="button" className="ti-dropdown-item" onClick={() => handleSingleSave(index)}>Save</button></li>
                                                                    {/* <li> <button type="button" className="ti-dropdown-item" onClick={() => handleCancel(index)}>Cancel</button></li> */}
                                                                </ul>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                );
                                            })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const ToggleSwitch = ({ status, index, updateAttendanceData }) => {
	const [isPresent, setIsPresent] = useState(null);

	useEffect(() => {
		setIsPresent(status === "Present");
	}, [status]);

	const toggleValue = async () => {
		setIsPresent(!isPresent);
        updateAttendanceData(index)
	};

	return (
		<div className="flex items-center space-x-3">
			<div
				onClick={toggleValue}
				className={`relative w-12 h-6 flex items-center rounded-full cursor-pointer transition-colors duration-300 ${
					isPresent ? "bg-success" : "bg-danger"
				}`}
			>
				<div
					className={`bg-white w-5 h-5 rounded-full shadow-md transform transition-transform duration-300 ${
						isPresent ? "translate-x-6" : "translate-x-1"
					}`}
				></div>
			</div>
			<span className="text-sm font-medium w-16 text-center">
				{isPresent ? "Present" : "Absent"}
			</span>
		</div>
	);
};

export default HostelAttendance;
