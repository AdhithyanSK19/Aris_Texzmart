"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Home() {
  const [openAccordion, setOpenAccordion] = useState(0);

  const products = [
    {
      title: "Yarns",
      description: "Premium quality yarns for spinning mills, fabric producers, and textile manufacturers. We specialize in cotton, BCI, organic cotton, and certified sustainable yarns.",
      details: ["Cotton Yarns", "BCI Certified", "Organic Cotton", "OCS Certified", "Custom Counts"]
    },
    {
      title: "Fabrics",
      description: "High-quality fabrics manufactured to precise specifications for exporters, garment companies, and retailers. Full range of conventional and sustainable options.",
      details: ["Woven Fabrics", "Knitted Fabrics", "Specialty Weaves", "Sustainable Fabrics", "Custom Production"]
    }
    // {
    //   title: "Fibers",
    //   description: "Raw textile fibers sourced from trusted partners worldwide. Complete traceability and quality assurance for every batch.",
    //   details: ["Natural Fibers", "Certified Sourcing", "Quality Testing", "Inspection Services", "Logistics Support"]
    // }
  ];
  return (
    <div className="w-full" style={{backgroundColor: 'var(--background)'}}>
      {/* Navigation Header - Fixed & Sticky */}
      <header className="shadow-sm fixed w-full top-0 z-50" style={{backgroundColor: 'var(--dark-sections)', borderBottom: '1px solid var(--borders)'}}>
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <Image src="/Logo.png" alt="ARIS Texzmart Logo" width={56} height={56} className="rounded-brand" />
            <div className="text-2xl font-bold" style={{color: '#FFFFFF', fontFamily: 'Poppins, Inter'}}>ARIS Texzmart</div>
          </div>
          <ul className="hidden md:flex gap-8 text-sm font-medium">
            <li><a href="#home" className="hover:text-[var(--primary)] transition" style={{color: '#FFFFFF'}}>Home</a></li>
            <li><a href="#about" className="hover:text-[var(--primary)] transition" style={{color: '#FFFFFF'}}>About</a></li>
            <li><a href="#products" className="hover:text-[var(--primary)] transition" style={{color: '#FFFFFF'}}>Products</a></li>
            <li><a href="#contact" className="hover:text-[var(--primary)] transition" style={{color: '#FFFFFF'}}>Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Banner with Gradient Background */}
      <motion.section 
        id="home" 
        className="relative pt-24 pb-32 overflow-hidden"
        style={{
          backgroundImage: 'linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%)',
          minHeight: '600px',
          display: 'flex',
          alignItems: 'center'
        }}
        initial={{opacity:0}} 
        animate={{opacity:1}} 
        transition={{duration:0.8}}
      >
        {/* Decorative background pattern */}
        <div className="absolute inset-0 opacity-10" style={{backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'}}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 w-full">
          <motion.h1 
            className="text-6xl md:text-7xl font-extrabold tracking-tight mb-6"
            style={{color: '#FFFFFF', fontFamily: 'Poppins, Inter'}}
            initial={{y:20, opacity:0}}
            animate={{y:0, opacity:1}}
            transition={{delay:0.2, duration:0.6}}
          >
            Weaving 55 Years of Trust Into Tomorrow’s Textiles.
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl mb-8"
            style={{color: '#FFFFFF'}}
            initial={{y:20, opacity:0}}
            animate={{y:0, opacity:1}}
            transition={{delay:0.4, duration:0.6}}
          >
            Premium yarn, fabric sourcing—backed by three generations of textile mastery.
          </motion.p>
          <motion.div 
            className="flex gap-4 justify-center flex-wrap"
            initial={{y:20, opacity:0}}
            animate={{y:0, opacity:1}}
            transition={{delay:0.6, duration:0.6}}
          >
            <a className="btn-gradient" href="#contact">Get a Quote</a>
            <a className="btn-outline" href="#products" style={{borderColor:'#FFFFFF', color:'#FFFFFF'}}>View Products</a>
          </motion.div>
        </div>
      </motion.section>

      {/* Image & Text Section - Company Overview */}
      <section id="about" className="py-20" style={{backgroundColor: 'var(--surface)'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text on Left */}
            <motion.div 
              initial={{x:-50, opacity:0}}
              whileInView={{x:0, opacity:1}}
              transition={{duration:0.6}}
              viewport={{once:true}}
            >
              <h2 className="text-4xl font-semibold mb-6" style={{color: 'var(--headings)', fontFamily: 'Poppins, Inter'}}>About ARIS Texzmart</h2>
              <p className="text-base mb-4" style={{color: 'var(--body-text)'}}>
                ARIS Texzmart is a professional yarn trading and merchandising company backed by <strong>55+ years of textile industry experience</strong> and proudly led by the third generation of a family with deep roots in the yarn business.
              </p>
              <p className="text-base mb-6" style={{color: 'var(--body-text)'}}>
                We specialize in sourcing and supplying premium-quality yarns to spinning mills, textile manufacturers, fabric producers, exporters, and garment companies.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span style={{color: 'var(--primary)'}}>✓</span>
                  <span style={{color: 'var(--body-text)'}}>End-to-end merchandising and supply chain solutions</span>
                </li>
                <li className="flex items-start gap-3">
                  <span style={{color: 'var(--primary)'}}>✓</span>
                  <span style={{color: 'var(--body-text)'}}>Complete traceability and quality assurance</span>
                </li>
                <li className="flex items-start gap-3">
                  <span style={{color: 'var(--primary)'}}>✓</span>
                  <span style={{color: 'var(--body-text)'}}>Compliant with global brand standards</span>
                </li>
              </ul>
            </motion.div>

            {/* Image on Right */}
            <motion.div
              initial={{x:50, opacity:0}}
              whileInView={{x:0, opacity:1}}
              transition={{duration:0.6}}
              viewport={{once:true}}
              className="relative"
            >
              <div 
                className="rounded-xl overflow-hidden shadow-lg"
                style={{
                  // background: 'linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%)',
                  background: 'var(--dark-sections)',
                  minHeight: '400px'
                }}
              >
                <Image 
                  src="/Logo.png" 
                  alt="Textile" 
                  width={400} 
                  height={400} 
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div 
                className="absolute -bottom-6 -right-6 p-6 rounded-xl shadow-lg text-white text-center"
                style={{backgroundColor: 'var(--primary)', width: '200px'}}
              >
                <div className="text-3xl font-bold">55+</div>
                <div className="text-sm">Years in Textile Industry</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Products Accordion Section */}
      <section id="products" className="py-20" style={{backgroundColor: 'var(--background)'}}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-semibold mb-4 text-center" style={{color: 'var(--headings)', fontFamily: 'Poppins, Inter'}}>Our Products</h2>
          <p className="text-center mb-12" style={{color: 'var(--body-text)'}}>Explore our comprehensive range of premium yarns, fabrics, and fibers</p>

          <div className="space-y-4">
            {products.map((product, idx) => (
              <motion.div
                key={idx}
                initial={{opacity:0, y:10}}
                whileInView={{opacity:1, y:0}}
                transition={{delay: idx * 0.1, duration:0.4}}
                viewport={{once:true}}
                className="card overflow-hidden"
              >
                <button
                  onClick={() => setOpenAccordion(openAccordion === idx ? -1 : idx)}
                  className="w-full p-6 flex justify-between items-center hover:opacity-80 transition"
                  style={{backgroundColor: openAccordion === idx ? 'var(--background)' : 'var(--surface)'}}
                >
                  <h3 className="text-xl font-semibold text-left" style={{color: 'var(--headings)'}}>
                    {product.title}
                  </h3>
                  <span style={{color: 'var(--primary)', fontSize: '24px'}}>
                    {openAccordion === idx ? '−' : '+'}
                  </span>
                </button>

                <motion.div
                  initial={{height:0, opacity:0}}
                  animate={{height: openAccordion === idx ? 'auto' : 0, opacity: openAccordion === idx ? 1 : 0}}
                  transition={{duration:0.3}}
                  className="overflow-hidden"
                >
                  <div className="p-6 border-t" style={{borderColor: 'var(--borders)'}}>
                    <p className="text-base mb-4" style={{color: 'var(--body-text)'}}>
                      {product.description}
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                      {product.details.map((detail, i) => (
                        <div 
                          key={i} 
                          className="p-3 rounded-lg text-center text-sm font-medium"
                          style={{backgroundColor: 'var(--background)', color: 'var(--primary)'}}
                        >
                          {detail}
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20" style={{backgroundColor: 'var(--surface)'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{x:-50, opacity:0}}
              whileInView={{x:0, opacity:1}}
              transition={{duration:0.6}}
              viewport={{once:true}}
            >
              <h2 className="text-3xl font-semibold mb-8" style={{color: 'var(--headings)', fontFamily: 'Poppins, Inter'}}>Get In Touch</h2>
              
              <div className="space-y-8">
                <div>
                  <h4 className="text-lg font-semibold mb-2" style={{color: 'var(--headings)'}}>Phone</h4>
                  <a href="tel:+919820268210" className="text-lg hover:text-[var(--primary)]" style={{color: 'var(--primary)'}}>
                    (+91) 90035 94682<br/>
                    (+91) 99407 60600
                  </a>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-2" style={{color: 'var(--headings)'}}>Email</h4>
                  <a href="mailto:info@aristexzmart.com" className="hover:text-[var(--primary)] break-all" style={{color: 'var(--body-text)'}}>
                    info@aristexzmart.com
                  </a>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-2" style={{color: 'var(--headings)'}}>Address</h4>
                  <p style={{color: 'var(--body-text)'}}>
                    ARIS Texzmart<br/>
                    Headquartered in Mumbai<br/>
                    India
                  </p>
                </div>

                <div className="flex gap-4 pt-4 flex-wrap">
                  <a href="#" className="px-6 py-3 rounded-lg hover:opacity-80 transition font-semibold" style={{backgroundColor: 'var(--primary)', color: '#FFFFFF'}}>
                    LinkedIn
                  </a>
                  <a href="#contact" className="px-6 py-3 rounded-lg hover:opacity-80 transition font-semibold" style={{backgroundColor: 'var(--secondary)', color: '#FFFFFF'}}>
                    Contact Us
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{x:50, opacity:0}}
              whileInView={{x:0, opacity:1}}
              transition={{duration:0.6}}
              viewport={{once:true}}
              className="p-8 card"
            >
              <h3 className="text-2xl font-semibold mb-6" style={{color: 'var(--headings)'}}>Send us a Message</h3>
              <form className="space-y-4">
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="w-full p-3 rounded-lg border focus:outline-none"
                  style={{borderColor: 'var(--borders)', color: 'var(--headings)'}}
                />
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  className="w-full p-3 rounded-lg border focus:outline-none"
                  style={{borderColor: 'var(--borders)', color: 'var(--headings)'}}
                />
                <input 
                  type="text" 
                  placeholder="Subject" 
                  className="w-full p-3 rounded-lg border focus:outline-none"
                  style={{borderColor: 'var(--borders)', color: 'var(--headings)'}}
                />
                <textarea 
                  placeholder="Message" 
                  rows={4}
                  className="w-full p-3 rounded-lg border focus:outline-none"
                  style={{borderColor: 'var(--borders)', color: 'var(--headings)'}}
                ></textarea>
                <button 
                  type="submit" 
                  className="btn-gradient w-full font-semibold"
                >
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10" style={{backgroundColor: 'var(--dark-sections)'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="text-lg font-semibold mb-4" style={{color: '#FFFFFF'}}>About</h4>
              <p style={{color: '#E5E7EB'}}>ARIS Texzmart – Three Generations of Trust. Excellence in Yarn Trading.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4" style={{color: '#FFFFFF'}}>Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#home" className="hover:text-[var(--primary)] transition" style={{color:'#E5E7EB'}}>Home</a></li>
                <li><a href="#about" className="hover:text-[var(--primary)] transition" style={{color:'#E5E7EB'}}>About</a></li>
                <li><a href="#products" className="hover:text-[var(--primary)] transition" style={{color:'#E5E7EB'}}>Products</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4" style={{color: '#FFFFFF'}}>Products</h4>
              <ul className="space-y-2">
                <li><a href="#products" className="hover:text-[var(--primary)] transition" style={{color:'#E5E7EB'}}>Yarns</a></li>
                <li><a href="#products" className="hover:text-[var(--primary)] transition" style={{color:'#E5E7EB'}}>Fabrics</a></li>
                <li><a href="#products" className="hover:text-[var(--primary)] transition" style={{color:'#E5E7EB'}}>Fibers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4" style={{color: '#FFFFFF'}}>Contact</h4>
              <p style={{color:'#E5E7EB'}}>
                info@aristexzmart.com<br/>
                (+91) 90035 94682<br/>
                (+91) 99407 60600
              </p>
            </div>
          </div>
          <div className="border-t pt-8 text-center" style={{borderColor:'#4B5563', color:'#E5E7EB'}}>
            <p>&copy; 2024 ARIS Texzmart. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
