"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { 
  Phone, 
  Mail, 
  MapPin, 
  ArrowUpRight, 
  CheckCircle2, 
  UploadCloud, 
  MessageCircle,
  Clock,
  ShieldCheck,
  Users,
  Award,
  Zap,
  TrendingUp
} from "lucide-react";
import Header from "../components/header";
import Footer from "../components/footer";
import SmoothScroll from "../components/smooth-scroll";

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const FacebookIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const SERVICES_OPTIONS = [
  "TMC Analysis",
  "Vehicle Classification",
  "Pedestrian Count",
  "Cyclist Count",
  "Queue & Delay Analysis",
  "ANPR Processing",
  "Event Log Analysis",
  "Parking Survey",
  "Highway Traffic Survey",
  "Custom Traffic Analysis"
];

const COUNTRIES = [
  "India",
  "United States",
  "United Kingdom",
  "Australia",
  "Canada",
  "United Arab Emirates",
  "Singapore",
  "Saudi Arabia",
  "Germany",
  "France",
  "Other"
];

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [files, setFiles] = useState<File[]>([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleServiceToggle = (service: string) => {
    if (selectedServices.includes(service)) {
      setSelectedServices(selectedServices.filter((s) => s !== service));
    } else {
      setSelectedServices([...selectedServices, service]);
    }
  };

  const handleAddServices = () => {
    setIsDropdownOpen(false);
  };

  const handleServiceRemove = (service: string) => {
    setSelectedServices(selectedServices.filter((s) => s !== service));
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isDropdownOpen && !target.closest('.dropdown-container')) {
        setIsDropdownOpen(false);
      }
    };

    if (isDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isDropdownOpen]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles(Array.from(e.target.files));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <SmoothScroll>
      <Header />
      
      <main className="flex-1 w-full bg-white pt-20">
        
        {/* Hero Banner */}
        <section className="bg-white py-24 border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-12 lg:gap-20">
              <div className="max-w-2xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-[3px] bg-[#0D2B6B] rounded-full"></div>
                  <span className="text-[#0D2B6B] font-bold text-xs tracking-widest uppercase">
                    Get In Touch
                  </span>
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-[52px] font-extrabold text-[#0D2B6B] tracking-tight leading-[1.1]">
                  Let's Work Together
                </h1>
              </div>

              <div className="lg:max-w-md lg:pt-12 flex-shrink-0">
                <p className="text-slate-600 text-base leading-[1.8]">
                  Need accurate traffic data for your next project? Let HIFI Traffic Data Tech support your traffic survey with professional analysis, fast turnaround, and reliable service.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form & Info Section */}
        <section className="py-20 max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Left: Contact Info */}
            <div className="lg:col-span-4 space-y-6">
              
              {/* Contact Information Card */}
              <div className="bg-gradient-to-br from-[#0D2B6B] to-[#07193f] rounded-2xl p-8 text-white shadow-xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center">
                    <Phone className="w-5 h-5 text-[#F57C00]" />
                  </div>
                  <h2 className="text-xl font-extrabold">Get In Touch</h2>
                </div>
                
                <div className="space-y-5">
                  <div className="flex gap-4 items-start group">
                    <div className="w-10 h-10 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center flex-shrink-0 group-hover:bg-[#F57C00] transition-all">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs text-white/60 font-semibold mb-1">Call Us</p>
                      <a href="tel:+919042801480" className="text-sm font-bold hover:text-[#F57C00] transition-colors">
                        +91 9042801480
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start group">
                    <div className="w-10 h-10 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center flex-shrink-0 group-hover:bg-[#F57C00] transition-all">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs text-white/60 font-semibold mb-1">Email Us</p>
                      <a href="mailto:info@hifitrafficdatatech.com" className="text-sm font-bold hover:text-[#F57C00] transition-colors break-all">
                        info@hifitrafficdatatech.com
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start group">
                    <div className="w-10 h-10 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center flex-shrink-0 group-hover:bg-[#F57C00] transition-all">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs text-white/60 font-semibold mb-1">Visit Us</p>
                      <p className="text-sm font-bold leading-relaxed">
                        Chennai, Tamil Nadu, India
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-white/10">
                  <p className="text-xs font-semibold text-white/60 mb-4">CONNECT WITH US</p>
                  <div className="flex gap-2.5">
                    <a 
                      href="https://linkedin.com/in/hifi-traffic-data-tech-8b7335297" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-lg bg-white/10 backdrop-blur-sm hover:bg-[#0077B5] transition-all flex items-center justify-center"
                    >
                      <LinkedinIcon className="w-4 h-4" />
                    </a>
                    <a 
                      href="https://www.facebook.com/share/1DVYXfaN1h/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-lg bg-white/10 backdrop-blur-sm hover:bg-[#1877F2] transition-all flex items-center justify-center"
                    >
                      <FacebookIcon className="w-4 h-4" />
                    </a>
                    <a 
                      href="https://www.instagram.com/hifitrafficdata?igsh=MXF2dWZ1eDUzbzBoeQ==" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-lg bg-white/10 backdrop-blur-sm hover:bg-[#E4405F] transition-all flex items-center justify-center"
                    >
                      <InstagramIcon className="w-4 h-4" />
                    </a>
                    <a 
                      href="https://wa.me/919042801480" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-lg bg-white/10 backdrop-blur-sm hover:bg-[#25D366] transition-all flex items-center justify-center"
                    >
                      <MessageCircle className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Why Choose Us Card */}
              <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-[#F57C00]/10 flex items-center justify-center">
                    <Award className="w-5 h-5 text-[#F57C00]" />
                  </div>
                  <h3 className="text-lg font-extrabold text-[#0D2B6B]">Why Choose Us</h3>
                </div>
                
                <div className="space-y-5">
                  {[
                    { 
                      icon: Zap, 
                      title: "Lightning Fast Delivery", 
                      desc: "Get your traffic reports delivered within 24-48 hours for urgent projects" 
                    },
                    { 
                      icon: ShieldCheck, 
                      title: "Accuracy Guaranteed", 
                      desc: "Multi-level quality checks ensure 99.9% accuracy in all data reports" 
                    },
                    { 
                      icon: Users, 
                      title: "Expert Team", 
                      desc: "Skilled traffic analysts with 5+ years of industry experience" 
                    },
                    { 
                      icon: TrendingUp, 
                      title: "Proven Track Record", 
                      desc: "Successfully delivered 500+ projects across 10+ countries" 
                    }
                  ].map((item, idx) => (
                    <div key={idx} className="flex gap-4 items-start group">
                      <div className="w-10 h-10 rounded-lg bg-[#F57C00]/5 flex items-center justify-center flex-shrink-0 group-hover:bg-[#F57C00] group-hover:text-white transition-all">
                        <item.icon className="w-5 h-5 text-[#F57C00] group-hover:text-white transition-colors" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-[#0D2B6B] mb-1">{item.title}</h4>
                        <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Trust Badge */}
              <div className="bg-gradient-to-r from-[#FFF8F2] to-orange-50 border border-[#F57C00]/20 rounded-2xl p-6">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white shadow-md flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8 text-[#F57C00]" />
                  </div>
                  <h4 className="text-base font-extrabold text-[#0D2B6B] mb-2">
                    Trusted by Leading Firms
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Join hundreds of satisfied clients who rely on HIFI Traffic Data Tech for accurate, timely traffic analysis and reporting.
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div className="lg:col-span-8">
              <div className="bg-slate-50 border border-slate-100 rounded-2xl p-8 sm:p-12">
                
                {formSubmitted ? (
                  <div className="text-center py-16">
                    <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="text-3xl font-extrabold text-[#0D2B6B] mb-4">Message Sent Successfully!</h3>
                    <p className="text-slate-500 text-base leading-relaxed mb-8 max-w-lg mx-auto">
                      Thank you for contacting HIFI Traffic Data Tech. Our team will review your requirements and get back to you shortly.
                    </p>
                    <button 
                      onClick={() => {
                        setFormSubmitted(false);
                        setSelectedServices([]);
                        setFiles([]);
                      }}
                      className="text-sm font-bold text-[#F57C00] hover:underline"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0D2B6B] mb-2">
                        Let's Discuss Your Traffic Project
                      </h3>
                      <p className="text-slate-500 text-sm">
                        Fill out the form below and we'll get back to you as soon as possible.
                      </p>
                    </div>

                    {/* Contact Details */}
                    <div className="space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Full Name</label>
                          <input 
                            type="text" 
                            required
                            className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#F57C00] focus:ring-2 focus:ring-[#F57C00]/20 transition-all"
                            placeholder="Enter Your Name"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Company / Organization</label>
                          <input 
                            type="text" 
                            required
                            className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#F57C00] focus:ring-2 focus:ring-[#F57C00]/20 transition-all"
                            placeholder="Enter Company Name"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Business Email</label>
                          <input 
                            type="email" 
                            required
                            className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#F57C00] focus:ring-2 focus:ring-[#F57C00]/20 transition-all"
                            placeholder="Enter Your Email Address"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Contact Number</label>
                          <input 
                            type="tel" 
                            required
                            className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#F57C00] focus:ring-2 focus:ring-[#F57C00]/20 transition-all"
                            placeholder="Enter Phone Number"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Country / Region</label>
                        <select 
                          required
                          defaultValue=""
                          className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#F57C00] focus:ring-2 focus:ring-[#F57C00]/20 transition-all"
                        >
                          <option value="" disabled>Select Your Country</option>
                          {COUNTRIES.map((c) => (
                            <option key={c} value={c}>{c}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <hr className="border-slate-200" />

                    {/* Services Selection */}
                    <div className="relative dropdown-container">
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Select Service</label>
                      
                      {/* Dropdown Button */}
                      <button
                        type="button"
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3 text-sm text-left focus:outline-none focus:border-[#F57C00] focus:ring-2 focus:ring-[#F57C00]/20 transition-all flex items-center justify-between"
                      >
                        <span className="text-slate-500">Choose services</span>
                        <svg className={`w-4 h-4 text-slate-400 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>

                      {/* Dropdown Menu */}
                      {isDropdownOpen && (
                        <div className="absolute z-50 w-full mt-2 bg-white border border-slate-200 rounded-lg shadow-xl">
                          <div 
                            className="max-h-64 overflow-y-auto p-2"
                            style={{
                              overscrollBehavior: 'contain',
                              WebkitOverflowScrolling: 'touch'
                            }}
                          >
                            {SERVICES_OPTIONS.map((service) => {
                              const isChecked = selectedServices.includes(service);
                              return (
                                <label
                                  key={service}
                                  className="flex items-center gap-3 px-3 py-2.5 hover:bg-slate-50 rounded-lg cursor-pointer transition-colors"
                                >
                                  <input
                                    type="checkbox"
                                    checked={isChecked}
                                    onChange={() => handleServiceToggle(service)}
                                    className="w-4 h-4 rounded border-slate-300 text-[#F57C00] focus:ring-[#F57C00]"
                                  />
                                  <span className="text-sm text-slate-700">{service}</span>
                                </label>
                              );
                            })}
                          </div>
                          <div className="border-t border-slate-100 p-2">
                            <button
                              type="button"
                              onClick={handleAddServices}
                              className="w-full px-4 py-2 bg-[#F57C00] text-white text-sm font-bold rounded-lg hover:bg-[#E65100] transition-colors"
                            >
                              Add Selected Services
                            </button>
                          </div>
                        </div>
                      )}
                      
                      {/* Selected Services Chips */}
                      {selectedServices.length > 0 && (
                        <div className="mt-4 flex flex-wrap gap-2">
                          {selectedServices.map((service) => (
                            <div
                              key={service}
                              className="inline-flex items-center gap-2 px-4 py-2 bg-[#FFF8F2] border border-[#F57C00]/30 rounded-full text-sm font-semibold text-[#0D2B6B]"
                            >
                              <span>{service}</span>
                              <button
                                type="button"
                                onClick={() => handleServiceRemove(service)}
                                className="w-4 h-4 rounded-full bg-[#F57C00] text-white flex items-center justify-center hover:bg-[#E65100] transition-colors"
                              >
                                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                              </button>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    <hr className="border-slate-200" />

                    {/* Project Details */}
                    <div className="space-y-6">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Survey Location Details</label>
                        <input 
                          type="text"
                          required
                          className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#F57C00] focus:ring-2 focus:ring-[#F57C00]/20 transition-all"
                          placeholder="Enter Site Location / Junction Name"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Project Requirement</label>
                        <textarea 
                          rows={4}
                          required
                          className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#F57C00] focus:ring-2 focus:ring-[#F57C00]/20 transition-all"
                          placeholder="Write your project details, report format, and survey timing."
                        />
                      </div>
                    </div>

                    <hr className="border-slate-200" />

                    {/* File Upload */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Upload Survey Files</label>
                      <label className="flex flex-col items-center justify-center border-2 border-dashed border-slate-200 hover:border-[#F57C00]/40 rounded-xl p-8 cursor-pointer bg-white transition-colors group">
                        <UploadCloud className="w-10 h-10 text-slate-400 group-hover:text-[#F57C00] transition-colors mb-2" />
                        <span className="text-sm font-semibold text-[#0D2B6B] mb-1">Click to upload files</span>
                        <span className="text-xs text-slate-400">Upload Videos, Templates, Layouts, or Instructions</span>
                        <input 
                          type="file" 
                          multiple 
                          onChange={handleFileChange}
                          className="hidden" 
                        />
                      </label>
                      
                      {files.length > 0 && (
                        <div className="mt-4 p-4 bg-orange-50/50 border border-[#F57C00]/10 rounded-xl">
                          <p className="text-xs font-bold text-[#0D2B6B] mb-2">
                            Selected Files ({files.length}):
                          </p>
                          <ul className="text-xs text-slate-500 space-y-1.5 max-h-32 overflow-y-auto">
                            {files.map((file, idx) => (
                              <li key={idx} className="flex justify-between items-center gap-4 bg-white px-3 py-1.5 rounded border border-slate-100">
                                <span className="truncate font-semibold text-slate-600">{file.name}</span>
                                <span className="text-[10px] bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded">
                                  {(file.size / 1024 / 1024).toFixed(2)} MB
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>

                    <hr className="border-slate-200" />

                    {/* Delivery Requirement */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Delivery Requirement</label>
                      <input 
                        type="date"
                        required
                        className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#F57C00] focus:ring-2 focus:ring-[#F57C00]/20 transition-all"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-[#F57C00] text-white text-sm font-bold rounded-lg hover:bg-[#E65100] transition-all shadow-md group"
                    >
                      Request Traffic Data Support
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </button>
                  </form>
                )}

              </div>
            </div>

          </div>
        </section>

        {/* Map Section */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <span className="text-[#F57C00] font-bold text-xs uppercase tracking-widest">
                Find Us
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0D2B6B] tracking-tight mt-3">
                Our Location
              </h2>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d497698.77490183804!2d79.87925019999999!3d13.047984199999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265ea4f7d3361%3A0x6e61a70b6863d433!2sChennai%2C%20Tamil%20Nadu%2C%20India!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                width="100%"
                height="500"
                style={{ border: 0, pointerEvents: 'auto' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
              ></iframe>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </SmoothScroll>
  );
}
