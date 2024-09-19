import Creatable from 'react-select/creatable';
//Default Select

import { useState } from "react";

export const defaultselect = [
  { id: "1", label: "Open this select menu" , value:'Open this select menu'},
  { id: "2", label: "1" , value:'1'},
  { id: "3", label: "2" , value:'2'},
  { id: "4", label: "3" , value:'3'},
]

//Basic Tom Select

export const basicselect = [
  { id:" 1", value: "Select a person...", label:'Select a person...' },
  { id:" 2", value: "Thomas Edison", label:'Thomas Edison' },
  { id:" 3", value: "Nikola", label:'Nikola' },
  { id:" 4", value: "Nikola Tesla", label:'Nikola Tesla' },
  { id:" 5", value: "Arnold Schwarzenegger", label:'Arnold Schwarzenegger' },
]

//Multiple dropdown select

export const multiDropdownSelect = [
  { value: "Alabama", label: "Alabama" },
  { value: "Alaska", label: "Alaska" },
  { value: "Arizona", label: "Arizona" },
  { value: "Arkansas", label: "Arkansas" },
  { value: "California", label: "California" },
  { value: "Colorado", label: "Colorado" },
  { value: "Connecticut", label: "Connecticut" },
  { value: "Delaware", label: "Delaware" },
  { value: "District of Columbia", label: "District of Columbia" },
  { value: "Florida", label: "Florida" },
  { value: "Georgia", label: "Georgia" },
  { value: "Hawaii", label: "Hawaii" },
  { value: "Idaho", label: "Idaho" },
  { value: "Illinois", label: "Illinois" },
  { value: "Indiana", label: "Indiana" },
  { value: "Iowa", label: "Iowa" },
  { value: "Kansas", label: "Kansas" },
  { value: "Kentucky", label: "Kentucky" },
  { value: "Louisiana", label: "Louisiana" },
  { value: "Maine", label: "Maine" },
  { value: "Maryland", label: "Maryland" },
  { value: "Massachusetts", label: "Massachusetts" },
  { value: "Michigan", label: "Michigan" },
  { value: "Minnesota", label: "Minnesota" },
  { value: "Mississippi", label: "Mississippi" },
  { value: "Missouri", label: "Missouri" },
  { value: "Montana", label: "Montana" },
  { value: "Nebraska", label: "Nebraska" },
  { value: "Nevada", label: "Nevada" },
  { value: "New Hampshire", label: "New Hampshire" },
  { value: "New Jersey", label: "New Jersey" },
  { value: "New Mexico", label: "New Mexico" },
  { value: "New York", label: "New York" },
  { value: "North Carolina", label: "North Carolina" },
  { value: "North", label: "North" },
  { value: "Ohio", label: "Ohio" },
  { value: "Oklahoma", label: "Oklahoma" },
  { value: "Oregon", label: "Oregon" },
  { value: "Pennsylvania", label: "Pennsylvania" },
  { value: "Rhode Island", label: "Rhode Island" },
  { value: "South Carolina", label: "South Carolina" },
  { value: "South Dakota", label: "South Dakota" },
  { value: "Tennessee", label: "Tennessee" },
  { value: "Texas", label: "Texas" },
  { value: "Utah", label: "Utah" },
  { value: "Vermont", label: "Vermont" },
  { value: "Virginia", label: "Virginia" },
  { value: "Washington", label: "Washington" },
  { value: "West Virginia", label: "West Virginia" },
  { value: "Wisconsin", label: "Wisconsin" },
  { value: "Wyoming", label: "Montana" }
];

//Single Select

export const singleselect = [
  { id: 1, value: "This is a placeholder",label:"This is a placeholder" },
  { id: 2, value: "Choice 1" ,label:"Choice 1"},
  { id: 3, value: "Choice 2" ,label:"Choice 2"},
  { id: 4, value: "Choice 3" ,label:"Choice 3"},
]


export const subjectType = [
  { id: 1, value: "Language",label:"Language" },
  { id: 2, value: "Theory" ,label:"Theory"},
  { id: 3, value: "Practical", label:"Practical"},
  { id: 4, value: "Sports", label:"Sports"},
  { id: 5, value: "Extra-curricular Activity" ,label:"Extra-curricular Activity"},
]
export const subjectCode = [
  { id: 1, value: "SUB001",label:"SUB001" },
  { id: 2, value: "SUB002" ,label:"SUB002"},
  { id: 3, value: "SUB003", label:"SUB003"},
  
]

export const assignedSubject = [
  { id: 1, value: "Marathi",label:"Marathi" },
  { id: 2, value: "Hindi" ,label:"Hindi"},
  { id: 3, value: "English", label:"English"},
  { id: 4, value: "Sanskrit", label:"Sanskrit"},
  { id: 5, value: "Mathematics" ,label:"Mathematics"},
  { id: 6, value: "History" ,label:"History"},
  { id: 7, value: "Economics" ,label:"Economics"},
  { id: 8, value: "Geography" ,label:"Geography"},
  { id: 9, value: "Computer" ,label:"Computer"},
  { id: 10, value: "General Science" ,label:"General Science"},
  { id: 11, value: "Physical Education" ,label:"Physical Education"},
  { id: 12, value: "Social Studies" ,label:"Social Studies"},
  { id: 13, value: "Other" ,label:"Other"},
]




export const className = [
  { id: 1, value: "Select Class Name",label:"Select Class Name" },
  { id: 2, value: "5th Class" ,label:"5th Class"},
  { id: 3, value: "6th Class" ,label:"6th Class"},
  { id: 4, value: "7th Class" ,label:"7th Class"},
  { id: 5, value: "8th Class" ,label:"8th Class"},
  { id: 6, value: "9th Class" ,label:"9th Class"},
  { id: 7, value: "10th Class" ,label:"10th Class"},
  { id: 8, value: "11th Class" ,label:"11th Class"},
  { id: 9, value: "12th Class" ,label:"12th Class"},
]
export const schoolBoard = [
  { id: 1, value: "Select Board",label:"Select Board" },
  { id: 2, value: "SSC" ,label:"SSC"},
  { id: 3, value: "HSC" ,label:"HSC"},
  { id: 4, value: "CBSC" ,label:"CBSC"},
]
export const mealType = [
  { id: 1, value: "Select Meal",label:"Select Meal" },
  { id: 2, value: "Breakfast" ,label:"Breakfast"},
  { id: 3, value: "Lunch" ,label:"Lunch"},
  { id: 4, value: "Dinner" ,label:"Dinner"},
]
export const department = [
  { id: 1, value: "Academic department",label:"Academic department" },
  { id: 2, value: "Admistrative department " ,label:"Admistrative department "},
  { id: 3, value: "Sport department" ,label:"Sport department"},
  { id: 4, value: "Computer department" ,label:"Computer department"},
  { id: 5, value: "Librar  department" ,label:"Library department"},
  { id: 6, value: "Laboratory department" ,label:"Laboratory department"},
]

export const schoolCategory = [
  { id: 1, value: "Primary School",label:"Primary School" },
  { id: 2, value: "Secondary School" ,label:"Secondary School"},
]

export const prakalpName  = [
  { id: 1, value: "Prakalp Name",label:"Prakalp Name" },
  { id: 2, value: "Aheri" ,label:"Aheri"},
  { id: 3, value: "Bhambaragad" ,label:"Bhambaragad"},
  { id: 3, value: "Bhandara" ,label:"Bhandara"},
  { id: 3, value: "Chandrapur" ,label:"Chandrapur"},
  { id: 3, value: "Chimur" ,label:"Chimur"},
  { id: 3, value: "Devari" ,label:"Devari"},
  { id: 3, value: "Gadchiroli" ,label:"Gadchiroli"},
  { id: 3, value: "Nagpur" ,label:"Nagpur"},
  { id: 3, value: "Wardha" ,label:"Wardha"},
]

export const leaveType  = [
  { id: 1, value: "Select Leave Type",label:"Leave Type" },
  { id: 2, value: "Casual" ,label:"Casual"},
  { id: 3, value: "Sick" ,label:"Sick"},
  { id: 4, value: "Annual" ,label:"Annual"},
  { id: 5, value: "Maternity" ,label:"Maternity"},
  { id: 6, value: "Paternity" ,label:"Paternity"},
  { id: 7, value: "Child Development Leave" ,label:"Child Development Leave"},
  { id: 8, value: "Unpaid" ,label:"Unpaid"},
  { id: 9, value: "Other" ,label:"Other"},
]
 
export const shift = [
  {id:1, value:"Morning shift", label:"Morning shift"},
  {id:2, value:"Afternoon shift", label:"Afternoon shift"},
]

export const description = [
  { id: 1, value: "A",label:"A" },
  { id: 2, value: "B" ,label:"B"},
  { id: 3, value: "C" ,label:"C"},
]

export const roleID = [
  
  {id:1, value:"Principal", label:"Principal" },
  {id:2, value:"Vice-Principal", label:"Vice-Principal" },
  {id:3, value:"Teacher", label:"Teacher" },
  {id:4, value:"Warden", label:"Warden" },
  {id:5, value:"Librarian", label:"Librarian" },
  {id:6, value:"Labortory assistant", label:"Labortory assistant" },
  {id:7, value:"Accountant", label:"Accountant" },
  {id:8, value:"Security guard", label:"Security guard" },
  {id:9, value:"Other", label:"Other" },
]
export const reportType = [
  
  {id:1, value:"Exam Report", label:"Exam Report" },
  {id:2, value:"Expense Report", label:"Expense Report" },
  {id:3, value:"Hostel Attendance Report", label:"Hostel Attendance Report" },
  {id:4, value:"Student Health Report", label:"Student Health Report" },
  {id:5, value:"Student Attendance Report", label:"Student Attendance Report" },
  {id:6, value:"Staff Attendance Report", label:"Staff Attendance Report" },
]



export const academicYear = [  
  { id: 1, value: "2024-2025", label:"2024-2025" },
  { id: 2, value: "2025-2026" ,label:"2025-2026"},
  { id: 3, value: "2026-2027" ,label:"2026-2027"},
]
 
export const classIDSelect = [  
  { id: 1, value: 1, label:1 },
  { id: 2, value: 2 ,label:2},
  { id: 3, value: 3 ,label:3},
  { id: 4, value: 4 ,label:4},
  { id: 5, value: 5 ,label:5},
  { id: 6, value: 6 ,label:6},
  { id: 7, value: 7 ,label:7},
]
export const genderSelect = [  
  { id: 1, value: "Male", label:"Male" },
  { id: 2, value: "Female" ,label:"Female"},
  // { id: 2, value: "Transgender" ,label:"Transgender"},
  // { id: 3, value: "Others" ,label:"Others"},
]
export const enableLogin = [  
  { id: 1, value: "Yes", label:"Yes" },
  { id: 2, value: "No" ,label:"No"},
  
]
 
export const examType = [  
  { id: 1, value: "Internal", label:"Internal" },
  { id: 2, value: "External" ,label:"External"},
  
]
 
export const stateSelect = [  
  { id: 1, value: "Andhra Pradesh", label:"Andhra Pradesh" },
  { id: 2, value: "Arunachal Pradesh" ,label:"Arunachal Pradesh"},
  { id: 3, value: "Assam Bihar" ,label:"Assam Bihar"},
  { id: 4, value: "Chhattisgarh" ,label:"Chhattisgarh"},
  { id: 5, value: "Goa" ,label:"Goa"},
  { id: 6, value: "Gujarat" ,label:"Gujarat"},
  { id: 7, value: "Haryana" ,label:"Haryana"},
  { id: 8, value: "Himachal Pradesh" ,label:"Himachal Pradesh"},
  { id: 9, value: "Jharkhand" ,label:"Jharkhand"},
  { id: 10, value: "Karnataka" ,label:"Karnataka"},
  { id: 11, value: "Kerala" ,label:"Kerala"},
  { id: 12, value: "Maharashtra" ,label:"Maharashtra"},
  { id: 13, value: "Madhya Pradesh" ,label:"Madhya Pradesh"},
  { id: 14, value: "Manipur" ,label:"Manipur"},
  { id: 15, value: "Meghalaya" ,label:"Meghalaya"},
  { id: 16, value: "Mizoram" ,label:"Mizoram"},
  { id: 17, value: "Nagaland" ,label:"Nagaland"},
  { id: 18, value: "Odisha" ,label:"Odisha"},
  { id: 19, value: "Rajasthan" ,label:"Rajasthan"},
  { id: 20, value: "Sikkim" ,label:"Sikkim"},
  { id: 21, value: "Tamil Nadu" ,label:"Tamil Nadu"},
  { id: 22, value: "Tripura" ,label:"Tripura"},
  { id: 23, value: "Telangana" ,label:"Telangana"},
  { id: 24, value: "Uttar Pradesh" ,label:"Uttar Pradesh"},
  { id: 25, value: "Uttarakhand" ,label:"Uttarakhand"},
  { id: 26, value: "West Bengal" ,label:"West Bengal"},
  { id: 27, value: "Andaman & Nicobar" ,label:"Andaman & Nicobar"},
  { id: 28, value: "(UT) Chandigarh" ,label:"(UT) Chandigarh"},
  { id: 29, value: "(UT) Dadra & Nagar Haveli and Daman & Diu" ,label:"(UT) Dadra & Nagar Haveli and Daman & Diu"},
  { id: 30, value: "(UT) Delhi [National Capital Territory (NCT)]" ,label:"(UT) Delhi [National Capital Territory (NCT)]"},
  { id: 31, value: "(UT) Ladakh" ,label:"(UT) Ladakh"},
  { id: 32, value: "(UT) Lakshadweep" ,label:"(UT) Lakshadweep"},
  { id: 33, value: "(UT) Puducherry" ,label:"(UT) Puducherry"},
]
 
export const bloodGroupSelect = [  
  { id: 1, value: "O+", label:"O+" },
  { id: 2, value: "O-" ,label:"O-"},
  { id: 3, value: "A+", label:"A+" },
  { id: 4, value: "A-" ,label:"A-"},
  { id: 5, value: "B+", label:"B+" },
  { id: 6, value: "B-" ,label:"B-"},
  { id: 7, value: "AB+", label:"AB+" },
  { id: 8, value: "AB-" ,label:"AB-"},

]
 
export const sectionselect = [  
  { id: 1, value: "A", label:"A" },
  { id: 2, value: "B" ,label:"B"},
  { id: 3, value: "C" ,label:"C"},
  { id: 4, value: "D" ,label:"D"},
]
 
export const dietDay = [  
  { id: 1, value: "Monday", label:"Monday" },
  { id: 2, value: "Tuesday" ,label:"Tuesday"},
  { id: 3, value: "Wednesday" ,label:"Wednesday"},
  { id: 4, value: "Thursday" ,label:"Thursday"},
  { id: 5, value: "Friday" ,label:"Friday"},
  { id: 6, value: "Saturday" ,label:"Saturday"},
  { id: 7, value: "Sunday" ,label:"Sunday"},
]
 
 
export const category = [  
  { id: 1, value: "Furniture", label:"Furniture" },
  { id: 2, value: "Electronics" ,label:"Electronics"},
  { id: 3, value: "Electricity bill" ,label:"Electricity bill"},
  { id: 4, value: "Water bill" ,label:"Water bill"},
  { id: 5, value: "Muncipal corporation tax" ,label:"Muncipal corporation tax"},
  { id: 6, value: "Gram panchayat Tax" ,label:"Gram panchayat Tax"},
  { id: 7, value: "Stationary" ,label:"Stationary"},
  { id: 7, value: "Transport" ,label:"Transport"},
  { id: 7, value: "Groceries" ,label:"Groceries"},
  { id: 7, value: "Plumber" ,label:"Plumber"},
  { id: 7, value: "Cleaner" ,label:"Cleaner"},
  { id: 7, value: "Other" ,label:"Other"},
]
 


//
export const Choosedata = [
  { id: 1, value: "Choice 1" },
  { id: 2, value: "Choice 2" },
  { id: 3, value: "Choice 3" },
  { id: 4, value: "Choice 4" },
]
//Options Added Via Config With No Search
export const Optionwithnosearch = [
  { value: 'Label One', label: 'Label One' },
  { value: 'Label Two', label: 'Label Two' },
  { value: 'Label Three', label: 'Label Three' },
  { value: 'Label Four', label: 'Label Four' },
  { value: 'Label Five', label: 'Label Five' },
  { value: 'Label Six', label: 'Label Six' },
];
export const Multipleselectdata = [
  { value: 'Choice 1', label: 'Choice 1' },
  { value: 'Choice 2', label: 'Choice 2' },
  { value: 'Choice 3', label: 'Choice 3' },
  { value: 'Choice 4', label: 'Choice 4' },
  { value: 'Choice 5', label: 'Choice 5' },
  { value: 'Choice 6', label: 'Choice 6', isDisabled: 'isDisabled' },
];
export const Multipleselectdata1 = [
  { value: 'Choice 1', label: 'Choice 1' },
  { value: 'Choice 2', label: 'Choice 2' },
  { value: 'Choice 3', label: 'Choice 3' },
  { value: 'Choice 4', label: 'Choice 4' }
];
const Group1 = [
  { value: "Montreal", label: "Montreal" },
  { value: "Toronto", label: "Toronto" },
  { value: "Vancouver", label: "Vancouver" }
];
const Group2 = [
  { value: 'Paris', label: 'Paris' },
  {
    value: 'Lyon',
    label: 'Lyon'
  },
  {
    value: 'Marseille',
    label: 'Marseille'
  },

];

const Group3 = [
  {
    value: 'Madrid',
    label: 'Madrid'
  },
  {
    value: 'Barcelona',
    label: 'Barcelona',
  },
  {
    value: 'Malaga',
    label: 'Malaga'
  },

];
const Group4 = [
  {
    value: 'London',
    label: 'London'
  },
  {
    value: 'Manchester',
    label: 'Manchester'
  },
  {
    value: 'Liverpool',
    label: 'Liverpool'
  },

];
const Group5 = [
  {
    value: 'New York',
    label: 'New York'
  },
  {
    value: 'Washington',
    label: 'Washington',
    isDisabled: 'isDisabled'
  },
  {
    value: 'Michigan',
    label: 'Michigan'
  },

];
const groupeddata = [
  {
    label: 'CA',
    options: Group1
  },
  {
    label: 'FR',
    options: Group2
  },
  {
    label: 'SP',
    options: Group3
  },
  {
    label: 'UK',
    options: Group4
  },
  {
    label: 'US',
    options: Group5
  }

];
export function SingleGroup() {
  const [selected, setSelected] = useState([]);

  return (
    <div>
      <Creatable
      className="rounded-sm !py-2 !px-3"
        classNamePrefix="react-select"
        options={groupeddata}
        value={selected}
        onChange={setSelected}
      />
    </div>
  );
}
