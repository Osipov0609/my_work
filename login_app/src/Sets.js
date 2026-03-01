import './Sets.css'
import Header from './Header'
import Footer from './Footer'
import s1 from './wishperingGlow/sets/setsOne.png'
import s2 from './wishperingGlow/sets/setsTwo.png'
import s3 from './wishperingGlow/sets/setsThree.png'



export default function Sets() {
  return (
    <div className='sets'>
      <Header />

<section>
      <h2>Sets</h2>


      <div className="sets_box">
        <div className="for_s1">
          <img src={s1} alt="" />
          <h3>Lorem Ipsum</h3>
          <span>$35</span>
        </div>
        <div className="for_s2">
          <img src={s2} alt="" />
          <h3>Lorem Ipsum</h3>
          <span>$35</span>
        </div>
        <div className="for_s3">
          <img src={s3} alt="" />
          <h3>Lorem Ipsum</h3>
          <span>$35</span>
        </div>
      </div>
</section>

      <Footer />
    </div>
  )
}
