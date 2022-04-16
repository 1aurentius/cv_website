import '../../App.css'
import Navbar from '../navigation/Navbar'
import Footer from '../Footer'
import Timeline from '../Timeline'

function Work() {
    return (
        <div className='page-container'>
            <div className='content-wrap'>
                <Navbar />
                <Timeline />
                <Footer />
            </div>
        </div>
    )
}

export default Work;