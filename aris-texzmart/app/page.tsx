import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full" style={{backgroundColor: '#ffffff'}}>
      {/* Navigation Header */}
      <header className="shadow" style={{backgroundColor: '#fefae0'}}>
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Image src="/Logo.jpg" alt="Aris Texzmart Logo" width={50} height={50} className="rounded" />
            <div className="text-2xl font-bold" style={{color: '#d4a373'}}>Aris Texzmart</div>
          </div>
          <ul className="hidden md:flex gap-8">
            <li><a href="#home" className="font-medium hover:opacity-80 transition" style={{color: '#32210f'}}>Home</a></li>
            <li><a href="#about" className="font-medium hover:opacity-80 transition" style={{color: '#32210f'}}>About Us</a></li>
            <li><a href="#products" className="font-medium hover:opacity-80 transition" style={{color: '#32210f'}}>Products</a></li>
            <li><a href="#services" className="font-medium hover:opacity-80 transition" style={{color: '#32210f'}}>Services</a></li>
            <li><a href="#contact" className="font-medium hover:opacity-80 transition" style={{color: '#32210f'}}>Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="text-[#32210f] py-24" style={{backgroundColor: '#fefae0'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-6xl md:text-7xl font-extrabold tracking-tight leading-tight mb-6" style={{color: '#32210f'}}>Specialized in Quality Yarn & Fabrics</h1>
          <p className="text-2xl md:text-3xl mb-10 font-medium" style={{color: '#5b6635'}}>Premium textile fibers, yarns, and fabrics for discerning customers worldwide</p>
          <button className="font-extrabold py-4 px-10 rounded-full transition hover:opacity-90 shadow-xl" style={{backgroundColor: '#d4a373', color: '#fefae0'}}>
            Get a Quote
          </button>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12" style={{backgroundColor: '#e9edc9'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold" style={{color: '#32210f'}}>15+</div>
              <p className="text-[#5b6635] mt-2">Years of Experience</p>
            </div>
            <div>
              <div className="text-4xl font-bold" style={{color: '#32210f'}}>50+</div>
              <p className="text-[#5b6635] mt-2">Global Customers</p>
            </div>
            <div>
              <div className="text-4xl font-bold" style={{color: '#32210f'}}>100%</div>
              <p className="text-[#5b6635] mt-2">Quality Guarantee</p>
            </div>
            <div>
              <div className="text-4xl font-bold" style={{color: '#32210f'}}>24/7</div>
              <p className="text-[#5b6635] mt-2">Customer Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16" style={{backgroundColor: '#faedcd'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-extrabold text-[#32210f] mb-8 text-center">About Aris Texzmart</h2>
          <div className="bg-white/80 p-8 rounded-3xl shadow-lg border" style={{borderColor: '#d4a373'}}>
            <p className="text-lg text-[#32210f] mb-4">
              Aris Texzmart is a premier global trading, sourcing, and marketing company specializing in quality textile fibers, yarns, and fabrics.
            </p>
            <p className="text-lg text-[#32210f] mb-4">
              We supply premium textile raw materials to discerning customers and suppliers across the world, maintaining the highest quality standards.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mt-6">
              <div className="flex items-start gap-3">
                <span className="font-bold text-[#d4a373]">✓</span>
                <p className="text-[#32210f]"><strong>Best Quality Standards</strong> - Rigorous quality control throughout</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="font-bold text-[#d4a373]">✓</span>
                <p className="text-[#32210f]"><strong>Timely Deliveries</strong> - Reliable and on-time shipments</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="font-bold text-[#d4a373]">✓</span>
                <p className="text-[#32210f]"><strong>Professional Team</strong> - Experienced textile experts</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="font-bold text-[#d4a373]">✓</span>
                <p className="text-[#32210f]"><strong>Customer Commitment</strong> - Your success is our priority</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-16" style={{backgroundColor: '#fefae0'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-extrabold text-[#32210f] mb-12 text-center">Our Products</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Yarns */}
            <div className="rounded-2xl p-8 text-center transition hover:-translate-y-1" style={{background: '#fffef9', border: '1px solid #e9edc9'}}>
              <div className="text-5xl mb-4">🧵</div>
              <h3 className="text-2xl font-bold text-[#32210f] mb-3">Yarns</h3>
              <p className="text-[#5b6635] mb-4">
                Premium quality yarns for various applications in the textile industry
              </p>
              <a href="#" className="font-semibold hover:opacity-80 transition" style={{color: '#d4a373'}}>View Products →</a>
            </div>

            {/* Fabrics */}
            <div className="rounded-2xl p-8 text-center transition hover:-translate-y-1" style={{background: '#fffef9', border: '1px solid #e9edc9'}}>
              <div className="text-5xl mb-4">🪡</div>
              <h3 className="text-2xl font-bold text-[#32210f] mb-3">Fabrics</h3>
              <p className="text-[#5b6635] mb-4">
                High-quality fabrics manufactured to precise specifications
              </p>
              <a href="#" className="font-semibold hover:opacity-80 transition" style={{color: '#d4a373'}}>View Products →</a>
            </div>

            {/* Fibers */}
            <div className="rounded-2xl p-8 text-center transition hover:-translate-y-1" style={{background: '#fffef9', border: '1px solid #e9edc9'}}>
              <div className="text-5xl mb-4">🌾</div>
              <h3 className="text-2xl font-bold text-[#32210f] mb-3">Fibers</h3>
              <p className="text-[#5b6635] mb-4">
                Raw textile fibers from trusted suppliers worldwide
              </p>
              <a href="#" className="font-semibold hover:opacity-80 transition" style={{color: '#d4a373'}}>View Products →</a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16" style={{backgroundColor: '#ffffff'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-[#32210f] mb-8 text-center">Services We Provide</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border-l-4 pl-6" style={{borderColor: '#d4a373'}}>
              <h3 className="text-2xl font-bold text-[#32210f] mb-2">Quality Sourcing</h3>
              <p className="text-[#5b6635]">We source the finest textile materials from verified suppliers globally</p>
            </div>
            <div className="border-l-4 pl-6" style={{borderColor: '#d4a373'}}>
              <h3 className="text-2xl font-bold text-[#32210f] mb-2">Global Distribution</h3>
              <p className="text-[#5b6635]">Reliable shipping and logistics to customers worldwide</p>
            </div>
            <div className="border-l-4 pl-6" style={{borderColor: '#d4a373'}}>
              <h3 className="text-2xl font-bold text-[#32210f] mb-2">Quality Assurance</h3>
              <p className="text-[#5b6635]">Rigorous testing and inspection at every stage</p>
            </div>
            <div className="border-l-4 pl-6" style={{borderColor: '#d4a373'}}>
              <h3 className="text-2xl font-bold text-[#32210f] mb-2">Custom Solutions</h3>
              <p className="text-[#5b6635]">Tailored products to meet your specific requirements</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16" style={{backgroundColor: '#ccd5ae'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4" style={{color: '#32210f'}}>We would love to help you!</h2>
          <p className="text-xl mb-8" style={{color: '#5b6635'}}>Get in touch with our team for quotes and inquiries</p>
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <p className="mb-2" style={{color: '#32210f'}}>Phone</p>
              <p className="text-2xl font-semibold">(+91) 98202 68210</p>
            </div>
            <div>
              <p className="mb-2" style={{color: '#32210f'}}>Email</p>
              <p className="text-2xl font-semibold">info@aristexzmart.com</p>
            </div>
          </div>
          <button className="font-bold py-3 px-8 rounded-lg transition hover:opacity-90" style={{backgroundColor: '#d4a373', color: '#fefae0'}}>
            Contact Us
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-[#32210f] py-10" style={{backgroundColor: '#d4a373'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="text-lg font-bold mb-4" style={{color: '#32210f'}}>About</h4>
              <p className="text-[#5b6635]">Premium textile solutions for global customers</p>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4" style={{color: '#32210f'}}>Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#home" className="hover:text-[#d4a373] text-[#5b6635]">Home</a></li>
                <li><a href="#about" className="hover:text-[#d4a373] text-[#5b6635]">About</a></li>
                <li><a href="#products" className="hover:text-[#d4a373] text-[#5b6635]">Products</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4" style={{color: '#32210f'}}>Products</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-[#d4a373] text-[#5b6635]">Yarns</a></li>
                <li><a href="#" className="hover:text-[#d4a373] text-[#5b6635]">Fabrics</a></li>
                <li><a href="#" className="hover:text-[#d4a373] text-[#5b6635]">Fibers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4" style={{color: '#32210f'}}>Contact</h4>
              <p className="text-[#5b6635] text-sm">info@aristexzmart.com<br/>(+91) 98202 68210</p>
            </div>
          </div>
          <div className="border-t border-[#e9edc9] pt-8 text-center text-[#5b6635]">
            <p>&copy; 2024 Aris Texzmart. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
