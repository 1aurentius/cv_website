import '../../App.css'
import Hero from '../Hero'
import Navbar from '../navigation/Navbar'
import Footer from '../Footer'
// import Work from './work'
import Timeline from '../Timeline'

function Home() {
    return (
        <div className='page-container'>
            <div className='content-wrap'>
                <Navbar />
                <Hero />
                <Timeline />
                <Footer />
            </div>
        </div>
    )
}

export default Home;