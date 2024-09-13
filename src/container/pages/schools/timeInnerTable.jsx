import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const TimeInnerTable = ({ selectedOption, selectedDay }) => {
	const [timeTableList, setTimeTableList] = useState([]);
	const [newTimeTableRow, setNewTimeTableRow] = useState([]);
	const [classDataList, setClassDataList] = useState([]);
	useEffect(() => {
		(async () => await fetchTimeTableData())();
		setNewTimeTableRow([]);
	}, [selectedOption, selectedDay]);

	const fetchTimeTableData = async () => {
		try {
			const timeTableResponse = await axios.get(
				"https://sms-webapi-hthkcnfhfrdcdyhv.eastus-01.azurewebsites.net/api/TimeTable"
			);
			const schoolId = selectedOption?.schoolId;
			const classId = selectedOption.id;
			const day = selectedDay;

			const timeTableListData = timeTableResponse.data.filter(
				(timeTableData) =>
					timeTableData.schoolID == schoolId &&
					timeTableData.classID == classId &&
					timeTableData.day == day
			);

			setTimeTableList(timeTableListData);
		} catch (err) {
			setClassDataList([]);
		}
	};

	const AddNewRow = () => {
		if (!selectedOption?.id) return toast.error("Please Select the Class");

		setNewTimeTableRow((prev) => [
			...prev,
			{ id: timeTableList.length + newTimeTableRow.length },
		]);
	};

	const removeAddNew = (id) => {
		setNewTimeTableRow((prev) => [
			...prev.filter((newRow) => newRow.id != id),
		]);
	};

	return (
		<div>
			<div className="timetable-deatils-wrapper">
				<div className="table-responsive pt-2">
					<table className="table whitespace-nowrap table-sm min-w-full">
						<thead>
							<tr className="border-b border-defaultborder">
								<th scope="col" className="text-start">
									Sl No.
								</th>
								<th scope="col" className="text-start">
									Start Time
								</th>
								<th scope="col" className="text-start">
									End Time
								</th>
								<th scope="col" className="text-start">
									Type
								</th>
								<th scope="col" className="text-start">
									Subject
								</th>
								<th scope="col" className="text-start">
									Teacher
								</th>
								<th scope="col" className="text-start">
									Action
								</th>
							</tr>
						</thead>
						<tbody>
							{timeTableList?.map((timeTableItem, ind) => {
								return (
									<TimeTableEntry
										key={timeTableItem.id}
										isSaved={true}
										data={timeTableItem}
										index={ind}
										fetchTimeTableData={fetchTimeTableData}
										selectedOption={selectedOption}
										selectedDay={selectedDay}
									/>
								);
							})}

							{newTimeTableRow.length > 0 &&
								newTimeTableRow.map(({ id }, index) => (
									<TimeTableEntry
										isSaved={false}
										index={index}
										newIndex={id}
										removeAddNew={removeAddNew}
										fetchTimeTableData={fetchTimeTableData}
										selectedOption={selectedOption}
										selectedDay={selectedDay}
									/>
								))}
						</tbody>
					</table>
				</div>
			</div>

			<div className="time-button-group time-flex-container pt-4 pb-4">
				<div className="button-flex-wrapper">
					<div className="addNew-btn">
						<button
							type="button"
							className="ti-btn ti-btn-outline-warning !rounded-full ti-btn-wave"
							onClick={AddNewRow}
						>
							Add New
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

const TimeTableEntry = ({
	isSaved,
	data,
	index,
	newIndex,
	removeAddNew,
	fetchTimeTableData,
	selectedOption,
	selectedDay,
}) => {
	const [isDisabled, setIsDisabled] = useState(isSaved);
	const [id, setId] = useState("");
	const [startTime, setStartTime] = useState("");
	const [endTime, setEndTime] = useState("");
	const [subjectType, setSubjectType] = useState("");
	const [subjectName, setSubjectName] = useState("");
	const [subjectList, setSubjectList] = useState([]);
	const [staffId, setStaffId] = useState("");
	const [staff, setStaff] = useState("");
	const [staffList, setStaffList] = useState([]);

	useEffect(() => {
		(async () => {
			await fetchSubjects();
			await fetchStaff();
		})();
	}, []);

	useEffect(() => {
		if (isSaved) {
			setId(data.id);
			setStartTime(data.startTime);
			setEndTime(data.endTime);
			setSubjectType(data.subjectType);
			setSubjectName(data.subject);
			setStaffId(data.teacherID);
		}
	}, [isSaved]);

	useEffect(() => {
		if (staffList?.length > 0)
			setStaff(
				staffList.filter((staff) => staff.roleID === staffId)[0] ??
					staffList[0]
			);
	}, [staffId, staffList]);

	const fetchSubjects = async () => {
		try {
			const subjectsResponse = await axios.get(
				"https://sms-webapi-hthkcnfhfrdcdyhv.eastus-01.azurewebsites.net/api/Subjects"
			);
			setSubjectList(subjectsResponse.data);
		} catch (err) {
			setSubjectList([]);
		}
	};

	const fetchStaff = async () => {
		try {
			const staffResponse = await axios.get(
				"https://sms-webapi-hthkcnfhfrdcdyhv.eastus-01.azurewebsites.net/api/Staff"
			);

			const staffListData = staffResponse.data;

			setStaffList(staffListData);
		} catch (err) {
			setStaffList([]);
		}
	};

	const selectStaff = (e) => {
		setStaff(
			staffList.filter((staff) => staff.roleID == e.target.value)[0]
		);
	};

	const enableInputs = () => {
		setIsDisabled(false);
	};

	const disableInputs = () => {
		setIsDisabled(true);
	}

	const handleSave = async () => {
		const schoolId = selectedOption?.schoolId;
		const classId = selectedOption.id;
		const day = selectedDay;
		if (isSaved) {
			const response = await axios.put(
				`https://sms-webapi-hthkcnfhfrdcdyhv.eastus-01.azurewebsites.net/api/TimeTable?id=${id}`,
				{
					schoolID: schoolId,
					classID: classId,
					day: day,
					startTime: startTime,
					endTime: endTime,
					subject: subjectName,
					subjectType: subjectType,
					teacherID: staff.roleID,
				}
			);
			disableInputs()
			await fetchTimeTableData();
		} else {
			const response = await axios.post(
				"https://sms-webapi-hthkcnfhfrdcdyhv.eastus-01.azurewebsites.net/api/TimeTable",
				{
					schoolID: schoolId,
					classID: classId,
					day: day,
					startTime: startTime,
					endTime: endTime,
					subject: subjectName,
					subjectType: subjectType,
					teacherID: staff.roleID,
				}
			);
			removeAddNew(newIndex);
			await fetchTimeTableData();
		}
	};

	const handleDelete = async () => {
		if(isSaved) {
			console.debug("delete saved", id)
			const response = await axios.delete(`https://sms-webapi-hthkcnfhfrdcdyhv.eastus-01.azurewebsites.net/api/TimeTable?id=${id}`)
			await fetchTimeTableData()
		} else {
			removeAddNew(newIndex)
		}
	}

	return (
		<tr className="border-b border-defaultborder">
			<td>{isSaved ? index + 1 : newIndex + 1}</td>
			<td>
				<div className="timePicker-wrapper">
					<input
						type="time"
						className="timePicker"
						id="startTime"
						name="startTime"
						value={startTime}
						onChange={(e) => setStartTime(e.target.value)}
						disabled={isDisabled}
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
						value={endTime}
						onChange={(e) => setEndTime(e.target.value)}
						disabled={isDisabled}
					/>
				</div>
			</td>
			<td>
				<div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
					<select
						className="!p-0 place-holder timeTableSelect"
						value={subjectType}
						onChange={(e) => setSubjectType(e.target.value)}
						disabled={isDisabled}
					>
						{subjectList.map((subject) => (
							<option id={subject.id} value={subject.subjectType}>
								{subject.subjectType}
							</option>
						))}
					</select>
				</div>
			</td>
			<td>
				<div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
					<select
						className="!p-0 place-holder timeTableSelect"
						value={subjectName}
						onChange={(e) => setSubjectName(e.target.value)}
						disabled={isDisabled}
					>
						{subjectList.map((subject) => (
							<option id={subject.id} value={subject.subjectName}>
								{subject.subjectName}
							</option>
						))}
					</select>
				</div>
			</td>
			<td>
				<div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
					<select
						className="!p-0 place-holder timeTableSelect"
						value={staff?.roleID}
						onChange={selectStaff}
						disabled={isDisabled}
					>
						{staffList.map((staffData) => (
							<option
								id={staffData.roleID}
								value={staffData.roleID}
							>
								{staffData.fullName}
							</option>
						))}
					</select>
				</div>
			</td>
			{isDisabled === true ? (
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
								<Link
									className="ti-dropdown-item"
									to="#"
									onClick={enableInputs}
								>
									Edit
								</Link>
							</li>
							<li>
								<Link className="ti-dropdown-item" to="#" onClick={handleDelete}>
									Delete
								</Link>
							</li>
						</ul>
					</div>
				</td>
			) : (
				<td>
					<button
						className="action-button-delete p-1"
						onClick={handleDelete}
					>
						Delete
					</button>
					<button
						className="action-button-save p-1"
						onClick={handleSave}
					>
						Save
					</button>
				</td>
			)}
		</tr>
	);
};

export default TimeInnerTable;
