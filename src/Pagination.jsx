import React from 'react'

const Pagination = () => {
    let pageNumbers = [1,2,3,4,5,6,7,8,9,10]
  return (
    <div>
        <center>
            {pageNumbers.map(page => <div className='pagebutton'>{page}</div>)}
        </center>
    </div>
  )
}

export default Pagination