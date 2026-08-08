import { useState, type FormEvent } from 'react';
import { BrowserRouter, Link, NavLink, Route, Routes, useLocation } from 'react-router-dom';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import {
  ArrowRight,
  Check,
  ChevronRight,
  Droplets,
  Facebook,
  HeartHandshake,
  Instagram,
  Menu,
  MessageCircle,
  MoveUpRight,
  PackageCheck,
  Phone,
  ShieldCheck,
  Sparkles,
  Truck,
  Twitter,
  X,
  MapPin,
  Mail,
} from 'lucide-react';

const logo = '/images/WhatsApp_Image_2026-07-30_at_20.23.06.jpeg';
const heroImage = 'https://images.pexels.com/photos/34756384/pexels-photo-34756384.jpeg?auto=compress&cs=tinysrgb&w=1800';
const serviceImages = {
  feeds: '/images/WhatsApp_Image_2026-08-08_at_01.28.01.jpeg',
  birds: '/images/WhatsApp_Image_2026-08-08_at_01.28.01_(1).jpeg',
  equipment: '/images/WhatsApp_Image_2026-08-08_at_01.28.02.jpeg',
  eggs: '/images/WhatsApp_Image_2026-08-08_at_01.31.40.jpeg',
  veterinary: '/images/WhatsApp_Image_2026-08-08_at_01.41.21.jpeg',
};

const services = [
  { title: 'Sales & distribution of poultry feeds', short: 'Poultry feeds', image: serviceImages.feeds, number: '01', description: 'Trusted feed brands that help your flock grow stronger, healthier and more profitably.' },
  { title: 'Sales & supply of birds', short: 'Birds', image: serviceImages.birds, number: '02', description: 'Healthy, carefully selected birds supplied with the care and consistency your farm deserves.' },
  { title: 'Poultry equipment', short: 'Feeders & drinkers', image: serviceImages.equipment, number: '03', description: 'Practical feeders and drinkers built to make everyday farm management easier.' },
  { title: 'Sales of eggs', short: 'Fresh eggs', image: serviceImages.eggs, number: '04', description: 'Fresh, nutritious eggs selected and packed with attention to quality.' },
  { title: 'Veterinary services', short: 'Vet care', image: serviceImages.veterinary, number: '05', description: 'Straightforward expert support to help you prevent problems and protect your birds.' },
];

function Brand({ light = false }: { light?: boolean }) {
  return <Link to="/" className="brand" aria-label="Brodjas Poultry home"><span className={`brand-mark ${light ? 'brand-mark-light' : ''}`}><img src={logo} alt="Brodjas Poultry logo" /></span><span className={light ? 'text-white' : 'text-forest'}>BRODJAS <b>POULTRY</b></span></Link>;
}

function Navigation() {
  const [open, setOpen] = useState(false);
  const links = [['/', 'Home'], ['/services', 'Services'], ['/order', 'Order'], ['/contact', 'Contact']];
  return <header className="site-header"><div className="container nav-wrap"><Brand /><nav className={`desktop-nav ${open ? 'mobile-open' : ''}`}>{links.map(([to, label]) => <NavLink key={to} to={to} end={to === '/'} onClick={() => setOpen(false)}>{label}</NavLink>)}<a className="nav-phone" href="tel:+2347081664106"><Phone size={16} /> +234 708 166 4106</a></nav><button className="menu-button" onClick={() => setOpen(!open)} aria-label="Toggle menu">{open ? <X /> : <Menu />}</button></div></header>;
}

function Footer() {
  return <footer className="footer"><div className="container footer-grid"><div className="footer-brand"><Brand light /><p>Better poultry. Better living.<br />Proudly serving Ibadan and beyond.</p><div className="socials"><a href="https://facebook.com" aria-label="Facebook"><Facebook size={17} /></a><a href="https://instagram.com" aria-label="Instagram"><Instagram size={17} /></a><a href="https://twitter.com" aria-label="Twitter"><Twitter size={17} /></a></div></div><div><h4>Explore</h4><Link to="/">Home</Link><Link to="/services">Our Services</Link><Link to="/order">Place an Order</Link><Link to="/contact">Contact Us</Link></div><div><h4>Our services</h4><span>Feeds & distribution</span><span>Bird supply</span><span>Farm equipment</span><span>Eggs & veterinary care</span></div><div><h4>Find us</h4><p className="footer-line"><MapPin size={16} /> Shop 1, Genesis Plaza,<br /> Ido-Eruwa Expressway,<br /> Ido Town, Ibadan.</p><p className="footer-line"><Phone size={16} /> +234 708 166 4106</p><p className="footer-line"><Mail size={16} /> brodjaspoultry@gmail.com</p></div></div><div className="container footer-bottom"><span>© 2026 BRODJAS POULTRY. All rights reserved.</span><span>Quality you can count on.</span></div></footer>;
}

function PageShell({ children }: { children: React.ReactNode }) { const location = useLocation(); return <><Navigation /><main key={location.pathname} className="page-enter">{children}</main><Footer /></>; }

function Home() {
  return <>
    <section className="hero" style={{ backgroundImage: `linear-gradient(90deg, rgba(5,45,26,.86) 0%, rgba(5,45,26,.58) 46%, rgba(5,45,26,.16) 100%), url(${heroImage})` }}><div className="container hero-content"><div className="eyebrow eyebrow-light"><span></span> Farm fresh. Farm trusted.</div><h1>Growing better,<br /><em>together.</em></h1><p>Your trusted source for quality poultry products in Ibadan.</p><div className="hero-actions"><Link className="button button-gold" to="/order">Order now <ArrowRight size={18} /></Link><Link className="text-link text-link-light" to="/contact">Contact us <ChevronRight size={17} /></Link></div></div><div className="hero-stamp"><ShieldCheck size={23} /><span><b>Trusted quality</b><small>Every single day</small></span></div></section>
    <section className="intro-section"><div className="container intro-grid"><div className="intro-heading"><div className="eyebrow">Who we are</div><h2>Poultry done<br /><em>properly.</em></h2><div className="gold-rule"></div></div><div className="intro-copy"><p className="large-copy">At Brodjas Poultry, we believe every good farm starts with the right partner. From the feed in your store to the birds in your coop, we supply what helps your business thrive.</p><p>Based in Ido Town, Ibadan, we combine quality products with honest advice and service that moves at your pace.</p><Link className="text-link" to="/services">Discover our services <ChevronRight size={17} /></Link></div></div></section>
    <section className="highlights-section"><div className="container"><div className="section-top"><div><div className="eyebrow">The Brodjas difference</div><h2>Good for your farm.<br /><em>Good for your peace of mind.</em></h2></div><span className="section-number">/ 03</span></div><div className="highlight-grid"><Highlight icon={<Sparkles />} title="Quality first" text="Carefully selected products from a team that understands poultry." /><Highlight icon={<Droplets />} title="Hygiene always" text="Clean, considered standards from our hands to your farm." /><Highlight icon={<Truck />} title="Fast delivery" text="Reliable supply when you need it, where you need it." /></div></div></section>
    <section className="home-cta"><div className="container cta-inner"><div><div className="eyebrow eyebrow-light">Ready when you are</div><h2>Let’s make your next<br /><em>order a good one.</em></h2></div><Link className="button button-white" to="/order">Place an order <ArrowRight size={18} /></Link></div></section>
  </>;
}
function Highlight({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) { return <div className="highlight"><div className="icon-box">{icon}</div><h3>{title}</h3><p>{text}</p></div>; }

function Services() { return <><PageIntro label="What we do" title={<>Services built for<br /><em>better farming.</em></>} text="From everyday essentials to expert support, we help poultry farmers in Ibadan keep things moving." /><section className="services-section"><div className="container service-grid">{services.map((service) => <article className="service-card" key={service.number}><div className="service-image"><img src={service.image} alt={service.title} /><span>{service.number}</span></div><div className="service-content"><div className="eyebrow">{service.short}</div><h3>{service.title}</h3><p>{service.description}</p><Link to="/order" state={{ service: service.short }} className="card-link">Order this service <MoveUpRight size={16} /></Link></div></article>)}</div></section><section className="service-note"><div className="container"><HeartHandshake size={28} /><p>Not sure what you need? <Link to="/contact">Speak to our team</Link> and we’ll point you in the right direction.</p></div></section></>; }

function PageIntro({ label, title, text }: { label: string; title: React.ReactNode; text: string }) { return <section className="page-intro"><div className="container page-intro-inner"><div><div className="eyebrow eyebrow-light">{label}</div><h1>{title}</h1></div><p>{text}</p></div></section>; }

function openWhatsApp(message: string) { window.open(`https://wa.me/2347081664106?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer'); }

function Order() { const [sending, setSending] = useState(false); const [service, setService] = useState(''); async function handleSubmit(event: FormEvent<HTMLFormElement>) { event.preventDefault(); setSending(true); const form = new FormData(event.currentTarget); const order = Object.fromEntries(form); const whatsappMessage = `Hello Brodjas Poultry, I would like to place an order.\n\nName: ${order.name}\nPhone: ${order.phone}\nAddress: ${order.address}\nService/Product: ${order.service}\nQuantity/Details: ${order.details}`; try { await axios.post('/api/order', order); toast.success('Your order request has been received. We’ll be in touch shortly.'); event.currentTarget.reset(); setService(''); } catch { openWhatsApp(whatsappMessage); toast.success('Opening WhatsApp with your order details.'); event.currentTarget.reset(); setService(''); } finally { setSending(false); } } return <><PageIntro label="Let’s get started" title={<>Put your next order<br /><em>in good hands.</em></>} text="Tell us what you need and our team will get back to you with the next steps." /><section className="form-section"><div className="container form-layout"><div className="form-aside"><div className="aside-icon"><PackageCheck /></div><h2>Everything your farm needs, in one place.</h2><p>Fill in the details and we’ll respond with availability, pricing and delivery options.</p><div className="aside-points"><span><Check size={15} /> Clear, honest pricing</span><span><Check size={15} /> Reliable local delivery</span><span><Check size={15} /> Helpful expert advice</span></div><div className="whatsapp-box"><MessageCircle size={21} /><div><b>Need a quicker response?</b><a href="https://wa.me/2347081664106?text=Hello%20Brodjas%20Poultry%2C%20I%20would%20like%20to%20place%20an%20order." target="_blank" rel="noreferrer">Order on WhatsApp <ArrowRight size={15} /></a></div></div></div><form className="form-card" onSubmit={handleSubmit}><div className="form-card-head"><span>01</span><div><h3>Your order details</h3><p>We’ll use these details to contact you.</p></div></div><div className="field-row"><Field label="Full name" name="name" placeholder="Your name" required /><Field label="Phone number" name="phone" placeholder="+234 ..." required /></div><Field label="Delivery address" name="address" placeholder="Where should we deliver?" required /><label className="field-label">What do you need?<select name="service" value={service} onChange={(event) => setService(event.target.value)} required><option value="">Select a service or product</option><option>Feeds</option><option>Birds</option><option>Equipments</option><option>Eggs</option><option>Veterinary</option></select></label><label className="field-label">Quantity or details<textarea name="details" placeholder="Tell us quantities, bird type, preferred date, or any other details..." rows={4} required /></label><button className="button button-green form-submit" disabled={sending}>{sending ? 'Sending request...' : 'Send order request'} <ArrowRight size={18} /></button></form></div></section></>; }

function Field({ label, name, placeholder, required = false, type = 'text' }: { label: string; name: string; placeholder: string; required?: boolean; type?: string }) { return <label className="field-label">{label}<input type={type} name={name} placeholder={placeholder} required={required} /></label>; }

function Contact() { const [sending, setSending] = useState(false); async function handleSubmit(event: FormEvent<HTMLFormElement>) { event.preventDefault(); setSending(true); const form = new FormData(event.currentTarget); const message = Object.fromEntries(form); try { const response = await axios.post('/api/contact', message); if (response.status !== 200 || !response.data?.success) throw new Error('Message was not accepted'); toast.success('Message sent to Brodjas Poultry. Thank you for reaching out.'); event.currentTarget.reset(); } catch { const subject = `Website message from ${message.name}`; const body = `Name: ${message.name}\nEmail: ${message.email}\nPhone: ${message.phone}\n\nMessage:\n${message.message}`; window.location.href = `mailto:brodjaspoultry@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`; toast.error('Email service is unavailable, so your email app is opening with the message ready to send.'); } finally { setSending(false); } } return <><PageIntro label="We’re here to help" title={<>Let’s talk<br /><em>poultry.</em></>} text="Whether you have a question, a request or just want to say hello, our team is ready to listen." /><section className="contact-section"><div className="container contact-grid"><form className="form-card contact-form" onSubmit={handleSubmit}><div className="form-card-head"><span>01</span><div><h3>Send us a message</h3><p>We typically respond within one business day.</p></div></div><div className="field-row"><Field label="Full name" name="name" placeholder="Your name" required /><Field label="Email address" name="email" placeholder="you@example.com" type="email" required /></div><Field label="Phone number" name="phone" placeholder="+234 ..." required /><label className="field-label">Your message<textarea name="message" placeholder="How can we help?" rows={6} required /></label><button className="button button-green form-submit" disabled={sending}>{sending ? 'Sending message...' : 'Send message'} <ArrowRight size={18} /></button></form><div className="contact-details"><div className="eyebrow">Come say hello</div><h2>We’d love to<br /><em>hear from you.</em></h2><div className="contact-list"><ContactItem icon={<MapPin />} label="Our shop" text={<>Shop 1, Genesis Plaza,<br />Ido-Eruwa Expressway,<br />Ido Town, Ibadan, Oyo State.</>} /><ContactItem icon={<Phone />} label="Call us" text={<>+234 708 166 4106<br />+234 812 826 8825<br />+234 803 412 9144</>} /><ContactItem icon={<Mail />} label="Email us" text={<>brodjaspoultry@gmail.com<br />brodjaspoultry.store</>} /></div></div></div><div className="container map-wrap"><iframe title="Brodjas Poultry location" src="https://www.google.com/maps?q=Genesis%20Plaza,%20Ido-Eruwa%20Expressway,%20Ido%20Town,%20Ibadan&output=embed" loading="lazy" /></div></section></>; }
function ContactItem({ icon, label, text }: { icon: React.ReactNode; label: string; text: React.ReactNode }) { return <div className="contact-item"><div className="contact-icon">{icon}</div><div><span>{label}</span><p>{text}</p></div></div>; }

function App() { return <BrowserRouter><Toaster position="top-right" toastOptions={{ duration: 4500, style: { borderRadius: '2px', fontFamily: 'Poppins, sans-serif' } }} /><PageShell><Routes><Route path="/" element={<Home />} /><Route path="/services" element={<Services />} /><Route path="/order" element={<Order />} /><Route path="/contact" element={<Contact />} /></Routes></PageShell></BrowserRouter>; }
export default App;
