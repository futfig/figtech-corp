import { Nav } from './components/Nav'
import { Hero } from './components/Hero'
import { Product } from './components/Product'
import { Opportunity } from './components/Opportunity'
import { Company } from './components/Company'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen" style={{ background: '#0B0C0F' }}>
      <Nav />
      <Hero />
      <hr className="border-t divider mx-auto max-w-6xl" />
      <Product />
      <hr className="border-t divider mx-auto max-w-6xl" />
      <Opportunity />
      <hr className="border-t divider mx-auto max-w-6xl" />
      <Company />
      <hr className="border-t divider mx-auto max-w-6xl" />
      <Contact />
      <Footer />
    </div>
  )
}
