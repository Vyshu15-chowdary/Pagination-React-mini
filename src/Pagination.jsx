import React from 'react'


const Pagination = ({data,pageHandler}) => {
    let pageNumbers = []

    for(let i=1; i< Math.ceil(data.length/10)+1;i++){

      pageNumbers.push(i);
    }
  return (
    <div>
        <center>
            {pageNumbers.map(page => <div className="pagebutton"
            onClick={()=> pageHandler(page)}>{page}</div>)}
        </center>
    </div>
  )
}

export default Pagination