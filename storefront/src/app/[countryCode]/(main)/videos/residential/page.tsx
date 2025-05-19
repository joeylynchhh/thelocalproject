'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './residential.module.css';
import TrendingNow from '../../../../../modules/layout/templates/TrendingNow';

export default function VideosPage() {
  // Sample trending articles data for the TrendingNow component
  const trendingArticles = [
    {
      image: "/images/trending/seascape.jpg",
      imageAlt: "Seascape by Patterson Associates",
      type: "BOOK FEATURE",
      title: "Seascape by Patterson Associates",
      hasVideo: true
    },
    {
      image: "/images/trending/waiheke-house.jpg",
      imageAlt: "A Process of Discovery – Waiheke House by Cheshire Architects",
      type: "BOOK FEATURE • ISSUE 03 FEATURE • VIDEO FEATURE",
      title: "A Process of Discovery – Waiheke House by Cheshire Architects",
      hasVideo: true
    },
    {
      image: "/images/trending/waimataruru.jpg",
      imageAlt: "A Respectful Balance – Waimataruru by Pac Studio and Kristina Pickford Design",
      type: "VIDEO FEATURE",
      title: "A Respectful Balance – Waimataruru by Pac Studio and Kristina Pickford Design",
      hasVideo: true
    },
    {
      image: "/images/trending/palms-residence.jpg",
      imageAlt: "Forming Deep Connections – Palms Residence by Olson Kundig",
      type: "VIDEO FEATURE",
      title: "Forming Deep Connections – Palms Residence by Olson Kundig",
      hasVideo: true
    },
    {
      image: "/images/trending/yukari-house.jpg",
      imageAlt: "Yukari House by Tanev Muir Architects",
      type: "VIDEO FEATURE",
      title: "Yukari House by Tanev Muir Architects",
      hasVideo: true
    }
  ];

  return (
    <div className={styles['videos-page']}>
      {/* Page Header */}
      <div className={styles['page-header']}>
        <span className={styles.pageCategory}>VIDEOS</span>
        <h1>RESIDENTIAL</h1>
        
        {/* Video Categories */}
        <div className={styles['video-categories']}>
          <Link href="/videos/house-tours">House Tours</Link>
          <span className={styles.separator}>•</span>
          <Link href="/videos/product-features">Product Features</Link>
          <span className={styles.separator}>•</span>
          <Link href="/videos/commercial-projects">Commercial Projects</Link>
          <span className={styles.separator}>•</span>
          <Link href="/videos/multi-residential-projects">Multi-Residential Projects</Link>
          <span className={styles.separator}>•</span>
          <Link href="/videos/retail-projects">Retail Projects</Link>
          <span className={styles.separator}>•</span>
          <Link href="/videos/profile-features">Profile Features</Link>
          <span className={styles.separator}>•</span>
          <Link href="/videos/educational-features">Educational Features</Link>
        </div>
      </div>
      
      <div className={styles.content}>
        {/* Left Sidebar - Filters */}
        <div className={styles.sidebar}>
          <div className={styles.filterSection}>
            <h4>TOPIC</h4>
            <ul>
              <li><Link href="/videos/topic/architects-own-home">An Architect's Own Home</Link></li>
              <li><Link href="/videos/topic/interior-designers-own-home">An Interior Designer's Own Home</Link></li>
              <li><Link href="/videos/topic/australian-homes">Australian Homes</Link></li>
              <li><Link href="/videos/topic/new-zealand-homes">New Zealand Homes</Link></li>
              <li><Link href="/videos/topic/north-american-homes">North American Homes</Link></li>
              <li><Link href="/videos/topic/sustainability-series">The Sustainability Series</Link></li>
              <li><Link href="/videos/topic/partner-series">Partner Series</Link></li>
            </ul>
          </div>
        </div>
        
        {/* Main Content - Videos Grid */}
        <div className={styles.mainContent}>
          {/* Featured Videos Grid */}
          <div className={styles.videosGrid}>
            {/* Row 1, Video 1 */}
            <div className={styles.videoCard}>
              <div className={styles.videoThumbnail}>
                <div className={styles.playButton} aria-label="Play video">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <title>Play video</title>
                    <path d="M8 5V19L19 12L8 5Z" fill="white"/>
                  </svg>
                </div>
                <Image 
                  src="/images/steven-john-clark.jpg" 
                  alt="Steven John Clark of DenHolm" 
                  width={600} 
                  height={400} 
                  layout="responsive"
                />
              </div>
              <div className={styles.videoInfo}>
                <span className={styles.videoTag}>Video Feature</span>
                <h3>Steven John Clark of DenHolm</h3>
                <p>Based in Melbourne, Scottish-born Steven John Clark formed DenHolm to be a multi-disciplinary art and design studio that creates unique and engaging pieces.</p>
              </div>
            </div>
            
            {/* Row 1, Video 2 */}
            <div className={styles.videoCard}>
              <div className={styles.videoThumbnail}>
                <div className={styles.playButton} aria-label="Play video">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <title>Play video</title>
                    <path d="M8 5V19L19 12L8 5Z" fill="white"/>
                  </svg>
                </div>
                <Image 
                  src="/images/chaucer-residence.jpg" 
                  alt="Chaucer Residence by Pohio Adams Architects" 
                  width={600} 
                  height={400} 
                  layout="responsive"
                />
              </div>
              <div className={styles.videoInfo}>
                <span className={styles.videoTag}>Issue 17 Feature</span>
                <h3>Chaucer Residence by Pohio Adams Architects</h3>
                <p>Pohio Adams Architects has extended a Federation home in Melbourne's St Kilda to include a striking modern pavilion encased in glass blocks.</p>
              </div>
            </div>
            
            {/* Row 2, Video 1 */}
            <div className={styles.videoCard}>
              <div className={styles.videoThumbnail}>
                <div className={styles.playButton} aria-label="Play video">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <title>Play video</title>
                    <path d="M8 5V19L19 12L8 5Z" fill="white"/>
                  </svg>
                </div>
                <Image 
                  src="/images/jll-melbourne.jpg" 
                  alt="JLL Melbourne Office by JLL and Schiavello" 
                  width={600} 
                  height={400} 
                  layout="responsive"
                />
              </div>
              <div className={styles.videoInfo}>
                <span className={styles.videoTag}>Video Feature</span>
                <h3>JLL Melbourne Office by JLL and Schiavello</h3>
                <p>Set between Collins Street and Flinders Lane in Melbourne, global commercial real-estate company JLL's reimagined CBD headquarters looks to the future – with a nod to the locale's rich history.</p>
              </div>
            </div>
            
            {/* Row 2, Video 2 */}
            <div className={styles.videoCard}>
              <div className={styles.videoThumbnail}>
                <div className={styles.playButton} aria-label="Play video">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <title>Play video</title>
                    <path d="M8 5V19L19 12L8 5Z" fill="white"/>
                  </svg>
                </div>
                <Image 
                  src="/images/artedomus-fiandre.jpg" 
                  alt="Artedomus Experts: Episode 4 – New Directions in Porcelain with Fiandre" 
                  width={600} 
                  height={400} 
                  layout="responsive"
                />
              </div>
              <div className={styles.videoInfo}>
                <span className={styles.videoTag}>Video Feature</span>
                <h3>Artedomus Experts: Episode 4 – New Directions in Porcelain with Fiandre</h3>
                <p>On a recent trip to Italy, team members from Artedomus visited Fiandre to learn about new directions in porcelain.</p>
              </div>
            </div>
            
            {/* Row 3, Video 1 */}
            <div className={styles.videoCard}>
              <div className={styles.videoThumbnail}>
                <div className={styles.playButton} aria-label="Play video">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <title>Play video</title>
                    <path d="M8 5V19L19 12L8 5Z" fill="white"/>
                  </svg>
                </div>
                <Image 
                  src="/images/new-traditional.jpg" 
                  alt="The New Traditional by Avenue Studios and LOWI Interiors" 
                  width={600} 
                  height={400} 
                  layout="responsive"
                />
              </div>
              <div className={styles.videoInfo}>
                <span className={styles.videoTag}>Video Feature</span>
                <h3>The New Traditional by Avenue Studios and LOWI Interiors</h3>
                <p>Avenue Studio and LOWI Interiors collaborate to create a home that balances traditional architectural elements with contemporary design sensibilities.</p>
              </div>
            </div>
            
            {/* Row 3, Video 2 */}
            <div className={styles.videoCard}>
              <div className={styles.videoThumbnail}>
                <div className={styles.playButton} aria-label="Play video">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <title>Play video</title>
                    <path d="M8 5V19L19 12L8 5Z" fill="white"/>
                  </svg>
                </div>
                <Image 
                  src="/images/herne-bay-house.jpg" 
                  alt="Herne Bay House III by Humphreys Landscaping" 
                  width={600} 
                  height={400} 
                  layout="responsive"
                />
              </div>
              <div className={styles.videoInfo}>
                <span className={styles.videoTag}>Video Feature</span>
                <h3>Herne Bay House III by Humphreys Landscaping</h3>
                <p>Humphreys Landscaping creates a serene outdoor environment for this contemporary waterfront residence in Auckland's Herne Bay.</p>
              </div>
            </div>
          </div>
          
          {/* Two Column Layout */}
          <div className={styles.twoColumnGrid}>
            {/* Left Column */}
            <div className={styles.columnCard}>
              <div className={styles.videoThumbnail}>
                <div className={styles.playButton} aria-label="Play video">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <title>Play video</title>
                    <path d="M8 5V19L19 12L8 5Z" fill="white"/>
                  </svg>
                </div>
                <Image 
                  src="/images/whale-beach.jpg" 
                  alt="Whale Beach by Shaun Lockyer Architects" 
                  width={600} 
                  height={400} 
                  layout="responsive"
                />
              </div>
              <div className={styles.videoInfo}>
                <span className={styles.videoTag}>ISSUE 17 FEATURE</span>
                <h3>Whale Beach by Shaun Lockyer Architects</h3>
                <p>Perched above Whale Beach in Sydney's north, this oceanfront residence is a masterful study in materiality and connection to place, encapsulating the relaxed character of its surroundings.</p>
              </div>
            </div>
            
            {/* Right Column */}
            <div className={styles.columnCard}>
              <div className={styles.videoThumbnail}>
                <div className={styles.playButton} aria-label="Play video">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <title>Play video</title>
                    <path d="M8 5V19L19 12L8 5Z" fill="white"/>
                  </svg>
                </div>
                <Image 
                  src="/images/rising-sun-residence.jpg" 
                  alt="The Rising Sun Residence by Reitsma & Associates" 
                  width={600} 
                  height={400} 
                  layout="responsive"
                />
              </div>
              <div className={styles.videoInfo}>
                <span className={styles.videoTag}>VIDEO FEATURE</span>
                <h3>The Rising Sun Residence by Reitsma & Associates</h3>
                <p>Designed by Reitsma & Associates, Rising Sun Residence on Queensland's Sunshine Coast provides a luxurious, holiday-like experience, celebrating natural light and strong connections to the outdoors.</p>
              </div>
            </div>
          </div>
          
          {/* Additional Row 1 */}
          <div className={styles.twoColumnGrid}>
            {/* Left Column */}
            <div className={styles.columnCard}>
              <div className={styles.videoThumbnail}>
                <div className={styles.playButton} aria-label="Play video">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <title>Play video</title>
                    <path d="M8 5V19L19 12L8 5Z" fill="white"/>
                  </svg>
                </div>
                <Image 
                  src="/images/sixty-martin-place.jpg" 
                  alt="Sixty Martin Place by Hassell and Arup" 
                  width={600} 
                  height={400} 
                  layout="responsive"
                />
              </div>
              <div className={styles.videoInfo}>
                <span className={styles.videoTag}>VIDEO FEATURE</span>
                <h3>Sixty Martin Place by Hassell and Arup</h3>
                <p>Hassell and Arup collaborate on Sixty Martin Place, a commercial tower that responds to its civic context with a design that embraces Sydney's urban fabric and heritage.</p>
              </div>
            </div>
            
            {/* Right Column */}
            <div className={styles.columnCard}>
              <div className={styles.videoThumbnail}>
                <div className={styles.playButton} aria-label="Play video">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <title>Play video</title>
                    <path d="M8 5V19L19 12L8 5Z" fill="white"/>
                  </svg>
                </div>
                <Image 
                  src="/images/tmrw-home.jpg" 
                  alt="TMRW Home by Blum and Hütt Homes" 
                  width={600} 
                  height={400} 
                  layout="responsive"
                />
              </div>
              <div className={styles.videoInfo}>
                <span className={styles.videoTag}>THE SUSTAINABILITY SERIES • VIDEO FEATURE</span>
                <h3>TMRW Home by Blum and Hütt Homes</h3>
                <p>A collaboration between Blum and Hütt Homes, TMRW Home showcases sustainable building practices and innovative design solutions for the future of residential architecture.</p>
              </div>
            </div>
          </div>
          
          {/* Additional Row 2 */}
          <div className={styles.twoColumnGrid}>
            {/* Left Column */}
            <div className={styles.columnCard}>
              <div className={styles.videoThumbnail}>
                <div className={styles.playButton} aria-label="Play video">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <title>Play video</title>
                    <path d="M8 5V19L19 12L8 5Z" fill="white"/>
                  </svg>
                </div>
                <Image 
                  src="/images/limestone-house.jpg" 
                  alt="Limestone House by John Wardle Architects" 
                  width={600} 
                  height={400} 
                  layout="responsive"
                />
              </div>
              <div className={styles.videoInfo}>
                <span className={styles.videoTag}>THE SUSTAINABILITY SERIES • VIDEO FEATURE</span>
                <h3>Limestone House by John Wardle Architects</h3>
                <p>John Wardle Architects' Limestone House demonstrates how sustainable design principles can be integrated with sophisticated architectural expression.</p>
              </div>
            </div>
            
            {/* Right Column */}
            <div className={styles.columnCard}>
              <div className={styles.videoThumbnail}>
                <div className={styles.playButton} aria-label="Play video">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <title>Play video</title>
                    <path d="M8 5V19L19 12L8 5Z" fill="white"/>
                  </svg>
                </div>
                <Image 
                  src="/images/artedomus-experts.jpg" 
                  alt="Artedomus Experts: Episode 3 – Porcelain Panels" 
                  width={600} 
                  height={400} 
                  layout="responsive"
                />
              </div>
              <div className={styles.videoInfo}>
                <span className={styles.videoTag}>PARTNER SERIES • VIDEO FEATURE</span>
                <h3>Artedomus Experts: Episode 3 – Porcelain Panels</h3>
                <p>In this episode of Artedomus Experts, we explore the versatility and technical advantages of large-format porcelain panels for architectural applications.</p>
              </div>
            </div>
          </div>
          
          {/* Horizontal Line */}
          <div className={styles.horizontalLine} />
          
          {/* The Sustainability Series Section */}
          <div className={styles.sustainabilitySection}>
            <h2>THE SUSTAINABILITY SERIES</h2>
            <div className={styles.sustainabilityGrid}>
              {/* Sustainability Video 1 */}
              <div className={styles.sustainabilityCard}>
                <div className={styles.videoThumbnail}>
                  <div className={styles.playButton} aria-label="Play video">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <title>Play video</title>
                      <path d="M8 5V19L19 12L8 5Z" fill="white"/>
                    </svg>
                  </div>
                  <Image 
                    src="/images/house-at-otago-bay.jpg" 
                    alt="Contrasting Locally Sourced Materiality – House at Otago Bay by Topology Studio" 
                    width={600} 
                    height={400} 
                    layout="responsive"
                  />
                </div>
                <div className={styles.videoInfo}>
                  <span className={styles.videoTag}>THE SUSTAINABILITY SERIES • VIDEO FEATURE</span>
                  <h3>Contrasting Locally Sourced Materiality – House at Otago Bay by Topology Studio</h3>
                  <p>Topology Studio's House at Otago Bay is a play on concealing and revealing through contrasting locally sourced materiality and dramatic formal responses.</p>
                </div>
              </div>
              
              {/* Sustainability Video 2 */}
              <div className={styles.sustainabilityCard}>
                <div className={styles.videoThumbnail}>
                  <div className={styles.playButton} aria-label="Play video">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <title>Play video</title>
                      <path d="M8 5V19L19 12L8 5Z" fill="white"/>
                    </svg>
                  </div>
                  <Image 
                    src="/images/tmrw-home-sustainability.jpg" 
                    alt="Homes for the Future – TMRW Home by Blum and Hütt Homes" 
                    width={600} 
                    height={400} 
                    layout="responsive"
                  />
                </div>
                <div className={styles.videoInfo}>
                  <span className={styles.videoTag}>THE SUSTAINABILITY SERIES • VIDEO FEATURE</span>
                  <h3>Homes for the Future – TMRW Home by Blum and Hütt Homes</h3>
                  <p>Collaborating with Blum, Hütt Homes constructs a family home that embraces sustainable and passive living that aims to inspire other architects and designers.</p>
                </div>
              </div>
              
              {/* Sustainability Video 3 */}
              <div className={styles.sustainabilityCard}>
                <div className={styles.videoThumbnail}>
                  <div className={styles.playButton} aria-label="Play video">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <title>Play video</title>
                      <path d="M8 5V19L19 12L8 5Z" fill="white"/>
                    </svg>
                  </div>
                  <Image 
                    src="/images/limestone-house-sustainability.jpg" 
                    alt="Introspective and Independent – Limestone House by John Wardle Architects" 
                    width={600} 
                    height={400} 
                    layout="responsive"
                  />
                </div>
                <div className={styles.videoInfo}>
                  <span className={styles.videoTag}>THE SUSTAINABILITY SERIES • VIDEO FEATURE</span>
                  <h3>Introspective and Independent – Limestone House by John Wardle Architects</h3>
                  <p>Limestone House sees John Wardle Architects propose a home that generates and captures enough energy to provide for itself, while beautifully addressing the environment.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
       {/* Community Section */}
       <div className={styles.communitySection}>
        <div className={styles.communityContent}>
          <h2>THE LOCAL PROJECT</h2>
          <h3>Community</h3>
          <p>Sign up to our mailing list for the best of local architecture, interiors and design delivered to your inbox.</p>
          
          <div className={styles.emailSignupContainer}>
            <div className={styles.emailSignup}>
              <input 
                type="email" 
                placeholder="Enter Your Email Here" 
                className={styles.emailInput}
              />
              <button type="submit" className={styles.submitArrow}>
                →
              </button>
            </div>
            
            <div className={styles.recaptcha}>
              <div className="g-recaptcha" data-sitekey="your-recaptcha-site-key" />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.divider} />
      
      {/* Replace the existing Trending Now section with the component */}
      <TrendingNow articles={trendingArticles} />
    </div>
  );
}