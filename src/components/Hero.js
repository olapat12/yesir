import React from 'react'

export default function Hero({children, hero}){
    return(
        <header style={hero}>
            {children}
        </header>
    )
}

