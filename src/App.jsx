import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import CookieConsentBanner from './components/CookieConsent'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'
import Coverage from './pages/Coverage'
import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'
import VizitkaResl from './pages/VizitkaResl'

function App() {
  return (
    <BrowserRouter>
      <CookieConsentBanner />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/o-nas" element={<About />} />
          <Route path="/sluzby" element={<Services />} />
          <Route path="/kontakt" element={<Contact />} />
          <Route path="/kde-pusobime" element={<Coverage />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/vizitka-resl" element={<VizitkaResl />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App
