import React, { useState } from 'react'
import TimeInnerTable from './timeInnerTable'

const TimeTableTabs = ({selectedOption}) => {
console.log("TimeTableTabs", selectedOption)
const [selectedDay, setSelectedDay] = useState('Monday'); // Default to 'Monday' or any starting day
const handleDayChange = (day) => {
    setSelectedDay(day);
};

const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  return (
    <div>
      <div className='box'>
      <div className="p-4 timetab-wrapper">
              <select id="tab-select" className="mb-5 sm:hidden py-2 px-3 pe-9 block w-full border-gray-200 rounded-sm text-sm focus:border-primary focus:ring-primary dark:bg-bgdark dark:border-white/10 dark:text-[#8c9097] dark:text-white/50" aria-label="Tabs">
                <option value="#hs-tab-to-select-1">Monday</option>
                <option value="#hs-tab-to-select-2">Tuesday</option>
                <option value="#hs-tab-to-select-3">Wednesday</option>
                <option value="#hs-tab-to-select-4">Thursday</option>
                <option value="#hs-tab-to-select-5">Friday</option>
                <option value="#hs-tab-to-select-6">Saturday</option>
                <option value="#hs-tab-to-select-7">Sunday</option>
              </select>

              <div className="hidden sm:block border-b-0 border-gray-200 dark:border-white/10">
                <nav className="flex timetable-navs space-x-2 rtl:space-x-reverse" aria-label="Tabs">
                  <button type="button" className="hs-tab-active:bg-white hs-tab-active:border-b-transparent hs-tab-active:text-primary dark:hs-tab-active:bg-transparent dark:hs-tab-active:border-b-white/10 dark:hs-tab-active:text-primary -mb-px py-2 px-3 inline-flex items-center gap-2 bg-gray-50 text-sm font-medium text-center border text-defaulttextcolor rounded-t-sm hover:text-primary dark:bg-black/20 dark:border-white/10 dark:text-[#8c9097] dark:text-white/50 dark:hover:text-gray-300 active" id="hs-tab-to-select-item-1" data-hs-tab="#hs-tab-to-select-1" aria-controls="hs-tab-to-select-1">
                  Monday
                  </button>
                  <button type="button" className="hs-tab-active:bg-white hs-tab-active:border-b-transparent hs-tab-active:text-primary dark:hs-tab-active:bg-transparent dark:hs-tab-active:border-b-white/10 dark:hs-tab-active:text-primary -mb-px py-2 px-3 inline-flex items-center gap-2 bg-gray-50 text-sm font-medium text-center border text-defaulttextcolor rounded-t-sm hover:text-primary dark:bg-black/20 dark:border-white/10 dark:text-[#8c9097] dark:text-white/50 dark:hover:text-gray-300" id="hs-tab-to-select-item-2" data-hs-tab="#hs-tab-to-select-2" aria-controls="hs-tab-to-select-2">
                    Tuesday
                  </button>
                  <button type="button" className="hs-tab-active:bg-white hs-tab-active:border-b-transparent hs-tab-active:text-primary dark:hs-tab-active:bg-transparent dark:hs-tab-active:border-b-white/10 dark:hs-tab-active:text-primary -mb-px py-2 px-3 inline-flex items-center gap-2 bg-gray-50 text-sm font-medium text-center border text-defaulttextcolor rounded-t-sm hover:text-primary dark:bg-black/20 dark:border-white/10 dark:text-[#8c9097] dark:text-white/50 dark:hover:text-gray-300" id="hs-tab-to-select-item-3" data-hs-tab="#hs-tab-to-select-3" aria-controls="hs-tab-to-select-3">
                    Wednesday
                  </button>
                  <button type="button" className="hs-tab-active:bg-white hs-tab-active:border-b-transparent hs-tab-active:text-primary dark:hs-tab-active:bg-transparent dark:hs-tab-active:border-b-white/10 dark:hs-tab-active:text-primary -mb-px py-2 px-3 inline-flex items-center gap-2 bg-gray-50 text-sm font-medium text-center border text-defaulttextcolor rounded-t-sm hover:text-primary dark:bg-black/20 dark:border-white/10 dark:text-[#8c9097] dark:text-white/50 dark:hover:text-gray-300" id="hs-tab-to-select-item-4" data-hs-tab="#hs-tab-to-select-4" aria-controls="hs-tab-to-select-4">
                    Thursday
                  </button>
                  <button type="button" className="hs-tab-active:bg-white hs-tab-active:border-b-transparent hs-tab-active:text-primary dark:hs-tab-active:bg-transparent dark:hs-tab-active:border-b-white/10 dark:hs-tab-active:text-primary -mb-px py-2 px-3 inline-flex items-center gap-2 bg-gray-50 text-sm font-medium text-center border text-defaulttextcolor rounded-t-sm hover:text-primary dark:bg-black/20 dark:border-white/10 dark:text-[#8c9097] dark:text-white/50 dark:hover:text-gray-300" id="hs-tab-to-select-item-5" data-hs-tab="#hs-tab-to-select-5" aria-controls="hs-tab-to-select-5">
                    Friday
                  </button>
                  <button type="button" className="hs-tab-active:bg-white hs-tab-active:border-b-transparent hs-tab-active:text-primary dark:hs-tab-active:bg-transparent dark:hs-tab-active:border-b-white/10 dark:hs-tab-active:text-primary -mb-px py-2 px-3 inline-flex items-center gap-2 bg-gray-50 text-sm font-medium text-center border text-defaulttextcolor rounded-t-sm hover:text-primary dark:bg-black/20 dark:border-white/10 dark:text-[#8c9097] dark:text-white/50 dark:hover:text-gray-300" id="hs-tab-to-select-item-6" data-hs-tab="#hs-tab-to-select-6" aria-controls="hs-tab-to-select-6">
                    Saturday
                  </button>
                  <button type="button" className="hs-tab-active:bg-white hs-tab-active:border-b-transparent hs-tab-active:text-primary dark:hs-tab-active:bg-transparent dark:hs-tab-active:border-b-white/10 dark:hs-tab-active:text-primary -mb-px py-2 px-3 inline-flex items-center gap-2 bg-gray-50 text-sm font-medium text-center border text-defaulttextcolor rounded-t-sm hover:text-primary dark:bg-black/20 dark:border-white/10 dark:text-[#8c9097] dark:text-white/50 dark:hover:text-gray-300" id="hs-tab-to-select-item-7" data-hs-tab="#hs-tab-to-select-7" aria-controls="hs-tab-to-select-7">
                    Sunday
                  </button>
                </nav>
              </div>

              <div className="">
                <div id="hs-tab-to-select-1" role="tabpanel" aria-labelledby="hs-tab-to-select-item-1">
                 <h3 className='pt-4 pb-4'>MONDAY</h3>
                 <TimeInnerTable  selectedOption={selectedOption} />
                </div>
                <div id="hs-tab-to-select-2" className="hidden" role="tabpanel" aria-labelledby="hs-tab-to-select-item-2">
                <h3 className='pt-4 pb-4'>TUESDAY</h3>
                </div>
                <div id="hs-tab-to-select-3" className="hidden" role="tabpanel" aria-labelledby="hs-tab-to-select-item-3">
                  <p className="text-gray-500 dark:text-[#8c9097] dark:text-white/50 p-5 border rounded-sm  sm:rounded-ss-none dark:border-white/10 border-gray-200">
                    Unbelievable healthy snack success stories. 12 facts about safe food handling tips that will impress your friends. Restaurant weeks by the numbers. Will mexican food ever rule the world? The 10 best thai restaurant youtube videos. How restaurant weeks can make you sick. The complete beginner's guide to cooking healthy food. Unbelievable food stamp success stories. How whole foods markets are making the world a better place. 16 things that won't happen in dish reviews.
                  </p>
                </div>
                <div id="hs-tab-to-select-4" className="hidden" role="tabpanel" aria-labelledby="hs-tab-to-select-item-4">
                  <p className="text-gray-500 dark:text-[#8c9097] dark:text-white/50 p-5 border rounded-sm  sm:rounded-ss-none dark:border-white/10 border-gray-200">
                    Unbelievable healthy snack success stories. 12 facts about safe food handling tips that will impress your friends. Restaurant weeks by the numbers. Will mexican food ever rule the world? The 10 best thai restaurant youtube videos. How restaurant weeks can make you sick. The complete beginner's guide to cooking healthy food. Unbelievable food stamp success stories. How whole foods markets are making the world a better place. 16 things that won't happen in dish reviews.
                  </p>
                </div>
                <div id="hs-tab-to-select-5" className="hidden" role="tabpanel" aria-labelledby="hs-tab-to-select-item-5">
                  <p className="text-gray-500 dark:text-[#8c9097] dark:text-white/50 p-5 border rounded-sm  sm:rounded-ss-none dark:border-white/10 border-gray-200">
                    Unbelievable healthy snack success stories. 12 facts about safe food handling tips that will impress your friends. Restaurant weeks by the numbers. Will mexican food ever rule the world? The 10 best thai restaurant youtube videos. How restaurant weeks can make you sick. The complete beginner's guide to cooking healthy food. Unbelievable food stamp success stories. How whole foods markets are making the world a better place. 16 things that won't happen in dish reviews.
                  </p>
                </div>
                <div id="hs-tab-to-select-6" className="hidden" role="tabpanel" aria-labelledby="hs-tab-to-select-item-6">
                  <p className="text-gray-500 dark:text-[#8c9097] dark:text-white/50 p-5 border rounded-sm  sm:rounded-ss-none dark:border-white/10 border-gray-200">
                    Unbelievable healthy snack success stories. 12 facts about safe food handling tips that will impress your friends. Restaurant weeks by the numbers. Will mexican food ever rule the world? The 10 best thai restaurant youtube videos. How restaurant weeks can make you sick. The complete beginner's guide to cooking healthy food. Unbelievable food stamp success stories. How whole foods markets are making the world a better place. 16 things that won't happen in dish reviews.
                  </p>
                </div>
                <div id="hs-tab-to-select-7" className="hidden" role="tabpanel" aria-labelledby="hs-tab-to-select-item-7">
                  <p className="text-gray-500 dark:text-[#8c9097] dark:text-white/50 p-5 border rounded-sm  sm:rounded-ss-none dark:border-white/10 border-gray-200">
                    Unbelievable healthy snack success stories. 12 facts about safe food handling tips that will impress your friends. Restaurant weeks by the numbers. Will mexican food ever rule the world? The 10 best thai restaurant youtube videos. How restaurant weeks can make you sick. The complete beginner's guide to cooking healthy food. Unbelievable food stamp success stories. How whole foods markets are making the world a better place. 16 things that won't happen in dish reviews.
                  </p>
                </div>
              </div>
            </div>
      </div>
    </div>
  )
}

export default TimeTableTabs
