import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Home from './Home';
import About from './About';
import Product from './Product';
import Contact from './Contact';
import Best from './Best'
import Reviews from './Reviews'
import Sets from './Sets'
import Footer from './Footer';
import Header from './Header';

function App() {
  // Պռոյեկտին երբ կցում ենք Parol Login, Կոդային Տարբերություն ենք ունենում,
  // index.js_ում > Browser_roter < Չենք Տալիս > Այլ Նշում App.js_ում;
  // App.js_ում Կազմում ենք Միայն Login.js և Projext.js_ների
  // Երևալու Հավանականությունը;

  // Դրա Համար > react-router-dom;

  // Այսպես Պետկ է Հասկացնենք թե որը պետկ է առաջինը երևա;
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Login />}></Route>
          <Route path='/header' element={<Header />}></Route>
          <Route path='/home' element={<Home />}></Route>
          <Route path='/product' element={<Product />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='/Best' element={<Best />}></Route>
          <Route path='/sets' element={<Sets />}></Route>
          <Route path='/reviews' element={<Reviews />}></Route>
          <Route path='/footer' element={<Footer />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
