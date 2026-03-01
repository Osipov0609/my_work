import './Product.css'
import Header from './Header'
import Footer from './Footer'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar, Navigation } from 'swiper/modules'; 
import p1 from './wishperingGlow/products/productsFiwe.png'
import p2 from './wishperingGlow/products/productsFour.png'
import p3 from './wishperingGlow/products/productsThree.png'
import p4 from './wishperingGlow/products/productsTwo.png'
import p5 from './wishperingGlow/products/productsOne.png'

import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';

export default function Product() {

  const products = [ 
    { id: 1, img: p1 , title: 'Lorem Ipsum', price: '$35' },
    { id: 2, img: p2 , title: 'Lorem Ipsum', price: '$35' },
    { id: 3, img: p3 , title: 'Lorem Ipsum', price: '$35' },
    { id: 4, img: p4 , title: 'Lorem Ipsum', price: '$35' },
    { id: 5, img: p5 , title: 'Lorem Ipsum', price: '$35' },
  ];

  return (
    <div className='product'>
      <Header />

      
      <div className="product_box">
      <h2 className="title">PRODUCTS</h2>
        <Swiper
          modules={[Scrollbar]}
          spaceBetween={30}
          slidesPerView={1.5}     
          centeredSlides={true}    
          loop={true}              
          scrollbar={{ draggable: true }}
          breakpoints={{
            768: { slidesPerView: 3 }, 
            1024: { slidesPerView: 3 }, 
          }}
          className="mySwiper"
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <div className="product_card">
                <div className="img_container">
                   <img src={product.img} alt={product.title} />
                </div>
                <h3>{product.title}</h3>
                <p>{product.price}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <Footer />
    </div>
  )
}
