'use client';
import SocialIcons from '@/component/shared/SocialIcons';
import { FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import SectionHeading from '@/component/shared/SectionHeading';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success?: boolean;
    message?: string;
  }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch("https://formspree.io/f/mwpojkjq", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        setSubmitStatus({
          success: true,
          message: 'Message sent successfully!'
        });
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      setSubmitStatus({
        success: false,
        message: 'Failed to send message. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="min-h-screen py-10 md:py-20 px-4 sm:px-6 md:px-[12%]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
       <div className="contact-text order-1">
  <SectionHeading 
    highlightedText="me" 
    className="text-center md:text-left text-4xl md:text-6xl mb-4"
  >
    Contact
  </SectionHeading>
  
  <h4 className="text-center md:text-left text-xl md:text-2xl font-semibold text-white my-1 leading-[1.5] md:leading-[63px]">
    Let&apos;s work together
  </h4>
  
  <p className="text-base md:text-xl text-white leading-6 md:leading-8 mb-6 md:mb-8">
    A front-end developer and UI/UX designer passionate about turning ideas into polished, user-friendly interfaces. 
    Whether you need a new website or a redesign, let&apos;s collaborate to create something exceptional. Reach out, and let&apos;s make it happen!
  </p>
  
  <ul className="text-white mb-8 md:mb-12">
    <li className="mb-2.5 flex items-center text-base md:text-xl">
      <MdEmail className='inline-block text-xl md:text-2xl font-semibold text-red-600 mr-2'/>
      nehahaneef1152003@gmail.com
    </li>
    <li className="mb-2.5 flex items-center text-base md:text-xl">
      <FaPhoneAlt className='inline-block text-xl md:text-2xl font-semibold text-red-600 mr-2'/>
      03257220057
    </li>
  </ul>
  
  <SocialIcons className="mt-4 md:mt-6" />
</div>

       
        <div className="contact-form relative w-full max-w-4xl mx-auto order-2 lg:order-2">
          <form onSubmit={handleSubmit} className="w-full space-y-4 md:space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div className="relative group">
                <input 
                  type="text" 
                  name="name" 
                  placeholder=" " 
                  required 
                  className="w-full p-3 md:p-4 bg-zinc-800/60 text-white text-base md:text-lg rounded-lg border-2 border-zinc-600 outline-none peer focus:border-red-500 transition-all duration-300"
                  value={formData.name}
                  onChange={handleChange}
                />
                <label className="absolute left-3 md:left-4 top-1/2 -translate-y-1/2 text-zinc-400 pointer-events-none transition-all duration-300 
                                  peer-placeholder-shown:text-base md:peer-placeholder-shown:text-lg peer-placeholder-shown:top-1/2
                                  peer-focus:-top-2 peer-focus:text-xs md:peer-focus:text-sm peer-focus:text-red-400 peer-focus:bg-zinc-900 peer-focus:px-1 md:peer-focus:px-2
                                  -top-2 text-xs md:text-sm bg-zinc-900 px-1 md:px-2">
                  Your Name
                </label>
              </div>
              
              <div className="relative group">
                <input 
                  type="email" 
                  name="email" 
                  placeholder=" " 
                  required 
                  className="w-full p-3 md:p-4 bg-zinc-800/60 text-white text-base md:text-lg rounded-lg border-2 border-zinc-600 outline-none peer focus:border-red-500 transition-all duration-300"
                  value={formData.email}
                  onChange={handleChange}
                />
                <label className="absolute left-3 md:left-4 top-1/2 -translate-y-1/2 text-zinc-400 pointer-events-none transition-all duration-300 
                                  peer-placeholder-shown:text-base md:peer-placeholder-shown:text-lg peer-placeholder-shown:top-1/2
                                  peer-focus:-top-2 peer-focus:text-xs md:peer-focus:text-sm peer-focus:text-red-400 peer-focus:bg-zinc-900 peer-focus:px-1 md:peer-focus:px-2
                                  -top-2 text-xs md:text-sm bg-zinc-900 px-1 md:px-2">
                  Email Address
                </label>
              </div>
            </div>
            
            <div className="relative group">
              <input 
                type="text" 
                name="subject" 
                placeholder=" " 
                required 
                className="w-full p-3 md:p-4 bg-zinc-800/60 text-white text-base md:text-lg rounded-lg border-2 border-zinc-600 outline-none peer focus:border-red-500 transition-all duration-300"
                value={formData.subject}
                onChange={handleChange}
              />
              <label className="absolute left-3 md:left-4 top-1/2 -translate-y-1/2 text-zinc-400 pointer-events-none transition-all duration-300 
                                peer-placeholder-shown:text-base md:peer-placeholder-shown:text-lg peer-placeholder-shown:top-1/2
                                peer-focus:-top-2 peer-focus:text-xs md:peer-focus:text-sm peer-focus:text-red-400 peer-focus:bg-zinc-900 peer-focus:px-1 md:peer-focus:px-2
                                -top-2 text-xs md:text-sm bg-zinc-900 px-1 md:px-2">
                Subject
              </label>
            </div>
            
            <div className="relative group">
              <textarea 
                name="message" 
                rows={4} 
                placeholder=" " 
                required 
                className="w-full p-3 md:p-4 bg-zinc-800/60 text-white text-base md:text-lg rounded-lg border-2 border-zinc-600 outline-none peer focus:border-red-500 transition-all duration-300 resize-none min-h-[120px] md:min-h-[180px]"
                value={formData.message}
                onChange={handleChange}
              />
              <label className="absolute left-3 md:left-4 top-3 md:top-4 text-zinc-400 pointer-events-none transition-all duration-300 
                                peer-placeholder-shown:text-base md:peer-placeholder-shown:text-lg peer-placeholder-shown:top-3 md:peer-placeholder-shown:top-4
                                peer-focus:-top-2 peer-focus:text-xs md:peer-focus:text-sm peer-focus:text-red-400 peer-focus:bg-zinc-900 peer-focus:px-1 md:peer-focus:px-2
                                -top-2 text-xs md:text-sm bg-zinc-900 px-1 md:px-2">
                Your Message
              </label>
            </div>
            
            <div className="flex justify-end">
              <button 
                type="submit" 
                disabled={isSubmitting}
                className={`
                  relative
                  w-full md:w-1/2 lg:w-1/3 min-w-[150px] md:min-w-[200px] 
                  py-3 md:py-4 px-6 md:px-8
                  m-auto
                  bg-gradient-to-r from-red-600 via-red-600 to-red-700  
                  rounded-md
                  text-base md:text-lg text-white font-bold tracking-wider
                  transition-all duration-300 
                  transform 
                  hover:scale-[1.03] hover:shadow-xl hover:shadow-red-500/30
                  active:scale-[0.98] active:shadow-lg
                  focus:outline-none focus:ring-4 focus:ring-red-500/70 focus:ring-offset-2 focus:ring-offset-zinc-900
                  overflow-hidden
                  group
                  ${isSubmitting ? 'opacity-90 cursor-not-allowed' : ''}
                `}
              >
                <span className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="absolute inset-0 rounded-xl shadow-[inset_0_0_10px_rgba(255,255,255,0.3)] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-white/30 transition-all duration-500"></span>
                
                <span className="relative flex items-center justify-center gap-2 z-10">
                  {isSubmitting ? (
                    <>
                      <svg 
                        className="animate-spin h-5 w-5 text-white" 
                        xmlns="http://www.w3.org/2000/svg" 
                        fill="none" 
                        viewBox="0 0 24 24"
                      >
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <span>Send Message</span>
                  )}
                </span>
              </button>
            </div>
            
            {submitStatus.message && (
              <div className={`mt-3 md:mt-4 p-3 md:p-4 rounded-lg border ${submitStatus.success ? 'bg-green-900/30 text-green-400 border-green-800' : 'bg-red-900/30 text-red-400 border-red-800'}`}>
                <div className="flex items-center gap-2">
                  {submitStatus.success ? (
                    <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  ) : (
                    <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  )}
                  <span className="text-sm md:text-base">{submitStatus.message}</span>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;