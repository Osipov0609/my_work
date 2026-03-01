import './About.css'
import a1 from './wishperingGlow/about/aboutOne.png'
import a2 from './wishperingGlow/about/aboutTwo.png'
import Header from './Header'
import Footer from './Footer'

export default function About() {
  return (
    <div className='about'>
      <Header />
      <div className="about_box" >
        <img src={a1} alt="" />
        <div className="info">
          <h3>ABOUT US</h3>
          <p>Whispering Glow</p>
          <span>was born from the shared passion of two sisters. Our journey started in our cozy kitchen, where a single flame sparked our love for crafting handmade candles.</span>
        </div>
        <div className="for_a2">
        <img src={a2} alt="" />
            <h3>In Whispering Glow</h3>
            <p>we believe in the power of scent to evoke memories, create ambiance, and soothe the soul.</p>
        </div>
      </div>
      <Footer />
    </div>
  )
}
