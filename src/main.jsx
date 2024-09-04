import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import './index.scss'
import './school.scss'
// import 'ag-grid-community/styles/ag-grid.css';
// import { AgGridReact } from 'ag-grid-react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Auth from './firebase/auth.jsx'
import Login from './firebase/login.jsx'
import Signup from './firebase/signup.jsx'
import ScrollToTop from './components/ui/scrolltotop.jsx'
import Analytics from './container/dashboards/analytics/analytics.jsx'
import Student from "./container/pages/student/student.jsx";
import AllSchool from './container/pages/schools/allSchool.jsx'
import CreateSchool from './container/pages/schools/createSchool.jsx'
import CreateStudent from './container/pages/student/createStudent.jsx'
import SchoolsDetails from './container/pages/schools/schoolsDetails.jsx'
import CreateStaff from './container/pages/staff/createStaff.jsx'
import StaffDetails from './container/pages/staff/staffDetails.jsx'
import StaffList from './container/pages/staff/staffList.jsx'
import AdmissionQueryDetails from './container/pages/admissionQuery/admissionQueryDetails.jsx'
import CreateAdmissionQuery from './container/pages/admissionQuery/createAdmissionQuery.jsx'
import AdmissionIndDetails from './container/pages/admissionQuery/admissionIndDetails.jsx'
import HealthDetails from './container/pages/health/healthDetails.jsx'
import CreateHealth from './container/pages/health/createHealth.jsx'
import ViewHealthDocument from './container/pages/health/viewHealthDocument.jsx'
import StaffAttendance from './container/pages/attendance/staffAttendance.jsx'
import StudentAttendance from './container/pages/attendance/studentAttendance.jsx'
import HostelAttendance from './container/pages/attendance/hostelAttendance.jsx'
import StaffLeave from './container/pages/leave/staffLeave.jsx'
import CreateLeave from './container/pages/leave/createLeave.jsx'
import HosteliteLeave from './container/pages/leave/hosteliteLeave.jsx'
import Reports from './container/pages/extraFeatures/reports.jsx'
import EventManagement from './container/pages/extraFeatures/eventManagement.jsx'
import ExpenseManagement from './container/pages/extraFeatures/expenseManagement.jsx'
import CreateExpense from './container/pages/extraFeatures/createExpense.jsx'
import Announcement from './container/pages/extraFeatures/announcement.jsx'
import Settings from './container/pages/appSettings/settings.jsx'
import ChangePassword from './container/pages/changePassword/changePassword.jsx'
import TimeTable from './container/pages/timeTable/timeTable.jsx'
import Visitor from './container/pages/extraFeatures/visitor.jsx'
import CreateVisitor from './container/pages/extraFeatures/createVisitor.jsx'
import Complaints from './container/pages/extraFeatures/complaints.jsx'
import CreateComplaint from './container/pages/extraFeatures/createComplaint.jsx'
import ErrorPage from './container/pages/404page/errorPage.jsx'
import StudentLeave from './container/pages/leave/studentLeave.jsx'
import CreateStudentLeave from './container/pages/leave/createStudentLeave.jsx'
import HosteliteCreateLeave from './container/pages/leave/hosteliteCreateLeave.jsx'
import EditStudent from './container/pages/student/editStudent.jsx'
import Loader from './container/pages/loader/loader.jsx'
import StudentIndDetails from './container/pages/student/studentIndDetails.jsx'
import ExaminationList from './container/pages/examination/examinationList.jsx'
import CreateExamination from './container/pages/examination/createExamination.jsx'
import EditSchool from './container/pages/schools/editSchool.jsx'
import UpdateLeave from './container/pages/leave/updateLeave.jsx'
import DietList from './container/pages/diet/dietList.jsx'
import CreateDiet from './container/pages/diet/createDiet.jsx'
import UpdateExamination from './container/pages/examination/updateExamination.jsx'
// import ErrorPage from './container/pages/404page/errorPage.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.Fragment>
    <ToastContainer theme='colored' autoClose={2000} position='top-right' />
    <BrowserRouter>
      <React.Suspense>
      <ScrollToTop/>
        <Routes>
          <Route path={`${import.meta.env.BASE_URL}`} element={<Auth />}>
              <Route index element={<Login />} />
              <Route path={`${import.meta.env.BASE_URL}firebase/login`} element={<Login />} />
              <Route path={`${import.meta.env.BASE_URL}firebase/signup`} element={<Signup />} />
          </Route>    
          <Route path={`${import.meta.env.BASE_URL}`} element={<App />}>   
          <Route path='*' element={<ErrorPage />}></Route>        
            <Route path={`${import.meta.env.BASE_URL}dashboard`} element={<Analytics />} />
            {/* <Route path={`${import.meta.env.BASE_URL}pages/404page/pageNotFound`} element={<ErrorPage />} /> */}
            <Route path={`${import.meta.env.BASE_URL}pages/loader/loader`} element={<Loader />} />
            <Route path={`${import.meta.env.BASE_URL}pages/student/studentDetails`} element={<Student />} />
            <Route path={`${import.meta.env.BASE_URL}pages/student/studentIndDetails`} element={<StudentIndDetails />} />
            <Route path={`${import.meta.env.BASE_URL}pages/schools/allSchools`} element={<AllSchool />} />
            <Route path={`${import.meta.env.BASE_URL}pages/attendance/staffAttendance`} element={<StaffAttendance />} />
            <Route path={`${import.meta.env.BASE_URL}pages/attendance/studentAttendance`} element={<StudentAttendance />} />
            <Route path={`${import.meta.env.BASE_URL}pages/attendance/hostelAttendance`} element={<HostelAttendance />} />
            <Route path={`${import.meta.env.BASE_URL}pages/schools/createSchool`} element={<CreateSchool />} />
            <Route path={`${import.meta.env.BASE_URL}pages/schools/editSchool/:id`} element={<EditSchool />}/>

            <Route path={`${import.meta.env.BASE_URL}pages/student/createStudent`} element={<CreateStudent />}/>
            <Route path={`${import.meta.env.BASE_URL}pages/student/editStudent/:studentid`} element={<EditStudent />}/>
            <Route path={`${import.meta.env.BASE_URL}pages/schools/schoolsDetails/:id`} element={<SchoolsDetails />} />
            <Route path={`${import.meta.env.BASE_URL}pages/staff/staffList/:id`} element={<StaffList />} />
            <Route path={`${import.meta.env.BASE_URL}pages/staff/createStaff`} element={<CreateStaff />} />
            <Route path={`${import.meta.env.BASE_URL}pages/staff/staffDetails`} element={<StaffDetails />} />
            <Route path={`${import.meta.env.BASE_URL}pages/timeTable/timeTable`} element={<TimeTable />} />
            <Route path={`${import.meta.env.BASE_URL}pages/admissionQuery/admissionQueryDetails`} element={ <AdmissionQueryDetails />} />
            <Route path={`${import.meta.env.BASE_URL}pages/admissionQuery/admissionIndDetails`} element={ <AdmissionIndDetails />} />
            <Route path={`${import.meta.env.BASE_URL}pages/admissionQuery/createAdmissionForm`} element={ <CreateAdmissionQuery />} />
            <Route path={`${import.meta.env.BASE_URL}pages/health/healthDetails`} element={<HealthDetails />} />
            <Route path={`${import.meta.env.BASE_URL}pages/health/createHealth`} element={<CreateHealth />} />
            <Route path={`${import.meta.env.BASE_URL}pages/health/viewHealthDocument`} element={<ViewHealthDocument />} />
            <Route path={`${import.meta.env.BASE_URL}pages/leave/staffLeave`} element={<StaffLeave />} />
            <Route path={`${import.meta.env.BASE_URL}pages/leave/studentLeave`} element={<StudentLeave />} />
            <Route path={`${import.meta.env.BASE_URL}pages/leave/createStudentLeave`} element={<CreateStudentLeave />} />
            <Route path={`${import.meta.env.BASE_URL}pages/leave/hosteliteCreateLeave`} element={<HosteliteCreateLeave />} />
            <Route path={`${import.meta.env.BASE_URL}pages/leave/createLeave`} element={<CreateLeave />} />
            <Route path={`${import.meta.env.BASE_URL}pages/leave/updateLeave/:id`} element={<UpdateLeave />} />
            <Route path={`${import.meta.env.BASE_URL}pages/leave/hosteliteLeave`} element={<HosteliteLeave />} />
            <Route path={`${import.meta.env.BASE_URL}pages/extraFeatures/reports`} element={<Reports />} />
            <Route path={`${import.meta.env.BASE_URL}pages/extraFeatures/eventManagement`} element={<EventManagement />} />
            <Route path={`${import.meta.env.BASE_URL}pages/extraFeatures/expenseManagement`} element={<ExpenseManagement />} />
            <Route path={`${import.meta.env.BASE_URL}pages/extraFeatures/createExpense`} element={<CreateExpense />} />
            <Route path={`${import.meta.env.BASE_URL}pages/extraFeatures/annoucement`} element={<Announcement />} />
            <Route path={`${import.meta.env.BASE_URL}pages/extraFeatures/visitor`} element={<Visitor />} />
            <Route path={`${import.meta.env.BASE_URL}pages/extraFeatures/createVisitor`} element={<CreateVisitor />} />
            <Route path={`${import.meta.env.BASE_URL}pages/extraFeatures/complaints`} element={<Complaints />} />
            <Route path={`${import.meta.env.BASE_URL}pages/extraFeatures/createComplaints`} element={<CreateComplaint />} />
            <Route path={`${import.meta.env.BASE_URL}pages/appSettings/settings`} element={<Settings />} />
            <Route path={`${import.meta.env.BASE_URL}pages/changePassword/passwordChange`} element={<ChangePassword />} />
            <Route path={`${import.meta.env.BASE_URL}pages/examination/examinationList`} element={<ExaminationList />} />
            <Route path={`${import.meta.env.BASE_URL}pages/examination/createExamination`} element={<CreateExamination />} />
            <Route path={`${import.meta.env.BASE_URL}pages/examination/updateExamination/:id`} element={<UpdateExamination />} />
            <Route path={`${import.meta.env.BASE_URL}pages/diet/dietList`} element={<DietList />} />
            <Route path={`${import.meta.env.BASE_URL}pages/diet/createDiet`} element={<CreateDiet />} />


          </Route>
        </Routes>
      </React.Suspense>
    </BrowserRouter>
  </React.Fragment>
)
