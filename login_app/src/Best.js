import './Best.css'
import Header from './Header'
import Footer from './Footer'
import b1 from './wishperingGlow/bestsellers/bestsellersOne.png'
import b2 from './wishperingGlow/bestsellers/bestsellersTwo.png'
import b3 from './wishperingGlow/bestsellers/bestsellersThree.png'



export default function Best() {
  return (
    <div className='best'>
      <Header />

<section>
      <h2>BESTSELLERS</h2>


      <div className="best_box">
        <div className="for_b1">
          <img src={b1} alt="" />
          <h3>Lorem Ipsum</h3>
          <span>$35</span>
        </div>
        <div className="for_b2">
          <img src={b2} alt="" />
          <h3>Lorem Ipsum</h3>
          <span>$35</span>
        </div>
        <div className="for_b3">
          <img src={b3} alt="" />
          <h3>Lorem Ipsum</h3>
          <span>$35</span>
        </div>
      </div>
</section>

      <Footer />
    </div>
  )
}
