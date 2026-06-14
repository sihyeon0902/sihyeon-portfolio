import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Cover from './components/Cover'
import TableOfContents from './components/TableOfContents'
import IoTProject from './components/IoTProject'
import JavaProject from './components/JavaProject'
import ReactProject from './components/ReactProject'
import AquariumProject from './components/AquariumProject'
import Footer from './components/Footer'

export default function App() {
  const [activeSection, setActiveSection] = useState('cover')

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(e => { if (e.isIntersecting) setActiveSection(e.target.id) })
      },
      { threshold: 0.4 }
    )
    document.querySelectorAll('section[id]').forEach(s => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  return (
    <div>
      <Navbar active={activeSection} />
      <Cover />
      <TableOfContents />
      <IoTProject />
      <JavaProject />
      <ReactProject />
      <AquariumProject />
      <Footer />
    </div>
  )
}