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
export const classDropDown = [
  { id: 1, value: "Select Class Name",label:"Select Class Name" },
  { id: 2, value: "5th Class" ,label:"5th Class"},
  { id: 3, value: "6th Class" ,label:"6th Class"},
  { id: 3, value: "7th Class" ,label:"7th Class"},
  { id: 3, value: "8th Class" ,label:"8th Class"},
  { id: 3, value: "9th Class" ,label:"9th Class"},
  { id: 3, value: "10th Class" ,label:"10th Class"},
  { id: 3, value: "11th Class" ,label:"11th Class"},
  { id: 3, value: "12th Class" ,label:"12th Class"},
]
export const schoolBoard = [
  { id: 1, value: "Select Board",label:"Select Board" },
  { id: 2, value: "SSC" ,label:"SSC"},
  { id: 3, value: "CBSC" ,label:"CBSC"},
]

export const prakalpName  = [
  { id: 1, value: "Select Prakalp Name",label:"Prakalp Name" },
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


export const academicYearDrop = [  
  { id: 1, value: "2024-2025", label:"2024-2025" },
  { id: 2, value: "2025-2026" ,label:"2025-2026"},
  { id: 3, value: "2026-2027" ,label:"2026-2027"},
]
 
export const classIdselect = [  
  { id: 1, value: "1", label:"1" },
  { id: 2, value: "2" ,label:"2"},
  { id: 3, value: "3" ,label:"3"},
]
 
export const sectionselect = [  
  { id: 1, value: "A", label:"A" },
  { id: 2, value: "B" ,label:"B"},
  { id: 3, value: "C" ,label:"C"},
  { id: 4, value: "D" ,label:"D"},
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
