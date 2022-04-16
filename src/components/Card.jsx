import '../components/Card.css'
import data from '../components/Data.js'

const Card = ( props ) => {
    const { title, description, role, links, logo } = props

    return (
        <div id={title} className='timeline-card-wrapper'>
            <div className='timeline-cards'>
                <div className='card-text'>
                    <h1 className='company-title'>{title}</h1>
                    <h2 className='company-role'>{role}</h2>
                    <p>{description}</p>
                    <button className='card-buttons' href={{links}}>website</button>
                    
                </div>
                <div className='card-img'>
                    <img id='logos' src={logo} />
                </div>
            </div>
        </div>
    ) 
}

export default Card;