"use client";

import React, { useState, useEffect, FormEvent } from 'react';
import styles from './advertise.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { StaticImageData } from 'next/image';
import placeholderImage from '../../public/placeholder.jpg';

export default function AdvertisePage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you would typically handle the form submission to your backend
    // For now, we'll just show a success message
    setFormSubmitted(true);
  };
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  const getImageSrc = (path: string, fallback: StaticImageData) => {
    try {
      return path;
    } catch (error) {
      return fallback;
    }
  };
  
  return (
    <div className={styles.advertisePage}>
      <section className={styles.hero}>
        <h1>ADVERTISE</h1>
        
        <div className={styles.heroContent}>
          <p className={styles.intro}>
            The Local Project is one of the fastest-growing platforms globally.
          </p>
          
          <p className={styles.description}>
            Our audience is a genuine cross-section of the design community. Encompassing both design-lovers and industry professionals, The Local Project offers a rare opportunity to engage with all sectors of the market.
          </p>
          
          <div className={styles.ctaContainer}>
            <Link href="#contact" className={styles.ctaButton}>
              REQUEST OUR MEDIA KIT
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.audienceSection}>
        <div className={styles.audienceType}>
          <div className={styles.imageContainer}>
            <div className={styles.placeholderImageBox}>
              <p>Design Lovers Image</p>
            </div>
          </div>
          <div className={styles.audienceContent}>
            <h3>Design Lovers</h3>
            <p>
              Half of our audience can be classified as 'design-lovers' – those who do not work in a design profession but who are interested in and curious about design. They're engaged and passionate, typically of high education and income. They understand the meaning of good design and value it in their lives.
            </p>
          </div>
        </div>

        <div className={styles.audienceType}>
          <div className={styles.imageContainer}>
            <div className={styles.placeholderImageBox}>
              <p>Design Professionals Image</p>
            </div>
          </div>
          <div className={styles.audienceContent}>
            <h3>Design Professionals</h3>
            <p>
              Professionals in the design and construction industry make up the other half of our audience. Architects, interior designers, industrial designers, stylists, builders, trades, artists and photographers are all drawn to The Local Project for the consistently high quality content and rely on our platforms to be informed about industry news.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.statisticsSection}>
        <h2>STATISTICS</h2>
        
        <p className={styles.statIntro}>
          The Local Project celebrates honest and human-centred design to an inspired community.
        </p>
        
        <p className={styles.statSubIntro}>
          As of November 2023, there are a total of
        </p>
        
        <div className={styles.statTotal}>
          <span className={styles.statNumber}>3,433,700+</span>
          <p className={styles.statLabel}>The Local Project Accumulative Community Members</p>
        </div>

        <div className={styles.statsGrid}>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>205,000+</span>
            <p className={styles.statLabel}>Website Users per Month</p>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>1,408,000+</span>
            <p className={styles.statLabel}>Instagram Followers</p>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>116,800+</span>
            <p className={styles.statLabel}>EDM Subscribers</p>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>5,750,000+</span>
            <p className={styles.statLabel}>Unique Pinterest Viewers per Month</p>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>135,000+</span>
            <p className={styles.statLabel}>Magazine Circulation per Year</p>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>7,500+</span>
            <p className={styles.statLabel}>Publication Subscribers</p>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>5,200,000+</span>
            <p className={styles.statLabel}>Unique YouTube Views per Month</p>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>1,210,400+</span>
            <p className={styles.statLabel}>Combined YouTube Subscribers</p>
          </div>
        </div>
        
        <p className={styles.statSource}>
          <em>Source: Google Analytics, Instagram, Pinterest, 2020 Subscriber Survey</em>
        </p>
        
        <div className={styles.ctaContainer}>
          <Link href="#contact" className={styles.ctaButton}>
            REQUEST OUR MEDIA KIT
          </Link>
        </div>
      </section>

      <section className={styles.advertisingOptions}>
        <h2>ADVERTISING WITH US</h2>
        
        <div className={styles.optionsGrid}>
          <div className={styles.optionItem}>
            <div className={styles.optionImage}>
              <div className={styles.placeholderImageBox}>
                <p>Project Sourcing</p>
              </div>
            </div>
            <h4>Project Sourcing and Imagery Content<br />Creation</h4>
          </div>
          
          <div className={styles.optionItem}>
            <div className={styles.optionImage}>
              <div className={styles.placeholderImageBox}>
                <p>Product Collections</p>
              </div>
            </div>
            <h4>Product Collections and Features</h4>
          </div>
          
          <div className={styles.optionItem}>
            <div className={styles.optionImage}>
              <div className={styles.placeholderImageBox}>
                <p>Video Production</p>
              </div>
            </div>
            <h4>Video Production and Campaigns</h4>
          </div>
          
          <div className={styles.optionItem}>
            <div className={styles.optionImage}>
              <div className={styles.placeholderImageBox}>
                <p>Event Promotion</p>
              </div>
            </div>
            <h4>Event Promotion and Coverage</h4>
          </div>
          
          <div className={styles.optionItem}>
            <div className={styles.optionImage}>
              <div className={styles.placeholderImageBox}>
                <p>Local Marketplace</p>
              </div>
            </div>
            <h4>The Local Marketplace</h4>
          </div>
          
          <div className={styles.optionItem}>
            <div className={styles.optionImage}>
              <div className={styles.placeholderImageBox}>
                <p>Studio Profiles</p>
              </div>
            </div>
            <h4>Designers, Firms and Studio Profiles</h4>
          </div>
          
          <div className={styles.optionItem}>
            <div className={styles.optionImage}>
              <div className={styles.placeholderImageBox}>
                <p>Banner Advertising</p>
              </div>
            </div>
            <h4>Banner and E-mail Advertising</h4>
          </div>
          
          <div className={styles.optionItem}>
            <div className={styles.optionImage}>
              <div className={styles.placeholderImageBox}>
                <p>Tailored Content</p>
              </div>
            </div>
            <h4>Tailored Native Content</h4>
          </div>
          
          <div className={styles.optionItem}>
            <div className={styles.optionImage}>
              <div className={styles.placeholderImageBox}>
                <p>Magazine Advertising</p>
              </div>
            </div>
            <h4>Magazine Advertising and Advertorials</h4>
          </div>
        </div>
      </section>

      <section className={styles.brandsSection}>
        <h2>Brands We've worked with</h2>
        <div className={styles.brandsGrid}>
          {/* Placeholder for brand logos */}
          {Array(12).fill(0).map((_, i) => (
            <div key={`brand-logo-${i}`} className={styles.brandLogo}>
              <div className={styles.logoPlaceholder} />
            </div>
          ))}
        </div>
      </section>

      <section className={styles.testimonialsSection}>
        <h2>Testimonials</h2>
        
        <div className={styles.testimonialGrid}>
          <div className={styles.testimonial}>
            <p className={styles.testimonialRole}>Architect</p>
            <p className={styles.testimonialText}>
              "Working with The Local Project has been both an effortless and enjoyable process. There has been such a broad reach to targeted and preferred client groups through the exposure gained from digital, print and video production. The recognition of our project has also been quite overwhelming."
            </p>
            <p className={styles.testimonialAuthor}>Nick Lukas</p>
            <p className={styles.testimonialPosition}>Director & Co-Founder, Architecton</p>
          </div>
          
          <div className={styles.testimonial}>
            <p className={styles.testimonialRole}>Interior Designer</p>
            <p className={styles.testimonialText}>
              "After my project, Gordon's Bay House, was featured on The Local Project across its channels, the client (my brother in law, an investment banker) received an incredible amount of feedback from within his network, friends and fellow finance professionals, who seem to make up a large part of The Local Project audience."
            </p>
            <p className={styles.testimonialAuthor}>Davina Bester</p>
            <p className={styles.testimonialPosition}>Director, Milieu Creative</p>
          </div>
          
          <div className={styles.testimonial}>
            <p className={styles.testimonialRole}>Supplier</p>
            <p className={styles.testimonialText}>
              "The Local Project provides an attention to detail and understanding of our brand strategy that has made all of our video content produced with them a success. They always deliver a level of production that encourages current and new clients to reach out for new project opportunities."
            </p>
            <p className={styles.testimonialAuthor}>Phil Brenton</p>
            <p className={styles.testimonialPosition}>Managing Director, Artedomus</p>
          </div>
          
          <div className={styles.testimonial}>
            <p className={styles.testimonialRole}>Builder</p>
            <p className={styles.testimonialText}>
              "DuoBuilt's work with The Local Project has been an important step in elevating the position of my business in the highly competitive luxury building industry. Working with The Local Project across print and digital has helped to forge a crucial gateway to more clients, as well as collaborations with industry leading design professionals."
            </p>
            <p className={styles.testimonialAuthor}>Jess Nardella</p>
            <p className={styles.testimonialPosition}>Founder & Director, DuoBuild</p>
          </div>
          
          <div className={styles.testimonial}>
            <p className={styles.testimonialRole}>Consultant</p>
            <p className={styles.testimonialText}>
              "The Local Project provides my clients with a powerful opportunity to elevate the experience of their spaces, process and values. Throughout their platforms, we have access to a large but well qualified community of potential clients, collaborators and advocates – it is second to none in its space for its effectiveness in supporting our clients strategic goals for growth and meaningful recognition."
            </p>
            <p className={styles.testimonialAuthor}>Elle McCarthy</p>
            <p className={styles.testimonialPosition}>Director, DEFINE Consulting</p>
          </div>
          
          <div className={styles.testimonial}>
            <p className={styles.testimonialRole}>Developer</p>
            <p className={styles.testimonialText}>
              "Since The Local Project featured our company across their digital channels, I've seen a flood of direct inquiries that I can trace back to engagement with or exposure to our Profile."
            </p>
            <p className={styles.testimonialAuthor}>Elliot McLaren</p>
            <p className={styles.testimonialPosition}>Director, Ruum</p>
          </div>
        </div>
        
        <Link href="#contact" className={styles.ctaButton}>
          Request our media kit
        </Link>
      </section>

      <section id="contact" className={styles.contactSection}>
        <h2>REQUEST OUR MEDIA KIT</h2>
        
        <div className={styles.contactContainer}>
          <div className={styles.contactImageContainer}>
            <div className={styles.placeholderImageBox}>
              <p>Contact Image</p>
            </div>
          </div>
          
          <div className={styles.contactFormContainer}>
            {formSubmitted ? (
              <div className={styles.successMessage}>
                <h3>Thank you for your request!</h3>
                <p>We'll send our media kit to your email shortly.</p>
              </div>
            ) : (
              <form className={styles.contactForm} onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                  <label>Name</label>
                  <input type="text" placeholder="Your Name" required />
                </div>
                
                <div className={styles.formGroup}>
                  <label>Industry</label>
                  <input type="text" placeholder="Your Industry" required />
                </div>
                
                <div className={styles.formGroup}>
                  <label>Company</label>
                  <input type="text" placeholder="Your Company" required />
                </div>
                
                <div className={styles.formGroup}>
                  <label>Email</label>
                  <input type="email" placeholder="Your Email" required />
                </div>
                
                <div className={styles.formGroup}>
                  <label>Location</label>
                  <select required defaultValue="VIC">
                    <option value="VIC">VIC</option>
                    <option value="NSW">NSW</option>
                    <option value="QLD">QLD</option>
                    <option value="SA">SA</option>
                    <option value="WA">WA</option>
                    <option value="TAS">TAS</option>
                    <option value="NZ">NEW ZEALAND</option>
                    <option value="US">UNITED STATES</option>
                    <option value="OTHER">OUTSIDE OF AU, NZ & USA</option>
                  </select>
                </div>
                
                <div className={styles.formGroup}>
                  <label>Message</label>
                  <textarea placeholder="Type your message here" rows={3} />
                </div>
                
                <button type="submit" className={styles.submitButton}>SUBMIT</button>
              </form>
            )}
          </div>
        </div>
      </section>

      {showScrollTop && (
        <button 
          type="button"
          className={styles.scrollTopButton}
          onClick={scrollToTop}
          aria-label="Scroll to top"
        >
          ↑
        </button>
      )}
    </div>
  );
} 