"use client"

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './about.module.css';
import TrendingNow from '../../../../modules/layout/templates/TrendingNow';

export default function AboutPage() {
  const trendingArticles = [
    {
      id: 1,
      slug: 'seascape-patterson-associates',
      title: 'Seascape by Patterson Associates',
      category: 'BOOK FEATURE',
      image: '/images/trending-1.jpg'
    },
    {
      id: 2,
      slug: 'waiheke-house-cheshire-architects',
      title: 'A Process of Discovery – Waiheke House by Cheshire Architects',
      category: 'BOOK FEATURE • ISSUE 03 FEATURE • VIDEO FEATURE',
      image: '/images/trending-2.jpg',
      hasVideo: true
    },
    {
      id: 3,
      slug: 'waimataruru-pac-studio',
      title: 'A Respectful Balance – Waimataruru by Pac Studio and Kristina Pickford Design',
      category: 'VIDEO FEATURE',
      image: '/images/trending-3.jpg',
      hasVideo: true
    },
    {
      id: 4,
      slug: 'palms-residence-olson-kundig',
      title: 'Forming Deep Connections – Palms Residence by Olson Kundig',
      category: 'VIDEO FEATURE',
      image: '/images/trending-4.jpg',
      hasVideo: true
    }
  ];

  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroContainer}>
          <h1 className={styles.heroTitle}>The Local Project celebrates extraordinary design to an inspired community.</h1>
          
          <p className={styles.heroText}>
            Championing authentic design through The Local Project print periodical, digital publication, 
            video content and social media channels, our mission is to showcase and support the local design community.
          </p>
        </div>
      </section>
      
      {/* About Image */}
      <section className={styles.aboutImageSection}>
        <Image 
          src="/images/about-hero.jpg" 
          alt="The Local Project" 
          fill
          className={styles.imageStyle}
          priority
        />
      </section>
      
      {/* About Content */}
      <section className={styles.aboutContentSection}>
        <div>
          <h2 className={styles.sectionTitle}>About</h2>
          
          <div className={styles.contentGrid}>
            <div>
              <p className={styles.paragraph}>
                The Local Project draws on a wide range of mediums to explore narratives around design, 
                from how it is created to how it is used.
              </p>
              
              <p className={styles.paragraph}>
                Print is tangible, creating a direct, physical connection between reader and subject matter 
                especially relevant in a world where virtual interaction is becoming the norm.
              </p>
              
              <p className={styles.paragraph}>
                Video offers an unparalleled ability to explore the immersive, experiential qualities of 
                spaces and hear architects, designers, makers, and suppliers speak about their work in their own words.
              </p>
              
              <p className={styles.paragraph}>
                Digital, social media and e-mail, meanwhile, are instantaneous platforms. Able to be constantly 
                updated with the latest news, they offer a valued immediacy that underpins the connection with our community.
              </p>
              
              <p className={styles.lastParagraph}>
                Print, video, digital and social media all have their own unique storytelling potential, and we're 
                inspired by the power of these different mediums to communicate the biggest ideas, the finest details 
                and everything in between.
              </p>
            </div>
            
            <div className={styles.imageContainer}>
              <Image 
                src="/images/about-1.jpg" 
                alt="The Local Project print publication" 
                fill
                className={styles.imageStyle}
              />
            </div>
          </div>
        </div>
        
        {/* What We Do Section */}
        <div className={styles.whatWeDoSection}>
          <div className={styles.whatWeDoContainer}>
            <h2 className={styles.whatWeDoTitle}>WHAT WE DO</h2>
            
            <p className={styles.whatWeDoDescription}>
              Working across multiple mediums, we explore architecture, interiors, design and art of Australia, 
              New Zealand and North America. From the Blue Mountains to Waiheke, Christchurch to Manhattan, 
              California to Auckland, The Local Project is dedicated to championing the design community of our local region.
            </p>
            
            <div className={styles.featuresGrid}>
              {/* Features */}
              <div>
                <h3 className={styles.featureTitle}>FEATURES</h3>
                <p className={styles.featureDescription}>
                  The Local Project features are in-depth stories exploring residential and commercial projects, 
                  collections, exhibitions and events.
                </p>
                <Link href="/articles" className={styles.featureLink}>
                  View Features
                </Link>
              </div>
              
              {/* Print Publication */}
              <div>
                <h3 className={styles.featureTitle}>PRINT PUBLICATION</h3>
                <p className={styles.featureDescription}>
                  Published three times a year, The Local Project print periodical showcases the best of 
                  architecture and design from Australia, New Zealand and North America.
                </p>
                <Link href="/publications" className={styles.featureLink}>
                  Order Now
                </Link>
              </div>
              
              {/* Project Galleries */}
              <div>
                <h3 className={styles.featureTitle}>PROJECT GALLERIES</h3>
                <p className={styles.featureDescription}>
                  Covering local architecture and interiors, the Project Galleries represent a comprehensive 
                  collated online source of project images and information.
                </p>
                <Link href="/articles" className={styles.featureLink}>
                  View Galleries
                </Link>
              </div>
              
              {/* Profiles */}
              <div>
                <h3 className={styles.featureTitle}>PROFILES</h3>
                <p className={styles.featureDescription}>
                  From the emerging to the established, The Local Project Profiles showcase architects, 
                  designers, makers, studios and brands.
                </p>
                <Link href="/profiles" className={styles.featureLink}>
                  View Profiles
                </Link>
              </div>
              
              {/* Videos */}
              <div>
                <h3 className={styles.featureTitle}>VIDEOS</h3>
                <p className={styles.featureDescription}>
                  Video produced by The Local Project provides an immersive insight into the best of 
                  local design, interiors and architecture.
                </p>
                <Link href="/videos" className={styles.featureLink}>
                  Watch Now
                </Link>
              </div>
              
              {/* The Local Marketplace */}
              <div>
                <h3 className={styles.featureTitle}>THE LOCAL MARKETPLACE</h3>
                <p className={styles.featureDescription}>
                  The Local Marketplace presents a curated selection of local design, furniture, art, 
                  materials and objects.
                </p>
                <Link href="/marketplace" className={styles.featureLink}>
                  View Marketplace
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        {/* History Section */}
        <div className={styles.historySection}>
          <div className={styles.historyImageContainer}>
            <Image 
              src="/images/about-history.jpg" 
              alt="The Local Project history" 
              fill
              className={styles.imageStyle}
            />
          </div>
          
          <div className={styles.historyContent}>
            <h2 className={styles.historyTitle}>HISTORY</h2>
            
            <div>
              <p className={styles.paragraph}>
                The Local Project was founded in 2016 by Aidan Anderson. At the time, Aidan was working as a furniture maker 
                and observed first hand that, while there was a burgeoning interest in local design across the community, there 
                were few channels connecting designers and makers directly with those interested in their work.
              </p>
              
              <p className={styles.paragraph}>
                What began as an Instagram account has expanded to encompass digital and print media as well as video, 
                becoming Australia, New Zealand and Asia-Pacific's fastest growing design publication. Most recently, in April 
                2023, The Local Project broadened its scope to cover North America, marking an exciting step in its exploration 
                of locality and design.
              </p>
              
              <p className={styles.paragraph}>
                The first issue of The Local Project print publication was released in 2019. This foray into print was conceived as 
                a way of offering something tangible to The Local Project's growing community and acknowledging the 
                significance of design as a physical object. The print publication has since expanded to encompass two 
                additional titles – The Commercial Project and The Local Marketplace – and 2022 saw the release of The Local 
                Project's first hardcover book, 10.
              </p>
              
              <p className={styles.paragraph}>
                Over the years, The Local Project's video content has evolved, and the YouTube channel – which has amassed 
                one million subscribers and one hundred million video plays – represents a new way of interacting with the 
                existing audience and of reaching new eyes around the globe.
              </p>
              
              <p className={styles.lastParagraph}>
                These efforts have been recognised at the Mumbrella Publish Awards; in 2022, The Local Project was awarded 
                Best Use of Video for its video of James Stockwell Architect's Bunkeren and in 2023, it was named Publication of 
                the Year – Large Consumer/Custom.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Newsletter Signup */}
      <section className={styles.newsletterSection}>
        <div className={styles.newsletterContainer}>
          <h2 className={styles.newsletterTitle}>THE LOCAL PROJECT Community</h2>
          
          <p className={styles.newsletterDescription}>
            Sign up to our mailing list for the best of local architecture, interiors and design delivered to your inbox.
          </p>
          
          <form className={styles.newsletterForm}>
            <input 
              type="email" 
              placeholder="Your email address" 
              className={styles.newsletterInput}
            />
            <button 
              type="submit"
              className={styles.newsletterButton}
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
      
      {/* Replace Trending Now Section */}
      <TrendingNow 
        articles={trendingArticles} 
        heading="Trending now"
      />
    </div>
  );
} 