import React from 'react'

const Loader = () => {
  return (
    <div className='loader-parent'>
    <div className="text-center loader-css flex  justify-center">
    <div className="ti-spinner" role="status">
        <span className="sr-only">Loading...</span>
    </div>
    <strong className='text-loading'>Loading...</strong>
</div>
</div>
  )
}

export default Loader