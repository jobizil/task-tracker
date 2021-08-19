import React from 'react'
import Button from '../Button.component' 

const Header = ({title}) => {
    return (
        <div>
        <header className='header'>
            <h1> {title} </h1>
            < Button color='green' text='Add' />
        </header>
   
        </div>
    )
}

Header.defaultProps = {
    title: 'Task Tracker'
}

export default Header 