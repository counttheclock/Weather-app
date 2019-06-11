import React from 'react'

const Error = (props) => {
  return (
    <div className="error_wrapper" onAnimationEnd={props.fadeFalse}>
      <div className="error-1">
        Something Went Wrong With Your Search...
      </div>
      <div className="error-2">
        Please Check the ZIP Code/Country and try again
      </div>
    </div>
  )
}

export default Error
