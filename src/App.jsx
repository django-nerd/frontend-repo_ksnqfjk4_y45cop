import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Clients from './components/Clients'
import Services from './components/Services'
import Testimonials from './components/Testimonials'
import Numbers from './components/Numbers'
import Contact from './components/Contact'
import Footer from './components/Footer'
import CursorSpotlight from './components/effects/CursorSpotlight'

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <CursorSpotlight />
      <Navbar />
      <main>
        <Hero />
        <Clients />
        <Services />
        <Testimonials />
        <Numbers />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
