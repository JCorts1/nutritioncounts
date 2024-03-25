import React from 'react'

const BrownButton = ({text = "Hello"}) => {
  return (
    <div>
       <div className="bg-[#CD8D7A] w-40 h-14 rounded-2xl flex justify-center items-center"> 
        <a className="text-[#ffffff] text-4xl" href="#">{text}</a>
      </div>
    </div>
  )
}

export default BrownButton
