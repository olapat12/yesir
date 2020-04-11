import React from 'react'


export default  function Banner({children, title, subtitle, click}){

    return(
        <div className='banner'>
           <h1>{title}</h1>
           <div></div>
           <h3>{subtitle}</h3>
           <p>{click}</p>
           {children}
        </div>
    )
}

