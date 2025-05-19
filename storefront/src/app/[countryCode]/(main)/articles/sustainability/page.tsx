'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import styles from './sustainability.module.css';

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
      title: "A Reconnection with the Essential Qualities of a Landscape – Edgars Creek",
      category: "BOOK FEATURE • ISSUE 02 FEATURE",
      image: "/images/edgars-creek.jpg",
      excerpt: "Edgars Creek explores sustainable landscape design with thoughtful integration of natural elements.",
      slug: "edgars-creek-landscape"
    },
    {
      id: 2,
      title: "A Visual Feast – Reclaimed by Penny Craswell",
      category: "SUSTAINABILITY FEATURE",
      image: "/images/visual-feast-reclaimed.jpg",
      excerpt: "A Visual Feast explores reclaimed materials and sustainable design approaches.",
      slug: "visual-feast-reclaimed"
    },
    {
      id: 3,
      title: "Sustainably Immersed – Kiwi Bach Experiment by ICR Studio",
      category: "PROJECT FEATURE | SUSTAINABILITY SERIES",
      image: "/images/kiwi-bach-experiment.jpg",
      excerpt: "Kiwi Bach Experiment demonstrates sustainable design principles in a coastal setting.",
      slug: "kiwi-bach-experiment"
    },
    {
      id: 4,
      title: "In Praise of Shadows – Hutchinson Street by Kim Kneipp and ARKit",
      category: "PROJECT FEATURE | SUSTAINABILITY SERIES",
      image: "/images/hutchinson-street.jpg",
      excerpt: "Hutchinson Street explores passive design and sustainable materials in urban context.",
      slug: "hutchinson-street-kneipp-arkit"
    },
    {
      id: 5,
      title: "Inviting The Outdoors In – Light House by Alexander Symes Architect",
      category: "PROJECT FEATURE",
      image: "/images/light-house-symes.jpg",
      excerpt: "Light House by Alexander Symes demonstrates biophilic design principles and sustainable architecture.",
      slug: "light-house-alexander-symes"
    },
    // Row 2
    {
      id: 6,
      title: "Sustainable Materials – Recycled Timber in Modern Design",
      category: "SUSTAINABILITY FEATURE",
      image: "/images/recycled-timber.jpg",
      excerpt: "Exploring the use of recycled timber in contemporary sustainable architecture.",
      slug: "recycled-timber-modern-design"
    },
    {
      id: 7,
      title: "Passive House Principles – Thornbury Residence",
      category: "PROJECT FEATURE | SUSTAINABILITY SERIES",
      image: "/images/thornbury-residence.jpg",
      excerpt: "Thornbury Residence demonstrates passive house principles in an urban setting.",
      slug: "thornbury-residence-passive"
    },
    {
      id: 8,
      title: "Solar Innovations – Integrated PV Solutions",
      category: "PRODUCT FEATURE | SUSTAINABILITY SERIES",
      image: "/images/solar-innovations.jpg",
      excerpt: "Exploring innovative integrated photovoltaic solutions for modern sustainable homes.",
      slug: "solar-innovations-integrated"
    },
    {
      id: 9,
      title: "Water Conservation – Brunswick House by Studio Bright",
      category: "PROJECT FEATURE | SUSTAINABILITY SERIES",
      image: "/images/brunswick-house.jpg",
      excerpt: "Brunswick House showcases innovative water conservation strategies in residential design.",
      slug: "brunswick-house-water-conservation"
    },
    {
      id: 10,
      title: "Circular Economy – Furniture Design by Breathe",
      category: "PRODUCT FEATURE | SUSTAINABILITY SERIES",
      image: "/images/circular-furniture.jpg",
      excerpt: "Breathe's furniture collection demonstrates circular economy principles in product design.",
      slug: "circular-economy-furniture"
    },
    // Row 3
    {
      id: 11,
      title: "Living Building Challenge – Birrarung Centre",
      category: "PROJECT FEATURE | SUSTAINABILITY SERIES",
      image: "/images/birrarung-centre.jpg",
      excerpt: "Birrarung Centre meets the rigorous standards of the Living Building Challenge.",
      slug: "birrarung-centre-living-building"
    },
    {
      id: 12,
      title: "Regenerative Design – Healing Landscapes",
      category: "SUSTAINABILITY FEATURE",
      image: "/images/healing-landscapes.jpg",
      excerpt: "Exploring regenerative design principles in landscape architecture.",
      slug: "regenerative-design-landscapes"
    },
    {
      id: 13,
      title: "Zero Carbon – Wellington Office by Studio Pacific",
      category: "PROJECT FEATURE | SUSTAINABILITY SERIES",
      image: "/images/wellington-office.jpg",
      excerpt: "Wellington Office achieves zero carbon certification through innovative design strategies.",
      slug: "wellington-office-zero-carbon"
    },
    {
      id: 14,
      title: "Sustainable Textiles – Natural Fibers in Interior Design",
      category: "PRODUCT FEATURE | SUSTAINABILITY SERIES",
      image: "/images/sustainable-textiles.jpg",
      excerpt: "Exploring the use of natural and sustainable textiles in contemporary interior design.",
      slug: "sustainable-textiles-interiors"
    },
    {
      id: 15,
      title: "Biophilic Design – Connecting to Nature",
      category: "SUSTAINABILITY FEATURE",
      image: "/images/biophilic-design.jpg",
      excerpt: "Principles of biophilic design and their implementation in contemporary architecture.",
      slug: "biophilic-design-nature"
    },
    // Row 4
    {
      id: 16,
      title: "Adaptive Reuse – Woolloomooloo Wharf Transformation",
      category: "PROJECT FEATURE | SUSTAINABILITY SERIES",
      image: "/images/woolloomooloo-wharf.jpg",
      excerpt: "The sustainable transformation of Woolloomooloo Wharf through adaptive reuse strategies.",
      slug: "woolloomooloo-wharf-adaptive-reuse"
    },
    {
      id: 17,
      title: "Sustainable Concrete Alternatives – Hempcrete Applications",
      category: "PRODUCT FEATURE | SUSTAINABILITY SERIES",
      image: "/images/hempcrete-applications.jpg",
      excerpt: "Exploring hempcrete and other sustainable alternatives to traditional concrete.",
      slug: "sustainable-concrete-hempcrete"
    },
    {
      id: 18,
      title: "Off-Grid Living – Byron Bay Cabin",
      category: "PROJECT FEATURE | SUSTAINABILITY SERIES",
      image: "/images/byron-bay-cabin.jpg",
      excerpt: "Byron Bay Cabin demonstrates principles of off-grid living and self-sufficiency.",
      slug: "byron-bay-cabin-off-grid"
    },
    {
      id: 19,
      title: "Sustainable Lighting – Energy Efficient Solutions",
      category: "PRODUCT FEATURE | SUSTAINABILITY SERIES",
      image: "/images/sustainable-lighting.jpg",
      excerpt: "Innovative energy-efficient lighting solutions for sustainable architecture.",
      slug: "sustainable-lighting-solutions"
    },
    {
      id: 20,
      title: "Urban Agriculture – Rooftop Gardens in Melbourne",
      category: "PROJECT FEATURE | SUSTAINABILITY SERIES",
      image: "/images/rooftop-gardens.jpg",
      excerpt: "Exploring urban agriculture through innovative rooftop garden projects in Melbourne.",
      slug: "urban-agriculture-rooftop-gardens"
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

  return (
    <div className={styles.container}>
      <div className={styles.pageHeader}>
        <div className={styles.subheading}>ARTICLES</div>
        <h1 className={styles.pageTitle}>THE SUSTAINABILITY SERIES</h1>
      </div>
      
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
      
      {/* Trending Now - Full Width */}
      <div className={styles.trendingNowSection}>
        <h3 className={styles.trendingNowHeading}>TRENDING NOW</h3>
        
        <div className={styles.trendingArticlesGrid}>
          <div className={styles.trendingArticle}>
            <Link href="/articles/seascape-patterson-associates">
              <div className={styles.trendingImage}>
                <div className={styles.trendingImagePlaceholder} />
                <div className={styles.playButton}>
                  <span className={styles.playArrow}>▶</span>
                </div>
              </div>
              <div className={styles.trendingCategory}>BOOK FEATURE</div>
              <h4 className={styles.trendingTitle}>Seascape by Patterson Associates</h4>
            </Link>
          </div>

          <div className={styles.trendingArticle}>
            <Link href="/articles/waiheke-house-cheshire-architects">
              <div className={styles.trendingImage}>
                <div className={styles.trendingImagePlaceholder} />
                <div className={styles.playButton}>
                  <span className={styles.playArrow}>▶</span>
                </div>
              </div>
              <div className={styles.trendingCategory}>BOOK FEATURE • ISSUE 03 FEATURE • VIDEO FEATURE</div>
              <h4 className={styles.trendingTitle}>A Process of Discovery – Waiheke House by Cheshire Architects</h4>
            </Link>
          </div>

          <div className={styles.trendingArticle}>
            <Link href="/articles/waimataruru-pac-studio">
              <div className={styles.trendingImage}>
                <div className={styles.trendingImagePlaceholder} />
                <div className={styles.playButton}>
                  <span className={styles.playArrow}>▶</span>
                </div>
              </div>
              <div className={styles.trendingCategory}>VIDEO FEATURE</div>
              <h4 className={styles.trendingTitle}>A Respectful Balance – Waimataruru by Pac Studio and Kristina Pickford Design</h4>
            </Link>
          </div>

          <div className={styles.trendingArticle}>
            <Link href="/articles/palms-residence-olson-kundig">
              <div className={styles.trendingImage}>
                <div className={styles.trendingImagePlaceholder} />
                <div className={styles.playButton}>
                  <span className={styles.playArrow}>▶</span>
                </div>
              </div>
              <div className={styles.trendingCategory}>VIDEO FEATURE</div>
              <h4 className={styles.trendingTitle}>Forming Deep Connections – Palms Residence by Olson Kundig</h4>
            </Link>
          </div>

          <div className={styles.trendingArticle}>
            <Link href="/articles/yukari-house-tanev-muir">
              <div className={styles.trendingImage}>
                <div className={styles.trendingImagePlaceholder} />
                <div className={styles.playButton}>
                  <span className={styles.playArrow}>▶</span>
                </div>
              </div>
              <div className={styles.trendingCategory}>VIDEO FEATURE</div>
              <h4 className={styles.trendingTitle}>Yukari House by Tanev Muir Architects</h4>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 
