import Navbar from '../../components/navbar/Navbar'
import './hero-section.scss'

const HeroSection = () => {
    return (
        <section className="hero">
            <Navbar />
            <section className="hero-content">
                <h1>Hello, I'm Alisher</h1>
                <hr />
                <h2>a web developer</h2>
            </section>
        </section>
    )
}

export default HeroSection;