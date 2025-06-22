import React from 'react'

const Pagination = ({data}) => {
    let pageNumbers = []

    for(let i=1; i< Math.ceil(data.length/10);i++){

      pageNumbers.push(i);
    }
  return (
    <div>
        <center>
            {pageNumbers.map(page => <div className="pagebutton">{page}</div>)}
        </center>
    </div>
  )
}

export default Pagination