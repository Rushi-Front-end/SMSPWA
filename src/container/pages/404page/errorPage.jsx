import React from 'react'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <div className="page-error">
    <div className="error-pagess">
      <div className=" text-defaulttextcolo dark:text-defaulttextcolor/70r text-defaultsize">
        <div className="text-center p-5 my-auto">
          <div className="flex items-center self-center justify-center h-full !text-defaulttextcolor">
            <div className="xl:col-span-12 col-span-12">
              <p className="error-text sm:mb-0 mb-2">404</p>
              <p className="text-[1.125rem] font-semibold mb-4">Oops 😭,The page you are looking for is not available.</p>
              <div className="flex justify-center items-center mb-[3rem]">
                <div className="xl:col-span-6 w-[50%]">
                  <p className="mb-0 opacity-[0.7]">We are sorry for the inconvenience,The page you are trying to access has
                    been removed or never been existed.</p>
                </div>
              </div>
              <Link to={`${import.meta.env.BASE_URL}dashboard`} className="ti-btn bg-primary text-white font-semibold"><i
                  className="ri-arrow-left-line align-middle inline-block"></i>BACK TO HOME</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default ErrorPage