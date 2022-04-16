import React, { useState } from 'react'
import '../App.css'
import './Timeline.css'
import Card from './Card.jsx'
import data from './Data.js'

function Timeline() {
    return (
        <div id='work'>
            <div id='timeline-hero'>
                <h1 id='timeline-header'>Learn about my work and projects by scrolling</h1>
                <p>...or skip to certain parts by using the logos.</p>

            </div>
            <div className='timeline-container'>
                <div className='timeline-column-1'>
                    <div className='company-logos'>
                        {data.map(company => (
                            <a href={`#${company.title}`}><img className='company-logo' src={company.logo} /></a>
                        ))}
                    </div>
                </div>
                <div className='timeline-column-2'>
                    {data.map(company => (
                        <Card
                            key={company.title}
                            role={company.role}
                            title={company.title}
                            description={company.description}
                            logo={company.logo}
                            links={company.links} />
                    ))}
                </div>
            </div>
            <div className='contact-div'>
                <h1>HEROOOOO</h1>
            </div>
        </div>
    )
}

export default Timeline;