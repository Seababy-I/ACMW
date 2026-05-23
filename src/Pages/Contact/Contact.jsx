import React from 'react';
import DotGrid from '../../DotGrid';
import Connect from './Connect';
import FAQ from './FAQ';
import ContactForm from './ContactForm';
import './Contact.css';

function Contact() {
  return (
    <div className="contact-page-wrapper bg-[#030014] min-h-screen"> 
      
      {/* BACKGROUND: Fixed so it stays behind as you scroll */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <DotGrid dotSize={4} gap={25} baseColor="#271e37" activeColor="#1C90CE" />
      </div>

      <div className="relative z-10 flex flex-col w-full">
        
        {/* SECTION 1: HERO */}
        <section className="relative z-10 flex flex-col items-center justify-center min-h-[80vh] pt-[200px] pb-10 text-center px-4">
          <div className="mb-8 animate-fade-in">
            <span className="text-[#2B609E] text-sm font-bold tracking-[0.4em] uppercase">
              Get In Touch
            </span>
          </div>

          <div className="relative group mb-8">
            <h1 className="text-7xl md:text-[100px] font-black text-white tracking-tighter uppercase leading-none">
              Contact Us
            </h1>
            <div className="absolute inset-0 blur-[100px] bg-[#5227FF] opacity-45 -z-10 scale-110"></div>
          </div>

          <div className="flex items-center justify-center w-full gap-4 mb-10">
            <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-[#2B609E]/50 to-[#2B609E]"></div>
            <div className="relative">
              <div className="w-3 h-3 rounded-full bg-[#2B609E] shadow-[0_0_15px_rgba(82,39,255,1)]"></div>
              <div className="absolute inset-0 w-3 h-3 rounded-full bg-[#2B609E] animate-ping opacity-20"></div>
            </div>
            <div className="h-[2px] w-24 bg-gradient-to-l from-transparent via-[#2B609E]/50 to-[#2B609E]"></div>
          </div>

          <p className="text-gray-300 text-xl md:text-2xl max-w-3xl leading-relaxed font-medium">
            We're here to answer your questions and explore opportunities together
          </p>
        </section>

        {/* Scroll Hook */}
        <div className="flex flex-col items-center justify-center py-0 opacity-50">
          <div className="text-gray-500 text-[15px] tracking-[0.5em] uppercase mb-4 animate-pulse">
            Scroll to Connect
          </div>
          <div className="h-12 w-[1px] bg-gradient-to-b from-transparent via-[#5227FF] to-transparent animate-bounce"></div>
        </div>

        {/* SUB-SECTIONS */}
        <Connect />
        <FAQ />
        
        <div className="pb-12"> 
          <ContactForm />
        </div>

        {/* Bottom Spacer */}
        <div className="h-16 shrink-0"></div>
      </div>
    </div>
  );
}

export default Contact;
