import React, {  useState } from 'react'
import { Link } from 'react-router-dom';
import DietIndDetails from './dietIndDetails';


const DietList = () => {
    const [selectedDay, setSelectedDay] = useState('Monday'); // Default to 'Monday' or any starting day
    const handleDayChange = (day) => {
        setSelectedDay(day);
    };
   
    const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    return (
        <div>
            <div className="grid grid-cols-12 gap-x-6">
                <div className="xl:col-span-12 col-span-12">
                    <div className="grid grid-cols-12 gap-x-6">
                        <div className="xxl:col-span-12 xl:col-span-12 col-span-12">

                            <h4 className='pt-4'>Diet Plan</h4>
                            <div className="diet-flex-container">
                                <div className='flex flex-row items-center'>
                                    {/* <div className='backButton'>
                                <Link to={`${import.meta.env.BASE_URL}pages/staff/staffDetails`}>

                                    <button type="button" className="ti-btn ti-btn-info-full ti-btn-wave">Back</button>
                                </Link>
                            </div> */}
                                    <div className="breadcrumbs self-center">
                                        <div className="breadcrumbs !border-0 pb-4">
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
                                                    Diet Plan
                                                </li>
                                            </ol>
                                        </div>
                                    </div>

                                </div>


                            </div>

                            <div className="box">

                                <div id="sessions">
                                    {/*  */}
                                    <div className="createstudent-btn flex justify-between w-100 p-4 !pb-0">
                                        <h4>Diet Plan Details</h4>
                                        <Link to={`${import.meta.env.BASE_URL}pages/diet/createDiet`}>
                                            <button type="button" className="ti-btn ti-btn-warning-full !rounded-full ti-btn-wave"> Create Diet</button>
                                        </Link>
                                    </div>
                                    <div className="box-body">
                                        <div className="border-b-2 border-gray-200 dark:border-white/10">
                                            <nav className="-mb-0.5 flex space-x-6 rtl:space-x-reverse">
                                                {daysOfWeek.map((day, index) => (
                                                    // <button
                                                    //     key={day}
                                                    //     onClick={() => handleDayChange(day)}
                                                    //     className={selectedDay === day ? 'active' : ''}
                                                    // >
                                                    //     {day}
                                                    // </button>
                                                <Link  key={index} className={selectedDay === day ? 'hs-tab-active:font-semibold hs-tab-active:border-warning hs-tab-active:text-warning py-4 px-1 inline-flex items-center gap-2 border-b-[3px] border-transparent text-sm whitespace-nowrap text-defaulttextcolor  dark:text-[#8c9097] dark:text-white/50 hover:text-warning active' : 'hs-tab-active:font-semibold hs-tab-active:border-warning hs-tab-active:text-warning py-4 px-1 inline-flex items-center gap-2 border-b-[3px] border-transparent text-sm whitespace-nowrap text-defaulttextcolor  dark:text-[#8c9097] dark:text-white/50 hover:text-warning'}to="#"  onClick={() => handleDayChange(day)} id={`underline-item-${index+1}`} data-hs-tab={`#underline-${index+1}`} aria-controls={`underline-${index+1}`}>
                                                    {day}
                                                </Link>
                                                ))}
                                                {/* <Link className="hs-tab-active:font-semibold hs-tab-active:border-warning hs-tab-active:text-warning py-4 px-1 inline-flex items-center gap-2 border-b-[3px] border-transparent text-sm whitespace-nowrap text-defaulttextcolor  dark:text-[#8c9097] dark:text-white/50 hover:text-warning " to="#" id="underline-item-2" data-hs-tab="#underline-2" aria-controls="underline-2">
                                        Tuesday
                                        </Link>
                                        <Link className="hs-tab-active:font-semibold hs-tab-active:border-warning hs-tab-active:text-warning py-4 px-1 inline-flex items-center gap-2 border-b-[3px] border-transparent text-sm whitespace-nowrap text-defaulttextcolor  dark:text-[#8c9097] dark:text-white/50 hover:text-warning " to="#" id="underline-item-2" data-hs-tab="#underline-2" aria-controls="underline-2">
                                        Wednesday
                                        </Link>
                                        <Link className="hs-tab-active:font-semibold hs-tab-active:border-warning hs-tab-active:text-warning py-4 px-1 inline-flex items-center gap-2 border-b-[3px] border-transparent text-sm whitespace-nowrap text-defaulttextcolor  dark:text-[#8c9097] dark:text-white/50 hover:text-warning " to="#" id="underline-item-2" data-hs-tab="#underline-2" aria-controls="underline-2">
                                        Thursday
                                        </Link>
                                        <Link className="hs-tab-active:font-semibold hs-tab-active:border-warning hs-tab-active:text-warning py-4 px-1 inline-flex items-center gap-2 border-b-[3px] border-transparent text-sm whitespace-nowrap text-defaulttextcolor  dark:text-[#8c9097] dark:text-white/50 hover:text-warning " to="#" id="underline-item-2" data-hs-tab="#underline-2" aria-controls="underline-2">
                                        Friday
                                        </Link>
                                        <Link className="hs-tab-active:font-semibold hs-tab-active:border-warning hs-tab-active:text-warning py-4 px-1 inline-flex items-center gap-2 border-b-[3px] border-transparent text-sm whitespace-nowrap text-defaulttextcolor  dark:text-[#8c9097] dark:text-white/50 hover:text-warning " to="#" id="underline-item-2" data-hs-tab="#underline-2" aria-controls="underline-2">
                                        Saturday
                                        </Link>
                                        <Link className="hs-tab-active:font-semibold hs-tab-active:border-warning hs-tab-active:text-warning py-4 px-1 inline-flex items-center gap-2 border-b-[3px] border-transparent text-sm whitespace-nowrap text-defaulttextcolor  dark:text-[#8c9097] dark:text-white/50 hover:text-warning " to="#" id="underline-item-2" data-hs-tab="#underline-2" aria-controls="underline-2">
                                        Sunday
                                        </Link> */}

                                            </nav>
                                        </div>

                                        <div className="mt-3">
                                                <div className='dietInd-deatils-table'>
                                                
                                                <DietIndDetails selectedDay={selectedDay} />
                                                </div>
                                            {/* <div id="underline-1" role="tabpanel" aria-labelledby="underline-item-1">


                                            </div> */}
                                            {/* <div id="underline-2" className="hidden" role="tabpanel" aria-labelledby="underline-item-2">

                                                <div className='dietInd-deatils-table'>
                                                    <DietIndDetails />
                                                </div>

                                            </div>
                                            <div id="underline-3" className="hidden" role="tabpanel" aria-labelledby="underline-item-3">

                                                <div className='dietInd-deatils-table'>
                                                    <DietIndDetails />
                                                </div>

                                            </div>
                                            <div id="underline-4" className="hidden" role="tabpanel" aria-labelledby="underline-item-4">

                                                <div className='dietInd-deatils-table'>
                                                    <DietIndDetails />
                                                </div>

                                            </div>
                                            <div id="underline-5" className="hidden" role="tabpanel" aria-labelledby="underline-item-5">

                                                <div className='dietInd-deatils-table'>
                                                    <DietIndDetails />
                                                </div>

                                            </div>
                                            <div id="underline-6" className="hidden" role="tabpanel" aria-labelledby="underline-item-6">

                                                <div className='dietInd-deatils-table'>
                                                    <DietIndDetails />
                                                </div>

                                            </div>
                                            <div id="underline-7" className="hidden" role="tabpanel" aria-labelledby="underline-item-7">

                                                <div className='dietInd-deatils-table'>
                                                    <DietIndDetails />
                                                </div>

                                            </div> */}

                                        </div>
                                    </div>
                                    {/*  */}

                                </div>

                            </div>
                        </div>

                    </div>
                </div>

            </div>

        </div>
    )
}

export default DietList