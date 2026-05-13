import React from 'react'

const TitleInfo = ({ title, desc, classname }) => {
    return (
        <div className='section-header'>
            <h1 className='section-title'>{title}</h1>
            <p className='section-desc'>{desc}</p>
        </div>
    )
}

export default TitleInfo
