import './Reviews.css'
import Header from './Header'
import Footer from './Footer'
import r1 from './wishperingGlow/people/miniOne.png'
import r2 from './wishperingGlow/people/miniTwo.png'
import r3 from './wishperingGlow/people/miniThree.png'

export default function Reviews() {
  return (
    <div className='rew'>
      <Header />

     <div className="rew_box">
      <h2>YOUR REVIEWS</h2>
      <div className="rew_item">
        <div className="for_r1">
          <div className="for_top">
            <img src={r1} alt="" />
            <p>Anastasia</p>
          </div>
          <span>Absoulty in love. The fragrances are divine and fll my home with such warmath and comfort. </span>
        </div>
        
        <div className="for_r2">
          <div className="for_top">
            <img src={r2} alt="" />
            <p>Lily</p>
          </div>
          <span>The scents are long-klasting and not overpowering. Will definitely be a repeat customer!</span>
        </div>

        <div className="for_r3">
          <div className="for_top">
            <img src={r3} alt="" />
            <p>Anna</p>
          </div>
          <span>My new go-to for all things candle- related!Highly recommend!</span>
        </div>
      </div>
     </div>

      <Footer />
    </div>
  )
}
