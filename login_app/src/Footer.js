import './Footer.css'
import img_inst from './wishperingGlow/contact/insta.png'
import img_FcBk from './wishperingGlow/contact/faceBook.png'

export default function Footer() {
    return (
        <footer>
            <div className="box">
                <div className="footer_info">
                    <h2>Logo</h2>
                    <ul>
                        <li>Contact</li>
                        <p>+374 010 111 111</p>
                    </ul>
                    <ul>
                        <li>Home</li>
                        <li>About us</li>
                    </ul>
                    <ul>
                        <li>Product</li>
                        <li>Sets</li>
                    </ul>
                    <ul>
                        <li>
                            <img src={img_inst} alt="" />
                            @whisperingglow
                        </li>
                        <li>
                            <img src={img_FcBk} alt="" />
                            @whisperingglow
                        </li>
                    </ul>
                </div>
                <div className="footer_info2">
                    <p>@All rights reseved</p>
                    <p>Designed by` Stas & Narek</p>
                </div>
            </div>
        </footer>

    )
}
