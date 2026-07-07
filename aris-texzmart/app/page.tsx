"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="w-full" style={{backgroundColor: 'var(--background)'}}>
      {/* Navigation Header */}
      <header className="shadow-sm" style={{backgroundColor: 'var(--dark-sections)', borderBottom: '1px solid var(--borders)'}}>
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <Image src="/Logo.png" alt="Aris Texzmart Logo" width={56} height={56} className="rounded-brand" />
            <div className="text-2xl font-bold" style={{color: '#FFFFFF', fontFamily: 'Poppins, Inter'}}>Aris Texzmart</div>
          </div>
          <ul className="hidden md:flex gap-8 text-sm font-medium">
            <li><a href="#home" className="hover:text-[var(--primary)] transition" style={{color: '#FFFFFF'}}>Home</a></li>
            <li><a href="#about" className="hover:text-[var(--primary)] transition" style={{color: '#FFFFFF'}}>About Us</a></li>
            <li><a href="#products" className="hover:text-[var(--primary)] transition" style={{color: '#FFFFFF'}}>Products</a></li>
            <li><a href="#services" className="hover:text-[var(--primary)] transition" style={{color: '#FFFFFF'}}>Services</a></li>
            <li><a href="#contact" className="hover:text-[var(--primary)] transition" style={{color: '#FFFFFF'}}>Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <motion.section id="home" className="py-24" style={{backgroundColor: 'var(--surface)'}} initial={{opacity:0, y:10}} animate={{opacity:1,y:0}} transition={{duration:0.6}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight leading-tight mb-6" style={{color: 'var(--headings)', fontFamily: 'Poppins, Inter'}}>Premium Yarn & Textile Solutions</h1>
          <p className="text-xl md:text-2xl mb-8" style={{color: 'var(--body-text)'}}>Sustainably sourced fibers, precision manufacturing, and trusted global supply chains.</p>

          <div className="flex items-center justify-center gap-4">
            <a className="btn-gradient" href="#contact">Get a Quote</a>
            <a className="btn-outline" href="#products" style={{color:'var(--primary)'}}>View Products</a>
          </div>
        </div>
      </motion.section>

      {/* Stats Section */}
      <section className="py-12" style={{backgroundColor: 'var(--background)'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-6 card">
              <div className="text-3xl font-bold" style={{color: 'var(--primary)'}}>15+</div>
              <p className="text-sm mt-2" style={{color: 'var(--body-text)'}}>Years of Experience</p>
            </div>
            <div className="p-6 card">
              <div className="text-3xl font-bold" style={{color: 'var(--primary)'}}>50+</div>
              <p className="text-sm mt-2" style={{color: 'var(--body-text)'}}>Global Customers</p>
            </div>
            <div className="p-6 card">
              <div className="text-3xl font-bold" style={{color: 'var(--primary)'}}>100%</div>
              <p className="text-sm mt-2" style={{color: 'var(--body-text)'}}>Quality Guarantee</p>
            </div>
            <div className="p-6 card">
              <div className="text-3xl font-bold" style={{color: 'var(--primary)'}}>24/7</div>
              <p className="text-sm mt-2" style={{color: 'var(--body-text)'}}>Customer Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16" style={{backgroundColor: 'var(--background)'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-center" style={{color: 'var(--headings)', fontFamily: 'Poppins, Inter'}}>About Aris Texzmart</h2>
          <div className="p-8 card">
            <p className="text-base mb-4" style={{color:'var(--body-text)'}}>
              Aris Texzmart is a premium textile manufacturing and sourcing company delivering high-quality yarns and fabrics to global markets.
            </p>
            <p className="text-base mb-4" style={{color:'var(--body-text)'}}>
              We combine modern manufacturing with sustainable sourcing to meet the needs of B2B partners and retailers.
            </p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-16" style={{backgroundColor: 'var(--background)'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-center" style={{color:'var(--headings)', fontFamily: 'Poppins, Inter'}}>Our Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div whileHover={{y:-6}} className="p-6 card text-center">
              <div className="text-4xl mb-3">🧵</div>
              <h3 className="text-xl font-semibold mb-2" style={{color:'var(--headings)'}}>Yarns</h3>
              <p className="text-sm mb-4" style={{color:'var(--body-text)'}}>Premium yarns for various textile applications.</p>
              <a className="text-sm font-semibold" href="#" style={{color:'var(--primary)'}}>View Products →</a>
            </motion.div>

            <motion.div whileHover={{y:-6}} className="p-6 card text-center">
              <div className="text-4xl mb-3">🪡</div>
              <h3 className="text-xl font-semibold mb-2" style={{color:'var(--headings)'}}>Fabrics</h3>
              <p className="text-sm mb-4" style={{color:'var(--body-text)'}}>High-quality fabrics produced to your specification.</p>
              <a className="text-sm font-semibold" href="#" style={{color:'var(--primary)'}}>View Products →</a>
            </motion.div>

            <motion.div whileHover={{y:-6}} className="p-6 card text-center">
              <div className="text-4xl mb-3">🌾</div>
              <h3 className="text-xl font-semibold mb-2" style={{color:'var(--headings)'}}>Fibers</h3>
              <p className="text-sm mb-4" style={{color:'var(--body-text)'}}>Sustainably sourced raw fibers.</p>
              <a className="text-sm font-semibold" href="#" style={{color:'var(--primary)'}}>View Products →</a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16" style={{backgroundColor: 'var(--background)'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-center" style={{color:'var(--headings)'}}>Services We Provide</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 card">
              <h3 className="text-lg font-semibold mb-2" style={{color:'var(--headings)'}}>Quality Sourcing</h3>
              <p className="text-sm" style={{color:'var(--body-text)'}}>We source the finest textile materials from verified suppliers globally.</p>
            </div>
            <div className="p-6 card">
              <h3 className="text-lg font-semibold mb-2" style={{color:'var(--headings)'}}>Global Distribution</h3>
              <p className="text-sm" style={{color:'var(--body-text)'}}>Reliable shipping and logistics to customers worldwide.</p>
            </div>
            <div className="p-6 card">
              <h3 className="text-lg font-semibold mb-2" style={{color:'var(--headings)'}}>Quality Assurance</h3>
              <p className="text-sm" style={{color:'var(--body-text)'}}>Rigorous testing and inspection at every stage.</p>
            </div>
            <div className="p-6 card">
              <h3 className="text-lg font-semibold mb-2" style={{color:'var(--headings)'}}>Custom Solutions</h3>
              <p className="text-sm" style={{color:'var(--body-text)'}}>Tailored products to meet your specific requirements.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16" style={{backgroundColor: 'var(--background)'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-semibold mb-4" style={{color: 'var(--headings)'}}>We would love to help you!</h2>
          <p className="text-lg mb-8" style={{color: 'var(--body-text)'}}>Get in touch with our team for quotes and inquiries</p>
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <p className="mb-2" style={{color: 'var(--headings)'}}>Phone</p>
              <p className="text-2xl font-semibold" style={{color:'var(--body-text)'}}>(+91) 98202 68210</p>
            </div>
            <div>
              <p className="mb-2" style={{color: 'var(--headings)'}}>Email</p>
              <p className="text-2xl font-semibold" style={{color:'var(--body-text)'}}>info@aristexzmart.com</p>
            </div>
          </div>
          <a className="btn-gradient" href="#">Contact Us</a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10" style={{backgroundColor: 'var(--dark-sections)'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="text-lg font-semibold mb-4" style={{color: '#FFFFFF'}}>About</h4>
              <p style={{color: '#E5E7EB'}}>Premium textile solutions for global customers</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4" style={{color: '#FFFFFF'}}>Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#home" className="hover:text-[var(--primary)]" style={{color:'#E5E7EB'}}>Home</a></li>
                <li><a href="#about" className="hover:text-[var(--primary)]" style={{color:'#E5E7EB'}}>About</a></li>
                <li><a href="#products" className="hover:text-[var(--primary)]" style={{color:'#E5E7EB'}}>Products</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4" style={{color: '#FFFFFF'}}>Products</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-[var(--primary)]" style={{color:'#E5E7EB'}}>Yarns</a></li>
                <li><a href="#" className="hover:text-[var(--primary)]" style={{color:'#E5E7EB'}}>Fabrics</a></li>
                <li><a href="#" className="hover:text-[var(--primary)]" style={{color:'#E5E7EB'}}>Fibers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4" style={{color: '#FFFFFF'}}>Contact</h4>
              <p style={{color:'#E5E7EB'}}>
                info@aristexzmart.com<br/>
                (+91) 98202 68210
              </p>
            </div>
          </div>
          <div className="border-t pt-8 text-center" style={{borderColor:'#4B5563', color:'#E5E7EB'}}>
            <p>&copy; 2024 Aris Texzmart. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
