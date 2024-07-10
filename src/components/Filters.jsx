import React from 'react'

const Filters = () => {
  const filterBtn = ["All", "Most Popular", "Mixes", "Data Structures and Algorithms", "Tourism", "Vlog", "Javascript", "React", "Array" ]
  return (
    <div className="my-3">
        {filterBtn.map((btn) => (<button className="py-1 px-3 mx-2 rounded-md bg-slate-300">{btn}</button>))}
    </div>
  )
}

export default Filters;