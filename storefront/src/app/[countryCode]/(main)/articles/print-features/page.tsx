'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import styles from './print-features.module.css';
import TrendingNow from '@modules/layout/templates/TrendingNow';

// Article type definition
type Article = {
  id: number;
  title: string;
  category: string;
  image: string;
  excerpt: string;
  slug: string;
  featured?: boolean;
};

export default function ArticlesPage() {
  // Mock data based on the website content - expanded with additional projects
  const articles: Article[] = [
    {
      id: 1,
      title: "In focus: Hanna Home",
      category: "ISSUE 17 FEATURE",
      image: "/images/hanna-home.jpg",
      excerpt: "A detailed look at the Hanna Home's innovative design approach.",
      slug: "in-focus-hanna-home"
    },
    {
      id: 2,
      title: "The Bentley Continental GT Speed",
      category: "ISSUE 17 FEATURE",
      image: "/images/bentley-continental.jpg",
      excerpt: "Exploring the design excellence of the Bentley Continental GT Speed.",
      slug: "bentley-continental-gt-speed"
    },
    {
      id: 3,
      title: "Motion Sickness headquarters by Wonder",
      category: "ISSUE 17 FEATURE",
      image: "/images/motion-sickness-hq.jpg",
      excerpt: "A look at the innovative workspace design for Motion Sickness by Wonder.",
      slug: "motion-sickness-headquarters-wonder"
    },
    {
      id: 4,
      title: "The International at 25 Martin Place by Woods Bagot and The Point",
      category: "ISSUE 17 FEATURE",
      image: "/images/international-martin-place.jpg",
      excerpt: "Exploring the collaborative design of The International at 25 Martin Place.",
      slug: "international-martin-place"
    },
    {
      id: 5,
      title: "Lunetta by ACME",
      category: "ISSUE 17 FEATURE",
      image: "/images/lunetta-acme.jpg",
      excerpt: "A detailed look at Lunetta's innovative design by ACME.",
      slug: "lunetta-acme"
    },
    // Row 2
    {
      id: 6,
      title: "Aesop Pitt Street by Snøhetta",
      category: "ISSUE 16 FEATURE",
      image: "/images/aesop-pitt-street.jpg",
      excerpt: "Exploring the materiality and spatial design of Aesop Pitt Street by Snøhetta.",
      slug: "aesop-pitt-street-snohetta"
    },
    {
      id: 7,
      title: "Porsche Taycan – The Future of Performance",
      category: "ISSUE 16 FEATURE",
      image: "/images/porsche-taycan.jpg",
      excerpt: "A detailed look at the design and engineering of the all-electric Porsche Taycan.",
      slug: "porsche-taycan-future-performance"
    },
    {
      id: 8,
      title: "Ace Hotel Sydney by Flack Studio",
      category: "ISSUE 16 FEATURE",
      image: "/images/ace-hotel-sydney.jpg",
      excerpt: "The design story behind Sydney's first Ace Hotel by Flack Studio.",
      slug: "ace-hotel-sydney-flack-studio"
    },
    {
      id: 9,
      title: "Jackalope Hotel by Carr",
      category: "ISSUE 15 FEATURE",
      image: "/images/jackalope-hotel.jpg",
      excerpt: "Exploring the bold design vision of Jackalope Hotel by Carr.",
      slug: "jackalope-hotel-carr"
    },
    {
      id: 10,
      title: "Audi e-tron GT – Electric Redefined",
      category: "ISSUE 15 FEATURE",
      image: "/images/audi-etron-gt.jpg",
      excerpt: "The design philosophy behind Audi's flagship electric vehicle, the e-tron GT.",
      slug: "audi-etron-gt-electric-redefined"
    },
    // Row 3
    {
      id: 11,
      title: "Paramount House Hotel by Breathe Architecture",
      category: "ISSUE 14 FEATURE",
      image: "/images/paramount-house-hotel.jpg",
      excerpt: "The adaptive reuse and thoughtful design of Paramount House Hotel by Breathe Architecture.",
      slug: "paramount-house-hotel-breathe"
    },
    {
      id: 12,
      title: "Mercedes-Benz EQS – Luxury Electrified",
      category: "ISSUE 14 FEATURE",
      image: "/images/mercedes-eqs.jpg",
      excerpt: "Exploring the innovative design and technology of the Mercedes-Benz EQS.",
      slug: "mercedes-benz-eqs-luxury-electrified"
    },
    {
      id: 13,
      title: "Raes on Wategos by Tamsin Johnson",
      category: "ISSUE 13 FEATURE",
      image: "/images/raes-wategos.jpg",
      excerpt: "The refined coastal luxury of Raes on Wategos by interior designer Tamsin Johnson.",
      slug: "raes-wategos-tamsin-johnson"
    },
    {
      id: 14,
      title: "BMW i4 – The Electric Gran Coupé",
      category: "ISSUE 13 FEATURE",
      image: "/images/bmw-i4.jpg",
      excerpt: "The design evolution and performance credentials of BMW's electric gran coupé, the i4.",
      slug: "bmw-i4-electric-gran-coupe"
    },
    {
      id: 15,
      title: "The Calile Hotel by Richards & Spence",
      category: "ISSUE 12 FEATURE",
      image: "/images/calile-hotel.jpg",
      excerpt: "The urban resort aesthetic of The Calile Hotel by Richards & Spence.",
      slug: "calile-hotel-richards-spence"
    },
    // Row 4
    {
      id: 16,
      title: "Polestar 2 – Scandinavian Electric Design",
      category: "ISSUE 12 FEATURE",
      image: "/images/polestar-2.jpg",
      excerpt: "The minimalist design philosophy behind Polestar's electric performance fastback.",
      slug: "polestar-2-scandinavian-design"
    },
    {
      id: 17,
      title: "Ovolo Woolloomooloo by Hassell",
      category: "ISSUE 11 FEATURE",
      image: "/images/ovolo-woolloomooloo.jpg",
      excerpt: "The playful and dramatic transformation of Ovolo Woolloomooloo by Hassell.",
      slug: "ovolo-woolloomooloo-hassell"
    },
    {
      id: 18,
      title: "Lexus LF-Z Electrified Concept",
      category: "ISSUE 11 FEATURE",
      image: "/images/lexus-lfz.jpg",
      excerpt: "Exploring the future design direction of Lexus through the LF-Z Electrified concept.",
      slug: "lexus-lfz-electrified-concept"
    },
    {
      id: 19,
      title: "QT Melbourne by Nic Graham & Associates",
      category: "ISSUE 10 FEATURE",
      image: "/images/qt-melbourne.jpg",
      excerpt: "The industrial chic aesthetic of QT Melbourne by Nic Graham & Associates.",
      slug: "qt-melbourne-nic-graham"
    },
    {
      id: 20,
      title: "Genesis GV60 – Luxury Electric SUV",
      category: "ISSUE 10 FEATURE",
      image: "/images/genesis-gv60.jpg",
      excerpt: "The distinctive design language of Genesis' first dedicated electric vehicle, the GV60.",
      slug: "genesis-gv60-luxury-electric-suv"
    }
  ];

  // Categories for the tabs
  const categories = [
    "Architecture and Interior Design",
    "Product Design",
    "News and Events",
    "Project Galleries"
  ];

  // State for showing/hiding filters
  const [showFilters, setShowFilters] = useState(false);

  // Add trending articles data
  const trendingArticles = [
    {
      id: 1,
      slug: 'seascape-patterson-associates',
      title: 'Seascape by Patterson Associates',
      category: 'BOOK FEATURE',
      image: '/images/trending/seascape.jpg'
    },
    {
      id: 2,
      slug: 'waiheke-house-cheshire-architects',
      title: 'A Process of Discovery – Waiheke House by Cheshire Architects',
      category: 'BOOK FEATURE • ISSUE 03 FEATURE • VIDEO FEATURE',
      image: '/images/trending/waiheke-house.jpg',
      hasVideo: true
    },
    {
      id: 3,
      slug: 'waimataruru-pac-studio',
      title: 'A Respectful Balance – Waimataruru by Pac Studio and Kristina Pickford Design',
      category: 'VIDEO FEATURE',
      image: '/images/trending/waimataruru.jpg',
      hasVideo: true
    },
    {
      id: 4,
      slug: 'palms-residence-olson-kundig',
      title: 'Forming Deep Connections – Palms Residence by Olson Kundig',
      category: 'VIDEO FEATURE',
      image: '/images/trending/palms-residence.jpg',
      hasVideo: true
    },
    {
      id: 5,
      slug: 'yukari-house',
      title: 'Yukari House by Tanev Muir Architects',
      category: 'VIDEO FEATURE',
      image: '/images/trending/yukari-house.jpg',
      hasVideo: true
    }
  ];

  return (
    <div className={styles.container}>
      <div className={styles.topLabel}>ARTICLES</div>
      <h1 className={styles.pageTitle}>PRINT PUBLICATION ARTICLES</h1>
      
      <div className={styles.categoryNav}>
        {categories.map((category, index) => (
          <React.Fragment key={`category-${category}`}>
            <Link href="#" className={styles.categoryLink}>
              {category}
            </Link>
            {index < categories.length - 1 && <span className={styles.dotSeparator}>•</span>}
          </React.Fragment>
        ))}
      </div>
      
      <div className={styles.contentContainer}>
        <div className={styles.sidebar}>
          <div className={styles.filterSection}>
            <h3 className={styles.filterTitle}>ARTICLE TYPE</h3>
            <ul className={styles.filterList}>
              <li className={styles.filterItem}>All Articles</li>
              <li className={styles.filterItem}>Architecture and Interior Design</li>
              <li className={styles.filterItem}>Product Design</li>
              <li className={styles.filterItem}>News and Events</li>
              <li className={styles.filterItem}>Project Galleries</li>
              <li className={styles.filterItem}>
                Print Publication Articles
                <span className={styles.dropdownArrow}>▼</span>
              </li>
            </ul>
          </div>
          
          <div className={styles.divider} />
          
          <div className={styles.filterSection}>
            <h3 className={styles.filterTitle}>TOPIC</h3>
            <ul className={styles.filterList}>
              <li className={styles.filterItem}>Residential Design</li>
              <li className={styles.filterItem}>Furniture Designs</li>
              <li className={styles.filterItem}>Product and Material Design</li>
              <li className={styles.filterItem}>Profile Features</li>
              <li className={styles.filterItem}>Garden and Landscape Design</li>
              <li className={styles.filterItem}>Commercial Design</li>
              <li className={styles.filterItem}>Hospitality Design</li>
              <li className={styles.filterItem}>Art & Sculpture</li>
            </ul>
          </div>
        </div>
        
        <div className={styles.mainContent}>
          {/* Articles Grid - Visible and styled like the image */}
          <div className={styles.articlesGrid}>
            {articles.map((article) => (
              <div key={article.id} className={styles.articleCard}>
                <Link href={`/articles/${article.slug}`}>
                  <div className={styles.articleImage}>
                    <div className={styles.imagePlaceholder} />
                  </div>
                  <div className={styles.articleInfo}>
                    <div className={styles.articleCategory}>{article.category}</div>
                    <h2 className={styles.articleTitle}>{article.title}</h2>
                  </div>
                </Link>
              </div>
            ))}
          </div>

          <div className={styles.horizontalDivider} />
        </div>
      </div>
      
      {/* Community Section - Full Width */}
      <div className={styles.communityFullWidth}>
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
      
      <div className={styles.horizontalDividerFullWidth} />
      
      {/* Replace hard-coded trending section with TrendingNow component */}
      <TrendingNow 
        articles={trendingArticles} 
        heading="TRENDING NOW"
      />
    </div>
  );
} 
