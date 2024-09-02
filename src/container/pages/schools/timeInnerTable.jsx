import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const TimeInnerTable = ({ selectedOption }) => {
    const [hiddenRow, setHiddenRow] = useState(false);
    const [addHiddenRow, setAddHiddenRow] = useState([]);
    const [isDisabled, setIsDisabled] = useState(true);
    const time = Date().slice(16, 21);

    useEffect(() => {
        // Reset the states when selectedOption changes
        setHiddenRow(false);
        setAddHiddenRow([]);
        setIsDisabled(true);
    }, [selectedOption]);

    const AddIndRow = () => {
        if (selectedOption === null) {
            toast.error('Please select the Class', {
                position: "top-right",
                autoClose: 3000,
            });
        } else {
            setHiddenRow(true);
            setAddHiddenRow([...addHiddenRow, {}]);
        }
    };

    const enableInputs = () => {
        setIsDisabled(false);
    };

    const deleteRow = (indexToRemove) => {
        const updatedRows = addHiddenRow.filter((_, index) => index !== indexToRemove);
        setAddHiddenRow(updatedRows);
    };

    return (
        <div>
            <div className="timetable-deatils-wrapper">
                <div className="table-responsive pt-2">
                    <table className="table whitespace-nowrap table-sm min-w-full">
                        <thead>
                            <tr className="border-b border-defaultborder">
                                <th scope="col" className="text-start">Sl No.</th>
                                <th scope="col" className="text-start">Start Time</th>
                                <th scope="col" className="text-start">End Time</th>
                                <th scope="col" className="text-start">Type</th>
                                <th scope="col" className="text-start">Subject</th>
                                <th scope="col" className="text-start">Teacher</th>
                                <th scope="col" className="text-start">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b border-defaultborder">
                                <td>{1}</td>
                                <td>
                                    <div className="timePicker-wrapper">
                                        <input type="time" className="timePicker" id="startTime" name="startTime" value={time} disabled={isDisabled} />
                                    </div>
                                </td>
                                <td>
                                    <div className="timePicker-wrapper">
                                        <input type="time" className="timePicker" id="endTime" name="endTime" value={time} disabled={isDisabled} />
                                    </div>
                                </td>
                                <td>
                                    <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                                        <select className="!p-0 place-holder timeTableSelect" disabled={isDisabled}>
                                            <option value="volvo">Volvo</option>
                                            <option value="saab">Saab</option>
                                            <option value="opel">Opel</option>
                                            <option value="audi">Audi</option>
                                        </select>
                                    </div>
                                </td>
                                <td>
                                    <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                                        <select className="!p-0 place-holder timeTableSelect" disabled={isDisabled}>
                                            <option value="volvo">Volvo</option>
                                            <option value="saab">Saab</option>
                                            <option value="opel">Opel</option>
                                            <option value="audi">Audi</option>
                                        </select>
                                    </div>
                                </td>
                                <td>
                                    <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                                        <select className="!p-0 place-holder timeTableSelect" disabled={isDisabled}>
                                            <option value="volvo">Volvo</option>
                                            <option value="saab">Saab</option>
                                            <option value="opel">Opel</option>
                                            <option value="audi">Audi</option>
                                        </select>
                                    </div>
                                </td>
                                <td>
                                    <div className="ti-dropdown hs-dropdown">
                                        <button
                                            type="button"
                                            className="ti-btn ti-btn-ghost-primary ti-dropdown-toggle me-2 !py-2 !shadow-none"
                                            aria-expanded="false"
                                        >
                                            <i className="ri-arrow-down-s-line align-middle inline-block"></i>
                                        </button>
                                        <ul className="hs-dropdown-menu ti-dropdown-menu hidden">
                                            <li>
                                                <Link className="ti-dropdown-item" to="#" onClick={enableInputs}>
                                                    Edit
                                                </Link>
                                            </li>
                                            <li>
                                                <Link className="ti-dropdown-item" to="#">
                                                    Delete
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            {hiddenRow && (
                <div className="hidden-parent-div">
                    {addHiddenRow.map((_, index) => (
                        <div className="timetable-individual-wrapper" key={index}>
                            <div className="table-responsive pt-2">
                                <table className="table whitespace-nowrap table-sm min-w-full">
                                    <tbody>
                                        <tr className="border-b border-defaultborder">
                                            <td>{index + 2}</td>
                                            <td>
                                                <div className="timePicker-wrapper">
                                                    <input
                                                        type="time"
                                                        className="timePicker"
                                                        id="startTime"
                                                        name="startTime"
                                                        value={time}
                                                    />
                                                </div>
                                            </td>
                                            <td>
                                                <div className="timePicker-wrapper">
                                                    <input
                                                        type="time"
                                                        className="timePicker"
                                                        id="endTime"
                                                        name="endTime"
                                                        value={time}
                                                    />
                                                </div>
                                            </td>
                                            <td>
                                                <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                                                    <select className="!p-0 place-holder timeTableSelect">
                                                        <option value="volvo">Volvo</option>
                                                        <option value="saab">Saab</option>
                                                        <option value="opel">Opel</option>
                                                        <option value="audi">Audi</option>
                                                    </select>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                                                    <select className="!p-0 place-holder timeTableSelect">
                                                        <option value="volvo">Volvo</option>
                                                        <option value="saab">Saab</option>
                                                        <option value="opel">Opel</option>
                                                        <option value="audi">Audi</option>
                                                    </select>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                                                    <select className="!p-0 place-holder timeTableSelect">
                                                        <option value="volvo">Volvo</option>
                                                        <option value="saab">Saab</option>
                                                        <option value="opel">Opel</option>
                                                        <option value="audi">Audi</option>
                                                    </select>
                                                </div>
                                            </td>
                                            <td>
                                                <button
                                                    className="action-button-delete"
                                                    onClick={() => deleteRow(index)}
                                                >
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            <div className='time-button-group time-flex-container pt-4 pb-4'>
                <div className='button-flex-wrapper'>
                    <div className='addNew-btn'>
                        <button type="button" className="ti-btn ti-btn-outline-warning !rounded-full ti-btn-wave" onClick={AddIndRow}>Add New</button>
                    </div>
                    <div className='save-btn flex justify-end '>
                        <button type="button" className="ti-btn ti-btn-warning-full !rounded-full ti-btn-wave">Save</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TimeInnerTable;
