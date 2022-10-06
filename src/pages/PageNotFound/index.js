import React from 'react'
import pageNotFound from '../../Assets/images/pageNotFound.svg'
const PageNotFound = () => {
  return (
    <div className="text-xl">
        <img src={pageNotFound} className="mt-4 md:mt-0 w-3/4 md:w-1/3 mx-auto" alt="Page-Not-Found"/>
    </div>
  )
}

export default PageNotFound