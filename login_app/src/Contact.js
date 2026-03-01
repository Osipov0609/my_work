import './Contact.css'
import Header from './Header'
import Footer from './Footer'
import c1 from './wishperingGlow/contact/contact.png'

export default function Contact() {
  return (
    <div className='contact'>
      <Header />

      <div className="cont_box">
        <h2>CONTACT US</h2>
        <div className="cont_item">
          <div className="for_c1">
            <input type="text" placeholder='Name' />
            <input type="email" placeholder='Email'/>
            <textarea placeholder="Messeges"></textarea>
            <button>SEND</button>
          </div>
          <img src={c1} alt="" />

        </div>

      </div>

      <Footer />
    </div>
  )
}
