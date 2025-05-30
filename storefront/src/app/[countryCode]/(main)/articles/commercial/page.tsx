'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import styles from './commercial.module.css';
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
      title: "Hodgson House by BassamFellows",
      category: "PROJECT FEATURE, BOOK EXTRACT",
      image: "/images/hodgson-house.jpg",
      excerpt: "Hodgson House by BassamFellows is stunningly featured in Art in Residence by Nicole England, an exploration into how art and personal collections infuse life into thoughtfully designed spaces.",
      slug: "hodgson-house-bassamfellows",
      featured: true
    },
    {
      id: 2,
      title: "Grove House by Cadence & Co",
      category: "PROJECT FEATURE",
      image: "/images/grove-house.jpg",
      excerpt: "Grove House in Sydney demonstrates Cadence & Co's ability to balance seclusion with connection and heritage with modernity, creating a refined home that embraces contemporary family life.",
      slug: "grove-house-cadence-co"
    },
    {
      id: 3,
      title: "10 St Ninians by Curatd",
      category: "PROJECT FEATURE",
      image: "/images/st-ninians.jpg",
      excerpt: "In Melbourne's Brighton, 10 St Ninians pairs refined simplicity with bayside living, showcasing custom design details like curved joinery and Iver's Brunswick hardware to create a calm, cohesive atmosphere.",
      slug: "10-st-ninians-curatd"
    },
    {
      id: 4,
      title: "Portsea Beach House by Studio Esteta",
      category: "PROJECT FEATURE",
      image: "/images/portsea-beach-house.jpg",
      excerpt: "Portsea Beach House by Studio Esteta is a refined coastal retreat that balances sophistication with relaxed living, featuring natural materials and thoughtful spatial planning.",
      slug: "portsea-beach-house-studio-esteta"
    },
    {
      id: 5,
      title: "Laminex's New Colour Collection",
      category: "PRODUCT FEATURE",
      image: "/images/laminex-colour.jpg",
      excerpt: "Laminex introduces a refreshed colour palette that responds to evolving design trends while maintaining timeless appeal for contemporary Australian interiors.",
      slug: "laminex-new-colour-collection"
    },
    // Additional projects - Row 2
    {
      id: 6,
      title: "Coogee Cove by Kate Lawrence Interiors",
      category: "PROJECT FEATURE",
      image: "/images/coogee-cove.jpg",
      excerpt: "Coogee Cove by Kate Lawrence Interiors showcases elegant coastal design with refined materials and thoughtful spatial planning.",
      slug: "coogee-cove-kate-lawrence"
    },
    {
      id: 7,
      title: "DoubleTree by Hilton Hobart's Super-Durable Dekton Façade",
      category: "PROJECT FEATURE",
      image: "/images/doubletree-hilton.jpg",
      excerpt: "The DoubleTree by Hilton Hobart features an innovative and durable Dekton façade that combines aesthetics with practical performance.",
      slug: "doubletree-hilton-dekton-facade"
    },
    {
      id: 8,
      title: "Coastal Pavilion by Studio Jackson Scott",
      category: "PROJECT FEATURE",
      image: "/images/coastal-pavilion.jpg",
      excerpt: "Coastal Pavilion by Studio Jackson Scott embraces its oceanfront setting with a thoughtful design that balances openness with privacy.",
      slug: "coastal-pavilion-jackson-scott"
    },
    {
      id: 9,
      title: "Northcote Residence by Melanie Beynon Architecture",
      category: "PROJECT FEATURE",
      image: "/images/northcote-residence.jpg",
      excerpt: "Northcote Residence by Melanie Beynon Architecture transforms a heritage home with contemporary interventions that respect its historical context.",
      slug: "northcote-residence-beynon"
    },
    {
      id: 10,
      title: "Armadale Residence by Pleysier Perkins",
      category: "PROJECT FEATURE",
      image: "/images/armadale-residence.jpg",
      excerpt: "Armadale Residence by Pleysier Perkins balances heritage details with modern living requirements in this thoughtful renovation.",
      slug: "armadale-residence-pleysier-perkins"
    },
    // Additional projects - Row 3
    {
      id: 11,
      title: "Bondi Beach House by Alexander &CO.",
      category: "PROJECT FEATURE",
      image: "/images/bondi-beach-house.jpg",
      excerpt: "Bondi Beach House by Alexander &CO. celebrates coastal living with a refined palette and thoughtful spatial planning.",
      slug: "bondi-beach-house-alexander-co"
    },
    {
      id: 12,
      title: "Woollahra Terrace by Porebski Architects",
      category: "PROJECT FEATURE",
      image: "/images/woollahra-terrace.jpg",
      excerpt: "Woollahra Terrace by Porebski Architects reimagines a heritage terrace for contemporary living while preserving its historical character.",
      slug: "woollahra-terrace-porebski"
    },
    {
      id: 13,
      title: "Hawthorn House by Edition Office",
      category: "PROJECT FEATURE",
      image: "/images/hawthorn-house.jpg",
      excerpt: "Hawthorn House by Edition Office explores materiality and light in this thoughtfully designed Melbourne residence.",
      slug: "hawthorn-house-edition-office"
    },
    {
      id: 14,
      title: "Palm Beach House by Richards Stanisich",
      category: "PROJECT FEATURE",
      image: "/images/palm-beach-house.jpg",
      excerpt: "Palm Beach House by Richards Stanisich creates a serene coastal retreat with a sophisticated material palette and considered detailing.",
      slug: "palm-beach-house-richards-stanisich"
    },
    {
      id: 15,
      title: "Toorak Residence by Hecker Guthrie",
      category: "PROJECT FEATURE",
      image: "/images/toorak-residence.jpg",
      excerpt: "Toorak Residence by Hecker Guthrie exemplifies refined luxury with its thoughtful material selection and elegant proportions.",
      slug: "toorak-residence-hecker-guthrie"
    },
    // Additional projects - Row 4
    {
      id: 16,
      title: "Paddington Terrace by Smac Studio",
      category: "PROJECT FEATURE",
      image: "/images/paddington-terrace.jpg",
      excerpt: "Paddington Terrace by Smac Studio transforms a narrow Sydney terrace into a light-filled contemporary home.",
      slug: "paddington-terrace-smac"
    },
    {
      id: 17,
      title: "Bronte House by Tobias Partners",
      category: "PROJECT FEATURE",
      image: "/images/bronte-house.jpg",
      excerpt: "Bronte House by Tobias Partners responds to its coastal context with a design that embraces views while providing privacy and shelter.",
      slug: "bronte-house-tobias-partners"
    },
    {
      id: 18,
      title: "Malvern East by Flack Studio",
      category: "PROJECT FEATURE",
      image: "/images/malvern-east.jpg",
      excerpt: "Malvern East by Flack Studio showcases bold material choices and thoughtful spatial planning in this Melbourne residence.",
      slug: "malvern-east-flack-studio"
    },
    {
      id: 19,
      title: "Darling Point Apartment by Arent&Pyke",
      category: "PROJECT FEATURE",
      image: "/images/darling-point.jpg",
      excerpt: "Darling Point Apartment by Arent&Pyke demonstrates how thoughtful interior design can transform a compact space into a sophisticated home.",
      slug: "darling-point-arent-pyke"
    },
    {
      id: 20,
      title: "Mosman House by Mathieson Architects",
      category: "PROJECT FEATURE",
      image: "/images/mosman-house.jpg",
      excerpt: "Mosman House by Mathieson Architects balances minimalist design with warmth through careful material selection and considered detailing.",
      slug: "mosman-house-mathieson"
    }
  ];

  // Featured articles
  const featuredArticles = articles.filter(article => article.featured);
  const regularArticles = articles.filter(article => !article.featured);

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
      slug: 'yukari-house-tanev-muir',
      title: 'Yukari House by Tanev Muir Architects',
      category: 'VIDEO FEATURE',
      image: '/images/trending/yukari-house.jpg',
      hasVideo: true
    }
  ];

  return (
    <div className={styles.container}>
      <div className={styles.topLabel}>ARTICLES</div>
      <h1 className={styles.pageTitle}>COMMERCIAL DESIGN</h1>
      
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
          
          <div className={styles.divider} />
          
          <div className={styles.filterSection}>
            <h3 className={styles.filterTitle}>LOCATION</h3>
            <ul className={styles.filterList}>
              <li className={styles.filterItem}>
                Australia
                <span className={styles.dropdownArrow}>▼</span>
              </li>
              <li className={styles.filterItem}>
                New Zealand
                <span className={styles.dropdownArrow}>▼</span>
              </li>
              <li className={styles.filterItem}>North America</li>
            </ul>
          </div>
          
          {/* Hidden but preserved original filters */}
          <div style={{ display: 'none' }}>
          </div>
        </div>
        
        <div className={styles.mainContent}>
          {/* Featured Articles Section - Hidden but preserved */}
          <div className={styles.featuredArticles} style={{ display: 'none' }}>
            {featuredArticles.map(article => (
              <div key={`featured-${article.id}`} className={styles.featuredArticle}>
                <div className={styles.featuredImage}>
                  <div className={styles.imagePlaceholder} style={{backgroundColor: '#f0f0f0', height: '400px'}} />
                </div>
                <div className={styles.featuredContent}>
                  <div className={styles.articleCategory}>{article.category}</div>
                  <h2 className={styles.featuredTitle}>{article.title}</h2>
                  <p className={styles.featuredExcerpt}>{article.excerpt}</p>
                  <Link href={`/articles/${article.slug}`} className={styles.readMore}>
                    Read More
                  </Link>
                </div>
              </div>
            ))}
          </div>

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

          <div className={styles.horizontalDivider} />
        </div>
      </div>
      
      <div className={styles.divider} />

      {/* Keep only the TrendingNow component */}
      <TrendingNow 
        articles={trendingArticles} 
        heading="TRENDING NOW"
      />
    </div>
  );
} 
