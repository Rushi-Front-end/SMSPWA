import DashBoard from '../../../../assets/images/menu-left-icons/Dashboard.svg';
import School from '../../../../assets/images/menu-left-icons/School.svg';
import Staff from '../../../../assets/images/menu-left-icons/Staff.svg';
import Timetable from '../../../../assets/images/menu-left-icons/Timetable.svg';
import Student from '../../../../assets/images/menu-left-icons/Student.svg';
import Health from '../../../../assets/images/menu-left-icons/Health.svg';
import Attendance from '../../../../assets/images/menu-left-icons/Attendance.svg';
import Leave from '../../../../assets/images/menu-left-icons/Leave.svg';
import Examination from '../../../../assets/images/menu-left-icons/Examination.svg';
import Expense from '../../../../assets/images/menu-left-icons/Expense.svg';
import Dietplan from '../../../../assets/images/menu-left-icons/Dietplan.svg';
import Reports from '../../../../assets/images/menu-left-icons/Reports.svg';

export const MENUITEMS = [
  {
    menutitle: 'MAIN',
  },
      {
        icon: <img src={DashBoard} alt="Dashboard Icon" />,
        path: `${import.meta.env.BASE_URL}dashboard`,
        type: 'link',
        Name: '',
        active: false,
        selected: false,
        dirchange: false,
        title: 'Dashboards',
        class: 'badge !bg-warning/10 !text-warning !py-[0.25rem] !px-[0.45rem] !text-[0.75em] ms-2',

      },
  {
    menutitle: "SCHOOLS",
  },
      {
        icon: <img src={School} alt="Dashboard Icon" />,
        path: `${import.meta.env.BASE_URL}pages/schools/allSchools`,
        type: "link",
        Name: '',
        active: false,
        selected: false, 
        dirchange: false,
        title: "All Schools",
        badge: '',
        badgetxt: '',
        class: ' text-secondary text-[0.75em] rounded-sm !py-[0.25rem] !px-[0.45rem] badge !bg-secondary/10 ms-2',
       
      },
      // {
      //   icon: (<i className="bx bx-task side-menu__icon"></i>),
      //   path: `${import.meta.env.BASE_URL}pages/schools/schoolsDetails`,
      //   type: "link",
      //   Name: '',
      //   active: false,
      //   selected: false, 
      //   dirchange: false,
      //   title: "School Details",
      //   badge: '',
      //   badgetxt: '',
      //   class: 'text-secondary text-[0.75em] rounded-sm !py-[0.25rem] !px-[0.45rem] badge !bg-secondary/10 ms-2',
      // },
      {
        icon: <img src={Staff} alt="Staff Icon" />,
        path: `${import.meta.env.BASE_URL}pages/staff/staffDetails`,
        type: "link",
        Name: '',
        active: false,
        selected: false,
         dirchange: false,
        title: "Staff",
        badge: '',
        badgetxt: '',
        class: '',

      },
      {
        icon: <img src={Timetable} alt="TimeTable Icon" />,
        path: `${import.meta.env.BASE_URL}pages/timeTable/timeTable`,
        type: "link",
        Name: '',
        active: false,
        selected: false,
         dirchange: false,
        title: "Timetable",
        badge: '',
        badgetxt: '',
        class: '',
       },

      {
        menutitle: "STUDENT MANAGEMENT",
      },
          // {
          //   icon: (<i className="bx bx-file-blank side-menu__icon"></i>),
          //   path: `${import.meta.env.BASE_URL}pages/admissionQuery/admissionQueryDetails`,
          //   type: "link",
          //   Name: '',
          //   active: false,
          //   selected: false, 
          //   dirchange: false,
          //   title: "Admission Queries",
          //   badge: '',
          //   badgetxt: '',
          //   class: ' text-secondary text-[0.75em] rounded-sm !py-[0.25rem] !px-[0.45rem] badge !bg-secondary/10 ms-2',
           
          // },
          {
            icon: <img src={Student} alt="Student Icon" />,
            path: `${import.meta.env.BASE_URL}pages/student/studentDetails`,
            type: "link",
            Name: '',
            active: false,
            selected: false, 
            dirchange: false,
            title: "Students",
            badge: '',
            badgetxt: '',
            class: 'text-secondary text-[0.75em] rounded-sm !py-[0.25rem] !px-[0.45rem] badge !bg-secondary/10 ms-2',
          },
          {
            icon: <img src={Health} alt="Health Icon" />,
            path: `${import.meta.env.BASE_URL}pages/health/healthDetails`,
            type: "link",
            Name: '',
            active: false,
            selected: false,
             dirchange: false,
            title: "Health Documents",
            badge: '',
            badgetxt: '',
            class: '',
    
          },
          
          {
            menutitle: "ATTENDANCE MANAGEMENT",
          },
              {
                icon: <img src={Attendance} alt="Attendance Icon" />,
                path: `${import.meta.env.BASE_URL}pages/attendance/staffAttendance`,
                type: "link",
                Name: '',
                active: false,
                selected: false, 
                dirchange: false,
                title: "Staff Attendance",
                badgetxt: '',
                class: ' text-secondary text-[0.75em] rounded-sm !py-[0.25rem] !px-[0.45rem] badge !bg-secondary/10 ms-2',
               
              },
              {
                icon: <img src={Attendance} alt="Attendance Icon" />,
                path: `${import.meta.env.BASE_URL}pages/attendance/studentAttendance`,
                type: "link",
                Name: '',
                active: false,
                selected: false, 
                dirchange: false,
                title: "Students Attendace",
                badge: '',
                badgetxt: '',
                class: 'text-secondary text-[0.75em] rounded-sm !py-[0.25rem] !px-[0.45rem] badge !bg-secondary/10 ms-2',
              },
              {
                icon: <img src={Attendance} alt="Attendance Icon" />,
                path: `${import.meta.env.BASE_URL}pages/attendance/hostelAttendance`,
                type: "link",
                Name: '',
                active: false,
                selected: false,
                 dirchange: false,
                title: "Hostel Attendance",
                badge: '',
                badgetxt: '',
                class: '',
        
              },
          
              {
                menutitle: "LEAVE MANAGEMENT",
              },
                  {
                    icon: <img src={Leave} alt="Leave Icon" />,
                    path: `${import.meta.env.BASE_URL}pages/leave/staffLeave`,
                    type: "link",
                    Name: '',
                    active: false,
                    selected: false, 
                    dirchange: false,
                    title: "Staff Leave",
                    badgetxt: '',
                    class: ' text-secondary text-[0.75em] rounded-sm !py-[0.25rem] !px-[0.45rem] badge !bg-secondary/10 ms-2',
                   
                  },
                  {
                    icon: <img src={Leave} alt="Leave Icon" />,

                    path: `${import.meta.env.BASE_URL}pages/leave/studentLeave`,
                    type: "link",
                    Name: '',
                    active: false,
                    selected: false, 
                    dirchange: false,
                    title: "Students Leave",
                    badge: '',
                    badgetxt: '',
                    class: 'text-secondary text-[0.75em] rounded-sm !py-[0.25rem] !px-[0.45rem] badge !bg-secondary/10 ms-2',
                  },
                  {
                    icon: <img src={Leave} alt="Leave Icon" />,
                    path: `${import.meta.env.BASE_URL}pages/leave/hosteliteLeave`,
                    type: "link",
                    Name: '',
                    active: false,
                    selected: false,
                     dirchange: false,
                    title: "Hostelite Outpasses",
                    badge: '',
                    badgetxt: '',
                    class: '',
            
                  },

                  {
                    menutitle: "EXTRA FEATURES",
                  },
                      {
                        icon: <img src={Reports} alt="Reports Icon" />,
                        path: `${import.meta.env.BASE_URL}pages/extraFeatures/reports`,
                        type: "link",
                        Name: '',
                        active: false,
                        selected: false, 
                        dirchange: false,
                        title: "Reports",
                        badgetxt: '',
                        class: ' text-secondary text-[0.75em] rounded-sm !py-[0.25rem] !px-[0.45rem] badge !bg-secondary/10 ms-2',
                       
                      },
                      // {
                      //   icon: (<i className="bx bx-task side-menu__icon"></i>),
                      //   path: `${import.meta.env.BASE_URL}pages/extraFeatures/eventManagement`,
                      //   type: "link",
                      //   Name: '',
                      //   active: false,
                      //   selected: false, 
                      //   dirchange: false,
                      //   title: "Event Management",
                      //   badge: '',
                      //   badgetxt: '',
                      //   class: 'text-secondary text-[0.75em] rounded-sm !py-[0.25rem] !px-[0.45rem] badge !bg-secondary/10 ms-2',
                      // },
                      {
                        icon: <img src={Expense} alt="Expense Icon" />,
                        path: `${import.meta.env.BASE_URL}pages/extraFeatures/expenseManagement`,
                        type: "link",
                        Name: '',
                        active: false,
                        selected: false,
                         dirchange: false,
                        title: "Expense Management",
                        badge: '',
                        badgetxt: '',
                        class: '',                
                      },  
                      // {
                      //   icon: (<i className="bx bx-fingerprint side-menu__icon"></i>),
                      //   path: `${import.meta.env.BASE_URL}pages/extraFeatures/complaints`,
                      //   type: "link",
                      //   Name: '',
                      //   active: false,
                      //   selected: false,
                      //    dirchange: false,
                      //   title: "Complaints",
                      //   badge: '',
                      //   badgetxt: '',
                      //   class: '',                
                      // }, 
                      // {
                      //   icon: (<i className="bx bx-fingerprint side-menu__icon"></i>),
                      //   path: `${import.meta.env.BASE_URL}pages/aboutus`,
                      //   type: "link",
                      //   Name: '',
                      //   active: false,
                      //   selected: false,
                      //    dirchange: false,
                      //   title: "Outpasses",
                      //   badge: '',
                      //   badgetxt: '',
                      //   class: '',                
                      // }, 
                      // {
                      //   icon: (<i className="bx bx-fingerprint side-menu__icon"></i>),
                      //   path: `${import.meta.env.BASE_URL}pages/extraFeatures/annoucement`,
                      //   type: "link",
                      //   Name: '',
                      //   active: false,
                      //   selected: false,
                      //    dirchange: false,
                      //   title: "Announcements",
                      //   badge: '',
                      //   badgetxt: '',
                      //   class: '',                
                      // }, 
                      {
                        icon: <img src={Examination} alt="Examination Icon" />,
                        path: `${import.meta.env.BASE_URL}pages/examination/examinationList`,
                        type: "link",
                        Name: '',
                        active: false,
                        selected: false,
                         dirchange: false,
                        title: "Examination",
                        badge: '',
                        badgetxt: '',
                        class: '',                
                      }, 
                      {
                        icon: <img src={Dietplan} alt="Dietplan Icon" />,
                        path: `${import.meta.env.BASE_URL}pages/diet/dietList`,
                        type: "link",
                        Name: '',
                        active: false,
                        selected: false,
                         dirchange: false,
                        title: "Diet Plan",
                        badge: '',
                        badgetxt: '',
                        class: '',                
                      }, 
                      // {
                      //   icon: (<i className="bx bx-fingerprint side-menu__icon"></i>),
                      //   path: `${import.meta.env.BASE_URL}pages/extraFeatures/visitor`,
                      //   type: "link",
                      //   Name: '',
                      //   active: false,
                      //   selected: false,
                      //    dirchange: false,
                      //   title: "Visitors",
                      //   badge: '',
                      //   badgetxt: '',
                      //   class: '',                
                      // },                  
];

const ROLE_MENU_ITEMS = {
  admin: [
    'Dashboards',
    'All Schools',
    'Staff',
    'Timetable',
    'Students',
    'Health Documents',
    'Staff Attendance',
    'Students Attendace',
    'Hostel Attendance',
    'Staff Leave',
    'Students Leave',
    'Hostelite Outpasses',
    'Reports',
    'Expense Management',
    'Examination',
    'Diet Plan',
  ],
  superAdmin: [
    'Dashboards',
    'All Schools',
    'Staff',
    'Timetable',
    'Students',
    'Health Documents',
    'Staff Attendance',
    'Students Attendace',
    'Hostel Attendance',
    'Staff Leave',
    'Students Leave',
    'Hostelite Outpasses',
    'Reports',
    'Expense Management',
    'Examination',
    'Diet Plan',
    // Add additional items as needed
  ],
  teacher: [
    'Dashboards',
    'Students',
    'Health Documents',
    'Students Attendace',
    'Reports',
    // Add additional items as needed
  ],
  staff: [
    'Dashboards',
    'All Schools',
    'Staff',
    'Timetable',
    'Students',
    'Health Documents',
    'Staff Attendance',
    // Add additional items as needed
  ],
  warden: [
    
    'Health Documents',
    'Staff Attendance',
    // Add additional items as needed
  ],
};

const getMenuItemsForRole = (role) => {
  const allowedTitles = ROLE_MENU_ITEMS[role] || [];
  console.log("Allowed Titles for Role:", allowedTitles);
  // return MENUITEMS.filter(item => {
  //   if (item.menutitle) return true; // Keep the section titles
  //   return allowedTitles.includes(item.title);
  // });
  // Create an array of valid menu items
  const validItems = MENUITEMS.filter(item => {
    if (item.menutitle) return true; // Keep section titles
    return allowedTitles.includes(item.title);
  });
  console.log("Filtered Items Before Return:", validItems);
  
  const result = [];
  let currentMenuTitle = '';
  
  validItems.forEach(item => {
    if (item.menutitle) {
      // Check if there are any valid items after this title
      const hasValidItems = validItems.slice(validItems.indexOf(item) + 1).some(nextItem => !nextItem.menutitle);
      if (hasValidItems) {
        currentMenuTitle = item.menutitle;
        result.push(item); // Add the menutitle if there are valid items following it
      }
    } else {
      result.push(item); // Add valid menu item
    }
  });

  return result;
};

export default getMenuItemsForRole
// Example usage
//const userRole = 'admin'; // Get this dynamically based on the logged-in user
//const filteredMenuItems = getMenuItemsForRole(userRole);

// No