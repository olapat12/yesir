import React from 'react'

export default function Header({children, hero}){
    return(
        <header className={hero}>
            {children}
        </header>
    )
}
